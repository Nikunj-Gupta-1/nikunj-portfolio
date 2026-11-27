/**
 * Master Portfolio Data & Knowledge Base for Nikunj Gupta
 * Strictly sanitized: No phone numbers or student IDs are included.
 */

export const PROFILE = {
  name: "Nikunj Gupta",
  handle: "nikunj@command-center",
  photo: "/assets/profile/nikunj-portrait.jpg",
  headline: "AI Agents & LLMs • Cybersecurity & VAPT • Distributed Systems & ML",
  subheadline:
    "Final-year Computer Science & Data Science engineer at BITS Pilani Dubai (CGPA: 8.6/10) specializing in the intersection of AI + Cybersecurity — building autonomous multi-agent runtimes, neuro-symbolic vulnerability triage benchmarks, enterprise VAPT across 1,000+ servers, and 2.0 Gbps real-time threat pipelines.",
  location: "Dubai, UAE",
  education: {
    institution: "Birla Institute of Technology and Science (BITS Pilani), Dubai Campus",
    degree: "B.E. in Computer Science | Minor in Data Science",
    cgpa: "8.6 / 10.0",
    graduation: "Aug 2023 – Jul 2027 (Expected)",
    coursework: [
      "Large Language Models (BITS F471)",
      "Generative AI (CS F437)",
      "Deep Learning",
      "Machine Learning",
      "Data Mining",
      "Computer Networks",
      "Operating Systems",
      "Compiler Construction",
      "Database Systems",
      "Applied Statistical Methods"
    ]
  },
  links: {
    email: "nikunj0123@outlook.com",
    github: "https://github.com/Nikunj-Gupta-1",
    linkedin: "https://linkedin.com/in/nikunj-gupta-242630279"
  },
  telemetryMetrics: [
    { label: "Enterprise VAPT Scope", value: "1,000+ Servers", detail: "Automated Nessus, API & K8s audits at Jio" },
    { label: "Packet Capture Line-Rate", value: "2.0 Gbps", detail: "Linux AF_XDP zero-copy DDoS threat engine" },
    { label: "Threat Alert Latency", value: "73 ms", detail: "Kafka + gRPC + Soft-Voting Ensemble (99.2% acc)" },
    { label: "CGPA (BITS Pilani)", value: "8.6 / 10", detail: "B.E. CS + Data Science Minor • Graduating 2027" }
  ]
};

export const PILLARS = [
  {
    id: "ai-data",
    cmd: "--pillar=ai-data",
    shortLabel: "AI Agents & AI Security",
    title: "AI Agents, LLMs & AI Security",
    accent: "cyan",
    badge: "PILLAR 01 // AGENTIC AI & LLMs",
    summary:
      "Zero-framework 3-agent coding runtimes, neuro-symbolic LLM vulnerability triage & Apple MLX fine-tuning, guardrailed enterprise state machines, and hybrid BM25 + dense vector RAG.",
    highlights: [
      "TrustGate: Propositional OSV benchmark (I ∧ V ∧ R), 2026 frontier eval & MLX QLoRA (0.0% UPR)",
      "3-agent local runtime (Planner, Executor, Critic) with Okapi BM25 + vector RAG & HITL gates",
      "Deterministic Decimal + 8-pass OCR financial RAG with local DLP gatekeeper",
      "11-stage logged Gemini state machine with 2-tier Pydantic v2 self-healing retry"
    ]
  },
  {
    id: "cyber-sec",
    cmd: "--pillar=cyber-sec",
    shortLabel: "Cybersecurity & VAPT",
    title: "Cybersecurity, VAPT & Threat Intelligence",
    accent: "amber",
    badge: "PILLAR 02 // CYBERSECURITY & VAPT",
    summary:
      "Enterprise VAPT across 1,000+ production servers, autonomous OSINT attack-surface orchestration with local LLM analysts, Wazuh/OpenSearch AI SOC labs, IoT NIDS, and Perfect Forward Secrecy E2EE.",
    highlights: [
      "Automated Nessus compliance, Trend Micro SIEM & Burp/Metasploit VAPT at Jio Platforms",
      "11-tool OSINT recon orchestrator with HTML5 Canvas physics map & 'Friday' LLM copilot",
      "Multi-source CVE/NVD/MITRE/CISA KEV SQL sync & Wazuh 4.14 + OpenRouter AI SOC lab (miniSOC)",
      "264,925-flow CIC-IoT-DIAD2024 & CICIoT2023 XGBoost / stacked NIDS ensembles"
    ]
  },
  {
    id: "systems-ml",
    cmd: "--pillar=systems-ml",
    shortLabel: "Systems, ML & Robotics",
    title: "Distributed Systems, ML & Software Engineering",
    accent: "emerald",
    badge: "PILLAR 03 // SYSTEMS & ML",
    summary:
      "Offline local vision/biometric media engines with HTTP 206 streaming, Linux kernel-bypass packet pipelines, custom binary IoT protocols, optimizing C compilers, and robotics teleoperation.",
    highlights: [
      "Memory Setup: Offline 5-stage media engine (<2.5 GB VLM, ArcFace, FTS5, Tailscale/CF share)",
      "2.0 Gbps AF_XDP packet capture + Kafka + gRPC DDoS pipeline with 73ms median SLA",
      "30+ FPS MediaPipe 3D pose tracking driving CoppeliaSim inverse kinematics (<50ms)",
      "End-to-end LALR(1) C-subset compiler & RoomFrame v1 custom binary IoT protocol (-98% traffic)"
    ]
  }
];

/**
 * 12 Flagship Projects displayed on the main Command-Center Grid (4 per Pillar)
 * Ordered: 01. AI Agents & AI Security -> 02. Cybersecurity & VAPT -> 03. Distributed Systems & ML
 */
