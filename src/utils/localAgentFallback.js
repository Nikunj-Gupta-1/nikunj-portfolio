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
    return "Type a question about **Nikunj Gupta** (e.g., *\"What did he build at Jio and Leo Technosoft?\"* or *\"Tell me about his smaller/hobby projects\"*), or run `/help` for terminal commands.";
  }

  // 1. Direct CLI / Slash commands
  if (q === "/help" || q === "help") {
    return [
      "### `nikunj-agent v2.6` — Command Reference",
      "- `/whoami` — Core 3-pillar profile, BITS Pilani education (`8.6 CGPA`) & telemetry",
      "- `/projects` — Summary of the **9 Flagship Engineering Systems** across all 3 pillars",
      "- `/archive` — Inspect the **7 Additional & Hobby Projects** (`Scotland Yard`, `NetWatch`, `AQI-Forecast`, `Next Class`, `Multiverse RPG RAG`, etc.)",
      "- `/experience` — Internships at **Jio Platforms**, **Hiroshima University (Japan)**, **Leo Technosoft** & **BITS TAships**",
      "- `/skills` — Full technical stack grouped by domain",
      "- `/resumes` — Direct links to download the 3 privacy-sanitized Resume PDFs",
      "- `/contact` — Email, GitHub, LinkedIn & availability",
      "- `/clear` — Clear terminal transcript",
      "",
      "*Or ask any free-form natural language question!*"
    ].join("\n");
  }

  if (q === "/whoami" || q === "whoami" || q.includes("who is nikunj") || q.includes("summarize his 3 pillars") || q.includes("three pillars") || q.includes("about nikunj")) {
    return [
      `### ${PROFILE.name} — ${PROFILE.headline}`,
      `${PROFILE.subheadline}`,
      "",
      "**Equal 3-Pillar Engineering Focus:**",
      ...PILLARS.map((p) => `- **${p.title}**: ${p.summary}`),
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
    q.includes("all 16") ||
    q.includes("not on the main")
  ) {
    return [
      "### Additional, Specialized & Hobby Projects (`7 Indexed Systems`)",
      "Beyond the 9 flagship systems on the main grid, I hold full technical specs for Nikunj's **7 additional projects**:",
      "",
      ...ARCHIVE_PROJECTS.map(
        (p, i) =>
          `${i + 1}. **${p.title}** (\`${p.date}\`)\n   - **Stack:** \`${p.stack.join("`, `")}\`\n   - **Highlights:** ${p.summary}`
      ),
      "",
      "*Ask me about any specific one (e.g., \"How does Digital Scotland Yard prevent cheating?\" or \"Tell me about the Multiverse RPG vector search\") for a deep dive!*"
    ].join("\n");
  }

  // Flagship projects overview command
  if (q === "/projects" || q === "projects") {
    return [
      "### 9 Flagship Engineering Projects (3 Per Pillar)",
      ...FLAGSHIP_PROJECTS.map(
        (p) => `- **[${p.code}] ${p.title}** (*${p.pillarLabel}*): ${p.subtitle} — \`${p.metrics.slice(0, 2).join(" | ")}\``
      ),
      "",
      "Type `/archive` to see the **7 additional & hobby projects**, or ask about any project by name!"
    ].join("\n");
  }

  // Specific Project Matching (Checks all 16 projects: 9 Flagship + 7 Archive)
  const allProjects = [
    ...FLAGSHIP_PROJECTS.map((p) => ({ ...p, isFlagship: true })),
    ...ARCHIVE_PROJECTS.map((p) => ({ ...p, isFlagship: false }))
  ];

  const projectKeywords = [
    { id: "local-agent", terms: ["local-agent", "local agent", "coding agent", "scratchpad", "react loop", "nemotron", "gemma 4"] },
    { id: "ticket-triage-pipeline", terms: ["ticket", "triage", "deriv", "11-stage", "state machine", "gemini api", "human_review"] },
    { id: "evidence-sensitivity-tester", terms: ["evidence-removal", "evidence removal", "sensitivity tester", "osv", "minimumevidencegate", "genai project", "ablation"] },
    { id: "ddos-detection-pipeline", terms: ["ddos", "af_xdp", "af_packet", "kafka", "73ms", "73 ms", "2.0 gbps", "2 gbps", "lts-files", "healthcare predictor"] },
    { id: "hiroshima-robotics-vision", terms: ["hiroshima", "robot", "teleoperation", "coppeliasim", "mediapipe", "inverse kinematics", "hip"] },
    { id: "c-subset-optimizing-compiler", terms: ["compiler", "ply", "lex-yacc", "lalr", "three-address", "tac", "constant folding", "ccp"] },
    { id: "autonomous-asm-platform", terms: ["asm", "attack surface", "friday", "osint", "subfinder", "nuclei", "naabu", "cyber_multitool", "nvd"] },
    { id: "multiclass-iot-nids", terms: ["nids", "264,925", "cic-iot-diad", "ml-project", "7-class", "intrusion detection"] },
    { id: "encrypted-p2p-chat-suite", terms: ["chatapp", "p2p", "diffie-hellman", "encrypted chat", "aes-256", "hmac", "perfect forward secrecy", "traffic padding"] },
    { id: "multiverse-rpg-semantic-search", terms: ["multiverse", "rpg", "codex", "semantic", "all-minilm", "negation blindness", "384-d", "llm projects"] },
    { id: "scotland-yard-digital", terms: ["scotland yard", "mister x", "board game", "tabletop", "bezier", "suspect possibility cloud", "web audio"] },
    { id: "aqi-forecast-lstm", terms: ["aqi", "air quality", "lstm", "here traffic", "jamfactor"] },
    { id: "netwatch-port-dashboard", terms: ["netwatch", "port-dashboard", "port monitoring", "psutil", "lsof", "72-hour"] },
    { id: "nipa-hybrid-datamining", terms: ["nipa", "smote", "anova", "ciciot2023", "dm-project", "stacked ensemble"] },
    { id: "next-class-macos-app", terms: ["next class", "timetable", "rumps", "status bar", "py2app"] },
    { id: "grpc-and-gesturedeck", terms: ["grpc", "protobuf", "gesturedeck", "gesture_control", "50051"] }
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
      "### Professional Experience, Research & Teaching",
      ...EXPERIENCE.map(
        (e) =>
          `#### ${e.role} @ **${e.organization}** (\`${e.period}\` • ${e.location})\n${e.highlights.map((h) => `- ${h}`).join("\n")}`
      )
    ].join("\n\n");
  }

  // Skills / Tech stack queries
  if (q === "/skills" || q === "skills" || q.includes("tech stack") || q.includes("languages") || q.includes("skills")) {
    return [
      "### Technical Skills & Engineering Stack",
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
      "You can download Nikunj's role-tailored CVs directly from the top bar or Resume section:",
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
      `- **Location:** ${PROFILE.location} (Graduating Q3 2027 • Open to AI/Data, Software/Systems, and Cybersecurity internships & roles)`
    ].join("\n");
  }

  // General fallback summary with helpful pointers
  return [
    `I indexed your query against **${PROFILE.name}'s** 16 engineering projects and experience profile:`,
    "",
    "- **AI Agents & Data Science:** Built `local-agent` (pure Python ReAct coding runtime with 80% context window masking), an 11-stage `Google Gemini` support triage state machine, an `OSV Vulnerability Benchmark` (720 trials), and a 384-d `Dense Vector Semantic Search` engine.",
    "- **Distributed Systems & ML:** Engineered a `2.0 Gbps` Linux `AF_XDP` + `Kafka` + `gRPC` DDoS pipeline (`73ms` median alert latency, `99.2%` ensemble accuracy at **Leo Technosoft**), a `30+ FPS` MediaPipe-to-CoppeliaSim robotics controller at **Hiroshima University (Japan)**, and an optimizing `LALR(1) C Compiler`.",
    "- **Cybersecurity & VAPT:** Automated Nessus compliance across `1,000+` enterprise servers at **Jio Platforms**, unified 11 OSINT CLI tools with a local LLM copilot (`asm-tool`), and built a `264,925`-flow IoT NIDS + `RSA/Diffie-Hellman` E2EE chat suite.",
    "",
    "*Tip: Ask about a specific project (including hidden ones like `Digital Scotland Yard`, `NetWatch`, or `Next Class`), or type `/archive`, `/experience`, or `/help`!*"
  ].join("\n");
}
