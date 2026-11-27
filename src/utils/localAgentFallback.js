import {
  PROFILE,
  PILLARS,
  FLAGSHIP_PROJECTS,
  ARCHIVE_PROJECTS,
  EXPERIENCE,
  SKILL_GROUPS,
  RESUME_TRACKS,
  LEADERSHIP_AND_CERTS
} from "../data/portfolioData.js";

/**
 * Deterministic Local Knowledge-Base & CLI Synthesis Engine for nikunj-agent.
 * Used for instant CLI slash commands AND as a zero-downtime fallback when
 * no external LLM API key is configured or rate limits are encountered.
 */
export function generateLocalAgentResponse(rawInput) {
  const input = (rawInput || "").trim();
  const q = input.toLowerCase();

  if (!q) {
    return "Type a question about **Nikunj Gupta** (e.g., *\"How does Nikunj combine AI and Cybersecurity?\"* or *\"Tell me about his smaller/hobby projects\"*), or run `/help` for terminal commands.";
  }

  // 1. Direct CLI / Slash commands
  if (q === "/help" || q === "help") {
    return [
      "### `nikunj-agent v2.7` — Command Reference",
      "- `/whoami` — Core **AI + Cybersecurity** profile, 3 verticals (`01. AI Agents`, `02. Cybersecurity & VAPT`, `03. Distributed Systems & ML`) & BITS Pilani education (`8.6 CGPA`)",
      `- \`/projects\` — Summary of the **${FLAGSHIP_PROJECTS.length} Flagship Engineering Systems** across all 3 verticals`,
      `- \`/archive\` — Inspect the **${ARCHIVE_PROJECTS.length} Additional & Hobby Projects** (\`miniSOC AI Lab\`, \`LLM Coursework & THA 3\`, \`RoomFrame v1 IoT\`, \`NetWatch\`, \`Scotland Yard\`, \`AQI-Forecast\`, \`Next Class\`, \`gRPC/GestureDeck\`, \`Docker/K8s DevSecOps\`)`,
      "- `/experience` — Internships at **Jio Platforms (VAPT)**, **Leo Technosoft (Threat ML)**, **Hiroshima University (Japan)** & **BITS TAships**",
      "- `/skills` — Full technical stack grouped by domain",
      "- `/resumes` — Direct links to download the 3 privacy-sanitized Resume PDFs",
      "- `/contact` — Email, GitHub, LinkedIn & availability",
      "- `/clear` — Clear terminal transcript",
      "",
      "*Or ask any free-form natural language question!*"
    ].join("\n");
  }

  // AI + Cybersecurity specific query or general profile
  if (
    q === "/whoami" ||
    q === "whoami" ||
    q.includes("who is nikunj") ||
    q.includes("ai and cybersecurity") ||
    q.includes("ai + cybersecurity") ||
    q.includes("summarize") ||
    q.includes("three pillars") ||
    q.includes("verticals") ||
    q.includes("about nikunj")
  ) {
    return [
      `### ${PROFILE.name} — ${PROFILE.headline}`,
      `${PROFILE.subheadline}`,
      "",
      "**Core Focus: AI + Cybersecurity & Systems Engineering (3 Verticals in Priority Order):**",
      ...PILLARS.map((p, idx) => `${idx + 1}. **${p.title}**: ${p.summary}`),
      "",
      "**Key AI + Cybersecurity Highlights:**",
      "- **Jio Platforms VAPT Internship:** Automated vulnerability assessments across `1,000+` enterprise servers (Nessus), Trend Micro SIEM analysis, Burp/Metasploit API pentesting, and Docker/K8s RBAC audits.",
      "- **TrustGate (`GENAI PROJECT`):** Neuro-symbolic OSV vulnerability triage benchmark ($I \\land V \\land R$) across `864` trials & `7` 2026 frontier models, local Apple MLX `TrustGate-3B-LoRA` (`0.0%` un-gated UPR, `100.0%` CDR), 2-agent debate, AST reachability scanner (`1,475` files), Web Studio & VS Code extension.",
      "- **Autonomous Multi-Agent Runtime (`local-agent`) & `miniSOC`:** Zero-framework 3-agent (`Planner`/`Executor`/`Critic`) coding runtime with hybrid Okapi BM25+vector RAG, plus an isolated Wazuh 4.14 + OpenSearch + OpenRouter AI SOC lab (`miniSOC`).",
      "- **Autonomous Attack Surface Manager (`asm-tool` + `CYBER_MultiTool`):** Orchestrated 11 OSINT CLI scanners with an interactive HTML5 Canvas graph, `'Friday'` local LLM security analyst, and NVD/MITRE/CISA KEV PostgreSQL normalization (`100%` detection on `pentest-ground.com`).",
      "- **Real-Time Network Threat ML (`LTS-Files` & `ML-PROJECT`):** `2.0 Gbps` Linux `AF_XDP` DDoS detection pipeline (`73ms` SLA, `99.2%` ensemble accuracy) and a `264,925`-flow 7-class IoT NIDS (`0.98` DoS / `0.89` DDoS F1).",
      "",
      `**Education:** ${PROFILE.education.degree} @ **${PROFILE.education.institution}** (\`CGPA: ${PROFILE.education.cgpa}\`, ${PROFILE.education.graduation}).`,
      `**Contact:** [${PROFILE.links.email}](mailto:${PROFILE.links.email}) • [GitHub](${PROFILE.links.github}) • [LinkedIn](${PROFILE.links.linkedin})`
    ].join("\n");
  }

  // Privacy guardrail check (phone / student ID)
  if (q.includes("phone") || q.includes("mobile") || q.includes("whatsapp") || q.includes("student id") || q.includes("id number")) {
    return `For privacy protection against automated web scrapers, Nikunj's phone numbers and university student ID are omitted from this public web terminal. You can reach him directly via email at **[${PROFILE.links.email}](mailto:${PROFILE.links.email})** or on **[LinkedIn](${PROFILE.links.linkedin})**.`;
  }

  // Smaller / Hidden / Archive / Hobby projects query
  if (
    q === "/archive" ||
    q === "ls ./archive" ||
    q.includes("smaller project") ||
    q.includes("other project") ||
    q.includes("hidden") ||
    q.includes("hobby") ||
    q.includes("archive") ||
    q.includes("all 21") ||
    q.includes("all 20") ||
    q.includes("all 16") ||
    q.includes("not on the main")
  ) {
    return [
      `### Additional, Coursework & Hobby Projects (\`${ARCHIVE_PROJECTS.length} Indexed Systems\`)`,
      `Beyond the ${FLAGSHIP_PROJECTS.length} flagship systems on the main grid, I hold full technical specs for Nikunj's **${ARCHIVE_PROJECTS.length} additional projects**:`,
      "",
      ...ARCHIVE_PROJECTS.map(
        (p, i) =>
          `${i + 1}. **${p.title}** (\`${p.date}\`)\n   - **Stack:** \`${p.stack.join("`, `")}\`\n   - **Highlights:** ${p.summary}`
      ),
      "",
      "*Ask me about any specific one (e.g., \"Tell me about miniSOC\", \"Tell me about RoomFrame v1 IoT\", \"How does Digital Scotland Yard prevent cheating?\", or \"Tell me about Multiverse RPG & THA 3\") for a deep dive!*"
    ].join("\n");
  }

  // Flagship projects overview command
  if (q === "/projects" || q === "projects") {
    return [
      `### ${FLAGSHIP_PROJECTS.length} Flagship Engineering Projects (Ordered: AI Agents → Cybersecurity & VAPT → Distributed Systems)`,
      ...FLAGSHIP_PROJECTS.map(
        (p) => `- **[${p.code}] ${p.title}** (*${p.pillarLabel}*): ${p.subtitle} — \`${p.metrics.slice(0, 2).join(" | ")}\``
      ),
      "",
      `Type \`/archive\` to see the **${ARCHIVE_PROJECTS.length} additional & hobby projects**, or ask about any project by name!`
    ].join("\n");
  }

  // Specific Project Matching (Checks all 21 projects: 12 Flagship + 9 Archive)
  const allProjects = [
    ...FLAGSHIP_PROJECTS.map((p) => ({ ...p, isFlagship: true })),
    ...ARCHIVE_PROJECTS.map((p) => ({ ...p, isFlagship: false }))
  ];

  const projectKeywords = [
    { id: "local-agent", terms: ["local-agent", "local agent", "coding agent", "scratchpad", "react loop", "nemotron", "gemma 4", "planneragent", "executoragent", "criticagent", "collaborationbus", "bm25", "3-agent", "multi-agent"] },
    { id: "evidence-sensitivity-tester", terms: ["trustgate", "evidence-removal", "evidence removal", "sensitivity tester", "osv", "minimumevidencegate", "genai project", "ablation", "vulnerability triage", "vulnerability benchmark", "mlx", "qlora", "adversarial debate", "ast reachability", "sarif"] },
    { id: "ticket-triage-pipeline", terms: ["ticket", "deriv", "11-stage", "state machine", "gemini api", "human_review"] },
    { id: "accounting-document-assistant", terms: ["accounting", "kema", "decimal", "open-item", "dlp gatekeeper", "tesseract", "citation verifier", "credit note"] },
    { id: "autonomous-asm-platform", terms: ["asm", "attack surface", "friday", "osint", "subfinder", "nuclei", "naabu", "cyber_multitool", "nvd"] },
    { id: "multiclass-iot-nids", terms: ["nids", "264,925", "cic-iot-diad", "ml-project", "7-class", "intrusion detection"] },
    { id: "encrypted-p2p-chat-suite", terms: ["chatapp", "p2p", "diffie-hellman", "encrypted chat", "aes-256", "hmac", "perfect forward secrecy", "traffic padding"] },
    { id: "nipa-hybrid-datamining", terms: ["nipa", "smote", "anova", "ciciot2023", "dm-project", "stacked ensemble"] },
    { id: "memory-setup-offline-museum", terms: ["memory setup", "memory_setup", "memory-setup", "offline museum", "moondream", "arcface", "buffalo_l", "kd-tree", "fts5", "http 206", "remote family share", "tailscale"] },
    { id: "ddos-detection-pipeline", terms: ["ddos", "af_xdp", "af_packet", "kafka", "73ms", "73 ms", "2.0 gbps", "2 gbps", "lts-files", "healthcare predictor"] },
    { id: "hiroshima-robotics-vision", terms: ["hiroshima", "robot", "teleoperation", "coppeliasim", "mediapipe", "inverse kinematics", "hip"] },
    { id: "c-subset-optimizing-compiler", terms: ["compiler", "ply", "lex-yacc", "lalr", "three-address", "tac", "constant folding", "ccp"] },
    { id: "mini-soc-ai-lab", terms: ["minisoc", "mini-soc", "wazuh", "opensearch", "sysmon", "eicar", "4625", "4698", "simulate_attacks", "soc lab"] },
    { id: "multiverse-rpg-semantic-search", terms: ["multiverse", "rpg", "codex", "semantic", "all-minilm", "negation blindness", "384-d", "llm projects", "campus rag", "assignment 2", "assignment 3", "tha 3", "tha3"] },
    { id: "portable-smart-room-iot", terms: ["smart room", "iot", "esp32", "esp8266", "xiao", "openhaystack", "switch flipper", "fog lab", "raspberry pi", "roomframe", "rfv1", "chacha20", "ble audio"] },
    { id: "netwatch-port-dashboard", terms: ["netwatch", "port-dashboard", "port monitoring", "psutil", "lsof", "72-hour"] },
    { id: "scotland-yard-digital", terms: ["scotland yard", "mister x", "board game", "tabletop", "bezier", "suspect possibility cloud", "web audio"] },
    { id: "aqi-forecast-lstm", terms: ["aqi", "air quality", "lstm", "here traffic", "jamfactor"] },
    { id: "next-class-macos-app", terms: ["next class", "timetable", "rumps", "status bar", "py2app"] },
    { id: "grpc-and-gesturedeck", terms: ["grpc", "protobuf", "gesturedeck", "gesture_control", "50051"] },
    { id: "docker-kubernetes-devsecops", terms: ["docker-kubernetes", "kubernetes mastery", "devsecops"] }
  ];

  const matchedProjectIds = projectKeywords
    .filter((entry) => entry.terms.some((t) => q.includes(t)))
    .map((entry) => entry.id);

  if (matchedProjectIds.length > 0) {
    const matches = matchedProjectIds
      .map((id) => allProjects.find((p) => p.id === id))
      .filter(Boolean);

    return matches
      .map((p) => {
        const lines = [
          `### ${p.title} (\`${p.date}\`)`,
          `- **Classification:** ${p.isFlagship ? `Flagship Project (${p.code} • ${p.pillarLabel})` : "Specialized / Archive Project"}`,
          `- **Tech Stack:** \`${p.stack.join("`, `")}\``,
          `- **Key Metrics:** \`${p.metrics.join("` • `")}\``,
          `- **Overview:** ${p.summary}`
        ];
        if (p.bullets) {
          lines.push("- **Engineering Highlights:**", ...p.bullets.map((b) => `  - ${b}`));
        }
        return lines.join("\n");
      })
      .join("\n\n---\n\n");
  }

  // Experience / Internships / TA queries
  if (
    q === "/experience" ||
    q === "experience" ||
    q.includes("intern") ||
    q.includes("jio") ||
    q.includes("leo technosoft") ||
    q.includes("work experience") ||
    q.includes("teaching assistant") ||
    q.includes("ta ")
  ) {
    return [
      "### Professional Experience, Security Operations & Research",
      ...EXPERIENCE.map(
        (e) =>
          `#### ${e.role} @ **${e.organization}** (\`${e.period}\` • ${e.location})\n${e.highlights.map((h) => `- ${h}`).join("\n")}`
      )
    ].join("\n\n");
  }

  // Skills / Tech stack queries
  if (q === "/skills" || q === "skills" || q.includes("tech stack") || q.includes("languages") || q.includes("skills")) {
    return [
      "### Technical Skills & Engineering Stack (AI + Cybersecurity + Systems)",
      ...SKILL_GROUPS.map((g) => `- **${g.category}:** \`${g.items.join("`, `")}\``),
      "",
      "**Certifications & Leadership:**",
      ...LEADERSHIP_AND_CERTS.map((c) => `- ${c}`)
    ].join("\n");
  }

  // Education / CGPA / BITS Pilani queries
  if (q.includes("education") || q.includes("cgpa") || q.includes("gpa") || q.includes("bits") || q.includes("university") || q.includes("degree") || q.includes("coursework")) {
    return [
      `### Education — ${PROFILE.education.institution}`,
      `- **Degree:** ${PROFILE.education.degree}`,
      `- **CGPA:** \`${PROFILE.education.cgpa}\` (${PROFILE.education.graduation})`,
      `- **Relevant Coursework:** ${PROFILE.education.coursework.join(", ")}.`,
      `- **Academic Leadership:** Lab Teaching Assistant for *Database Management Systems (CS F212)* and *Object-Oriented Programming (CS F213)*, mentoring 90+ undergraduates across two semesters.`
    ].join("\n");
  }

  // Resume / CV queries
  if (q === "/resumes" || q === "resumes" || q.includes("resume") || q.includes("cv") || q.includes("pdf")) {
    return [
      "### Multi-Track Sanitized Resume PDFs",
      "You can download Nikunj's role-tailored CVs directly from the navigation menu or Resume section:",
      ...RESUME_TRACKS.map(
        (r) => `- **[${r.label}](${r.filename})** — *${r.focus}*`
      )
    ].join("\n");
  }

  // Contact / Hiring queries
  if (q === "/contact" || q === "contact" || q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach") || q.includes("linkedin") || q.includes("github")) {
    return [
      "### Direct Contact & Profiles",
      `- **Email:** [${PROFILE.links.email}](mailto:${PROFILE.links.email})`,
      `- **GitHub:** [${PROFILE.links.github}](${PROFILE.links.github})`,
      `- **LinkedIn:** [${PROFILE.links.linkedin}](${PROFILE.links.linkedin})`,
      `- **Location:** ${PROFILE.location} (Graduating Q3 2027 • Focused on **AI + Cybersecurity**, AI Agents, VAPT, and Distributed Systems roles)`
    ].join("\n");
  }

  // General fallback summary with helpful pointers
  return [
    `I indexed your query against **${PROFILE.name}'s** ${FLAGSHIP_PROJECTS.length + ARCHIVE_PROJECTS.length} engineering projects and **AI + Cybersecurity** profile:`,
    "",
    "- **01. AI Agents, LLMs & AI Security:** Built `local-agent` (zero-framework 3-agent `Planner`/`Executor`/`Critic` runtime with hybrid BM25+vector RAG and HITL gates), `TrustGate` (neuro-symbolic OSV benchmark, 2026 frontier eval, Apple MLX QLoRA fine-tuning & AST reachability scanner), `Accounting Document Assistant` (deterministic `Decimal` + 8-pass OCR/table RAG with a local DLP gatekeeper), and an 11-stage `Google Gemini` support triage state machine.",
    "- **02. Cybersecurity, VAPT & Threat Intelligence:** Automated Nessus compliance & API/K8s VAPT across `1,000+` enterprise servers at **Jio Platforms**, unified 11 OSINT CLI tools with `'Friday'` (`asm-tool` + `CYBER_MultiTool`), built `miniSOC` (Wazuh 4.14 + OpenSearch + Sysmon + OpenRouter AI triage lab), and engineered `264k`-flow IoT NIDS / `NIPA` stacked ensembles + an `RSA/Diffie-Hellman` PFS E2EE chat suite.",
    "- **03. Distributed Systems, ML & Software Engineering:** Built `Memory Setup` (offline 5-stage media intelligence engine with `<2.5 GB` RAM VLM, `15k`-city KD-Tree geocoder, ArcFace clustering, HTTP `206` video museum & remote share), a `2.0 Gbps` Linux `AF_XDP` + `Kafka` + `gRPC` DDoS pipeline (`73ms` SLA at **Leo Technosoft**), `RoomFrame v1` custom binary IoT protocol (`-98.07%` traffic), a `30+ FPS` MediaPipe-to-CoppeliaSim robotics controller at **Hiroshima University (Japan)**, and an optimizing `LALR(1) C Compiler`.",
    "",
    "*Tip: Ask about a specific project (including `TrustGate`, `miniSOC`, `Memory Setup`, `RoomFrame v1`, `Accounting Document Assistant`, `NetWatch`, or `Digital Scotland Yard`), or type `/archive`, `/experience`, or `/help`!*"
  ].join("\n");
}