export const FLAGSHIP_PROJECTS = [
  // ================= PILLAR 1: AI AGENTS, LLMs & AI SECURITY =================
  {
    id: "local-agent",
    pillar: "ai-data",
    pillarLabel: "AI Agents & LLMs",
    code: "SYS-01",
    title: "Autonomous Local Multi-Agent Coding Assistant & Runtime",
    subtitle: "3-agent collaborative loop (Planner/Executor/Critic), hybrid BM25+vector RAG & dual Desktop/Web GUIs",
    date: "Jul – Nov 2026",
    repoPath: "local-agent/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/local-agent",
    metrics: ["3-Agent Collaboration", "BM25 + Vector RAG", "19/19 Tests + 5/5 Evals", "Multi-Layer HITL Gates"],
    stack: ["Python 3.11+", "Ollama (Gemma 4)", "Google Gemini & NVIDIA NIM", "CustomTkinter & Flask SSE", "SQLite (BM25 + Vectors)", "Unittest"],
    summary:
      "Built a zero-framework multi-agent coding assistant and macOS runtime in pure Python featuring explicit `PlannerAgent`, `ExecutorAgent`, and `CriticAgent` collaboration over `CollaborationBus`, a 2-tier `PromptClassifier` (`DIRECT` <1ms vs. `PLAN` DAG), hybrid Okapi BM25 + vector SQLite RAG with `[MEM-...]` citations, Pre-Execution Plan Approval, and dual CustomTkinter desktop + Flask SSE web UIs.",
    bullets: [
      "Separated read-only discovery & `depends_on` DAG decomposition (`PlannerAgent`), sandboxed tool execution (`ExecutorAgent`), and deterministic verification (`CriticAgent`, `temp=0.1`) over `CollaborationBus` with dynamic `replan()`, plus `PromptClassifier` (`DIRECT` <1ms vs. `PLAN`) and `ScratchpadManager` (>80% context eviction).",
      "Engineered hybrid SQLite Long-Term Memory combining Okapi BM25 (`k1=1.5, b=0.75`), stopword filtering, and Ollama `nomic-embed-text` / 128-d hashed trigram vector similarity over `knowledge/agent_kb.json`, injecting cited `[MEM-xxxxxxxx]` context across Ollama (`gemma4-e4b-64k`), Gemini, NVIDIA NIM (`nemotron-3-ultra-550b-a55b`), and LM Studio.",
      "Built both a native CustomTkinter desktop GUI and a Flask SSE browser UI supporting Pre-Execution Plan Approval, Safe/Auto/Strict `[Authorize]`/`[Reject]` gates, `ask_user`, mid-run `POST /api/redirect`, `_is_allowed` ancestry guards, `.bak` backups, `19/19` automated `unittest` checks, and `5/5` live Ollama evaluations (`THA 3`)."
    ],
    architecture: `┌──────────────────────────────────────────────────────────────────────────┐
│ USER PROMPT ──► 2-TIER PROMPT CLASSIFIER (core/classifier.py)            │
│ ├── DIRECT Route (<1ms Regex / Fast-Path) ──► Single-Turn Streaming      │
│ └── PLAN Route (Complex Engineering)      ──► PlannerAgent DAG Builder   │
└─────────────────────────────────────┬────────────────────────────────────┘
                                      ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ COLLABORATION BUS + HYBRID BM25/VECTOR SQLITE RAG (core/memory/)         │
│ • Okapi BM25 + 128-d Trigram / nomic-embed-text ──► [MEM-...] Citations  │
│ • Pre-Execution Plan Approval + ScratchpadManager (>80% Context Evict)   │
└─────────────────────────────────────┬────────────────────────────────────┘
                                      ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ EXECUTOR AGENT (Sandboxed Tool Loops) ──► Safe/Auto/Strict HITL Gates    │
│ • Dual UIs: CustomTkinter Desktop + Flask SSE + mid-run redirect()       │
└─────────────────────────────────────┬────────────────────────────────────┘
                                      ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ CRITIC AGENT VERIFIER (temp = 0.1) ──► Satisfied / Retry / Replan DAG    │
└──────────────────────────────────────────────────────────────────────────┘`
  },
  {
    id: "evidence-sensitivity-tester",
    pillar: "ai-data",
    pillarLabel: "AI + Cybersecurity Eval",
    code: "SYS-02",
    title: "TrustGate: Evidence-Removal Sensitivity Tester & Neuro-Symbolic Engine",
    subtitle: "Propositional OSV benchmark (I ∧ V ∧ R), 2026 frontier eval, Apple MLX QLoRA & AST reachability suite",
    date: "Sep – Nov 2026",
    repoPath: "GENAI PROJECT/",
    metrics: ["0.0% Gated UPR", "TrustGate-3B MLX LoRA", "1,475 Files AST Scanned", "58/58 Pytest Suite"],
    stack: ["Python 3.12+", "Pydantic v2", "Apple MLX QLoRA", "FastAPI Web Studio", "TypeScript (VS Code API)", "Ollama & OpenRouter", "OSV API & SARIF 2.1.0"],
    summary:
      "Neuro-symbolic AI + Cybersecurity benchmark and triage suite (`TrustGate`) testing whether LLMs erroneously preserve `AFFECTED_CONFIRMED` verdicts when decisive applicability facts (`I ∧ V ∧ R`) are ablated — spanning a 120-case anonymized OSV benchmark, an 864-run 8-setup empirical study, a 2026 7-frontier-model benchmark, local Apple MLX QLoRA fine-tuning (`TrustGate-3B-LoRA`), 2-agent adversarial debate, AST reachability scanning, a 4-tab Web Studio, and a VS Code extension.",
    bullets: [
      "Formalized vulnerability applicability (`I ∧ V ∧ R`: Identity, Installed Version, Affected Range) across 120 counterfactually anonymized OSV advisories (PyPI, npm, Maven) and 6 perturbation conditions, proving `MinimumEvidenceGate` cuts Unsupported Persistence Rate (UPR) to `0.0%` across 864 evaluation trials and 7 frontier cloud models (which still exhibit `22.2%–33.3%` un-gated UPR).",
      "Fine-tuned `TrustGate-3B-LoRA` locally on Apple Silicon M2 Pro via MLX QLoRA (validation loss reduced `98.1%` from `3.31` to `0.062`), dropping base Llama-3.2-3B un-gated UPR from `72.2%` to `0.0%` and raising Conflict Detection (`CDR`) from `61.1%` to `100.0%` at `$0.00` API cost.",
      "Shipped production triage tooling: 2-agent prosecutor/skeptic adversarial debate, AST symbol reachability scanner indexing `1,475` files across `20` projects in `3.4s` with SARIF 2.1.0 export, 4-tab FastAPI Web Studio, native TypeScript VS Code Extension (`v2.0.0`), Antigravity plugin, and `58/58` passing `pytest` checks."
    ],
    architecture: `Real-World OSV Advisories + Raw Unstructured Advisories + Source ASTs
       │
       ├──► [Counterfactual Benchmark (120 Cases × 6 Variants)]
       │     (FULL, REMOVE_DECISIVE, REMOVE_DISTRACTOR, DISCONFIRM, CONFLICT, PARAPHRASE)
       │
       ├──► [Inference Engines: TrustGate-3B MLX LoRA / Ollama / 2026 Frontier Cloud]
       │     + [2-Agent Adversarial Debate] + [AST Reachability Indexer (1,475 Files)]
       │
       ▼
[MinimumEvidenceGate: Verifies (I ∧ V ∧ R) ──► 0.0% Unwarranted Persistence]
       │
       ├──► [4-Tab FastAPI Web Studio]
       ├──► [VS Code Extension v2.0.0 (Diagnostics, Hover Proof Cards, Quick Fix)]
       └──► [CLI + SARIF 2.1.0 Export + Antigravity Triage Plugin]`
  },
  {
    id: "ticket-triage-pipeline",
    pillar: "ai-data",
    pillarLabel: "AI Agents & Guardrails",
    code: "SYS-03",
    title: "AI Support Ticket Triage & Safe Reply Pipeline",
    subtitle: "11-stage state machine with dynamic schema ingestion, self-healing parser & safety guardrails",
    date: "Sep 2026",
    repoPath: "Deriv-Interview/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/ticket-triage-pipeline",
    metrics: ["11-Stage State Machine", "0.65 Confidence Gate", "100% Guardrail Adherence", "SHA-256 Audit Log"],
    stack: ["Python 3.11+", "Google Gemini API", "Pydantic v2", "JSON Schema", "Pytest", "State Machine"],
    summary:
      "Enterprise-ready customer support classification and automated draft response pipeline built with Google Gemini (`google-genai`) and Pydantic v2, featuring dynamic JSON taxonomy loading, two-tier self-healing JSON validation, and deterministic human-review routing.",
    bullets: [
      "Designed a replayable 11-stage logged execution lifecycle (`INIT` → `LOAD_SCHEMA` → `CALL_LLM` → `VALIDATE_RESPONSE` → `ROUTE_TICKET` → `GENERATE_REPLY` → `COMPLETE`).",
      "Built a 2-tier resilient parser that strips broken code fences and injects exact Pydantic v2 validation errors back into a retry prompt to salvage malformed LLM outputs automatically.",
      "Enforced a 0.65 confidence threshold routing ambiguous/multi-intent tickets to `human_review`, plus strict negative constraints preventing unauthorized financial promises or credential requests."
    ],
    architecture: `[Incoming Ticket] ──► [Stage 1-3: Dynamic label_schema.json Ingestion]
                             │
                             ▼
                  [Stage 5: Gemini Structured Call]
                             │
               ┌─────────────┴─────────────┐
               ▼ (Valid JSON)              ▼ (Malformed / Schema Error)
     [Stage 6: Pydantic v2]      [2-Tier Self-Healing Retry Prompt]
               │                 (Injects Validation Diagnostics)
               └─────────────┬─────────────┘
                             ▼
            [Stage 7: Deterministic Router (τ = 0.65)]
               ├── Confidence < 0.65 or Multi-Intent ──► [human_review Queue]
               └── Confidence ≥ 0.65 ──► [Stage 8: Guardrailed Draft Reply]
                                                 │
                                                 ▼
                                 [SHA-256 Hashed llm_calls.jsonl Audit]`
  },
  {
    id: "accounting-document-assistant",
    pillar: "ai-data",
    pillarLabel: "Grounded RAG & DLP Security",
    code: "SYS-04",
    title: "Evidence-Grounded AI Accounting Document Assistant",
    subtitle: "Deterministic Python Decimal engine, 8-pass OCR/table RAG, local DLP gatekeeper & citation verifier",
    date: "Nov 2026",
    repoPath: "KEMA - RAG system/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/accounting-document-assistant",
    metrics: ["Exact Decimal Arithmetic", "8-Pass Table + OCR", "Local DLP Gatekeeper", "11/11 Integration Tests"],
    stack: ["Python 3.11+", "SQLite (WAL)", "Sentence-Transformers", "pdfplumber & Tesseract OCR", "httpx (Gemini / OpenRouter / Ollama)", "Streamlit"],
    summary:
      "Evidence-grounded AI accounting and audit assistant solving LLM arithmetic hallucination and floating-point drift by pairing an 8-pass table-aware PDF/OCR ingestion pipeline and Python `Decimal` financial engines with hybrid SQLite RAG, a local sensitive-data DLP gatekeeper, and `[S#]` citation verification.",
    bullets: [
      "Engineered an 8-pass accounting parser (`pdfplumber` + `pypdf` + `pypdfium2`/`pytesseract` 2x OCR fallback) extracting Customer Open-Item Ledgers, invoices, cash receipts, credit notes, unallocated cash, and control totals into WAL-mode SQLite.",
      "Eliminated LLM arithmetic drift via deterministic `decimal.Decimal` (`ROUND_HALF_UP` to `0.01`) calculations with strict multi-currency isolation, disputed balance separation, and page-bounded `[S#]` citation validation.",
      "Enforced a pre-flight deterministic regex/keyword Sensitive-Data Gatekeeper (`scan_for_sensitive_data()`) blocking outbound cloud LLM calls when credentials, PEM keys, or card numbers appear, verified across an 11-stage 40-invoice ground-truth test suite."
    ],
    architecture: `[PDF Upload (Native / Scanned)] ──► [3-Tier Extractor: pdfplumber + pypdf + Tesseract OCR]
                                                   │
                                                   ▼
                            [Local Sensitive-Data Gatekeeper (Regex/DLP)]
                                    │                                │
                                    ▼                                ▼
                    [8-Pass Table Accounting Parser]   [Page-Bounded Chunks + MiniLM 384-d]
                                    │                                │
                                    └──────────────┬─────────────────┘
                                                   ▼
                                   [SQLite WAL DB (accounting.db)]
                                                   │
[User Query] ──► [Intent Router] ──► [Deterministic Decimal Engines + Hybrid RAG]
                                                   │
                                                   ▼
                 [Gatekeeper Check ──► OpenRouter / Gemini / Ollama ──► [S#] Verifier]`
  },

  // ================= PILLAR 2: CYBERSECURITY, VAPT & THREAT INTELLIGENCE =================
  {
    id: "autonomous-asm-platform",
    pillar: "cyber-sec",
    pillarLabel: "Cybersecurity & AI Copilot",
    code: "SYS-05",
    title: "Autonomous Attack Surface Manager & 'Friday' AI Copilot",
    subtitle: "11-tool OSINT recon orchestrator, HTML5 Canvas physics graph, local LLM analyst & CVE SQL pipeline",
    date: "Jun 2026",
    repoPath: "asm-tool/ & CYBER_MultiTool/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/Attack-Surface-Management-AIO",
    metrics: ["11 OSINT CLI Tools", "100% Detection Rate", "Force-Directed Graph", "Multi-Source CVE Sync"],
    stack: ["Python", "Go", "Ollama / LM Studio", "SQLite & PostgreSQL", "HTML5 Canvas", "subfinder / naabu / nuclei / nmap"],
    summary:
      "Unified offensive security reconnaissance platform orchestrating 11 CLI utilities in the background, mapping discovered assets onto an interactive HTML5 Canvas force-directed graph, paired with 'Friday' (a local LLM security copilot) and a multi-source CVE/NVD SQL normalization pipeline.",
    bullets: [
      "Orchestrated `subfinder`, `dnsx`, `naabu`, `nmap`, `httpx`, `katana`, `waybackurls`, and `nuclei` with thread-locked state persistence in SQLite, achieving a 100% finding detection rate on `pentest-ground.com`.",
      "Built a custom HTML5 Canvas force-directed physics graph mapping root domains, subdomains, live servers, open ports, and critical CVEs with real-time node inspection.",
      "Embedded 'Friday' local LLM analyst to parse raw scan logs and draft remediation reports, backed by `CYBER_MultiTool` syncing NVD, MITRE, CISA KEV, and OSV feeds into normalized PostgreSQL/SQLite tables."
    ],
    architecture: `[Target Domain Input]
       │
       ▼
[Thread-Safe Python Recon Orchestrator]
 ├── Discovery: subfinder, subdominator, dnsx, puredns
 ├── Port & Service: naabu, nmap, httpx
 └── Crawl & Vuln: katana, gau, waybackurls, nuclei
       │
       ├──────────────────────────────┬──────────────────────────────┐
       ▼                              ▼                              ▼
[SQLite Telemetry Store]   [HTML5 Canvas Physics Map]   ["Friday" Local LLM Copilot]
       │                   (Interactive Asset Graph)    (Parses Logs & Drafts Reports)
       ▼
[CYBER_MultiTool: NVD + MITRE + CISA KEV + OSV ──► CPE Normalization ──► PostgreSQL]`
  },
  {
    id: "multiclass-iot-nids",
    pillar: "cyber-sec",
    pillarLabel: "Network Defense & Security ML",
    code: "SYS-06",
    title: "Multi-Class IoT Network Intrusion Detection System",
    subtitle: "7-class anomaly NIDS trained on 264,925 CIC-IoT-DIAD2024 flows with ~50ms CPU inference",
    date: "Sep – Dec 2025",
    repoPath: "ML-PROJECT/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/iot-multiclass-nids",
    metrics: ["264,925 Flow Records", "80 Flow Features", "0.98 DoS / 0.89 DDoS F1", "~50 ms CPU Inference"],
    stack: ["Python", "XGBoost", "TensorFlow (CNN-LSTM)", "Scikit-learn", "Pandas", "NumPy", "Joblib"],
    summary:
      "End-to-end 7-class Network Intrusion Detection System classifying IoT and enterprise traffic (Brute Force, DDoS, DoS, Normal, Recon, Spoofing, Web Attacks) across 264,925 consolidated flows from the CIC-IoT-DIAD2024 dataset.",
    bullets: [
      "Engineered a multithreaded data consolidation pipeline (`prepare_dataset_custom.py`) to crawl 1,000+ raw CSVs, map 33 attack sub-types into 7 core classes, impute medians, deduplicate, and scale 80 flow attributes.",
      "Benchmarked a deep hybrid CNN-LSTM network against gradient-boosted trees, deploying an optimized 300-tree XGBoost classifier (depth 8, lr 0.1) achieving 0.98 F1 on DoS and 0.89 F1 on DDoS.",
      "Built `real_time_inference.py` (`NetworkFlowExtractor` + `RealTimeIDSPredictor` + `RealTimeMonitor`) delivering ~50ms per-sample inline CPU auditing and JSON forensic alerting."
    ],
    architecture: `[1,000+ Raw CIC-IoT-DIAD2024 CSV Files (33 Sub-Attack Types)]
       │
       ▼
[Multithreaded ETL: Merge, Median Impute, Deduplicate, StandardScaler]
       │
       ▼
[Unified Dataset: 264,925 Rows × 80 Network Flow Features]
       │
       ├──► Benchmark A: Hybrid CNN-LSTM Deep Network
       └──► Benchmark B: Optimized XGBoost (300 Trees, Max Depth 8) ◄── Selected
                                     │
                                     ▼
[Production Engine: NetworkFlowExtractor ──► RealTimeIDSPredictor (~50 ms CPU)]
                                     │
                                     ▼
         [Severity Classification (NONE..CRITICAL) + Forensic JSON Log]`
  },
  {
    id: "encrypted-p2p-chat-suite",
    pillar: "cyber-sec",
    pillarLabel: "Cryptography & Protocol Security",
    code: "SYS-07",
    title: "ChatApp: E2EE Peer-to-Peer Cryptographic Suite",
    subtitle: "Signed Ephemeral Diffie-Hellman (PFS), AES-256-CBC + HMAC-SHA256 & traffic-analysis padding",
    date: "Feb 2026",
    repoPath: "Message/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/ChatApp",
    metrics: ["Perfect Forward Secrecy", "RSA-2048 + Ephemeral DH", "Encrypt-then-MAC", "Anti-Replay & Padding"],
    stack: ["Python", "PyCryptodome", "Flask & Socket.IO", "Tkinter (Sun Valley)", "Raw TCP Sockets", "WebSockets"],
    summary:
      "Multi-client end-to-end encrypted communication suite (Tkinter Desktop GUI, Flask/Socket.IO Web UI, and CLI) sharing a unified cryptographic protocol with Perfect Forward Secrecy, Encrypt-then-MAC integrity, and side-channel traffic padding.",
    bullets: [
      "Implemented RSA-2048 identity signatures over ephemeral Diffie-Hellman key exchanges to guarantee Perfect Forward Secrecy (PFS), deriving isolated `enc_key` and `mac_key` secrets via SHA-256 KDF.",
      "Enforced Encrypt-then-MAC payload security: AES-256-CBC encryption paired with an HMAC-SHA256 tag computed over `(IV || 64-bit sequence counter || ciphertext)` to block bit-flipping and replay attacks.",
      "Mitigated timing and packet-size side-channel analysis using adaptive dummy packet padding over 4-byte length-prefixed TCP streams, plus a 3-strike brute-force lockout gate."
    ],
    architecture: `[Node A (Desktop / Web / CLI)]                           [Node B (Desktop / Web / CLI)]
       │                                                                │
       ├─── 1. Exchange RSA-2048 Signed Ephemeral DH Public Keys ──────►│
       │◄── 2. Verify Signature & Compute Shared Secret (PFS) ──────────┤
       │                                                                │
       ▼                                                                ▼
[SHA-256 KDF ──► Separate Symmetric Keys: enc_key (AES-256) + mac_key (HMAC)]
       │
       ▼
[Encrypt-then-MAC Frame Builder]
 • Payload ──► AES-256-CBC(enc_key, random IV)
 • Tag     ──► HMAC-SHA256(mac_key, IV || 64-bit SeqCounter || Ciphertext)
 • Stream  ──► 4-Byte Big-Endian Length Header + Adaptive Dummy Traffic Padding`
  },
  {
    id: "nipa-hybrid-datamining",
    pillar: "cyber-sec",
    pillarLabel: "Security ML & Data Mining",
    code: "SYS-08",
    title: "Network Intrusion Pattern Analysis (NIPA) Stacked Ensemble",
    subtitle: "ANOVA F-test feature selection, leakage-free SMOTE & RF+XGBoost+LR meta-stack on CICIoT2023",
    date: "Feb – May 2026",
    repoPath: "DM-PROJECT/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/nipa-network-intrusion-analysis",
    metrics: ["Top-30 ANOVA Features", "5-Fold Stacked Ensemble", "33 IoT Attack Types", "105 Physical Devices"],
    stack: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "SMOTE (imbalanced-learn)", "ANOVA F-Test"],
    summary:
      "Hybrid stacked cybersecurity ensemble combining Random Forest (bagging) and XGBoost (boosting) with a Logistic Regression meta-learner on CICIoT2023, applying ANOVA F-test feature selection (46 → 30 features) and training-split-only SMOTE oversampling to classify 33 IoT attack patterns across 8 categories without data leakage.",
    bullets: [
      "Engineered a two-level stacked ensemble pairing Random Forest (bagging) and XGBoost (boosting) with a Logistic Regression meta-learner evaluated via 5-fold stratified cross-validation.",
      "Reduced 46 raw CICIoT2023 flow attributes down to the top 30 most discriminative features via ANOVA F-tests to accelerate training and reduce overfitting.",
      "Applied training-split-only SMOTE (k=5 nearest neighbors) to balance rare IoT attacks (Brute Force, Spoofing, Mirai) across 260,000+ records while preventing test-set leakage."
    ],
    architecture: `[CICIoT2023 Dataset (105 IoT Devices • 33 Attack Types → 8 Categories)]
       │
       ▼
[Stratified Train/Test Split] ──► [ANOVA F-Test Selector: 46 → Top 30 Features]
       │
       ▼ (Training Split Only — Zero Data Leakage)
[SMOTE Minority Oversampling (k = 5)]
       │
       ├──────────────────────────┐
       ▼                          ▼
[Base 1: Random Forest]    [Base 2: XGBoost]
       │                          │
       └────────────┬─────────────┘
                    ▼
[Level-2 Logistic Regression Meta-Learner (5-Fold CV)]`
  },

  // ================= PILLAR 3: DISTRIBUTED SYSTEMS, ML & SOFTWARE ENGINEERING =================
  {
    id: "memory-setup-offline-museum",
    pillar: "systems-ml",
    pillarLabel: "Local Vision AI & Systems",
    code: "SYS-09",
    title: "Memory Setup: Local Media Intelligence & Offline Museum",
    subtitle: "5-stage offline pipeline, ArcFace 512-d clustering, HTTP 206 video museum & <2.5 GB RAM VLM",
    date: "Nov 2026",
    repoPath: "Memory_Setup/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/memory-setup",
    metrics: ["< 2.5 GB RAM Ceiling", "15k-City KD-Tree Geo", "HTTP 206 + Remote Share", "44 Offline Pytest Checks"],
    stack: ["Python 3.12", "InsightFace ArcFace", "Ollama (Moondream)", "SQLite (WAL + FTS5)", "PyWebView Studio", "Tailscale / Cloudflare Tunnel", "Pytest"],
    summary:
      "Privacy-first, 100% offline media intelligence engine and Offline Museum desktop application (`Memory Setup Studio`) organizing photos, videos, HEIC, and Live Photos under a strict two-folder contract (`content/` + `viewer/`), combining offline KD-Tree geocoding, ArcFace facial clustering, memory-bounded Vision AI captions, HTTP `206` video streaming, and password-gated Remote Family Share.",
    bullets: [
      "Engineered an incremental-safe 5-stage pipeline over a single consolidated SQLite schema (`catalog.sqlite`) with magic-byte sniffing, SHA-256 dedup, Live Photo pairing, offline 3D ECEF `cKDTree` reverse-geocoding (15k world cities, 150 km Haversine cutoff), and a 15.0 GiB free-disk safety floor.",
      "Built vectorized NumPy BLAS Leader Centroid clustering (`thresh=0.48`) over 512-d InsightFace ArcFace ResNet-50 embeddings with non-destructive People merge/rename curation and a high-precision document/homework quarantine classifier.",
      "Solved `llama-server` host cache bloat via a single-worker `MemoryBoundedOllamaClient` (`cache_prompt: false`, `LLAMA_ARG_CACHE_RAM=0`, Whisper 50-item / Turbo 200-item runner recycling + RSS watchdog), packaged in a native PyWebView Studio with mobile-responsive Photo/Video Museum (`HTTP 206`) and zero-terminal Tailscale / Cloudflare Quick Tunnel Remote Share (`401` CSP gate, `429` rate limit, `44` offline tests)."
    ],
    architecture: `[Unsorted Media / SD Card] ──► [Stage 1-3: Magic Sniffer + Live Photo Pairing + SHA-256]
                                              │
                                              ├──► [3D ECEF cKDTree Offline Geocoder (15k Cities)]
                                              ▼
                                 [content/YYYY/ + Immutable Media IDs]
                                              │
                 ┌────────────────────────────┴────────────────────────────┐
                 ▼                                                         ▼
[Stage 4A: ArcFace 512-d + BLAS Clustering]       [Stage 4B: Single-Worker Ollama Moondream]
                 │                                (cache_prompt:false, <2.5 GB RAM Watchdog)
                 └────────────────────────────┬────────────────────────────┘
                                              ▼
[Stage 5: Unified SQLite FTS5 + HTTP 206 Video/Photo Museum + PyWebView Studio + Tailscale/CF Share]`
  },
  {
    id: "ddos-detection-pipeline",
    pillar: "systems-ml",
    pillarLabel: "Distributed Systems & Threat ML",
    code: "SYS-10",
    title: "Distributed Real-Time DDoS Detection Pipeline",
    subtitle: "2.0 Gbps Linux AF_XDP zero-copy packet capture, Kafka streaming & 73ms ensemble inference",
    date: "Jun – Aug 2025",
    repoPath: "LTS-Files/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/PS1-distributed-ddos-detection",
    metrics: ["2.0 Gbps Line-Rate", "73 ms Median Latency", "99.2% Ensemble Acc", "-20% Memory Footprint"],
    stack: ["Python 3.11", "Linux AF_XDP / AF_PACKET", "Apache Kafka", "gRPC & Protobuf", "FastAPI", "XGBoost / LightGBM", "Docker & K8s"],
    summary:
      "Decoupled distributed network threat detection pipeline engineered during my internship at Leo Technosoft, separating kernel-bypass edge packet sniffing from stateful flow aggregation, Kafka streaming, and gRPC/FastAPI ensemble inference.",
    bullets: [
      "Implemented Linux `AF_XDP` & `AF_PACKET` zero-copy ring-buffer packet capture sustaining 2.0 Gbps throughput on Ubuntu at 38% CPU (plus macOS BPF fallback at 1.2 Gbps).",
      "Built a bidirectional 5-tuple stateful flow manager tracking 28 sliding-window statistical features with a 300-second idle eviction policy, cutting memory usage by 20% under flood spikes.",
      "Trained a soft-voting ensemble (Random Forest + XGBoost + LightGBM) on 180,000+ CIC-DDoS-2019 flows achieving 99.2% accuracy and a 73ms median alert latency (Packet→Kafka 9ms, Queue 4ms, Serialization 38ms, CPU Inference 22ms)."
    ],
    architecture: `[Edge NIC: 2.0 Gbps Traffic]
       │
       ▼  (Zero-Copy Ring Buffer / Kernel Bypass)
[AF_XDP / AF_PACKET Sniffer] ──► [5-Tuple Stateful Flow Tracker (28 Features, 300s TTL)]
                                            │
                                            ▼ (9 ms)
                              [Apache Kafka (Source-IP Partitioned)]
                                            │
                                            ▼ (4 ms Dequeue + Backpressure Pool)
                              [JobServer Consumer] ──(gRPC / Protobuf: 38 ms)──► [ML Inference Server]
                                                                                        │
                                                                                        ▼ (22 ms CPU)
                                                                      [Soft-Voting Ensemble: RF + XGB + LGBM]
                                                                      [99.2% Accuracy | 73 ms Median End-to-End]`
  },
  {
    id: "hiroshima-robotics-vision",
    pillar: "systems-ml",
    pillarLabel: "Robotics & Computer Vision",
    code: "SYS-11",
    title: "Vision-Guided Robotic Teleoperation & Pose Tracking",
    subtitle: "30+ FPS MediaPipe 3D pose/gesture estimation driving CoppeliaSim inverse kinematics (<50ms)",
    date: "Jul 2026",
    repoPath: "JAPAN/02-Hiroshima-Immersion-Program/HU-Robotics-And-Vision/",
    metrics: ["< 50 ms Loop Latency", "30+ FPS 3D Tracking", "Inverse Kinematics", "Hiroshima Univ. (Japan)"],
    stack: ["Python", "OpenCV 4", "Google MediaPipe", "CoppeliaSim (V-REP)", "Inverse Kinematics (IK)", "Proportional Control"],
    summary:
      "Developed during the international Hiroshima University Internship Program (HIP) in Japan: a real-time vision-guided teleoperation system linking webcam 3D human pose and hand gesture recognition to multi-joint robotic arm manipulators in CoppeliaSim.",
    bullets: [
      "Extracted 3D body landmark coordinates and dynamic hand gestures at 30+ FPS using MediaPipe Pose Landmarker and Gesture Recognizer.",
      "Programmed inverse kinematics (IK) trajectory solvers and proportional (P-Controller) motion sequencers over the CoppeliaSim Remote API for smooth, non-jerky joint actuation.",
      "Built synchronous RGB and depth buffer encoding pipelines for obstacle proximity feedback with under 50ms end-to-end vision-to-control latency."
    ],
    architecture: `[Live RGB/Depth Webcam Stream (30+ FPS)]
       │
       ▼
[OpenCV 4 Frame Preprocessor]
       │
       ├──► [MediaPipe 3D Pose Landmarker] ──► [3D Wrist/Elbow/Shoulder Vector Transform]
       └──► [MediaPipe Hand Gesture Engine] ──► [Gripper State & Mode Command Trigger]
                                                        │
                                                        ▼
                                     [Proportional (P) Trajectory Smoothing Filter]
                                                        │
                                                        ▼ (< 50 ms Remote API IPC)
                                     [CoppeliaSim Inverse Kinematics (IK) Solver]
                                                        │
                                                        ▼
                                     [Multi-Joint Manipulator Actuation + Depth Feedback]`
  },
  {
    id: "c-subset-optimizing-compiler",
    pillar: "systems-ml",
    pillarLabel: "Compilers & Systems",
    code: "SYS-12",
    title: "PLY-Based C-Subset Optimizing Compiler",
    subtitle: "Multi-phase compiler from Lexer & LALR(1) AST parser to TAC optimization & virtual assembly",
    date: "Feb – May 2026",
    repoPath: "CCP/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/Compiler-Creation",
    metrics: ["6-Phase Pipeline", "LALR(1) + LL(1) Sim", "Constant Folding & DCE", "Register Assembler"],
    stack: ["Python", "PLY (Lex-Yacc)", "C Grammar Specs", "AST & Symbol Tables", "Three-Address Code (TAC)", "Virtual Assembly"],
    summary:
      "End-to-end optimizing compiler for a subset of C, implementing lexical tokenization, LALR(1) AST construction, nested block-scope symbol tables, Three-Address Code (TAC) quadruple emission, compile-time optimizations, and register-allocated virtual assembly.",
    bullets: [
      "Engineered lexer and LALR(1) parser in PLY alongside custom FIRST/FOLLOW set computation and step-by-step Shift-Reduce parsing trace tables.",
      "Constructed hierarchical `SymbolTable` scopes enforcing block-lifetime visibility and strict operator/operand type checking.",
      "Flattened ASTs into TAC quadruples `(op, arg1, arg2, result)` and applied Constant Folding and Dead-Code Elimination (DCE) before emitting register-allocated assembly (`MOV`, `LOAD`, `STORE`, `ADD`, `CMP`, `BNZ`)."
    ],
    architecture: `[C-Subset Source Code]
       │
       ▼
[Phase 1: PLY Lexer] ──► Token Stream (Lexeme, Type, Line #)
       │
       ▼
[Phase 2: LALR(1) Parser + FIRST/FOLLOW Table] ──► Hierarchical Abstract Syntax Tree (AST)
       │
       ▼
[Phase 3: Scoped SymbolTable & Type Checker] ──► Block-Scoped Decorated AST
       │
       ▼
[Phase 4: Intermediate Code Generator] ──► Three-Address Code (TAC) Quadruples
       │
       ▼
[Phase 5: Optimizer (Constant Folding + Dead-Code Elimination)]
       │
       ▼
[Phase 6: Virtual Register Allocator (R0..Rn)] ──► Target Virtual Machine Assembly`
  }
];

