import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { handler as chatHandler } from "./netlify/functions/chat.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadLocalEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) return;
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

function attachChatMiddleware(middlewares) {
  loadLocalEnv();
  middlewares.use(async (req, res, next) => {
    const pathname = (req.url || "").split("?")[0];
    if (pathname !== "/api/chat" && pathname !== "/.netlify/functions/chat") {
      return next();
    }

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
  });
}

function localServerlessChatPlugin() {
  return {
    name: "local-serverless-chat",
    configureServer(server) {
      attachChatMiddleware(server.middlewares);
    },
    configurePreviewServer(server) {
      attachChatMiddleware(server.middlewares);
    }
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), localServerlessChatPlugin()],
  server: {
    host: "127.0.0.1",
    port: 4173
  },
  preview: {
    host: "127.0.0.1",
    port: 4173
  }
});
