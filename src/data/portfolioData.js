/**
 * Master Portfolio Data & Knowledge Base for Nikunj Gupta
 * Strictly sanitized: No phone numbers or student IDs are included.
 */

export const PROFILE = {
  name: "Nikunj Gupta",
  handle: "nikunj@command-center",
  headline: "AI Agents & LLMs • Distributed Systems & ML • Cybersecurity & VAPT",
  subheadline:
    "Final-year Computer Science & Data Science engineer at BITS Pilani Dubai (CGPA: 8.6/10) building autonomous tool-use AI agents, sub-100ms distributed ML telemetry pipelines, and enterprise security automation.",
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
      "Compiler Construction",
      "Operating Systems",
      "Computer Networks",
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
    { label: "CGPA (BITS Pilani)", value: "8.6 / 10", detail: "CS Major + Data Science Minor" },
    { label: "Packet Capture Line-Rate", value: "2.0 Gbps", detail: "Linux AF_XDP zero-copy kernel bypass" },
    { label: "DDoS Alert Latency", value: "73 ms", detail: "Kafka + gRPC + Soft-Voting Ensemble (99.2% acc)" },
    { label: "Enterprise VAPT Scope", value: "1,000+ Servers", detail: "Automated Nessus & container audits at Jio" }
  ]
};

export const PILLARS = [
  {
    id: "ai-data",
    cmd: "--pillar=ai-data",
    shortLabel: "AI Agents & Data Science",
    title: "AI Agents, LLMs & Data Science",
    accent: "cyan",
    badge: "PILLAR 01 // AGENTIC AI",
    summary:
      "Zero-framework ReAct coding agents, deterministic LLM evaluation harnesses, guardrailed enterprise triage state machines, and pure linear-algebra dense vector retrieval.",
    highlights: [
      "Scratchpad context masking (>80% window eviction) for 8B local & 550B NIM models",
      "11-stage logged Gemini state machine with 2-tier Pydantic v2 self-healing retry",
      "Propositional logic benchmark (I ∧ V ∧ R) across 720 OSV vulnerability trials",
      "384-d dense vector semantic retrieval & negation-blindness geometry analysis"
    ]
  },
  {
    id: "systems-ml",
    cmd: "--pillar=systems-ml",
    shortLabel: "Systems, ML & Robotics",
    title: "Software, Distributed Systems & ML Engineering",
    accent: "emerald",
    badge: "PILLAR 02 // SYSTEMS & ML",
    summary:
      "High-throughput Linux kernel-bypass packet engines, Apache Kafka streaming pipelines, multi-phase optimizing C compilers, and real-time computer vision robotic teleoperation.",
    highlights: [
      "2.0 Gbps AF_XDP packet capture + Kafka + gRPC pipeline with 73ms median SLA",
      "30+ FPS MediaPipe 3D pose tracking driving CoppeliaSim inverse kinematics (<50ms)",
      "End-to-end LALR(1) C-subset compiler with TAC quadruples, constant folding & DCE",
      "Low-overhead FastAPI + SQLite telemetry daemons (<2% CPU, <50MB RAM)"
    ]
  },
  {
    id: "cyber-sec",
    cmd: "--pillar=cyber-sec",
    shortLabel: "Cybersecurity & VAPT",
    title: "Cybersecurity, VAPT & Cryptographic Systems",
    accent: "amber",
    badge: "PILLAR 03 // SECURITY & VAPT",
    summary:
      "Enterprise VAPT across 1,000+ production servers, autonomous OSINT attack-surface orchestration with local LLM analysts, multi-class IoT NIDS, and Perfect Forward Secrecy E2EE.",
    highlights: [
      "Automated Nessus compliance & Burp/Metasploit API pentesting at Jio Platforms",
      "11-tool OSINT recon orchestrator with HTML5 Canvas physics map & 'Friday' LLM copilot",
      "264,925-flow CIC-IoT-DIAD2024 XGBoost NIDS (0.98 DoS / 0.89 DDoS F1, ~50ms CPU)",
      "Signed ephemeral Diffie-Hellman (RSA-2048 + AES-256-CBC + HMAC-SHA256) P2P suite"
    ]
  }
];

/**
 * 9 Flagship Projects displayed on the main Command-Center Grid (3 per Pillar)
 */
