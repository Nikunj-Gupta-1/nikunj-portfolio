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
import { renderMarkdown } from "../src/utils/markdown.js";

test("Portfolio data has 3 equal pillars, 12 flagship projects (4 per pillar), and 9 archive projects", () => {
  assert.equal(PILLARS.length, 3);
  assert.equal(FLAGSHIP_PROJECTS.length, 12);
  assert.equal(ARCHIVE_PROJECTS.length, 9);
  assert.equal(RESUME_TRACKS.length, 3);

  for (const pillar of PILLARS) {
    const count = FLAGSHIP_PROJECTS.filter((p) => p.pillar === pillar.id).length;
    assert.equal(count, 4, `Expected 4 flagship projects for pillar ${pillar.id}, got ${count}`);
  }
});

test("Privacy Guardrail: No phone numbers, student ID, personal paths, or private metrics exist in portfolioData or System Prompt", () => {
  const sysPrompt = buildAgentSystemPrompt();
  const serializedPublic = JSON.stringify({
    PROFILE,
    FLAGSHIP_PROJECTS,
    ARCHIVE_PROJECTS,
    RESUME_TRACKS
  });
  const forbiddenTokens = [
    "2023A7PS0229U",
    "814 8234",
    "7042004636",
    "+971 50",
    "/Users/nikunjgupta",
    "10,146",
    "67,390",
    "32,424",
    "nootch-oc"
  ];
  for (const token of forbiddenTokens) {
    assert.equal(
      sysPrompt.includes(token),
      false,
      `System prompt must not contain sensitive token: ${token}`
    );
    assert.equal(
      serializedPublic.includes(token),
      false,
      `Public portfolio data must not contain sensitive token: ${token}`
    );
  }
});

test("Local Agent Fallback answers queries on Flagship, Hidden/Archive Projects, Internships, and Privacy", () => {
  const archiveReply = generateLocalAgentResponse("What are the smaller or hobby projects not on the main grid?");
  assert.match(archiveReply, /miniSOC/);
  assert.match(archiveReply, /Digital Scotland Yard/);
  assert.match(archiveReply, /Multiverse RPG/);
  assert.match(archiveReply, /RoomFrame v1/);
  assert.match(archiveReply, /NetWatch/);
  assert.match(archiveReply, /Next Class/);
  assert.match(archiveReply, /Docker & Kubernetes/);

  const miniSocReply = generateLocalAgentResponse("Tell me about miniSOC and Wazuh");
  assert.match(miniSocReply, /Wazuh 4\.14/);
  assert.match(miniSocReply, /OpenSearch/);

  const trustGateReply = generateLocalAgentResponse("Tell me about TrustGate MLX QLoRA and AST reachability");
  assert.match(trustGateReply, /TrustGate-3B-LoRA/);
  assert.match(trustGateReply, /0\.0%/);

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

test("Local Agent Fallback answers queries on Memory Setup and Accounting Document Assistant", () => {
  const memoryReply = generateLocalAgentResponse("Tell me about Memory Setup");
  assert.match(memoryReply, /Offline Museum/);
  assert.match(memoryReply, /ArcFace/);
  assert.match(memoryReply, /2\.5 GB/);
  assert.match(memoryReply, /HTTP 206/);

  const accountingReply = generateLocalAgentResponse("How does the accounting document assistant prevent hallucinations?");
  assert.match(accountingReply, /Decimal/);
  assert.match(accountingReply, /DLP Gatekeeper/);
  assert.match(accountingReply, /8-pass/i);
});

test("Project repository links point to Nikunj-Gupta-1 GitHub repos and omit private repos", () => {
  const all = [...FLAGSHIP_PROJECTS, ...ARCHIVE_PROJECTS];
  const withUrl = all.filter((p) => Boolean(p.repoUrl));
  assert.ok(withUrl.length >= 17);
  for (const project of withUrl) {
    assert.match(project.repoUrl, /^https:\/\/github\.com\/Nikunj-Gupta-1\/[A-Za-z0-9_.-]+$/);
  }
  const byId = Object.fromEntries(all.map((p) => [p.id, p]));
  assert.equal(byId["portable-smart-room-iot"].repoUrl, undefined);
  assert.equal(byId["multiverse-rpg-semantic-search"].repoUrl, undefined);
  assert.equal(byId["hiroshima-robotics-vision"].repoUrl, undefined);
  assert.match(byId["mini-soc-ai-lab"].repoUrl, /\/miniSOC$/);
  assert.match(byId["memory-setup-offline-museum"].repoUrl, /\/memory-setup$/);
  assert.match(byId["accounting-document-assistant"].repoUrl, /\/accounting-document-assistant$/);
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

