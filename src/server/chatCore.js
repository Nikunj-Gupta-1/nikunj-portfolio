import { buildAgentSystemPrompt } from "../data/portfolioData.js";
import { generateLocalAgentResponse } from "../utils/localAgentFallback.js";

const SYSTEM_PROMPT = buildAgentSystemPrompt();

const DEFAULT_NVIDIA_MODEL = "nvidia/nemotron-3-ultra-550b-a55b";
const RETIRED_NVIDIA_MODELS = new Set([
  "meta/llama-3.3-70b-instruct",
  "meta/llama-3.1-70b-instruct",
  "meta/llama3-70b-instruct"
]);

/**
 * Normalizes NVIDIA NIM model IDs, automatically replacing retired EOL models
 * (which return HTTP 410 Gone on NVIDIA NIM) with the active Nemotron 3 Ultra model.
 */
export function resolveNvidiaModel(configuredModel) {
  const m = String(configuredModel || "").trim();
  if (!m || RETIRED_NVIDIA_MODELS.has(m.toLowerCase())) {
    return DEFAULT_NVIDIA_MODEL;
  }
  return m;
}

/**
 * Strips any <think>...</think> reasoning traces emitted by reasoning LLMs
 * before returning the final answer.
 */
export function stripReasoningTags(text) {
  return String(text || "")
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .trim();
}