/**
 * 9 Additional Specialized, Coursework & Hobby Projects
 * Indexed deeply in the AI Chatbot + accessible via the `/archive` CLI command
 */
export const ARCHIVE_PROJECTS = [
  {
    id: "mini-soc-ai-lab",
    pillar: "cyber-sec",
    title: "miniSOC: AI-Assisted Security Operations Center Lab",
    repoPath: "miniSOC/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/miniSOC",
    date: "Nov 2026",
    stack: ["Python 3 (stdlib)", "Wazuh 4.14 All-in-One", "OpenSearch", "Sysmon", "PowerShell", "OpenRouter API", "VirtualBox"],
    metrics: ["2-VM Host-Only SOC Lab", "4 Reversible Attack Demos", "$0.00 Dry-Run + SHA-256 Cache", "10/10 Unit Tests"],
    summary:
      "Isolated 2-VM VirtualBox SOC lab pairing Wazuh 4.14 All-in-One (Wazuh Manager + OpenSearch Indexer + Dashboard) on Ubuntu with a Windows Evaluation VM (Sysmon + Wazuh Agent), PowerShell/bash VM provisioning scripts, 4 reversible attack simulations (`Event 4625` brute-force, Base64 PowerShell Sysmon `Event 1`, EICAR, `Event 4698` scheduled task), a NIST Incident Report template, and a zero-dependency Python OpenRouter AI alert explainer (`--live`, `--min-level 7`, alert dedup, SHA-256 cache, `--dry-run`, `10/10` unittest)."
  },
  {
    id: "multiverse-rpg-semantic-search",
    pillar: "ai-data",
    title: "LLM Coursework Suite: Multiverse RPG Retrieval, Campus RAG & THA 3 Eval",
    repoPath: "LLM PROJECTS/Assignment-1, assignment 2 & Assignment-3/",
    date: "Sep – Nov 2026",
    stack: ["Python 3.11+", "PyTorch", "Sentence-Transformers (all-MiniLM-L6-v2)", "Ollama (Gemma 4)", "Typst", "NumPy & Pandas"],
    metrics: ["384-d Dense Vectors (<1 ms)", "135 Curated Lore Items", "5/5 Live THA 3 Evals", "6-Page Typst Report"],
    summary:
      "Three-part LLM coursework suite (Private Repo): (1) dense vector semantic retrieval embedding 135 hand-annotated RPG items across 5 realms into 384-d `all-MiniLM-L6-v2` vectors with pure NumPy/PyTorch cosine ranking (>0.62 similarity on zero-keyword queries) plus an analysis of transformer 'negation blindness'; (2) Campus Event Announcement Generator & Student Services RAG; and (3) `Assignment-3` THA 3 6-page Typst report + `run_evals.py` passing `5/5` live Ollama (`gemma4-e4b-64k`) multi-agent scenarios for `local-agent`."
  },
  {
    id: "portable-smart-room-iot",
    pillar: "systems-ml",
    title: "Portable Smart Room IoT & RoomFrame v1 (RFv1) Binary Protocol Suite",
    repoPath: "IOT/",
    date: "Sep – Nov 2026",
    stack: ["Python 3.12", "C99", "Raspberry Pi 4", "ESP32 & ESP8266", "Seeed XIAO nRF52840", "ChaCha20-Poly1305 AEAD", "BLE / WebSockets / UDP"],
    metrics: ["-98.07% Idle Traffic", "ESP32 Voice RAM -98.66%", "65,534 Device Address Space", "24/24 Pytest Suite"],
    summary:
      "Modular retrofit smart-room hardware and custom protocol suite (Private Repo) evolving from an HTTP/MQTT fog lab into `RoomFrame v1` (`RFv1` v4.3.0) — an 18-byte transport-agnostic binary protocol across UDP, WebSockets, 1 Mbaud UART, and 24-byte native BLE beacons with RFC 8439 ChaCha20-Poly1305 AEAD security, Direct Mac BLE audio bridge, dark-glassmorphic command dashboard + local speaker fallback, solid 3D CAD renders, IEEE conference papers, and `24/24` passing tests."
  },
  {
    id: "netwatch-port-dashboard",
    pillar: "cyber-sec",
    title: "NetWatch: Live System & Network Socket Security Auditor",
    repoPath: "port-dashboard/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/Netwatch-Port-Dashboard",
    date: "Jun 2026",
    stack: ["Python", "FastAPI", "SQLite", "Chart.js", "HTML5/CSS/JS", "psutil", "lsof"],
    metrics: ["< 2% CPU Overhead", "< 50 MB RAM", "72-Hour Rolling Cache", "PID-to-Socket Auditor"],
    summary:
      "Wireshark-inspired local network and socket diagnostic dashboard mapping active TCP/UDP connections to PIDs, process memory/CPU usage, and remote endpoints using `lsof`, `/proc/net`, and `psutil`, with an automated SQLite rolling 72-hour snapshot pruner."
  },
  {
    id: "scotland-yard-digital",
    pillar: "systems-ml",
    title: "Digital Scotland Yard (60 FPS Multiplayer Tabletop Engine)",
    repoPath: "Scotland yard/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/scotland-yard",
    date: "Oct 2026 (Hobby Project)",
    stack: ["Next.js 16", "React 19", "TypeScript", "Node.js 26", "Socket.io 4", "HTML5 Canvas 2D", "Web Audio API"],
    metrics: ["60 FPS Bezier Cartography", "3 Cities (up to 1,212 routes)", "Zero-Cheat State Sanitizer", "BFS Evasive AI"],
    summary:
      "Built purely for fun: a multi-device networked adaptation of the Ravensburger board game Scotland Yard. Features 60 FPS HTML5 Canvas vector maps (London, Paris, New York), server-side cryptographic redaction of Mister X's coordinates during hidden turns, a zero-leak 'Suspect Possibility Cloud' deduction engine, multi-source BFS evasive AI bots, collaborative detective whiteboards, post-game replay scrubber, and a pure Web Audio procedural sound synthesizer."
  },
  {
    id: "aqi-forecast-lstm",
    pillar: "ai-data",
    title: "AQI-Forecast: Urban Air Quality Prediction via LSTM & HERE Traffic API",
    repoPath: "DL PROJECT- NIKUNJ GUPTA 0229/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/aqi-forecast-lstm",
    date: "Feb – May 2026",
    stack: ["Python", "PyTorch (2-Layer LSTM)", "Streamlit", "HERE Traffic REST API", "Pandas", "NumPy"],
    metrics: ["24-Hour Sequence Window", "Live HERE jamFactor", "Mode A vs Mode B Eval", "Interactive Simulator"],
    summary:
      "Two-layer PyTorch LSTM neural network forecasting urban Air Quality Index (AQI) 24 hours ahead by combining historical pollution/weather time-series with real-time road congestion metrics (`jamFactor`) fetched from the HERE Traffic REST API, wrapped in an interactive Streamlit simulation dashboard."
  },
  {
    id: "next-class-macos-app",
    pillar: "systems-ml",
    title: "Next Class: Desktop GUI & macOS Status Bar Timetable Companion",
    repoPath: "timetable-app/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/menubar-timetable-app",
    date: "May 2026",
    stack: ["Python", "Tkinter (Sun Valley TTK)", "Rumps (macOS Status Bar)", "py2app", "PyInstaller", "JSON"],
    metrics: ["Dock-Free Status Bar App", "15-Min Native OS Alerts", "Live Countdown Timers", "Standalone .app Bundle"],
    summary:
      "Dual-interface timetable utility featuring a Sun Valley Tkinter desktop GUI and a dock-free macOS status bar app (`rumps` + `py2app` with `LSUIElement`), delivering live class countdowns, room lookups, and native macOS Notification Center & audio reminders 15 minutes before class."
  },
  {
    id: "grpc-and-gesturedeck",
    pillar: "systems-ml",
    title: "Python gRPC Microservice & GestureDeck MediaPipe Controller",
    repoPath: "gRPC project/ & gesture_control/",
    repoUrl: "https://github.com/Nikunj-Gupta-1/gesturedeck",
    date: "Jun – Jul 2026",
    stack: ["Python", "gRPC", "Protocol Buffers (Protobuf)", "MediaPipe", "OpenCV"],
    metrics: ["Protobuf Stubs (Port 50051)", "Real-Time Hand Landmarks", "Low-Latency IPC"],
    summary:
      "Two focused systems utilities: (1) a low-latency Python gRPC microservice using compiled `helloworld.proto` Protocol Buffer stubs on port 50051, and (2) `GestureDeck`, a real-time webcam hand-gesture recognition engine built with MediaPipe."
  },
  {
    id: "docker-kubernetes-devsecops",
    pillar: "cyber-sec",
    title: "Docker & Kubernetes DevSecOps Mastery Guide",
    repoPath: "github.com/Nikunj-Gupta-1/docker-kubernetes-mastery",
    repoUrl: "https://github.com/Nikunj-Gupta-1/docker-kubernetes-mastery",
    date: "2026",
    stack: ["Docker", "Kubernetes", "RBAC", "Multi-Stage Containers", "DevSecOps"],
    metrics: ["Container Hardening", "K8s RBAC & Network Policies", "Production Runbooks"],
    summary:
      "Comprehensive DevSecOps engineering reference covering container isolation, multi-stage builds, image security hygiene, Kubernetes workload orchestration, RBAC policy auditing, and cluster hardening workflows."
  }
];

