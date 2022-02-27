var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/dillonchanis/Code/remix-cockroach-test/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
var meta = () => {
  return { title: "Remix + Cockroach DB" };
};
var links = () => {
  return [
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://unpkg.com/sakura.css/css/sakura.css"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/dillonchanis/Code/remix-cockroach-test/app/routes/posts/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => CreatePost,
  loader: () => loader
});
init_react();

// app/session.server.ts
init_react();
var import_remix3 = __toESM(require_remix());

// app/services/user.server.ts
init_react();

// app/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
BigInt.prototype.toJSON = function() {
  return this.toString();
};
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/services/user.server.ts
async function getUser(request) {
  const userId = await getUserId(request);
  console.log("userId", userId);
  if (typeof userId !== "string") {
    return null;
  }
  console.log("AFTER******");
  const user = await db.user.findUnique({
    where: { id: BigInt(userId) }
  });
  console.log("AFTER*****USER", user);
  return user;
}
async function getUserByEmail(email) {
  const user = await db.user.findUnique({
    where: { email: email.toLowerCase() }
  });
  if (!user)
    return null;
  return user;
}

// app/session.server.ts
async function login({ email }) {
  const user = await getUserByEmail(email);
  if (!user)
    return null;
  return { id: user.id, email };
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix3.createCookieSessionStorage)({
  cookie: {
    name: "ROACH_session",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string")
    return null;
  return userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix3.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix3.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/services/post.server.ts
init_react();
async function createPost({
  title,
  content,
  published,
  user
}) {
  const post = await db.post.create({
    data: {
      title,
      content,
      published,
      authorId: user.id
    }
  });
  return post;
}

// app/utils/badRequest.ts
init_react();
var import_remix4 = __toESM(require_remix());
function badRequest(data, init) {
  return (0, import_remix4.json)(data, __spreadProps(__spreadValues({}, init), { status: 400 }));
}

// route:/Users/dillonchanis/Code/remix-cockroach-test/app/routes/posts/new.tsx
var action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const content = form.get("content");
  const status = form.get("status");
  if (typeof title !== "string" || typeof content !== "string" || typeof status !== "string") {
    return badRequest({
      formError: "Form not submitted correctly."
    });
  }
  const fields = { title, content, published: status === "publish" };
  const user = await getUser(request);
  console.log("User", user);
  if (!user) {
    return null;
  }
  const post = await createPost(__spreadProps(__spreadValues({}, fields), {
    user
  }));
  return post;
};
var loader = async ({ request }) => {
  await requireUserId(request);
  const user = await getUserId(request);
  return { user };
};
function CreatePost() {
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Create a Post"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    id: "title",
    type: "text",
    name: "title",
    required: true
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "content"
  }, "Content"), /* @__PURE__ */ React.createElement("textarea", {
    id: "content",
    name: "content",
    required: true
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Status:"), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", alignItems: "center" }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "publish",
    name: "status",
    value: "publish"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "publish"
  }, "Publish"), /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "draft",
    name: "status",
    value: "draft",
    style: { marginLeft: "12px" }
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "draft"
  }, "Draft"))), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Create Post"))));
}

// route:/Users/dillonchanis/Code/remix-cockroach-test/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
init_react();
var loader2 = async () => {
  return null;
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer"
  }, "15m Quickstart Blog Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/jokes",
    rel: "noreferrer"
  }, "Deep Dive Jokes App Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/docs",
    rel: "noreferrer"
  }, "Remix Docs"))));
}

