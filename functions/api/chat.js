import { processChatRequest } from "../../src/server/chatCore.js";

const CORS_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

/**
 * Cloudflare Pages Function for OPTIONS /api/chat
 */
export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

/**
 * Cloudflare Pages Function for POST /api/chat
 * Automatically mounted at /api/chat when deployed on Cloudflare Pages.
 */
export async function onRequestPost(context) {
  let bodyObj = {};
  try {
    bodyObj = await context.request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON request body." }),
      { status: 400, headers: CORS_HEADERS }
    );
  }

  const env = context.env || (typeof process !== "undefined" ? process.env : {});
  const { statusCode, payload } = await processChatRequest({
    message: bodyObj.message,
    history: Array.isArray(bodyObj.history) ? bodyObj.history : [],
    env
  });

  return new Response(JSON.stringify(payload), {
    status: statusCode,
    headers: CORS_HEADERS
  });
}
