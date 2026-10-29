#!/usr/bin/env node
/**
 * Local Command-Center Development Server
 * Serves static files AND mounts /.netlify/functions/chat at POST /api/chat
 * (automatically loading .env if present).
 */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { handler as chatHandler } from "../netlify/functions/chat.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Load .env if present
const envPath = path.join(ROOT, ".env");
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, "utf-8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx > 0) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, "");
      if (val && !process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon"
};

const PORT = Number(process.env.PORT || 4173);

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  // Route /api/chat and /.netlify/functions/chat to the Serverless Function handler
  if (url.pathname === "/api/chat" || url.pathname === "/.netlify/functions/chat") {
    let body = "";
    for await (const chunk of req) {
      body += chunk;
    }
    const result = await chatHandler({
      httpMethod: req.method || "GET",
      headers: req.headers,
      body
    });
    res.writeHead(result.statusCode || 200, result.headers || { "Content-Type": "application/json" });
    res.end(result.body || "");
    return;
  }

  // Static file resolution (check ROOT first, then ROOT/public)
  let safePath = path.normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.(\/|\\|$))+/, "");
  if (safePath === "/" || safePath === "") {
    safePath = "/index.html";
  }

  let filePath = path.join(ROOT, safePath);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    const publicCandidate = path.join(ROOT, "public", safePath);
    if (fs.existsSync(publicCandidate) && fs.statSync(publicCandidate).isFile()) {
      filePath = publicCandidate;
    }
  }

  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404 Not Found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": contentType });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`\n============================================================`);
  console.log(`  NIKUNJ GUPTA // COMMAND-CENTER PORTFOLIO DEV SERVER`);
  console.log(`  Local URL:     http://127.0.0.1:${PORT}`);
  console.log(`  AI Agent API:  http://127.0.0.1:${PORT}/api/chat`);
  console.log(`============================================================\n`);
});