export const FLAGSHIP_PROJECTS = [
  // ================= PILLAR 1: AI AGENTS, LLMs & DATA SCIENCE =================
  {
    id: "local-agent",
    pillar: "ai-data",
    pillarLabel: "AI Agents & LLMs",
    code: "SYS-01",
    title: "Autonomous Local AI Coding Agent & Desktop Runtime",
    subtitle: "Zero-framework Python ReAct engine, macOS desktop GUI, 2-tier intent router & SQLite memory RAG",
    date: "Jul – Oct 2026",
    repoPath: "local-agent/",
    metrics: ["Zero Frameworks", "80% Context Eviction", "Multi-Provider + Local RAG", "2-Tier Intent Router"],
    stack: ["Python 3.11+", "Google Gemini 2.5", "NVIDIA NIM (Nemotron 3 Ultra)", "Ollama (Gemma 4)", "Flask SSE", "SQLite Memory RAG"],
    summary:
      "Built an autonomous coding agent and macOS desktop app from scratch in pure Python (no LangChain/AutoGen) featuring a 2-tier prompt intent classifier (0ms `DIRECT` fast-path vs. 20-step `PLAN` DAG decomposition), persistent SQLite long-term memory RAG, sandboxed ReAct tool loops, and a temperature-0.1 satisfaction evaluator.",
    bullets: [
      "Engineered a 2-Tier `PromptClassifier` (`DIRECT` vs. `PLAN`) so conversational/math prompts bypass heavy DAG decomposition while complex engineering tasks trigger hierarchical planning and `ScratchpadManager` (>80% context window eviction).",
      "Integrated multi-provider streaming (Google Gemini 2.5, NVIDIA NIM `nemotron-3-ultra-550b-a55b` on vLLM V2 with fast-fail 4xx/410 diagnostics, Ollama `gemma4-e4b-64k`, and LM Studio) plus an in-process SQLite semantic/keyword Long-Term Memory store.",
      "Built a macOS Antigravity/Codex-inspired desktop GUI over Server-Sent Events (SSE) with Safe/Auto/Strict human-in-the-loop `[Authorize]` / `[Reject]` tool cards, `.bak` file rollbacks, and live execution interrupts."
    ],
    architecture: `┌──────────────────────────────────────────────────────────────────────────┐
│ USER PROMPT ──► 2-TIER INTENT CLASSIFIER (core/classifier.py)            │
│ ├── DIRECT Route (0ms Regex / Fast-Path) ──► Single-Turn Streaming Reply │
│ └── PLAN Route (Complex Engineering)     ──► Hierarchical DAG Planner    │
└─────────────────────────────────────┬────────────────────────────────────┘
                                      ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ PERSISTENT SCRATCHPAD + LONG-TERM SQLITE MEMORY RAG (core/memory/)       │
│ • Dynamic Context Masking: Exposes completed + CURRENT sub-task only     │
│ • Auto-injects cross-session project decisions & architectural notes     │
└─────────────────────────────────────┬────────────────────────────────────┘
                                      ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ AUTONOMOUS ReAct STREAMING LOOP (Gemini 2.5 / NIM Nemotron 3 / Ollama)   │
│ • Real-time reasoning stream extraction + maybe_evict() at >80% context  │
│ • Human-in-the-Loop Safe/Auto/Strict gates: [Authorize] / [Reject] UI    │
└─────────────────────────────────────┬────────────────────────────────────┘
                                      ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ DETERMINISTIC SATISFACTION EVALUATOR (temp = 0.1, up to 4 retries)       │
└──────────────────────────────────────────────────────────────────────────┘`
  },
  {
    id: "ticket-triage-pipeline",
    pillar: "ai-data",
    pillarLabel: "AI Agents & LLMs",
    code: "SYS-02",
    title: "AI Support Ticket Triage & Safe Reply Pipeline",
    subtitle: "11-stage state machine with dynamic schema ingestion, self-healing parser & safety guardrails",
    date: "Sep 2026",
    repoPath: "Deriv-Interview/",
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
    id: "evidence-sensitivity-tester",
    pillar: "ai-data",
    pillarLabel: "AI Agents & Security Eval",
    code: "SYS-03",
    title: "Evidence-Removal Sensitivity Tester (LLM Benchmark)",
    subtitle: "Propositional logic evaluation benchmark testing LLM vulnerability triage under missing evidence",
    date: "Sep 2026",
    repoPath: "GENAI PROJECT/",
    metrics: ["720 Evaluation Trials", "6 Perturbation Conditions", "Zero False Positives (Gate)", "10k Bootstrap CI"],
    stack: ["Python 3.11+", "Pydantic v2", "Ollama (Gemma 3 / Qwen 3)", "OSV API", "SciPy", "NumPy", "Pytest"],
    summary:
      "Scientific evaluation harness testing whether LLMs in vulnerability-triage pipelines erroneously preserve `AFFECTED_CONFIRMED` verdicts when decisive applicability facts are ablated, paired with an external deterministic `MinimumEvidenceGate`.",
    bullets: [
      "Formalized vulnerability applicability as a strict conjunction of three indispensable propositions: Package Identity (I), Installed Version (V), and Affected Range (R): Applicability ⟺ I ∧ V ∧ R.",
      "Synthesized counterfactually anonymized OSV advisories across PyPI, npm, and Maven to eliminate pretraining memorization across 6 controlled perturbation conditions (`FULL`, `REMOVE_DECISIVE`, `REMOVE_DISTRACTOR`, `DISCONFIRM`, `CONFLICT`, `PARAPHRASE_ORDER`).",
      "Engineered `MinimumEvidenceGate` to verify propositional proof sets prior to verdict emission, alongside 10,000 paired cluster bootstrap resamples and exact McNemar tests with Holm-Bonferroni corrections."
    ],
    architecture: `Real-World OSV Advisories (PyPI / npm / Maven)
       │
       ▼
[Counterfactual Cryptographic Alias Anonymizer] (Eliminates LLM Memorization)
       │
       ├──► 1. FULL (I ∧ V ∧ R + Distractors)     ──► Ground Truth: AFFECTED_CONFIRMED
       ├──► 2. REMOVE_DECISIVE (Ablate I, V, or R)──► Ground Truth: INSUFFICIENT_EVIDENCE
       ├──► 3. REMOVE_DISTRACTOR (Drop CVSS/Date) ──► Ground Truth: AFFECTED_CONFIRMED
       ├──► 4. DISCONFIRM (Safe Fixed Version)    ──► Ground Truth: NOT_AFFECTED_CONFIRMED
       ├──► 5. CONFLICT (Contradictory Versions)  ──► Ground Truth: CONFLICTING_EVIDENCE
       └──► 6. PARAPHRASE_ORDER (Surface Permute) ──► Ground Truth: AFFECTED_CONFIRMED
       │
       ▼
[Local LLM Inference (Gemma 3 / Qwen 3) + Pydantic v2 Schema]
       │
       ▼
[MinimumEvidenceGate: Verifies (I ∧ V ∧ R) ──► Guarantees 0% Unwarranted Persistence]`
  },

  // ================= PILLAR 2: SOFTWARE, DISTRIBUTED SYSTEMS & ML =================
  {
    id: "ddos-detection-pipeline",
    pillar: "systems-ml",
    pillarLabel: "Distributed Systems & ML",
    code: "SYS-04",
    title: "Distributed Real-Time DDoS Detection Pipeline",
    subtitle: "2.0 Gbps Linux AF_XDP zero-copy packet capture, Kafka streaming & 73ms ensemble inference",
    date: "Jun – Aug 2025",
    repoPath: "LTS-Files/",
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
    code: "SYS-05",
    title: "Vision-Guided Robotic Teleoperation & Pose Tracking",
    subtitle: "30+ FPS MediaPipe 3D pose/gesture estimation driving CoppeliaSim inverse kinematics (<50ms)",
    date: "Jul 2026",
    repoPath: "HU/",
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
    code: "SYS-06",
    title: "PLY-Based C-Subset Optimizing Compiler",
    subtitle: "Multi-phase compiler from Lexer & LALR(1) AST parser to TAC optimization & virtual assembly",
    date: "Feb – May 2026",
    repoPath: "CCP/",
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
  },

  // ================= PILLAR 3: CYBERSECURITY, VAPT & CRYPTOGRAPHY =================
  {
    id: "autonomous-asm-platform",
    pillar: "cyber-sec",
    pillarLabel: "Cybersecurity & AI Copilot",
    code: "SYS-07",
    title: "Autonomous Attack Surface Manager & 'Friday' AI Copilot",
    subtitle: "11-tool OSINT recon orchestrator, HTML5 Canvas physics graph, local LLM analyst & CVE SQL pipeline",
    date: "Jun 2026",
    repoPath: "asm-tool/ & CYBER_MultiTool/",
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
    pillarLabel: "Network Defense & ML",
    code: "SYS-08",
    title: "Multi-Class IoT Network Intrusion Detection System",
    subtitle: "7-class anomaly NIDS trained on 264,925 CIC-IoT-DIAD2024 flows with ~50ms CPU inference",
    date: "Sep – Dec 2025",
    repoPath: "ML-PROJECT/",
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
    pillarLabel: "Cryptography & Security",
    code: "SYS-09",
    title: "ChatApp: E2EE Peer-to-Peer Cryptographic Suite",
    subtitle: "Signed Ephemeral Diffie-Hellman (PFS), AES-256-CBC + HMAC-SHA256 & traffic-analysis padding",
    date: "Feb 2026",
    repoPath: "Message/",
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
  }
];

