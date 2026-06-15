import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");
const toIco = require("to-ico");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = join(root, "app/icon.svg");
const svg = readFileSync(svgPath);

async function png(size) {
  return sharp(svg).resize(size, size).png().toBuffer();
}

const favicon16 = await png(16);
const favicon32 = await png(32);
const apple = await png(180);
const icon192 = await png(192);
const icon512 = await png(512);
const ico = await toIco([favicon16, favicon32]);

for (const dir of ["app", "public"]) {
  writeFileSync(join(root, dir, "favicon.ico"), ico);
  writeFileSync(join(root, dir, "apple-icon.png"), apple);
}

writeFileSync(join(root, "public/icon-192.png"), icon192);
writeFileSync(join(root, "public/icon-512.png"), icon512);
copyFileSync(svgPath, join(root, "public/icon.svg"));
copyFileSync(svgPath, join(root, "public/logo.svg"));

console.log("Favicons generated.");
