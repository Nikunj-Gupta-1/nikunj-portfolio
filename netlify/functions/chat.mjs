import { processChatRequest } from "../../src/server/chatCore.js";

export async function handler(event) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method Not Allowed. Use POST." })
    };
  }

  let bodyObj = {};
  try {
    bodyObj = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid JSON request body." })
    };
  }

  const { statusCode, payload } = await processChatRequest({
    message: bodyObj.message,
    history: Array.isArray(bodyObj.history) ? bodyObj.history : [],
    env: process.env
  });

  return {
    statusCode,
    headers,
    body: JSON.stringify(payload)
  };
}