/**
 * 7 Additional Specialized & Hobby Projects
 * Indexed deeply in the AI Chatbot + accessible via the `ls ./archive` CLI drawer
 */
export const ARCHIVE_PROJECTS = [
  {
    id: "multiverse-rpg-semantic-search",
    pillar: "ai-data",
    title: "Multiverse RPG Codex Dense Vector Retrieval Engine",
    repoPath: "LLM PROJECTS/Assignment-1/",
    date: "Sep 2026",
    stack: ["Python 3.11+", "PyTorch", "Sentence-Transformers (all-MiniLM-L6-v2)", "NumPy", "Pandas", "Jupyter"],
    metrics: ["384-d Dense Vectors", "< 1 ms Cosine Ranking", "135 Curated Lore Items", "6 Query Archetypes"],
    summary:
      "End-to-end dense vector semantic retrieval system embedding 135 hand-annotated RPG items across 5 realms and 7 categories into 384-dimensional vectors using `all-MiniLM-L6-v2`. Implemented pure NumPy/PyTorch linear algebra cosine similarity ranking (>0.62 similarity on zero-keyword atmospheric queries) and authored a 22KB theoretical analysis on transformer pooling 'negation blindness' (`Bag-of-Embeddings`) proving why hybrid dense + BM25 + metadata filtering is essential."
  },
  {
    id: "scotland-yard-digital",
    pillar: "systems-ml",
    title: "Digital Scotland Yard (60 FPS Multiplayer Tabletop Engine)",
    repoPath: "Scotland yard/",
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
    date: "Feb – May 2026",
    stack: ["Python", "PyTorch (2-Layer LSTM)", "Streamlit", "HERE Traffic REST API", "Pandas", "NumPy"],
    metrics: ["24-Hour Sequence Window", "Live HERE jamFactor", "Mode A vs Mode B Eval", "Interactive Simulator"],
    summary:
      "Two-layer PyTorch LSTM neural network forecasting urban Air Quality Index (AQI) 24 hours ahead by combining historical pollution/weather time-series with real-time road congestion metrics (`jamFactor`) fetched from the HERE Traffic REST API, wrapped in an interactive Streamlit simulation dashboard."
  },
  {
    id: "netwatch-port-dashboard",
    pillar: "systems-ml",
    title: "NetWatch: Live System & Network Socket Telemetry Dashboard",
    repoPath: "port-dashboard/",
    date: "Jun 2026",
    stack: ["Python", "FastAPI", "SQLite", "Chart.js", "HTML5/CSS/JS", "psutil", "lsof"],
    metrics: ["< 2% CPU Overhead", "< 50 MB RAM", "72-Hour Rolling Cache", "PID-to-Socket Auditor"],
    summary:
      "Wireshark-inspired local network and socket diagnostic dashboard mapping active TCP/UDP connections to PIDs, process memory/CPU usage, and remote endpoints using `lsof`, `/proc/net`, and `psutil`, with an automated SQLite rolling 72-hour snapshot pruner."
  },
  {
    id: "nipa-hybrid-datamining",
    pillar: "cyber-sec",
    title: "Network Intrusion Pattern Analysis (NIPA) — Stacked Ensemble",
    repoPath: "DM-PROJECT/",
    date: "Feb – May 2026",
    stack: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "SMOTE (imbalanced-learn)", "ANOVA F-Test"],
    metrics: ["Top-30 ANOVA Features", "5-Fold Stacked Ensemble", "33 IoT Attack Types", "105 Physical Devices"],
    summary:
      "Hybrid stacked ensemble combining Random Forest (bagging) and XGBoost (boosting) with a Logistic Regression meta-learner on CICIoT2023. Uses ANOVA F-test feature selection (46 → 30 features) and training-split-only SMOTE oversampling to classify 33 IoT attack patterns across 8 categories without data leakage."
  },
  {
    id: "next-class-macos-app",
    pillar: "systems-ml",
    title: "Next Class: Desktop GUI & macOS Status Bar Timetable Companion",
    repoPath: "timetable-app/",
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
    date: "Jun – Jul 2026",
    stack: ["Python", "gRPC", "Protocol Buffers (Protobuf)", "MediaPipe", "OpenCV"],
    metrics: ["Protobuf Stubs (Port 50051)", "Real-Time Hand Landmarks", "Low-Latency IPC"],
    summary:
      "Two focused systems utilities: (1) a low-latency Python gRPC microservice using compiled `helloworld.proto` Protocol Buffer stubs on port 50051, and (2) `GestureDeck`, a real-time webcam hand-gesture recognition engine built with MediaPipe."
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
    id: "leo-technosoft",
    role: "Software & Machine Learning Intern",
    organization: "Leo Technosoft LLC",
    location: "Pune, India",
    period: "Jun 2025 – Aug 2025",
    pillar: "systems-ml",
    tag: "DISTRIBUTED SYSTEMS & ML // 73ms SLA",
    highlights: [
      "Architected a real-time distributed network threat detection pipeline using Linux AF_XDP (2.0 Gbps zero-copy capture), Apache Kafka, FastAPI, and gRPC, achieving a 73ms median alert latency (well below the 200ms SLA).",
      "Trained and deployed a soft-voting ensemble (XGBoost, Random Forest, LightGBM) on 180,000+ records with 99.2% accuracy and a 90% confidence threshold to suppress SOC false alarms.",
      "Built a 5-tuple stateful flow manager in Python with 300-second idle eviction, cutting memory footprint by 20% during 2.0 Gbps traffic spikes, plus a standalone Streamlit healthcare risk predictor with ROC-AUC diagnostics."
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
    category: "Generative AI, Agents & LLMs",
    pillar: "ai-data",
    items: [
      "Autonomous ReAct Agents",
      "Tool Calling & Sandboxing",
      "Context Window Masking",
      "Pydantic v2 Structured Outputs",
      "RAG & Dense Vector Search",
      "LLM Evaluation & Benchmarks",
      "Google Gemini API",
      "Ollama & Local LLMs",
      "NVIDIA NIM API",
      "Sentence-Transformers"
    ]
  },
  {
    category: "Distributed Systems, Web & Compilers",
    pillar: "systems-ml",
    items: [
      "Python 3.11+ (Advanced)",
      "Linux AF_XDP / AF_PACKET",
      "Apache Kafka",
      "gRPC & Protocol Buffers",
      "FastAPI & Flask",
      "Docker & Kubernetes",
      "PLY Compiler (Lex-Yacc)",
      "TypeScript / React / Next.js",
      "HTML5 Canvas & Chart.js",
      "Tkinter & macOS Rumps"
    ]
  },
  {
    category: "Machine Learning, DL & Computer Vision",
    pillar: "systems-ml",
    items: [
      "PyTorch (LSTM / DNN)",
      "XGBoost & LightGBM",
      "Scikit-learn & Ensembles",
      "Pandas, NumPy & SciPy",
      "ANOVA F-Test & SMOTE",
      "OpenCV 4 & MediaPipe",
      "CoppeliaSim & Inverse Kinematics",
      "Streamlit Dashboards",
      "SQL (PostgreSQL & SQLite)"
    ]
  },
  {
    category: "Cybersecurity, VAPT & Cryptography",
    pillar: "cyber-sec",
    items: [
      "Tenable Nessus (Enterprise VAPT)",
      "Burp Suite & Metasploit",
      "Trend Micro Endpoint Telemetry",
      "OSINT (subfinder, naabu, nuclei, nmap)",
      "RSA-2048 & Ephemeral Diffie-Hellman (PFS)",
      "AES-256-CBC & HMAC-SHA256",
      "Network Intrusion Detection (NIDS)",
      "Container & RBAC Auditing"
    ]
  }
];

