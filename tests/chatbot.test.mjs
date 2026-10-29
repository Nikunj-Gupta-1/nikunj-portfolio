import test from "node:test";
import assert from "node:assert/strict";
import {
  PROFILE,
  PILLARS,
  FLAGSHIP_PROJECTS,
  ARCHIVE_PROJECTS,
  RESUME_TRACKS,
  buildAgentSystemPrompt
} from "../src/data/portfolioData.js";
import { generateLocalAgentResponse } from "../src/utils/localAgentFallback.js";
import { stripReasoningTags, resolveNvidiaModel } from "../src/server/chatCore.js";
import { handler as netlifyChatHandler } from "../netlify/functions/chat.mjs";
import { onRequestPost as cloudflareChatHandler } from "../functions/api/chat.js";
import { renderMarkdown } from "../src/main.js";

test("Portfolio data has 3 equal pillars, 9 flagship projects (3 per pillar), and 7 archive projects", () => {
  assert.equal(PILLARS.length, 3);
  assert.equal(FLAGSHIP_PROJECTS.length, 9);
  assert.equal(ARCHIVE_PROJECTS.length, 7);
  assert.equal(RESUME_TRACKS.length, 3);

  for (const pillar of PILLARS) {
    const count = FLAGSHIP_PROJECTS.filter((p) => p.pillar === pillar.id).length;
    assert.equal(count, 3, `Expected 3 flagship projects for pillar ${pillar.id}, got ${count}`);
  }
});

test("Privacy Guardrail: No phone numbers or student ID exist in portfolioData or System Prompt", () => {
  const sysPrompt = buildAgentSystemPrompt();
  const forbiddenTokens = ["2023A7PS0229U", "814 8234", "7042004636", "+971 50"];
  for (const token of forbiddenTokens) {
    assert.equal(
      sysPrompt.includes(token),
      false,
      `System prompt must not contain sensitive token: ${token}`
    );
    assert.equal(
      JSON.stringify(PROFILE).includes(token),
      false,
      `PROFILE must not contain sensitive token: ${token}`
    );
  }
});

test("Local Agent Fallback answers queries on Flagship, Hidden/Archive Projects, Internships, and Privacy", () => {
  const archiveReply = generateLocalAgentResponse("What are the smaller or hobby projects not on the main grid?");
  assert.match(archiveReply, /Digital Scotland Yard/);
  assert.match(archiveReply, /Multiverse RPG Codex/);
  assert.match(archiveReply, /NetWatch/);
  assert.match(archiveReply, /Next Class/);

  const scotlandReply = generateLocalAgentResponse("Tell me about Digital Scotland Yard");
  assert.match(scotlandReply, /60 FPS/);
  assert.match(scotlandReply, /Suspect Possibility Cloud/);

  const expReply = generateLocalAgentResponse("What did he do at Jio Platforms and Leo Technosoft?");
  assert.match(expReply, /Jio Platforms Limited/);
  assert.match(expReply, /1,000\+ enterprise servers/);
  assert.match(expReply, /73ms/);

  const privacyReply = generateLocalAgentResponse("What is Nikunj's phone number and student ID?");
  assert.match(privacyReply, /omitted from this public web terminal/);
  assert.doesNotMatch(privacyReply, /814 8234/);
});

test("Netlify Serverless Function (/api/chat) handles POST requests and returns structured reply", async () => {
  const response = await netlifyChatHandler({
    httpMethod: "POST",
    body: JSON.stringify({
      message: "How does local-agent manage context windows?",
      history: []
    })
  });

  assert.equal(response.statusCode, 200);
  const body = JSON.parse(response.body);
  assert.ok(body.reply);
  assert.match(body.reply, /ScratchpadManager|80%/);
});

test("Cloudflare Pages Function (functions/api/chat.js) handles POST requests identically", async () => {
  const fakeRequest = {
    async json() {
      return {
        message: "/archive",
        history: []
      };
    }
  };

  const response = await cloudflareChatHandler({
    request: fakeRequest,
    env: {}
  });

  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.provider, "nikunj-agent-cli");
  assert.match(body.reply, /Digital Scotland Yard/);
});

test("Markdown renderer supports fenced code blocks and strips <think> tags", () => {
  const sample = "<think>internal reasoning</think>\n### Output\n```python\nprint('hello')\n```";
  const cleaned = stripReasoningTags(sample);
  assert.equal(cleaned.includes("internal reasoning"), false);

  const html = renderMarkdown(sample);
  assert.equal(html.includes("internal reasoning"), false);
  assert.match(html, /<pre class="arch-pre"><code>print\('hello'\)<\/code><\/pre>/);
});

test("NVIDIA NIM model resolver replaces retired HTTP 410 EOL models with Nemotron 3 Ultra", () => {
  assert.equal(
    resolveNvidiaModel("meta/llama-3.3-70b-instruct"),
    "nvidia/nemotron-3-ultra-550b-a55b"
  );
  assert.equal(
    resolveNvidiaModel("meta/llama-3.1-70b-instruct"),
    "nvidia/nemotron-3-ultra-550b-a55b"
  );
  assert.equal(
    resolveNvidiaModel(""),
    "nvidia/nemotron-3-ultra-550b-a55b"
  );
  assert.equal(
    resolveNvidiaModel("nvidia/nemotron-3-ultra-550b-a55b"),
    "nvidia/nemotron-3-ultra-550b-a55b"
  );
});

