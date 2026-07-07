// Bundles src/main.jsx (React included) and inlines it into a self-contained index.html.
import esbuild from "esbuild";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const result = await esbuild.build({
  entryPoints: [join(root, "src/main.jsx")],
  bundle: true,
  minify: true,
  format: "iife",
  jsx: "automatic",
  define: { "process.env.NODE_ENV": '"production"' },
  write: false,
});

const js = result.outputFiles[0].text;
const template = readFileSync(join(root, "scripts/template.html"), "utf8");
const html = template.replace("<!--APP_BUNDLE-->", `<script>\n${js}</script>`);

writeFileSync(join(root, "index.html"), html);
console.log(`index.html built (${(html.length / 1024).toFixed(1)} KB)`);