export const RESUME_TRACKS = [
  {
    id: "ai-data",
    label: "AI Agents, LLMs & Data Science CV",
    tag: "RECOMMENDED FOR AI / DATA ROLES",
    filename: "/resumes/Nikunj_Gupta_AI_Data_Resume.pdf",
    focus: "Highlights local-agent ReAct runtime, Gemini ticket triage state machine, dense vector retrieval, and ETL/SQL pipelines."
  },
  {
    id: "systems-ml",
    label: "Software, Distributed Systems & ML CV",
    tag: "RECOMMENDED FOR SWE / SYSTEMS / ML",
    filename: "/resumes/Nikunj_Gupta_Software_Systems_Resume.pdf",
    focus: "Highlights 2.0 Gbps AF_XDP + Kafka DDoS pipeline (73ms SLA), full-stack telemetry apps, and Hiroshima University robotics."
  },
  {
    id: "cyber-sec",
    label: "Cybersecurity, VAPT & General Engineering CV",
    tag: "RECOMMENDED FOR SECURITY / GENERAL",
    filename: "/resumes/Nikunj_Gupta_Cybersecurity_General_Resume.pdf",
    focus: "Highlights Jio Platforms VAPT internship (1,000+ servers), ASM OSINT + LLM copilot, E2EE chat suite, and C compiler."
  }
];

