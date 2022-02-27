import { useSearchParams, useActionData, json } from "remix";
import type { ActionFunction } from "remix";
import { db } from "~/db.server";
import { login, createUserSession } from "~/session.server";
import { badRequest } from "~/utils/badRequest";

interface ActionData {
  formError?: string;
  fieldErrors?: {
    email?: string;
  };
  fields?: {
    loginType: string;
    email: string;
  };
}

function validateEmail(email: unknown) {
  if (typeof email !== "string") {
    return "Please enter an email.";
  }
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const email = form.get("email");
  const redirectTo = form.get("redirectTo") || "/";

  if (
    typeof loginType !== "string" ||
    typeof email !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({
      formError: "Form not submitted correctly.",
    });
  }

  const fields = { loginType, email, redirectTo };
  const fieldErrors = {
    email: validateEmail(email),
  };

  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  switch (loginType) {
    case "login": {
      const user = await login({ email });

      if (!user) {
        return badRequest({
          fields,
          formError: "User not found",
        });
      }

      return createUserSession(user.id.toString(), redirectTo);
    }

    case "register": {
      const userExists = await db.user.findFirst({
        where: { email },
      });

      if (userExists) {
        return badRequest({
          fields,
          formError: `User already exists.`,
        });
      }

      return badRequest({
        fields,
        formError: "Not implemented",
      });
    }

    default: {
      return badRequest({
        fields,
        formError: "Login type invalid.",
      });
    }
  }
};

export default function Login() {
  const actionData = useActionData<ActionData>();
  const [searchParams] = useSearchParams();

  return (
    <section>
      <h1>Login</h1>
      <form method="post">
        <input
          type="hidden"
          name="redirectTo"
          value={searchParams.get("redirectTo") ?? undefined}
        />

        <fieldset>
          <legend>Login or Register?</legend>
          <label>
            <input
              type="radio"
              name="loginType"
              value="login"
              defaultChecked={
                !actionData?.fields?.loginType ||
                actionData?.fields?.loginType === "login"
              }
            />{" "}
            Login
          </label>
          <label>
            <input
              type="radio"
              name="loginType"
              value="register"
              defaultChecked={actionData?.fields?.loginType === "register"}
            />{" "}
            Register
          </label>
        </fieldset>

        <div style={{ marginTop: "26px" }}>
          <label htmlFor="email-input">Email</label>
          <input
            type="text"
            id="email-input"
            name="email"
            defaultValue={actionData?.fields?.email}
            aria-invalid={Boolean(actionData?.fieldErrors?.email)}
            aria-errormessage={
              actionData?.fieldErrors?.email ? "email-error" : undefined
            }
          />
          {actionData?.fieldErrors?.email ? (
            <p style={{ color: "red" }} role="alert" id="email-error">
              {actionData.fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div id="form-error-message">
          {actionData?.formError ? (
            <div
              style={{
                color: "#dc2626",
                backgroundColor: "#fef2f2",
                border: "1px solid #fee2e2",
                borderRadius: "5px",
                padding: "12px",
              }}
              role="alert"
            >
              {actionData.formError}
            </div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
