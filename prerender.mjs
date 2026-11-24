// Injects the server-rendered app into dist/index.html, then removes the SSR bundle.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { render } from "./dist-ssr/entry-server.js";

const file = "dist/index.html";
const html = readFileSync(file, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error(`${marker} not found in ${file}`);
writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`));
rmSync("dist-ssr", { recursive: true, force: true });
console.log("prerendered", file);