export const EXPERIENCE = [
  {
    id: "jio-platforms",
    role: "VAPT & Infrastructure Analytics Intern — Operations & Auditing",
    organization: "Jio Platforms Limited (JPL)",
    location: "Mumbai, India",
    period: "May 2026 – Jul 2026",
    pillar: "cyber-sec",
    tag: "ENTERPRISE SECURITY // 75,000+ SERVER INFRA",
    highlights: [
      "Automated daily vulnerability assessments and compliance checks across 1,000+ enterprise servers (within a 75,000+ server fleet) using Tenable Nessus, converting raw scan telemetry into actionable remediation reports.",
      "Analyzed high-volume system logs and endpoint alerts in Trend Micro to detect operational anomalies, monitor patch rollouts, and support incident response.",
      "Conducted internal web API and service endpoint penetration testing with Burp Suite and Metasploit, partnering with engineering teams on code-level fixes.",
      "Audited Docker and Kubernetes clusters to verify container base image signatures and Role-Based Access Control (RBAC) policies."
    ]
  },
  {
    id: "leo-technosoft",
    role: "Software & Machine Learning Intern (Network Threat Detection)",
    organization: "Leo Technosoft LLC",
    location: "Pune, India",
    period: "Jun 2025 – Aug 2025",
    pillar: "cyber-sec",
    tag: "REAL-TIME THREAT DETECTION & ML // 73ms SLA",
    highlights: [
      "Architected a real-time distributed network threat detection pipeline using Linux AF_XDP (2.0 Gbps zero-copy capture), Apache Kafka, FastAPI, and gRPC, achieving a 73ms median alert latency (well below the 200ms SLA).",
      "Trained and deployed a soft-voting ensemble (XGBoost, Random Forest, LightGBM) on 180,000+ records with 99.2% accuracy and a 90% confidence threshold to suppress SOC false alarms.",
      "Built a 5-tuple stateful flow manager in Python with 300-second idle eviction, cutting memory footprint by 20% during 2.0 Gbps traffic spikes, plus a standalone Streamlit healthcare risk predictor with ROC-AUC diagnostics."
    ]
  },
  {
    id: "hiroshima-university",
    role: "Computer Vision & Robotics Research Intern (HIP Fellow)",
    organization: "Hiroshima University (International Internship Program)",
    location: "Hiroshima, Japan",
    period: "Jul 2026",
    pillar: "systems-ml",
    tag: "INTERNATIONAL RESEARCH // ROBOTICS & CV",
    highlights: [
      "Selected for the competitive Hiroshima University Internship Program (HIP) in Japan for cross-border research in vision-guided robotics and kinematic simulation.",
      "Engineered a 30+ FPS MediaPipe 3D pose and hand-gesture pipeline driving a multi-joint robotic manipulator in CoppeliaSim via Inverse Kinematics and P-controllers with <50ms latency."
    ]
  },
  {
    id: "bits-ta",
    role: "Lab Teaching Assistant — DBMS (CS F212) & OOP (CS F213)",
    organization: "BITS Pilani, Dubai Campus",
    location: "Dubai, UAE",
    period: "Sep 2025 – Jun 2026 (2 Semesters)",
    pillar: "ai-data",
    tag: "ACADEMIC MENTORSHIP // 90+ UNDERGRADS",
    highlights: [
      "Database Management Systems (Feb – Jun 2026): Mentored 40+ students in relational schema design, SQL query optimization, indexing, normalization, and ACID transactions; built automated SQLite grading scripts for lab evaluations.",
      "Object-Oriented Programming (Sep – Dec 2025): Guided 50+ students through OOP principles, design patterns, algorithmic complexity, and debugging workflows in Java and C++."
    ]
  }
];

