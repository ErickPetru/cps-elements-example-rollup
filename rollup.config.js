import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import copy from "rollup-plugin-copy";
import css from "rollup-plugin-css-only";
import html from "rollup-plugin-generate-html-template";
import serve from "rollup-plugin-serve";

export default {
  input: "src/main.js",
  output: { dir: "dist", format: "es" },
  plugins: [
    resolve(),
    url(),
    css({ output: "bundle.css" }),
    html({ template: "src/index.html", target: "index.html" }),
    process.env.NODE_ENV === "production"
      ? undefined
      : serve({ contentBase: "dist", open: true }),
    copy({
      targets: [
        { src: "public/*", dest: "dist" },
        {
          // Copy CPS Elements assets to dist/assets
          src: "node_modules/@cps-elements/web/assets",
          dest: "dist",
        },
      ],
    }),
  ],
};
