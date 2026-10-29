# ⚡ Nikunj Gupta — Engineering Command-Center & AI Portfolio (`v2.6`)

[![Netlify Status](https://img.shields.io/badge/Deploy-Netlify%20Ready-00C7B7?logo=netlify&logoColor=white)](https://app.netlify.com)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?logo=cloudflarepages&logoColor=white)](https://pages.cloudflare.com)
[![AI Agent](https://img.shields.io/badge/AI%20Agent-Gemini%202.5%20%7C%20NVIDIA%20NIM%20%7C%20Local%20RAG-22d3ee)](#interactive-ai-agent-nikunj-agent-v26)
[![Tests](https://img.shields.io/badge/Unit%20Tests-7%2F7%20Passing-10b981)](#testing--verification)

A zero-dependency **Terminal / Command-Center Engineering Portfolio** and **Serverless AI Agent (`nikunj-agent v2.6`)** built for **Nikunj Gupta** — Final-year Computer Science & Data Science student at **BITS Pilani, Dubai Campus** (`CGPA: 8.6 / 10.0`).

---

## 🧭 Core Engineering Identity: Equal 3-Pillar Architecture

The portfolio is structured around three equal engineering pillars with interactive domain filtering, deep-dive ASCII system architecture modals, and role-tailored resume tracks:

| Pillar | Focus Areas | Flagship Systems (Main Grid) |
| :--- | :--- | :--- |
| **01 // AI Agents, LLMs & Data Science** | Zero-framework ReAct coding runtimes, deterministic LLM evaluation harnesses, guardrailed state machines, dense vector RAG | • **Autonomous Local AI Coding Agent & Desktop Runtime (`local-agent`)**<br>• **AI Support Ticket Triage & Safe Reply Pipeline (`Deriv-Interview`)**<br>• **Evidence-Removal Sensitivity Tester (`GENAI PROJECT`)** |
| **02 // Software, Distributed Systems & ML** | Linux `AF_XDP` zero-copy kernel-bypass packet capture, Kafka + gRPC streaming, optimizing C compilers, vision-guided robotics | • **Distributed Real-Time DDoS Detection Pipeline (`LTS-Files` — 2.0 Gbps, 73ms SLA)**<br>• **Vision-Guided Robotic Teleoperation (`HU` — Hiroshima University, <50ms)**<br>• **PLY-Based C-Subset Optimizing Compiler (`CCP`)** |
| **03 // Cybersecurity, VAPT & Cryptography** | Enterprise VAPT (`1,000+` servers), OSINT recon orchestration with local LLM analysts, IoT NIDS, Perfect Forward Secrecy E2EE | • **Autonomous Attack Surface Manager & 'Friday' AI Copilot (`asm-tool` + `CYBER_MultiTool`)**<br>• **Multi-Class IoT Network Intrusion Detection (`ML-PROJECT` — 264,925 flows)**<br>• **ChatApp: E2EE P2P Cryptographic Suite (`Message` — RSA-2048 + Ephemeral DH)** |

---

## 🤖 Interactive AI Agent (`nikunj-agent v2.6`)

Embedded directly into the Command-Center page (`#ai-terminal` or via `⌘K`), **`nikunj-agent v2.6`** answers technical and recruiter questions across **all 16 engineering projects** (the **9 Flagship Systems** on the main grid plus **7 Additional & Hobby Projects** including *Digital Scotland Yard*, *Multiverse RPG Codex Dense Vector Search*, *AQI-Forecast LSTM*, *NetWatch*, *Next Class macOS Status Bar App*, *NIPA Stacked Ensemble*, and *gRPC / GestureDeck*).

### 4-Tier Serverless + Local RAG Cascade (`/api/chat`)

```
[Browser UI: POST /api/chat]
       │
       ├──► Tier 0: CLI Slash Commands (/help, /archive, /projects, /experience, /skills, /resumes) & Privacy Gate (0ms)
       ├──► Tier 1: Google Gemini API (gemini-2.5-flash / gemini-flash-latest via GEMINI_API_KEY)
       ├──► Tier 2: NVIDIA NIM vLLM V2 (nvidia/nemotron-3-ultra-550b-a55b via NVIDIA_API_KEY) & Groq (GROQ_API_KEY)
       └──► Tier 3: Built-In Deterministic Local Knowledge-Base RAG Fallback (src/utils/localAgentFallback.js)
```

---

## 🏗️ Repository Structure

```
portfolio-website/
├── index.html                        # Command-Center UI, Collapsible Drawer (#navDrawer) & Architecture Dialog
├── netlify.toml                      # Netlify build, redirects (/api/chat -> /.netlify/functions/chat) & security headers
├── package.json                      # Zero-dependency build, dev server, and test scripts
├── netlify/
│   └── functions/
│       └── chat.mjs                  # Netlify Serverless Function handler for POST /api/chat
├── functions/
│   └── api/
│       └── chat.js                   # Cloudflare Pages Function handler (onRequestPost) for POST /api/chat
├── public/
│   └── resumes/                      # 3 Role-tailored, privacy-sanitized public Resume PDFs (compiled via Typst)
├── src/
│   ├── main.js                       # UI controller, collapsible drawer, scrollspy, dialog & Markdown renderer
│   ├── style.css                     # Obsidian terminal design tokens, scroll-driven drawer & top-layer animations
│   ├── data/
│   │   └── portfolioData.js          # Master structured dataset (3 pillars, 16 projects, internships, system prompt)
│   ├── server/
│   │   └── chatCore.js               # Shared 4-tier LLM routing engine (Gemini, NVIDIA NIM vLLM V2, Groq, Local RAG)
│   └── utils/
│       └── localAgentFallback.js     # Deterministic retrieval & synthesis engine for offline/zero-key operation
├── scripts/
│   ├── build.mjs                     # Zero-dependency static bundler (-> dist/)
│   ├── dev-server.mjs                # Local HTTP server + /api/chat serverless emulator
│   └── build_sanitized_resumes.py    # Typst compiler script stripping phone numbers & student IDs from public PDFs
└── tests/
    └── chatbot.test.mjs              # Automated Node test suite (7/7 tests)
```

---

## 🚀 Quick Start & Local Development

```bash
# 1. Start local Command-Center dev server (with live /api/chat endpoint)
npm run dev
# -> Open http://127.0.0.1:4173

# 2. Run automated unit & privacy verification tests
npm test

# 3. Build static production bundle into dist/
npm run build
```

---

## 🌐 Deploying to Netlify or Cloudflare Pages ($0/month)

### Option 1: Netlify (Recommended)
1. Import this repository into [app.netlify.com](https://app.netlify.com) (**Add new site → Import an existing project**).
2. Netlify automatically reads [`netlify.toml`](./netlify.toml):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Functions directory:** `netlify/functions`
3. Under **Site configuration → Environment variables**, add `GEMINI_API_KEY` (and/or `NVIDIA_API_KEY`).

### Option 2: Cloudflare Pages
1. Import this repository in **Cloudflare Dashboard → Compute (Workers & Pages) → Pages → Connect to Git**.
2. Set **Build command** to `npm run build` and **Build output directory** to `dist`.
3. Cloudflare Pages automatically mounts [`functions/api/chat.js`](./functions/api/chat.js) at `/api/chat`. Add `GEMINI_API_KEY` (and/or `NVIDIA_API_KEY`) under **Settings → Environment variables**.

---

## 📬 Contact

- **Author:** Nikunj Gupta
- **Email:** [nikunj0123@outlook.com](mailto:nikunj0123@outlook.com)
- **GitHub:** [github.com/Nikunj-Gupta-1](https://github.com/Nikunj-Gupta-1)
- **LinkedIn:** [linkedin.com/in/nikunj-gupta-242630279](https://linkedin.com/in/nikunj-gupta-242630279)