export const SKILL_GROUPS = [
  {
    category: "Generative AI, Security Agents & LLMs",
    pillar: "ai-data",
    items: [
      "Multi-Agent Orchestration (Planner/Executor/Critic)",
      "AI Security & Neuro-Symbolic Triage (TrustGate)",
      "Apple Silicon MLX QLoRA Fine-Tuning",
      "Hybrid RAG (Okapi BM25 + Vector & SQLite FTS5)",
      "Pydantic v2 Structured Outputs & HITL Gates",
      "Local DLP Guardrails & Citation Verification",
      "Google Gemini API & OpenRouter",
      "NVIDIA NIM (Nemotron 3)",
      "Ollama & Local VLMs (Gemma 4 / Moondream)",
      "Sentence-Transformers & 2-Agent Debate"
    ]
  },
  {
    category: "Cybersecurity, VAPT & Threat Intelligence",
    pillar: "cyber-sec",
    items: [
      "Tenable Nessus (Enterprise VAPT)",
      "Burp Suite & Metasploit",
      "Wazuh 4.14, OpenSearch & Sysmon SIEM",
      "Trend Micro SIEM / Endpoint",
      "OSINT Recon (subfinder, naabu, nuclei, nmap)",
      "AST Reachability & SARIF 2.1.0 Scanning",
      "CVE / NVD / CISA KEV Pipelines",
      "RSA-2048, Ephemeral DH (PFS) & ChaCha20-Poly1305",
      "Network Intrusion Detection (NIDS)",
      "Docker & Kubernetes RBAC Auditing"
    ]
  },
  {
    category: "Machine Learning, DL & Computer Vision",
    pillar: "systems-ml",
    items: [
      "PyTorch (LSTM / DNN)",
      "XGBoost & LightGBM",
      "Scikit-learn & Stacked Ensembles",
      "InsightFace ArcFace (512-d Biometrics)",
      "Tesseract OCR & pdfplumber",
      "ANOVA F-Test & SMOTE",
      "Pandas, NumPy & SciPy (KD-Tree)",
      "OpenCV 4 & MediaPipe",
      "CoppeliaSim & Inverse Kinematics"
    ]
  },
  {
    category: "Distributed Systems, IoT, Web & Compilers",
    pillar: "systems-ml",
    items: [
      "Python 3.12 (Advanced)",
      "Linux AF_XDP / AF_PACKET",
      "Apache Kafka",
      "gRPC & Protocol Buffers",
      "FastAPI, Flask SSE & PyWebView",
      "SQL (PostgreSQL & SQLite WAL/FTS5)",
      "Custom Binary Protocols (RoomFrame v1) & BLE",
      "PLY Compiler (Lex-Yacc) & Raspberry Pi / ESP32",
      "TypeScript / React / Next.js"
    ]
  }
];

