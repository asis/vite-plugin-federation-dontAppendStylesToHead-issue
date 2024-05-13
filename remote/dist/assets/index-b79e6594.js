import { importShared } from './__federation_fn_import-81ab4d9c.js';
import { a as jsxs, j as jsx } from './shared-2256b353.js';
import { r as reactDomExports } from './__federation_shared_react-dom-e806fc46.js';
import { A } from './__federation_expose_A-a3ae90bb.js';
import { B } from './__federation_expose_B-8b091e74.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const App$1 = '';

function App() {
  return /* @__PURE__ */ jsxs("div", { className: "App", children: [
    /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsx(A, {}) }),
    /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsx(B, {}) }),
    /* @__PURE__ */ jsx("pre", { children: JSON.stringify(Object.keys(window).filter((key) => key.startsWith("css__"))) })
  ] });
}

const index = '';

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
);