export const LEADERSHIP_AND_CERTS = [
  "Hiroshima University International Internship Program (HIP — Japan): Selected fellow for robotics & computer vision research",
  "Google Cybersecurity Professional Certificate — Coursera (2025)",
  "Cybersecurity For Beginners — IBM (2024)",
  "COP28 United Nations Assembly Attendee (Dubai): Observer on global sustainability, energy systems & technology policy",
  "ACM Student Chapter Hackathons (BITS Pilani Dubai): Built and pitched software prototypes to industry panels"
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

  return `You are "nikunj-agent v2.6", the official embedded AI Command-Center Assistant on Nikunj Gupta's engineering portfolio website.
Your job is to answer recruiter, hiring manager, and engineer questions about Nikunj Gupta accurately, concisely, and with quantitative technical depth.

=== CORE IDENTITY & EDUCATION ===
- Name: ${PROFILE.name}
- Headline: ${PROFILE.headline}
- Location: ${PROFILE.location}
- Education: ${PROFILE.education.degree} at ${PROFILE.education.institution} (${PROFILE.education.graduation}), CGPA: ${PROFILE.education.cgpa}.
- Coursework: ${PROFILE.education.coursework.join(", ")}.
- Public Contact Links: Email: ${PROFILE.links.email} | GitHub: ${PROFILE.links.github} | LinkedIn: ${PROFILE.links.linkedin}.
- PRIVACY GUARDRAIL: Never share or invent any phone numbers or university student IDs. Direct users to email (${PROFILE.links.email}) or LinkedIn.

=== EQUAL 3-PILLAR POSITIONING ===
Nikunj's engineering work is evenly split across three core pillars:
1. AI Agents, LLMs & Data Science (Autonomous ReAct agents, Gemini/Pydantic state machines, LLM vulnerability benchmarks, dense vector RAG)
2. Software, Distributed Systems & ML Engineering (2.0 Gbps Linux AF_XDP packet capture, Kafka + gRPC 73ms pipelines, LALR(1) C compiler, 30+ FPS robotics vision)
3. Cybersecurity, VAPT & Cryptography (Jio Platforms 1,000+ server VAPT, 11-tool OSINT ASM with local LLM copilot, 264k-row IoT NIDS, RSA+DH PFS E2EE chat)

=== PROFESSIONAL EXPERIENCE & RESEARCH ===
${expText}

=== 9 FLAGSHIP PROJECTS (SHOWN ON MAIN PORTFOLIO GRID) ===
${flagshipText}

=== 7 ADDITIONAL / SPECIALIZED & HOBBY PROJECTS (INDEXED IN YOUR MEMORY) ===
${archiveText}

=== CERTIFICATIONS & LEADERSHIP ===
${LEADERSHIP_AND_CERTS.map((c) => `• ${c}`).join("\n")}

=== RESPONSE STYLE GUIDELINES ===
1. Keep answers crisp, well-structured (use bullet points and inline code backticks for metrics like \`73ms\`, \`2.0 Gbps\`, \`8.6/10 CGPA\`, \`AF_XDP\`), and grounded strictly in the facts above.
2. When asked about "smaller", "other", "hidden", or "hobby" projects not on the main 9-card grid, highlight the 7 additional projects (such as Digital Scotland Yard, Multiverse RPG Semantic Search, AQI-Forecast LSTM, NetWatch, Next Class macOS app, NIPA, and gRPC/GestureDeck).
3. If asked how to hire or contact Nikunj, provide his email (${PROFILE.links.email}), LinkedIn, GitHub, and mention the 3 role-tailored Resume PDFs available in the Resume section.`;
}