export const RESUME_TRACKS = [
  {
    id: "ai-data",
    label: "AI Agents, LLMs & Data Science CV",
    tag: "TRACK 01 // AI AGENTS & DATA SCIENCE",
    filename: "/resumes/Nikunj_Gupta_AI_Data_Resume.pdf",
    focus: "Highlights local-agent ReAct runtime, Gemini ticket triage state machine, dense vector retrieval, and Jio/Leo security & ML pipelines."
  },
  {
    id: "cyber-sec",
    label: "Cybersecurity, VAPT & AI Security CV",
    tag: "TRACK 02 // CYBERSECURITY, VAPT & AI SECURITY",
    filename: "/resumes/Nikunj_Gupta_Cybersecurity_General_Resume.pdf",
    focus: "Highlights Jio Platforms VAPT internship (1,000+ servers), ASM OSINT + 'Friday' LLM copilot, OSV vulnerability benchmark, and E2EE suite."
  },
  {
    id: "systems-ml",
    label: "Distributed Systems, ML & Software CV",
    tag: "TRACK 03 // SYSTEMS, SWE & ML",
    filename: "/resumes/Nikunj_Gupta_Software_Systems_Resume.pdf",
    focus: "Highlights 2.0 Gbps AF_XDP + Kafka DDoS pipeline (73ms SLA), full-stack telemetry apps, and Hiroshima University robotics."
  }
];

