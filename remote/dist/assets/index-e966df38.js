import { importShared } from './__federation_fn_import-81ab4d9c.js';
import { a as jsxs, j as jsx } from './common-1490dbfc.js';
import { r as reactDomExports } from './__federation_shared_react-dom-e806fc46.js';
import { A } from './__federation_expose_A-dcdc43d7.js';
import { B } from './__federation_expose_B-89490659.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

function App() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(A, {}),
    /* @__PURE__ */ jsx(B, {}),
    /* @__PURE__ */ jsx("pre", { children: JSON.stringify(Object.keys(window).filter((key) => key.startsWith("css__"))) })
  ] });
}

const index = '';

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
);
