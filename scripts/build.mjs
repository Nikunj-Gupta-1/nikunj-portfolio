#!/usr/bin/env node
/**
 * Zero-dependency static builder for portfolio-website.
 * Copies index.html, src/, and public/* into dist/ so Netlify or Cloudflare Pages
 * can serve the production bundle with zero external npm dependencies.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      if (entry === ".DS_Store") continue;
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

// 1. Copy index.html
fs.copyFileSync(path.join(ROOT, "index.html"), path.join(DIST, "index.html"));

// 2. Copy src/ -> dist/src/
copyRecursive(path.join(ROOT, "src"), path.join(DIST, "src"));

// 3. Copy public/* -> dist/*
const publicDir = path.join(ROOT, "public");
if (fs.existsSync(publicDir)) {
  for (const entry of fs.readdirSync(publicDir)) {
    if (entry === ".DS_Store") continue;
    copyRecursive(path.join(publicDir, entry), path.join(DIST, entry));
  }
}

// 4. Write Netlify _redirects fallback inside dist/
fs.writeFileSync(
  path.join(DIST, "_redirects"),
  "/api/chat /.netlify/functions/chat 200\n",
  "utf-8"
);

console.log("[BUILD OK] Built static production bundle into dist/");