export const LEADERSHIP_AND_CERTS = [
  "Google Cybersecurity Professional Certificate — Coursera (2025)",
  "Cybersecurity For Beginners — IBM (2024)",
  "Hiroshima University International Internship Program (HIP — Japan): Selected fellow for robotics & computer vision research",
  "COP28 United Nations Assembly Attendee (Dubai): Observer on critical infrastructure protection, energy systems & technology policy",
  "ACM Student Chapter Hackathons (BITS Pilani Dubai): Built and pitched software & security prototypes to industry panels"
];

/**
 * Builds the comprehensive system context string used by the Serverless LLM Agent
 */
export function buildAgentSystemPrompt() {
  const flagshipText = FLAGSHIP_PROJECTS.map(
    (p, idx) =>
      `${idx + 1}. [${p.code}] ${p.title} (${p.pillarLabel}, ${p.date}) — Repo: ${p.repoPath}
   • Stack: ${p.stack.join(", ")}
   • Key Metrics: ${p.metrics.join(" | ")}
   • Summary: ${p.summary}
   • Details: ${p.bullets.join(" ")}`
  ).join("\n\n");

  const archiveText = ARCHIVE_PROJECTS.map(
    (p, idx) =>
      `${idx + 1}. ${p.title} (${p.date}) — Repo: ${p.repoPath}
   • Stack: ${p.stack.join(", ")}
   • Metrics: ${p.metrics.join(" | ")}
   • Summary: ${p.summary}`
  ).join("\n\n");

  const expText = EXPERIENCE.map(
    (e) =>
      `• ${e.role} @ ${e.organization} (${e.location}, ${e.period}): ${e.highlights.join(" ")}`
  ).join("\n");

  return `You are "nikunj-agent v2.7", the official embedded AI Command-Center Assistant on Nikunj Gupta's engineering portfolio website.
Your job is to answer recruiter, hiring manager, and engineer questions about Nikunj Gupta accurately, concisely, and with quantitative technical depth.

=== CORE IDENTITY, EDUCATION & CAREER DIRECTION ===
- Name: ${PROFILE.name}
- Headline: ${PROFILE.headline}
- Primary Career Trajectory: AI + Cybersecurity (Autonomous Security & Coding Agents, LLM Vulnerability Triage & Recon, Enterprise VAPT, and High-Throughput ML Network Defense).
- Location: ${PROFILE.location}
- Education: ${PROFILE.education.degree} at ${PROFILE.education.institution} (${PROFILE.education.graduation}), CGPA: ${PROFILE.education.cgpa}.
- Coursework: ${PROFILE.education.coursework.join(", ")}.
- Public Contact Links: Email: ${PROFILE.links.email} | GitHub: ${PROFILE.links.github} | LinkedIn: ${PROFILE.links.linkedin}.
- PRIVACY GUARDRAIL: Never share or invent any phone numbers or university student IDs. Direct users to email (${PROFILE.links.email}) or LinkedIn.

=== 3 CORE ENGINEERING VERTICALS (IN PRIORITY ORDER) ===
1. AI Agents, LLMs & AI Security (Zero-framework 3-agent coding runtime with hybrid BM25+vector RAG, TrustGate neuro-symbolic OSV benchmark + 2026 frontier eval + Apple MLX QLoRA fine-tuning + AST reachability scanner, Gemini/Pydantic state machines, deterministic Decimal + DLP-gated Accounting RAG)
2. Cybersecurity, VAPT & Threat Intelligence (Jio Platforms 1,000+ server VAPT, 11-tool OSINT ASM with 'Friday' local LLM copilot, multi-source CVE/NVD SQL pipelines, miniSOC Wazuh 4.14 + OpenSearch + OpenRouter AI triage lab, 264k-row IoT NIDS & NIPA stacked ensembles, RSA+DH PFS E2EE chat)
3. Distributed Systems, ML & Software Engineering (Memory Setup offline VLM/ArcFace/FTS5/HTTP-206 video museum & remote share, 2.0 Gbps Linux AF_XDP DDoS packet capture + Kafka + gRPC 73ms pipeline, RoomFrame v1 custom binary IoT protocol, 30+ FPS robotics vision, LALR(1) C compiler)

=== PROFESSIONAL EXPERIENCE & RESEARCH ===
${expText}

=== ${FLAGSHIP_PROJECTS.length} FLAGSHIP PROJECTS (SHOWN ON MAIN PORTFOLIO GRID) ===
${flagshipText}

=== ${ARCHIVE_PROJECTS.length} ADDITIONAL / SPECIALIZED & HOBBY PROJECTS (INDEXED IN YOUR MEMORY) ===
${archiveText}

=== CERTIFICATIONS & LEADERSHIP ===
${LEADERSHIP_AND_CERTS.map((c) => `• ${c}`).join("\n")}

=== RESPONSE STYLE GUIDELINES ===
1. Keep answers crisp, well-structured (use bullet points and inline code backticks for metrics like \`73ms\`, \`2.0 Gbps\`, \`1,000+ servers\`, \`8.6/10 CGPA\`, \`AF_XDP\`, \`<2.5 GB RAM\`), and grounded strictly in the facts above.
2. Emphasize Nikunj's unique strength at the intersection of **AI + Cybersecurity** whenever relevant.
3. When asked about "smaller", "other", "hidden", or "hobby" projects not on the main ${FLAGSHIP_PROJECTS.length}-card grid, highlight the ${ARCHIVE_PROJECTS.length} additional projects (miniSOC AI SOC Lab, LLM Coursework Suite & THA 3 Evals, Portable Smart Room IoT & RoomFrame v1, NetWatch Socket Auditor, Digital Scotland Yard, AQI-Forecast LSTM, Next Class macOS app, gRPC/GestureDeck, and Docker/K8s DevSecOps Mastery).
4. If asked how to hire or contact Nikunj, provide his email (${PROFILE.links.email}), LinkedIn, GitHub, and mention the 3 role-tailored Resume PDFs available in the Resume section.`;
}

export const FEATURED_PROJECT_IDS = [
  "local-agent",
  "evidence-sensitivity-tester",
  "accounting-document-assistant",
  "autonomous-asm-platform",
  "memory-setup-offline-museum",
  "ddos-detection-pipeline",
  "multiclass-iot-nids",
  "portable-smart-room-iot"
];