async function callGeminiModel(apiKey, model, message, history = []) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const contents = [];
  for (const turn of history.slice(-6)) {
    if (!turn || !turn.content) continue;
    contents.push({
      role: turn.role === "assistant" ? "model" : "user",
      parts: [{ text: String(turn.content).slice(0, 1500) }]
    });
  }
  contents.push({
    role: "user",
    parts: [{ text: String(message).slice(0, 1000) }]
  });

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(12000),
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      contents,
      generationConfig: {
        temperature: 0.25,
        maxOutputTokens: 1024
      }
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini (${model}) HTTP ${response.status}: ${errText.slice(0, 200)}`);
  }

  const data = await response.json();
  const parts = data?.candidates?.[0]?.content?.parts || [];
  // Filter out Gemini 2.5 internal thought parts (`part.thought === true`)
  const rawText = parts
    .filter((p) => !p.thought)
    .map((p) => p.text || "")
    .join("");
  const cleaned = stripReasoningTags(rawText);
  if (!cleaned) {
    throw new Error(`Empty response from Gemini (${model})`);
  }
  return { reply: cleaned, provider: `google-gemini (${model})` };
}

async function callGeminiWithFallback(apiKey, preferredModel, message, history = []) {
  const modelsToTry = preferredModel
    ? [preferredModel, "gemini-2.5-flash", "gemini-flash-latest"]
    : ["gemini-2.5-flash", "gemini-flash-latest"];
  const uniqueModels = [...new Set(modelsToTry)];

  let lastError;
  for (const model of uniqueModels) {
    try {
      return await callGeminiModel(apiKey, model, message, history);
    } catch (err) {
      lastError = err;
      // Fast-fail on invalid API key (401/403) without retrying other models
      if (/HTTP (401|403)\b/.test(err.message)) {
        break;
      }
    }
  }
  throw lastError || new Error("All Gemini models failed");
}

/**
 * Calls OpenAI-compatible endpoints (NVIDIA NIM vLLM V2 runner / Groq).
 * - Never sends `reasoning_budget` or `thinking_token_budget` (rejected by NVIDIA NIM vLLM V2 with HTTP 400).
 * - Uses 4096 max_tokens on NVIDIA NIM so reasoning models (Nemotron 3 Ultra) do not truncate inside `reasoning_content`.
 * - Enforces a strict timeout and fast-fails on HTTP 4xx/410 client errors.
 */
async function callOpenAICompatible({
  endpoint,
  apiKey,
  model,
  providerName,
  maxTokens = 2048,
  message,
  history = []
}) {
  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history.slice(-6).map((t) => ({
      role: t.role === "assistant" ? "assistant" : "user",
      content: String(t.content || "").slice(0, 1500)
    })),
    { role: "user", content: String(message).slice(0, 1000) }
  ];

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    signal: AbortSignal.timeout(15000),
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.25,
      top_p: 0.95,
      max_tokens: maxTokens
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`${providerName} (${model}) HTTP ${response.status}: ${errText.slice(0, 200)}`);
  }

  const data = await response.json();
  const msgObj = data?.choices?.[0]?.message || {};
  const rawText = msgObj.content || "";
  const cleaned = stripReasoningTags(rawText);
  if (!cleaned) {
    throw new Error(`Empty content from ${providerName} (${model})`);
  }
  return { reply: cleaned, provider: `${providerName} (${model})` };
}

/**
 * Shared Environment-Agnostic Chat Processor
 * Used by Netlify Functions (`netlify/functions/chat.mjs`),
 * Cloudflare Pages Functions (`functions/api/chat.js`), and the local dev server.
 */
export async function processChatRequest({ message, history = [], env = {} }) {
  const cleanMessage = String(message || "").trim();
  if (!cleanMessage) {
    return {
      statusCode: 400,
      payload: { error: "Message is required." }
    };
  }

  // Tier 0: Fast path for explicit slash commands or privacy guardrails (0ms latency)
  if (
    cleanMessage.startsWith("/") ||
    /phone|whatsapp|student\s*id/i.test(cleanMessage)
  ) {
    return {
      statusCode: 200,
      payload: {
        reply: generateLocalAgentResponse(cleanMessage),
        provider: "nikunj-agent-cli"
      }
    };
  }

  // Tier 1: Primary Cloud LLM — Google Gemini Free Tier
  const geminiKey = env.GEMINI_API_KEY || env.GOOGLE_API_KEY;
  if (geminiKey && geminiKey !== "your_gemini_api_key_here" && geminiKey !== "your_api_key_here") {
    try {
      const res = await callGeminiWithFallback(geminiKey, env.GEMINI_MODEL, cleanMessage, history);
      return { statusCode: 200, payload: res };
    } catch (err) {
      console.warn("[nikunj-agent] Gemini error, checking secondary providers:", err.message);
    }
  }

  // Tier 2A: Secondary Cloud LLM — NVIDIA NIM Free Tier (vLLM V2 compatible)
  if (env.NVIDIA_API_KEY && env.NVIDIA_API_KEY !== "your_nvidia_api_key_here") {
    const activeNvidiaModel = resolveNvidiaModel(env.NVIDIA_MODEL);
    try {
      const res = await callOpenAICompatible({
        endpoint: "https://integrate.api.nvidia.com/v1/chat/completions",
        apiKey: env.NVIDIA_API_KEY,
        model: activeNvidiaModel,
        providerName: "nvidia-nim",
        maxTokens: 4096,
        message: cleanMessage,
        history
      });
      return { statusCode: 200, payload: res };
    } catch (err) {
      console.warn("[nikunj-agent] NVIDIA NIM error, checking next fallback:", err.message);
    }
  }

  // Tier 2B: Secondary Cloud LLM — Groq Free Tier
  if (env.GROQ_API_KEY && env.GROQ_API_KEY !== "your_groq_api_key_here") {
    try {
      const res = await callOpenAICompatible({
        endpoint: "https://api.groq.com/openai/v1/chat/completions",
        apiKey: env.GROQ_API_KEY,
        model: env.GROQ_MODEL || "llama-3.3-70b-versatile",
        providerName: "groq",
        maxTokens: 1024,
        message: cleanMessage,
        history
      });
      return { statusCode: 200, payload: res };
    } catch (err) {
      console.warn("[nikunj-agent] Groq error, falling back to local RAG:", err.message);
    }
  }

  // Tier 3: Deterministic Local Knowledge-Base RAG Fallback
  const fallbackReply = generateLocalAgentResponse(cleanMessage);
  return {
    statusCode: 200,
    payload: {
      reply: fallbackReply,
      provider: "local-knowledge-engine"
    }
  };
}
