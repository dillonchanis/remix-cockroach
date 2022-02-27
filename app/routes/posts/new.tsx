import type { LoaderFunction, ActionFunction } from "remix";
import { requireUserId, getUserId } from "~/session.server";
import { getUser } from "~/services/user.server";
import { createPost } from "~/services/post.server";
import { badRequest } from "~/utils/badRequest";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const content = form.get("content");
  const status = form.get("status");

  if (
    typeof title !== "string" ||
    typeof content !== "string" ||
    typeof status !== "string"
  ) {
    return badRequest({
      formError: "Form not submitted correctly.",
    });
  }

  const fields = { title, content, published: status === "publish" };
  const user = await getUser(request);

  console.log("User", user);

  if (!user) {
    return null;
  }

  const post = await createPost({
    ...fields,
    user,
  });

  return post;
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUserId(request);

  return { user };
};

export default function CreatePost() {
  return (
    <section>
      <div>
        <h1>Create a Post</h1>
        <form method="post">
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" name="title" required />
          </div>

          <div>
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" required></textarea>
          </div>

          <div>
            <p>Status:</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="radio" id="publish" name="status" value="publish" />
              <label htmlFor="publish">Publish</label>

              <input
                type="radio"
                id="draft"
                name="status"
                value="draft"
                style={{ marginLeft: "12px" }}
              />
              <label htmlFor="draft">Draft</label>
            </div>
          </div>

          <button type="submit">Create Post</button>
        </form>
      </div>
    </section>
  );
}