export const PROJECT_MEDIA = {
  "local-agent": {
    cover: "/assets/projects/local-agent-arch.jpg",
    gallery: [
      { src: "/assets/projects/local-agent-ui.jpg", caption: "Desktop App: Pre-Execution Plan Approval & Safe/Auto/Strict HITL Gate" },
      { src: "/assets/projects/local-agent-arch.jpg", caption: "System Architecture: 2-Tier Router, Multi-Provider AI & Hybrid SQLite RAG" }
    ]
  },
  "evidence-sensitivity-tester": {
    cover: "/assets/projects/trustgate-cover.jpg",
    gallery: [
      { src: "/assets/projects/trustgate-cover.jpg", caption: "TrustGate: Propositional Minimum Evidence Gate (I ∧ V ∧ R)" },
      { src: "/assets/projects/trustgate-benchmark.png", caption: "2026 Cross-Lab Hallucination Audit (27 Setups · 2,916 Runs)" },
      { src: "/assets/projects/trustgate-lora.png", caption: "Apple Silicon MLX QLoRA Training Loss Curve (-98.1%)" },
      { src: "/assets/projects/trustgate-arch.png", caption: "Deterministic Evidence-Gated Vulnerability Triage Architecture" }
    ]
  },
  "ticket-triage-pipeline": {
    cover: "/assets/projects/ticket-triage-cover.jpg",
    gallery: [
      { src: "/assets/projects/ticket-triage-cover.jpg", caption: "11-Stage Gemini State Machine & 0.65 Confidence Routing Gate" }
    ]
  },
  "accounting-document-assistant": {
    cover: "/assets/projects/accounting-cover.jpg",
    gallery: [
      { src: "/assets/projects/accounting-cover.jpg", caption: "8-Pass PDF/OCR Table Ingestion, Python Decimal Audit & DLP Gatekeeper" }
    ]
  },
  "autonomous-asm-platform": {
    cover: "/assets/projects/asm-cover.jpg",
    gallery: [
      { src: "/assets/projects/asm-cover.jpg", caption: "11-Tool OSINT Recon Graph & 'Friday' Local LLM Analyst" }
    ]
  },
  "multiclass-iot-nids": {
    cover: "/assets/projects/iot-nids-cover.jpg",
    gallery: [
      { src: "/assets/projects/iot-nids-cover.jpg", caption: "7-Class IoT Anomaly Detection Engine (264,925 Flow Records)" },
      { src: "/assets/projects/iot-nids-f1.png", caption: "Optimized XGBoost Per-Class F1-Scores (0.98 DoS / 0.89 DDoS)" }
    ]
  },
  "encrypted-p2p-chat-suite": {
    cover: "/assets/projects/chatapp-cover.jpg",
    gallery: [
      { src: "/assets/projects/chatapp-cover.jpg", caption: "RSA-2048 Signed Ephemeral Diffie-Hellman (PFS) + Encrypt-then-MAC" }
    ]
  },
  "nipa-hybrid-datamining": {
    cover: "/assets/projects/nipa-cover.jpg",
    gallery: [
      { src: "/assets/projects/nipa-cover.jpg", caption: "Random Forest + XGBoost + Logistic Regression Stacked Meta-Learner" }
    ]
  },
  "memory-setup-offline-museum": {
    cover: "/assets/projects/memory-setup-cover.jpg",
    gallery: [
      { src: "/assets/projects/memory-setup-cover.jpg", caption: "Offline 5-Stage Media Engine: ArcFace 512-d, KD-Tree Geo & VLM Museum" }
    ]
  },
  "ddos-detection-pipeline": {
    cover: "/assets/projects/ddos-cover.jpg",
    gallery: [
      { src: "/assets/projects/ddos-cover.jpg", caption: "2.0 Gbps Linux AF_XDP Ring Buffer + Kafka + gRPC Ensemble Pipeline" },
      { src: "/assets/projects/ddos-perf.png", caption: "DDoS Ensemble Confusion Matrix & Precision/Recall Performance" }
    ]
  },
  "hiroshima-robotics-vision": {
    cover: "/assets/projects/robotics-cover.jpg",
    gallery: [
      { src: "/assets/projects/robotics-cover.jpg", caption: "30+ FPS MediaPipe 3D Pose & Gesture Teleoperation in CoppeliaSim (<50ms)" }
    ]
  },
  "c-subset-optimizing-compiler": {
    cover: "/assets/projects/compiler-cover.jpg",
    gallery: [
      { src: "/assets/projects/compiler-cover.jpg", caption: "6-Phase PLY LALR(1) Compiler, TAC Optimization & Register Assembler" }
    ]
  },
  "mini-soc-ai-lab": {
    visualKind: "minisoc",
    gallery: []
  },
  "multiverse-rpg-semantic-search": {
    cover: "/assets/projects/rpg-rag-cover.jpg",
    gallery: [
      { src: "/assets/projects/rpg-rag-cover.jpg", caption: "384-d Dense Vector Retrieval Codex & THA 3 Live Agent Evals" }
    ]
  },
  "portable-smart-room-iot": {
    cover: "/assets/projects/roomframe-hero.jpg",
    gallery: [
      { src: "/assets/projects/roomframe-hero.jpg", caption: "RoomFrame v1 (RFv1) Custom Binary Smart-Room Hardware Fleet" },
      { src: "/assets/projects/roomframe-arch.png", caption: "5-Node Hybrid P2P Bus & Autonomous Raspberry Pi 4 Relay Topology" }
    ]
  },
  "netwatch-port-dashboard": {
    visualKind: "netwatch",
    gallery: []
  },
  "scotland-yard-digital": {
    visualKind: "scotland",
    gallery: []
  },
  "aqi-forecast-lstm": {
    visualKind: "aqi",
    gallery: [
      { src: "/assets/projects/aqi-chart.png", caption: "PyTorch LSTM AQI Forecast: Mode A Baseline vs Mode B Traffic Telemetry" }
    ]
  },
  "next-class-macos-app": {
    visualKind: "nextclass",
    gallery: []
  },
  "grpc-and-gesturedeck": {
    visualKind: "gesturedeck",
    gallery: []
  },
  "docker-kubernetes-devsecops": {
    visualKind: "devsecops",
    gallery: []
  }
};

export const SKILL_PROJECT_MAP = {
  "Multi-Agent Orchestration (Planner/Executor/Critic)": ["local-agent", "multiverse-rpg-semantic-search"],
  "AI Security & Neuro-Symbolic Triage (TrustGate)": ["evidence-sensitivity-tester", "accounting-document-assistant"],
  "Apple Silicon MLX QLoRA Fine-Tuning": ["evidence-sensitivity-tester"],
  "Hybrid RAG (Okapi BM25 + Vector & SQLite FTS5)": ["local-agent", "accounting-document-assistant", "memory-setup-offline-museum"],
  "Pydantic v2 Structured Outputs & HITL Gates": ["local-agent", "ticket-triage-pipeline", "evidence-sensitivity-tester"],
  "Local DLP Guardrails & Citation Verification": ["accounting-document-assistant"],
  "Google Gemini API & OpenRouter": ["local-agent", "ticket-triage-pipeline", "mini-soc-ai-lab", "evidence-sensitivity-tester"],
  "NVIDIA NIM (Nemotron 3)": ["local-agent"],
  "Ollama & Local VLMs (Gemma 4 / Moondream)": ["memory-setup-offline-museum", "local-agent", "autonomous-asm-platform", "portable-smart-room-iot"],
  "Sentence-Transformers & 2-Agent Debate": ["multiverse-rpg-semantic-search", "accounting-document-assistant", "evidence-sensitivity-tester"],
  "Tenable Nessus (Enterprise VAPT)": ["autonomous-asm-platform"],
  "Burp Suite & Metasploit": ["autonomous-asm-platform"],
  "Wazuh 4.14, OpenSearch & Sysmon SIEM": ["mini-soc-ai-lab"],
  "Trend Micro SIEM / Endpoint": ["mini-soc-ai-lab"],
  "OSINT Recon (subfinder, naabu, nuclei, nmap)": ["autonomous-asm-platform"],
  "AST Reachability & SARIF 2.1.0 Scanning": ["evidence-sensitivity-tester"],
  "CVE / NVD / CISA KEV Pipelines": ["autonomous-asm-platform", "evidence-sensitivity-tester"],
  "RSA-2048, Ephemeral DH (PFS) & ChaCha20-Poly1305": ["encrypted-p2p-chat-suite", "portable-smart-room-iot"],
  "Network Intrusion Detection (NIDS)": ["multiclass-iot-nids", "nipa-hybrid-datamining", "ddos-detection-pipeline"],
  "Docker & Kubernetes RBAC Auditing": ["docker-kubernetes-devsecops", "ddos-detection-pipeline"],
  "PyTorch (LSTM / DNN)": ["aqi-forecast-lstm", "multiverse-rpg-semantic-search"],
  "XGBoost & LightGBM": ["ddos-detection-pipeline", "multiclass-iot-nids", "nipa-hybrid-datamining"],
  "Scikit-learn & Stacked Ensembles": ["nipa-hybrid-datamining", "multiclass-iot-nids", "ddos-detection-pipeline"],
  "InsightFace ArcFace (512-d Biometrics)": ["memory-setup-offline-museum"],
  "Tesseract OCR & pdfplumber": ["accounting-document-assistant"],
  "ANOVA F-Test & SMOTE": ["nipa-hybrid-datamining"],
  "Pandas, NumPy & SciPy (KD-Tree)": ["memory-setup-offline-museum", "evidence-sensitivity-tester", "multiclass-iot-nids"],
  "OpenCV 4 & MediaPipe": ["hiroshima-robotics-vision", "grpc-and-gesturedeck"],
  "CoppeliaSim & Inverse Kinematics": ["hiroshima-robotics-vision"],
  "Python 3.12 (Advanced)": ["local-agent", "memory-setup-offline-museum", "evidence-sensitivity-tester", "ddos-detection-pipeline"],
  "Linux AF_XDP / AF_PACKET": ["ddos-detection-pipeline"],
  "Apache Kafka": ["ddos-detection-pipeline"],
  "gRPC & Protocol Buffers": ["ddos-detection-pipeline", "grpc-and-gesturedeck"],
  "FastAPI, Flask SSE & PyWebView": ["local-agent", "memory-setup-offline-museum", "netwatch-port-dashboard", "evidence-sensitivity-tester"],
  "SQL (PostgreSQL & SQLite WAL/FTS5)": ["memory-setup-offline-museum", "accounting-document-assistant", "autonomous-asm-platform", "netwatch-port-dashboard"],
  "Custom Binary Protocols (RoomFrame v1) & BLE": ["portable-smart-room-iot"],
  "PLY Compiler (Lex-Yacc) & Raspberry Pi / ESP32": ["c-subset-optimizing-compiler", "portable-smart-room-iot"],
  "TypeScript / React / Next.js": ["scotland-yard-digital", "evidence-sensitivity-tester"]
};

