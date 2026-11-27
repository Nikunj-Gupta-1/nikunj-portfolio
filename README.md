# ⚡ Nikunj Gupta — AI + Cybersecurity Engineering Command-Center & AI Portfolio (`v3.0`)

[![Live Site](https://img.shields.io/badge/Live-nikunj--gupta.netlify.app-00C7B7?logo=netlify&logoColor=white)](https://nikunj-gupta.netlify.app)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?logo=cloudflarepages&logoColor=white)](https://pages.cloudflare.com)
[![Focus](https://img.shields.io/badge/Focus-AI%20%2B%20Cybersecurity-f59e0b)](#core-engineering-identity-3-verticals)
[![AI Agent](https://img.shields.io/badge/AI%20Agent-Gemini%202.5%20%7C%20NVIDIA%20NIM%20%7C%20Local%20RAG-22d3ee)](#floating-ai-command-agent-nikunj-agent-v27)
[![Tests](https://img.shields.io/badge/Unit%20Tests-9%2F9%20Passing-10b981)](#quick-start--local-development)

An animated, visual-first **Terminal / Command-Center Engineering Portfolio** and **Serverless AI Agent (`nikunj-agent`)** built with **Vite + React 19 + Tailwind CSS v4 + Motion (`motion/react`)** for **Nikunj Gupta** — Final-year Computer Science & Data Science student at **BITS Pilani, Dubai Campus** focused on the intersection of **AI + Cybersecurity**.

---

## ✨ Key UX & Animation Highlights (`v3.0`)

* **Progressive Disclosure Bento Architecture:** Showcases **8 Featured Flagships** in an asymmetric `2 + 3 + 3` Bento grid with mouse-tracking radial spotlights, cover artwork/charts, and 2 concise metric pills at rest — with an animated **"View All 21 Projects"** toggle and vertical filter pills (`AI & Agents`, `Cybersecurity`, `Systems & ML`) revealing all **12 Flagship + 9 Archive Systems**.
* **Tabbed Project Inspector Modal:** Clicking any project opens a 3-tab modal (**Overview & Visuals** gallery carousel, **System Architecture** pipeline diagrams, and **Engineering Deep-Dive** highlights + stack).
* **Floating `⌘K` Command Palette & AI Agent:** Persistent bottom-right trigger (`⌘K`) launches a glassmorphic overlay with instant 21-project jump search and multi-tier serverless chat (`/api/chat`).
* **Interactive Verticals, Experience Accordion & Skill Provenance:** Expandable experience logs, dual-row infinite tech marquee, and hover/click skill provenance links that map tools directly to the projects where they were built.

---

## 🧭 Core Engineering Identity: 3 Verticals

| Vertical | Focus Areas | Flagship Systems |
| :--- | :--- | :--- |
| **01 // AI Agents, LLMs & AI Security** | 3-agent collaborative runtimes (`Planner`/`Executor`/`Critic`) + BM25 RAG, neuro-symbolic LLM vulnerability triage & MLX QLoRA (`TrustGate`), Decimal + DLP-gated accounting RAG, guardrailed state machines | • **Autonomous Local Multi-Agent Coding Assistant (`local-agent`)**<br>• **TrustGate: Evidence-Removal Sensitivity Tester (`GENAI PROJECT` — 0.0% Gated UPR, MLX LoRA, AST Scanner)**<br>• **AI Support Ticket Triage & Safe Reply Pipeline (`Deriv-Interview`)**<br>• **Evidence-Grounded AI Accounting Document Assistant (`accounting-document-assistant`)** |
| **02 // Cybersecurity, VAPT & Threat Intelligence** | Enterprise VAPT (`1,000+` servers at Jio), OSINT recon with `'Friday'` LLM copilot, CVE/NVD SQL pipelines, Wazuh 4.14 + OpenSearch AI SOC lab (`miniSOC`), IoT NIDS & stacked ensembles, PFS E2EE | • **Autonomous Attack Surface Manager & 'Friday' AI Copilot (`asm-tool` + `CYBER_MultiTool`)**<br>• **Multi-Class IoT Network Intrusion Detection (`ML-PROJECT` — 264,925 flows)**<br>• **ChatApp: E2EE P2P Cryptographic Suite (`Message` — RSA-2048 + Ephemeral DH)**<br>• **Network Intrusion Pattern Analysis Stacked Ensemble (`DM-PROJECT`)** + **`miniSOC` (Archive)** |
| **03 // Distributed Systems, ML & Software Engineering** | Privacy-first local VLM & ArcFace offline media engines with HTTP 206 streaming, Linux `AF_XDP` packet capture (`2.0 Gbps`), Kafka + gRPC threat streaming (`73ms` SLA), `RoomFrame v1` IoT protocol, robotics & C compilers | • **Memory Setup: Local Media Intelligence & Offline Museum (`memory-setup`)**<br>• **Distributed Real-Time DDoS Detection Pipeline (`LTS-Files` — 2.0 Gbps, 73ms SLA)**<br>• **Vision-Guided Robotic Teleoperation (`HU-Robotics-And-Vision` — Hiroshima Univ., <50ms)**<br>• **PLY-Based C-Subset Optimizing Compiler (`CCP`)** + **`RoomFrame v1` IoT (Archive)** |

---

## 🤖 Floating AI Command Agent (`nikunj-agent v2.7`)

Accessible globally via the floating pill or `⌘K`, **`nikunj-agent`** answers technical and recruiter questions across **all 21 engineering projects** (**12 Flagship Systems** + **9 Archive & Hobby Projects**: *miniSOC AI SOC Lab*, *LLM Coursework Suite & THA 3 Evals*, *Portable Smart Room IoT & RoomFrame v1*, *NetWatch Socket Security Auditor*, *Digital Scotland Yard*, *AQI-Forecast LSTM*, *Next Class macOS Status Bar App*, *gRPC / GestureDeck*, and *Docker & Kubernetes DevSecOps Mastery*).

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
├── index.html                        # HTML shell + hidden static Netlify Forms mirror
├── vite.config.js                    # Vite + React + Tailwind v4 + local /api/chat middleware
├── netlify.toml                      # Netlify build, redirects (/api/chat -> /.netlify/functions/chat) & security headers
├── package.json                      # Vite, React 19, Tailwind CSS v4, Motion, Lucide Icons & test scripts
├── netlify/functions/chat.mjs        # Netlify Serverless Function handler for POST /api/chat
├── functions/api/chat.js             # Cloudflare Pages Function handler for POST /api/chat
├── public/
│   ├── _redirects                    # Netlify edge redirect rule copied into dist/
│   ├── assets/                       # Portrait photo + curated project covers, screenshots & charts
│   └── resumes/                      # 3 Role-tailored, privacy-sanitized Resume PDFs (compiled via Typst)
├── src/
│   ├── App.jsx                       # Root application wiring Bento layout, Modal & Floating Agent
│   ├── main.jsx                      # React 19 entrypoint
│   ├── index.css                     # Tailwind CSS v4 + Obsidian Command-Center tokens & animations
│   ├── components/                   # Navbar, Hero, Pillars, Projects Bento, Modal, Experience, Skills, Contact, FloatingAgent
│   ├── data/portfolioData.js         # Master 21-project dataset, visual mappings, skill provenance & system prompt
│   ├── server/chatCore.js            # Shared 4-tier LLM routing engine (Gemini, NVIDIA NIM vLLM V2, Groq, Local RAG)
│   └── utils/
│       ├── localAgentFallback.js     # Deterministic retrieval & synthesis engine for offline/zero-key operation
│       └── markdown.js               # Safe Markdown + code-block renderer
├── scripts/
│   └── build_sanitized_resumes.py    # Typst compiler script stripping phone numbers & student IDs from public PDFs
└── tests/
    └── chatbot.test.mjs              # Automated Node test suite (9/9 tests)
```

---

## 🚀 Quick Start & Local Development

```bash
# 1. Install dependencies & start Vite dev server (with live /api/chat middleware)
npm install
npm run dev
# -> Open http://127.0.0.1:4173

# 2. Run automated unit & privacy verification tests
npm test

# 3. Build production bundle into dist/
npm run build
```

> **Rollback Snapshot:** The previous zero-dependency vanilla site (`v2.7`, commit `ce4c03e`) is preserved on branch `backup/v2.7-live` and tag `v2.7-live-backup`.

---

## 🌐 Deploying to Netlify or Cloudflare Pages ($0/month)

### Netlify (`nikunj-gupta.netlify.app`)
1. Connected to GitHub `main` using [`netlify.toml`](./netlify.toml):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Functions directory:** `netlify/functions`
2. Environment variables (`GEMINI_API_KEY`, `NVIDIA_API_KEY`, optional `GROQ_API_KEY`) power live LLM responses at `/api/chat`.

### Cloudflare Pages
* **Build command:** `npm run build` | **Build output directory:** `dist` | **Function:** [`functions/api/chat.js`](./functions/api/chat.js).

---

## 📬 Contact

- **Live Portfolio:** [nikunj-gupta.netlify.app](https://nikunj-gupta.netlify.app)
- **Email:** [nikunj0123@outlook.com](mailto:nikunj0123@outlook.com)
- **GitHub:** [github.com/Nikunj-Gupta-1](https://github.com/Nikunj-Gupta-1)
- **LinkedIn:** [linkedin.com/in/nikunj-gupta-242630279](https://linkedin.com/in/nikunj-gupta-242630279)