// route:/Users/dillonchanis/Code/remix-cockroach-test/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login
});
init_react();
var import_remix5 = __toESM(require_remix());
function validateEmail(email) {
  if (typeof email !== "string") {
    return "Please enter an email.";
  }
}
var action2 = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const email = form.get("email");
  const redirectTo = form.get("redirectTo") || "/";
  if (typeof loginType !== "string" || typeof email !== "string" || typeof redirectTo !== "string") {
    return badRequest({
      formError: "Form not submitted correctly."
    });
  }
  const fields = { loginType, email, redirectTo };
  const fieldErrors = {
    email: validateEmail(email)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  switch (loginType) {
    case "login": {
      const user = await login({ email });
      if (!user) {
        return badRequest({
          fields,
          formError: "User not found"
        });
      }
      return createUserSession(user.id.toString(), redirectTo);
    }
    case "register": {
      const userExists = await db.user.findFirst({
        where: { email }
      });
      if (userExists) {
        return badRequest({
          fields,
          formError: `User already exists.`
        });
      }
      return badRequest({
        fields,
        formError: "Not implemented"
      });
    }
    default: {
      return badRequest({
        fields,
        formError: "Login type invalid."
      });
    }
  }
};
function Login() {
  var _a, _b, _c, _d, _e, _f, _g;
  const actionData = (0, import_remix5.useActionData)();
  const [searchParams] = (0, import_remix5.useSearchParams)();
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", null, "Login"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Login or Register?"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: !((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.loginType) || ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "login"
  }), " ", "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register",
    defaultChecked: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "register"
  }), " ", "Register")), /* @__PURE__ */ React.createElement("div", {
    style: { marginTop: "26px" }
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email-input"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "email-input",
    name: "email",
    defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.email,
    "aria-invalid": Boolean((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.email),
    "aria-errormessage": ((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.email) ? "email-error" : void 0
  }), ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.email) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" },
    role: "alert",
    id: "email-error"
  }, actionData.fieldErrors.email) : null), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("div", {
    style: {
      color: "#dc2626",
      backgroundColor: "#fef2f2",
      border: "1px solid #fee2e2",
      borderRadius: "5px",
      padding: "12px"
    },
    role: "alert"
  }, actionData.formError) : null), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Submit")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "63b7350d", "entry": { "module": "/build/entry.client-VYNFELJ7.js", "imports": ["/build/_shared/chunk-C2NROTOJ.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-GDZIFS7B.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WBC4IR3K.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-NO45J23B.js", "imports": ["/build/_shared/chunk-7QFJIF5W.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/new": { "id": "routes/posts/new", "parentId": "root", "path": "posts/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/new-VY4252H2.js", "imports": ["/build/_shared/chunk-7QFJIF5W.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-63B7350D.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/posts/new": {
    id: "routes/posts/new",
    parentId: "root",
    path: "posts/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9kaWxsb25jaGFuaXMvQ29kZS9yZW1peC1jb2Nrcm9hY2gtdGVzdC9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL2RpbGxvbmNoYW5pcy9Db2RlL3JlbWl4LWNvY2tyb2FjaC10ZXN0L2FwcC9yb3V0ZXMvcG9zdHMvbmV3LnRzeCIsICIuLi9hcHAvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3VzZXIuc2VydmVyLnRzIiwgIi4uL2FwcC9kYi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZpY2VzL3Bvc3Quc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9iYWRSZXF1ZXN0LnRzIiwgInJvdXRlOi9Vc2Vycy9kaWxsb25jaGFuaXMvQ29kZS9yZW1peC1jb2Nrcm9hY2gtdGVzdC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZGlsbG9uY2hhbmlzL0NvZGUvcmVtaXgtY29ja3JvYWNoLXRlc3QvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvZGlsbG9uY2hhbmlzL0NvZGUvcmVtaXgtY29ja3JvYWNoLXRlc3QvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2RpbGxvbmNoYW5pcy9Db2RlL3JlbWl4LWNvY2tyb2FjaC10ZXN0L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvZGlsbG9uY2hhbmlzL0NvZGUvcmVtaXgtY29ja3JvYWNoLXRlc3QvYXBwL3JvdXRlcy9wb3N0cy9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kaWxsb25jaGFuaXMvQ29kZS9yZW1peC1jb2Nrcm9hY2gtdGVzdC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZGlsbG9uY2hhbmlzL0NvZGUvcmVtaXgtY29ja3JvYWNoLXRlc3QvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3RzL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcG9zdHMvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBvc3RzL25ld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiUmVtaXggKyBDb2Nrcm9hY2ggREJcIiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICB0eXBlOiBcInRleHQvY3NzXCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL3Nha3VyYS5jc3MvY3NzL3Nha3VyYS5jc3NcIixcbiAgICB9LFxuICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCwgZ2V0VXNlcklkIH0gZnJvbSBcIn4vc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlcy91c2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlUG9zdCB9IGZyb20gXCJ+L3NlcnZpY2VzL3Bvc3Quc2VydmVyXCI7XG5pbXBvcnQgeyBiYWRSZXF1ZXN0IH0gZnJvbSBcIn4vdXRpbHMvYmFkUmVxdWVzdFwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCB0aXRsZSA9IGZvcm0uZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBmb3JtLmdldChcImNvbnRlbnRcIik7XG4gIGNvbnN0IHN0YXR1cyA9IGZvcm0uZ2V0KFwic3RhdHVzXCIpO1xuXG4gIGlmIChcbiAgICB0eXBlb2YgdGl0bGUgIT09IFwic3RyaW5nXCIgfHxcbiAgICB0eXBlb2YgY29udGVudCAhPT0gXCJzdHJpbmdcIiB8fFxuICAgIHR5cGVvZiBzdGF0dXMgIT09IFwic3RyaW5nXCJcbiAgKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZm9ybUVycm9yOiBcIkZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuXCIsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBmaWVsZHMgPSB7IHRpdGxlLCBjb250ZW50LCBwdWJsaXNoZWQ6IHN0YXR1cyA9PT0gXCJwdWJsaXNoXCIgfTtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdCk7XG5cbiAgY29uc29sZS5sb2coXCJVc2VyXCIsIHVzZXIpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNyZWF0ZVBvc3Qoe1xuICAgIC4uLmZpZWxkcyxcbiAgICB1c2VyLFxuICB9KTtcblxuICByZXR1cm4gcG9zdDtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG5cbiAgcmV0dXJuIHsgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUG9zdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DcmVhdGUgYSBQb3N0PC9oMT5cbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJjb250ZW50XCIgbmFtZT1cImNvbnRlbnRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlN0YXR1czo8L3A+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwdWJsaXNoXCIgbmFtZT1cInN0YXR1c1wiIHZhbHVlPVwicHVibGlzaFwiIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHVibGlzaFwiPlB1Ymxpc2g8L2xhYmVsPlxuXG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJkcmFmdFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJkcmFmdFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMnB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkcmFmdFwiPkRyYWZ0PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlIFBvc3Q8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0VXNlckJ5RW1haWwgfSBmcm9tIFwiLi9zZXJ2aWNlcy91c2VyLnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgTG9naW5Gb3JtIHtcbiAgZW1haWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgZW1haWwgfTogTG9naW5Gb3JtKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyQnlFbWFpbChlbWFpbCk7XG5cbiAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4geyBpZDogdXNlci5pZCwgZW1haWwgfTtcbn1cblxuY29uc3Qgc2Vzc2lvblNlY3JldCA9IHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVUO1xuaWYgKCFzZXNzaW9uU2VjcmV0KSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlNFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0XCIpO1xufVxuXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIlJPQUNIX3Nlc3Npb25cIixcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHJldHVybiBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySWQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0VXNlclNlc3Npb24ocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KFwidXNlcklkXCIpO1xuXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZWRpcmVjdFRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XG5cbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1tcInJlZGlyZWN0VG9cIiwgcmVkaXJlY3RUb11dKTtcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG5cbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJJZDogc3RyaW5nLCByZWRpcmVjdFRvOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbigpO1xuICBzZXNzaW9uLnNldChcInVzZXJJZFwiLCB1c2VySWQpO1xuXG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBkYiB9IGZyb20gXCJ+L2RiLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIn4vc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG5cbiAgY29uc29sZS5sb2coXCJ1c2VySWRcIiwgdXNlcklkKTtcblxuICBpZiAodHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc29sZS5sb2coXCJBRlRFUioqKioqKlwiKVxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBCaWdJbnQodXNlcklkKSB9LFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIkFGVEVSKioqKipVU0VSXCIsIHVzZXIpO1xuXG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5RW1haWwoZW1haWw6IHN0cmluZykge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSB9LFxuICB9KTtcblxuICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB1c2VyO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG4oQmlnSW50LnByb3RvdHlwZSBhcyBhbnkpLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIGRiLiRjb25uZWN0KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX2RiKSB7XG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKTtcbiAgfVxuXG4gIGRiID0gZ2xvYmFsLl9fZGI7XG59XG5cbmV4cG9ydCB7IGRiIH07XG4iLCAiaW1wb3J0IHsgZGIgfSBmcm9tIFwifi9kYi5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbnRlcmZhY2UgQ3JlYXRlUG9zdERUTyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgcHVibGlzaGVkOiBib29sZWFuO1xuICB1c2VyOiBVc2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9zdCh7XG4gIHRpdGxlLFxuICBjb250ZW50LFxuICBwdWJsaXNoZWQsXG4gIHVzZXIsXG59OiBDcmVhdGVQb3N0RFRPKSB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBkYi5wb3N0LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgdGl0bGUsXG4gICAgICBjb250ZW50LFxuICAgICAgcHVibGlzaGVkLFxuICAgICAgYXV0aG9ySWQ6IHVzZXIuaWQsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHBvc3Q7XG59XG4iLCAiaW1wb3J0IHsganNvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYmFkUmVxdWVzdDxEYXRhID0gdW5rbm93bj4oXG4gIGRhdGE6IERhdGEsXG4gIGluaXQ/OiBPbWl0PFJlc3BvbnNlSW5pdCwgXCJzdGF0dXNcIj5cbikge1xuICByZXR1cm4ganNvbjxEYXRhPihkYXRhLCB7IC4uLmluaXQsIHN0YXR1czogNDAwIH0pO1xufSIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cbiAgICAgIDxoMT5XZWxjb21lIHRvIFJlbWl4PC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFscy9ibG9nXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDE1bSBRdWlja3N0YXJ0IEJsb2cgVHV0b3JpYWxcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbHMvam9rZXNcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGVlcCBEaXZlIEpva2VzIEFwcCBUdXRvcmlhbFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgUmVtaXggRG9jc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zLCB1c2VBY3Rpb25EYXRhLCBqc29uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L2RiLnNlcnZlclwiO1xuaW1wb3J0IHsgbG9naW4sIGNyZWF0ZVVzZXJTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGJhZFJlcXVlc3QgfSBmcm9tIFwifi91dGlscy9iYWRSZXF1ZXN0XCI7XG5cbmludGVyZmFjZSBBY3Rpb25EYXRhIHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZEVycm9ycz86IHtcbiAgICBlbWFpbD86IHN0cmluZztcbiAgfTtcbiAgZmllbGRzPzoge1xuICAgIGxvZ2luVHlwZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWw6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBlbWFpbCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcIlBsZWFzZSBlbnRlciBhbiBlbWFpbC5cIjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBsb2dpblR5cGUgPSBmb3JtLmdldChcImxvZ2luVHlwZVwiKTtcbiAgY29uc3QgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xuICBjb25zdCByZWRpcmVjdFRvID0gZm9ybS5nZXQoXCJyZWRpcmVjdFRvXCIpIHx8IFwiL1wiO1xuXG4gIGlmIChcbiAgICB0eXBlb2YgbG9naW5UeXBlICE9PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIGVtYWlsICE9PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIHJlZGlyZWN0VG8gIT09IFwic3RyaW5nXCJcbiAgKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZm9ybUVycm9yOiBcIkZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuXCIsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBmaWVsZHMgPSB7IGxvZ2luVHlwZSwgZW1haWwsIHJlZGlyZWN0VG8gfTtcbiAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgZW1haWw6IHZhbGlkYXRlRW1haWwoZW1haWwpLFxuICB9O1xuXG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKVxuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcblxuICBzd2l0Y2ggKGxvZ2luVHlwZSkge1xuICAgIGNhc2UgXCJsb2dpblwiOiB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgbG9naW4oeyBlbWFpbCB9KTtcblxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgZm9ybUVycm9yOiBcIlVzZXIgbm90IGZvdW5kXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZC50b1N0cmluZygpLCByZWRpcmVjdFRvKTtcbiAgICB9XG5cbiAgICBjYXNlIFwicmVnaXN0ZXJcIjoge1xuICAgICAgY29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodXNlckV4aXN0cykge1xuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgICAgZmllbGRzLFxuICAgICAgICAgIGZvcm1FcnJvcjogYFVzZXIgYWxyZWFkeSBleGlzdHMuYCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBmb3JtRXJyb3I6IFwiTm90IGltcGxlbWVudGVkXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgZm9ybUVycm9yOiBcIkxvZ2luIHR5cGUgaW52YWxpZC5cIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdFRvXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gdW5kZWZpbmVkfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICA8bGVnZW5kPkxvZ2luIG9yIFJlZ2lzdGVyPzwvbGVnZW5kPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBuYW1lPVwibG9naW5UeXBlXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJsb2dpblwiXG4gICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAhYWN0aW9uRGF0YT8uZmllbGRzPy5sb2dpblR5cGUgfHxcbiAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZHM/LmxvZ2luVHlwZSA9PT0gXCJsb2dpblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBuYW1lPVwibG9naW5UeXBlXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJyZWdpc3RlclwiXG4gICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXthY3Rpb25EYXRhPy5maWVsZHM/LmxvZ2luVHlwZSA9PT0gXCJyZWdpc3RlclwifVxuICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZmllbGRzZXQ+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjZweFwiIH19PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWwtaW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsLWlucHV0XCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8uZW1haWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9e0Jvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsKX1cbiAgICAgICAgICAgIGFyaWEtZXJyb3JtZXNzYWdlPXtcbiAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsID8gXCJlbWFpbC1lcnJvclwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsID8gKFxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0gcm9sZT1cImFsZXJ0XCIgaWQ9XCJlbWFpbC1lcnJvclwiPlxuICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5maWVsZEVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJmb3JtLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgICB7YWN0aW9uRGF0YT8uZm9ybUVycm9yID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNkYzI2MjZcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlZjJmMlwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2ZlZTJlMlwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZm9ybUVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNjNiNzM1MGQnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVZZTkZFTEo3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1DMk5ST1RPSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1HRFpJRlM3Qi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVdCQzRJUjNLLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1OTzQ1SjIzQi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1FGSklGNVcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdHMvbmV3Jzp7J2lkJzoncm91dGVzL3Bvc3RzL25ldycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb3N0cy9uZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdHMvbmV3LVZZNDI1MkgyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03UUZKSUY1Vy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC02M0I3MzUwRC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxvQkFBb0I7QUFBQSxNQUNqRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDdE9sQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBR2IsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUU87QUFHQSxJQUFNLE9BQXFCLE1BQU07QUFDdEMsU0FBTyxFQUFFLE9BQU87QUFBQTtBQUdYLElBQU0sUUFBdUIsTUFBTTtBQUN4QyxTQUFPO0FBQUEsSUFDTDtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUtHLGVBQWU7QUFDNUIsU0FDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsS0FDVCxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLE1BQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQVcsU0FBUTtBQUFBLE1BQzlCLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsUUFFRixvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsUUFBRCxNQUNFLG9DQUFDLHNCQUFELFFBRUYsb0NBQUMsaUNBQUQsT0FDQSxvQ0FBQyx1QkFBRCxPQUNBLG9DQUFDLDBCQUFEO0FBQUE7OztBQ3hDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQSxvQkFBcUQ7OztBQ0FyRDs7O0FDQUE7QUFBQSxvQkFBNkI7QUFFN0IsSUFBSTtBQU1KLEFBQUMsT0FBTyxVQUFrQixTQUFTLFdBQVk7QUFDN0MsU0FBTyxLQUFLO0FBQUE7QUFHZCxJQUFJLE9BQXVDO0FBQ3pDLE9BQUssSUFBSTtBQUNULEtBQUc7QUFBQSxPQUNFO0FBQ0wsTUFBSSxDQUFDLE9BQU8sTUFBTTtBQUNoQixXQUFPLE9BQU8sSUFBSTtBQUNsQixXQUFPLEtBQUs7QUFBQTtBQUdkLE9BQUssT0FBTztBQUFBOzs7QURsQmQsdUJBQThCLFNBQWtCO0FBQzlDLFFBQU0sU0FBUyxNQUFNLFVBQVU7QUFFL0IsVUFBUSxJQUFJLFVBQVU7QUFFdEIsTUFBSSxPQUFPLFdBQVcsVUFBVTtBQUM5QixXQUFPO0FBQUE7QUFHVCxVQUFRLElBQUk7QUFFWixRQUFNLE9BQU8sTUFBTSxHQUFHLEtBQUssV0FBVztBQUFBLElBQ3BDLE9BQU8sRUFBRSxJQUFJLE9BQU87QUFBQTtBQUd0QixVQUFRLElBQUksa0JBQWtCO0FBRTlCLFNBQU87QUFBQTtBQUdULDhCQUFxQyxPQUFlO0FBQ2xELFFBQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxXQUFXO0FBQUEsSUFDcEMsT0FBTyxFQUFFLE9BQU8sTUFBTTtBQUFBO0FBR3hCLE1BQUksQ0FBQztBQUFNLFdBQU87QUFFbEIsU0FBTztBQUFBOzs7QUR2QlQscUJBQTRCLEVBQUUsU0FBb0I7QUFDaEQsUUFBTSxPQUFPLE1BQU0sZUFBZTtBQUVsQyxNQUFJLENBQUM7QUFBTSxXQUFPO0FBRWxCLFNBQU8sRUFBRSxJQUFJLEtBQUssSUFBSTtBQUFBO0FBR3hCLElBQU0sZ0JBQWdCLFFBQVEsSUFBSTtBQUNsQyxJQUFJLENBQUMsZUFBZTtBQUNsQixRQUFNLElBQUksTUFBTTtBQUFBO0FBR2xCLElBQU0sVUFBVSw4Q0FBMkI7QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixTQUFTLENBQUM7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFFBQVEsS0FBSyxLQUFLLEtBQUs7QUFBQSxJQUN2QixVQUFVO0FBQUE7QUFBQTtBQUlkLHdCQUF3QixTQUFrQjtBQUN4QyxTQUFPLFFBQVEsV0FBVyxRQUFRLFFBQVEsSUFBSTtBQUFBO0FBR2hELHlCQUFnQyxTQUFrQjtBQUNoRCxRQUFNLFVBQVUsTUFBTSxlQUFlO0FBQ3JDLFFBQU0sU0FBUyxRQUFRLElBQUk7QUFFM0IsTUFBSSxDQUFDLFVBQVUsT0FBTyxXQUFXO0FBQVUsV0FBTztBQUVsRCxTQUFPO0FBQUE7QUFHVCw2QkFDRSxTQUNBLGFBQXFCLElBQUksSUFBSSxRQUFRLEtBQUssVUFDMUM7QUFDQSxRQUFNLFVBQVUsTUFBTSxlQUFlO0FBQ3JDLFFBQU0sU0FBUyxRQUFRLElBQUk7QUFFM0IsTUFBSSxDQUFDLFVBQVUsT0FBTyxXQUFXLFVBQVU7QUFDekMsVUFBTSxlQUFlLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxjQUFjO0FBQ3pELFVBQU0sNEJBQVMsVUFBVTtBQUFBO0FBRzNCLFNBQU87QUFBQTtBQUdULGlDQUF3QyxRQUFnQixZQUFvQjtBQUMxRSxRQUFNLFVBQVUsTUFBTSxRQUFRO0FBQzlCLFVBQVEsSUFBSSxVQUFVO0FBRXRCLFNBQU8sNEJBQVMsWUFBWTtBQUFBLElBQzFCLFNBQVM7QUFBQSxNQUNQLGNBQWMsTUFBTSxRQUFRLGNBQWM7QUFBQTtBQUFBO0FBQUE7OztBR2xFaEQ7QUFVQSwwQkFBaUM7QUFBQSxFQUMvQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEdBQ2dCO0FBQ2hCLFFBQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxPQUFPO0FBQUEsSUFDaEMsTUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsVUFBVSxLQUFLO0FBQUE7QUFBQTtBQUluQixTQUFPO0FBQUE7OztBQ3pCVDtBQUFBLG9CQUFxQjtBQUVkLG9CQUNMLE1BQ0EsTUFDQTtBQUNBLFNBQU8sd0JBQVcsTUFBTSxpQ0FBSyxPQUFMLEVBQVcsUUFBUTtBQUFBOzs7QUxBdEMsSUFBTSxTQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFFBQU0sUUFBUSxLQUFLLElBQUk7QUFDdkIsUUFBTSxVQUFVLEtBQUssSUFBSTtBQUN6QixRQUFNLFNBQVMsS0FBSyxJQUFJO0FBRXhCLE1BQ0UsT0FBTyxVQUFVLFlBQ2pCLE9BQU8sWUFBWSxZQUNuQixPQUFPLFdBQVcsVUFDbEI7QUFDQSxXQUFPLFdBQVc7QUFBQSxNQUNoQixXQUFXO0FBQUE7QUFBQTtBQUlmLFFBQU0sU0FBUyxFQUFFLE9BQU8sU0FBUyxXQUFXLFdBQVc7QUFDdkQsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUUzQixVQUFRLElBQUksUUFBUTtBQUVwQixNQUFJLENBQUMsTUFBTTtBQUNULFdBQU87QUFBQTtBQUdULFFBQU0sT0FBTyxNQUFNLFdBQVcsaUNBQ3pCLFNBRHlCO0FBQUEsSUFFNUI7QUFBQTtBQUdGLFNBQU87QUFBQTtBQUdGLElBQU0sU0FBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsUUFBTSxjQUFjO0FBQ3BCLFFBQU0sT0FBTyxNQUFNLFVBQVU7QUFFN0IsU0FBTyxFQUFFO0FBQUE7QUFHSSxzQkFBc0I7QUFDbkMsU0FDRSxvQ0FBQyxXQUFELE1BQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLE1BQUQsTUFBSSxrQkFDSixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDWCxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQVEsVUFDdkIsb0NBQUMsU0FBRDtBQUFBLElBQU8sSUFBRztBQUFBLElBQVEsTUFBSztBQUFBLElBQU8sTUFBSztBQUFBLElBQVEsVUFBUTtBQUFBLE9BR3JELG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBVSxZQUN6QixvQ0FBQyxZQUFEO0FBQUEsSUFBVSxJQUFHO0FBQUEsSUFBVSxNQUFLO0FBQUEsSUFBVSxVQUFRO0FBQUEsT0FHaEQsb0NBQUMsT0FBRCxNQUNFLG9DQUFDLEtBQUQsTUFBRyxZQUNILG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU8sRUFBRSxTQUFTLFFBQVEsWUFBWTtBQUFBLEtBQ3pDLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFRLElBQUc7QUFBQSxJQUFVLE1BQUs7QUFBQSxJQUFTLE9BQU07QUFBQSxNQUNyRCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBVSxZQUV6QixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixPQUFPLEVBQUUsWUFBWTtBQUFBLE1BRXZCLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxLQUFRLFlBSTNCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE1BQUs7QUFBQSxLQUFTO0FBQUE7OztBTS9FaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTSxVQUF5QixZQUFZO0FBQ2hELFNBQU87QUFBQTtBQUdNLGlCQUFpQjtBQUM5QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU8sRUFBRSxZQUFZLHlCQUF5QixZQUFZO0FBQUEsS0FDN0Qsb0NBQUMsTUFBRCxNQUFJLHFCQUNKLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBRDtBQUFBLElBQ0UsUUFBTztBQUFBLElBQ1AsTUFBSztBQUFBLElBQ0wsS0FBSTtBQUFBLEtBQ0wsa0NBSUgsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFFBQU87QUFBQSxJQUNQLE1BQUs7QUFBQSxJQUNMLEtBQUk7QUFBQSxLQUNMLGtDQUlILG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxRQUFPO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBeUIsS0FBSTtBQUFBLEtBQWE7QUFBQTs7O0FDOUI1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBcUQ7QUFpQnJELHVCQUF1QixPQUFnQjtBQUNyQyxNQUFJLE9BQU8sVUFBVSxVQUFVO0FBQzdCLFdBQU87QUFBQTtBQUFBO0FBSUosSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFFBQU0sWUFBWSxLQUFLLElBQUk7QUFDM0IsUUFBTSxRQUFRLEtBQUssSUFBSTtBQUN2QixRQUFNLGFBQWEsS0FBSyxJQUFJLGlCQUFpQjtBQUU3QyxNQUNFLE9BQU8sY0FBYyxZQUNyQixPQUFPLFVBQVUsWUFDakIsT0FBTyxlQUFlLFVBQ3RCO0FBQ0EsV0FBTyxXQUFXO0FBQUEsTUFDaEIsV0FBVztBQUFBO0FBQUE7QUFJZixRQUFNLFNBQVMsRUFBRSxXQUFXLE9BQU87QUFDbkMsUUFBTSxjQUFjO0FBQUEsSUFDbEIsT0FBTyxjQUFjO0FBQUE7QUFHdkIsTUFBSSxPQUFPLE9BQU8sYUFBYSxLQUFLO0FBQ2xDLFdBQU8sV0FBVyxFQUFFLGFBQWE7QUFFbkMsVUFBUTtBQUFBLFNBQ0QsU0FBUztBQUNaLFlBQU0sT0FBTyxNQUFNLE1BQU0sRUFBRTtBQUUzQixVQUFJLENBQUMsTUFBTTtBQUNULGVBQU8sV0FBVztBQUFBLFVBQ2hCO0FBQUEsVUFDQSxXQUFXO0FBQUE7QUFBQTtBQUlmLGFBQU8sa0JBQWtCLEtBQUssR0FBRyxZQUFZO0FBQUE7QUFBQSxTQUcxQyxZQUFZO0FBQ2YsWUFBTSxhQUFhLE1BQU0sR0FBRyxLQUFLLFVBQVU7QUFBQSxRQUN6QyxPQUFPLEVBQUU7QUFBQTtBQUdYLFVBQUksWUFBWTtBQUNkLGVBQU8sV0FBVztBQUFBLFVBQ2hCO0FBQUEsVUFDQSxXQUFXO0FBQUE7QUFBQTtBQUlmLGFBQU8sV0FBVztBQUFBLFFBQ2hCO0FBQUEsUUFDQSxXQUFXO0FBQUE7QUFBQTtBQUFBLGFBSU47QUFDUCxhQUFPLFdBQVc7QUFBQSxRQUNoQjtBQUFBLFFBQ0EsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUosaUJBQWlCO0FBeEZoQztBQXlGRSxRQUFNLGFBQWE7QUFDbkIsUUFBTSxDQUFDLGdCQUFnQjtBQUV2QixTQUNFLG9DQUFDLFdBQUQsTUFDRSxvQ0FBQyxNQUFELE1BQUksVUFDSixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDWCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxPQUFPLGFBQWEsSUFBSSxpQkFBaUI7QUFBQSxNQUczQyxvQ0FBQyxZQUFELE1BQ0Usb0NBQUMsVUFBRCxNQUFRLHVCQUNSLG9DQUFDLFNBQUQsTUFDRSxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixnQkFDRSxDQUFDLGdEQUFZLFdBQVosbUJBQW9CLGNBQ3JCLGdEQUFZLFdBQVosbUJBQW9CLGVBQWM7QUFBQSxNQUVuQyxLQUFJLFVBR1Qsb0NBQUMsU0FBRCxNQUNFLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLGdCQUFnQixnREFBWSxXQUFaLG1CQUFvQixlQUFjO0FBQUEsTUFDakQsS0FBSSxjQUtYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU8sRUFBRSxXQUFXO0FBQUEsS0FDdkIsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQWMsVUFDN0Isb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsY0FBYywrQ0FBWSxXQUFaLG1CQUFvQjtBQUFBLElBQ2xDLGdCQUFjLFFBQVEsK0NBQVksZ0JBQVosbUJBQXlCO0FBQUEsSUFDL0MscUJBQ0UsZ0RBQVksZ0JBQVosbUJBQXlCLFNBQVEsZ0JBQWdCO0FBQUEsTUFHcEQsZ0RBQVksZ0JBQVosbUJBQXlCLFNBQ3hCLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLE9BQU8sRUFBRSxPQUFPO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBUSxJQUFHO0FBQUEsS0FDekMsV0FBVyxZQUFZLFNBRXhCLE9BRU4sb0NBQUMsT0FBRDtBQUFBLElBQUssSUFBRztBQUFBLEtBQ0wsMENBQVksYUFDWCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxpQkFBaUI7QUFBQSxNQUNqQixRQUFRO0FBQUEsTUFDUixjQUFjO0FBQUEsTUFDZCxTQUFTO0FBQUE7QUFBQSxJQUVYLE1BQUs7QUFBQSxLQUVKLFdBQVcsYUFFWixPQUVOLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE1BQUs7QUFBQSxLQUFTO0FBQUE7OztBQ2pLOUI7QUFBQSxJQUFPLDBCQUFRLEVBQUMsV0FBVSxZQUFXLFNBQVEsRUFBQyxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLHVDQUFxQyxVQUFTLEVBQUMsUUFBTyxFQUFDLE1BQUssUUFBTyxZQUFXLFFBQVUsUUFBTyxJQUFHLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDJCQUEwQixXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxnQkFBZSxFQUFDLE1BQUssZ0JBQWUsWUFBVyxRQUFPLFFBQU8sUUFBVSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyxtQ0FBa0MsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFNBQVEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxvQkFBbUIsRUFBQyxNQUFLLG9CQUFtQixZQUFXLFFBQU8sUUFBTyxhQUFZLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHVDQUFzQyxXQUFVLENBQUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFdBQVEsT0FBTTs7O0FYT3J2QyxJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosb0JBQW9CO0FBQUEsSUFDaEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
