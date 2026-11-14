import {
  PROFILE,
  PILLARS,
  FLAGSHIP_PROJECTS,
  EXPERIENCE,
  SKILL_GROUPS,
  RESUME_TRACKS,
  LEADERSHIP_AND_CERTS
} from "./data/portfolioData.js";
import { generateLocalAgentResponse } from "./utils/localAgentFallback.js";

/* ================= MODERN WEB GUIDANCE: TOP-LAYER & DIALOG HELPERS ================= */
let supportsDisplayTransition;
function canTransitionDisplay() {
  if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
  if (!window.CSS?.supports?.("transition-behavior", "allow-discrete") || !document.body) {
    return false;
  }
  const probe = document.createElement("div");
  probe.style.cssText = "transition: display 1s allow-discrete !important; display: block;";
  document.body.appendChild(probe);
  getComputedStyle(probe).display;
  probe.style.display = "none";
  supportsDisplayTransition = getComputedStyle(probe).display === "block";
  probe.remove();
  return supportsDisplayTransition;
}

function supportsTopLayerExit() {
  return window.CSS?.supports?.("overlay", "auto") && canTransitionDisplay();
}

async function closeTopLayer(element) {
  if (!element || !element.open) return;
  if (!supportsTopLayerExit()) {
    element.setAttribute("data-closing", "");
    const animations = element.getAnimations({ subtree: true });
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map((a) => a.finished)),
        new Promise((r) => setTimeout(r, 2000))
      ]);
    }
    if (!element.hasAttribute("data-closing")) return;
    element.removeAttribute("data-closing");
  }
  element.close();
}

function setupDialogBehavior(dialog) {
  if (!dialog) return;

  // Route native close requests (Esc, closedby light dismiss) through closeTopLayer
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeTopLayer(dialog);
  });

  // Fallback for browsers without <dialog closedby> support (e.g. Safari)
  if (!("closedBy" in HTMLDialogElement.prototype)) {
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (isDialogContent) return;
      closeTopLayer(dialog);
    });
  }
}

/* ================= MODERN WEB GUIDANCE: NAVIGATION DRAWER & SCROLLSPY ================= */
function setupNavigationDrawer() {
  const drawer = document.getElementById("navDrawer");
  const openBtn = document.getElementById("drawerOpenBtn");
  const closeBtn = document.getElementById("drawerCloseBtn");
  if (!drawer || !openBtn) return;

  const scroller = drawer.querySelector(".Drawer-scroller");
  const sheet = drawer.querySelector(".Drawer-sheet");
  const mainEl = document.querySelector("main");
  if (!scroller || !sheet) return;

  let isDrawerOpen = false;

  async function openDrawer() {
    drawer.showPopover();

    if (!window.CSS?.supports?.("scroll-initial-target", "nearest")) {
      scroller.scrollTo({ left: scroller.offsetWidth, behavior: "instant" });
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    }

    scroller.scrollTo({ left: 0, behavior: "auto" });
  }

  function closeDrawer() {
    if (!drawer.matches(":popover-open")) return;
    scroller.scrollTo({ left: scroller.offsetWidth, behavior: "auto" });
  }

  function onDrawerOpened() {
    isDrawerOpen = true;
    if (mainEl) mainEl.inert = true;
    openBtn.setAttribute("aria-expanded", "true");
    sheet.focus();
  }

  function onDrawerClosed() {
    if (!isDrawerOpen && !drawer.matches(":popover-open")) return;
    isDrawerOpen = false;
    try {
      drawer.hidePopover();
    } catch {
      // Ignore if already hidden
    }
    if (mainEl) mainEl.inert = false;
    openBtn.setAttribute("aria-expanded", "false");
  }

  const visibleThreshold = 1 / Math.max(window.innerWidth, 320);

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries.at(-1);
      if (!entry) return;
      if (entry.intersectionRatio < visibleThreshold && isDrawerOpen) {
        onDrawerClosed();
      }
      if (entry.intersectionRatio >= 0.98) {
        onDrawerOpened();
      }
    },
    { root: drawer, threshold: [visibleThreshold, 0.98, 1] }
  );
  observer.observe(sheet);

  // Backdrop fade fallback when CSS scroll-driven animation-timeline is unsupported
  if (!window.CSS?.supports?.("animation-timeline: scroll()")) {
    scroller.addEventListener("scroll", () => {
      const ratio = Math.max(0, Math.min(1, 1 - scroller.scrollLeft / Math.max(sheet.offsetWidth, 1)));
      drawer.style.setProperty("--drawer-backdrop", String(ratio));
    });
  }

  openBtn.addEventListener("click", openDrawer);
  closeBtn?.addEventListener("click", closeDrawer);

  // Light-dismiss when tapping outside the drawer sheet
  drawer.addEventListener("click", (event) => {
    if (!sheet.contains(event.target)) {
      closeDrawer();
    }
  });

  // Escape key dismissal
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.matches(":popover-open")) {
      closeDrawer();
    }
  });

  // Close drawer smoothly when clicking any navigation link inside the sheet
  sheet.querySelectorAll(".drawer-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // Scrollspy setup per modern-web-guidance: scrollspy
  const navLinks = sheet.querySelectorAll(".drawer-nav-list a");
  const sections = document.querySelectorAll("main section[id]");

  if (window.CSS?.supports?.("scroll-target-group: auto")) {
    const syncAriaCurrent = () => {
      const currentLink = sheet.querySelector(".drawer-nav-list a:target-current");
      navLinks.forEach((link) => {
        link.setAttribute("aria-current", link === currentLink ? "true" : "false");
      });
    };
    syncAriaCurrent();
    document.addEventListener("scrollend", syncAriaCurrent);
  } else {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const isActive = link.getAttribute("href") === `#${id}`;
              link.classList.toggle(":target-current", isActive);
              link.setAttribute("aria-current", String(isActive));
            });
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((sec) => spyObserver.observe(sec));
  }
}

/* ================= SAFE MARKDOWN TO HTML RENDERER ================= */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInlineMarkdown(line) {
  let out = escapeHtml(line);
  // Links [label](url)
  out = out.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  // Inline code `code`
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  // Bold **text**
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // Italic *text*
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

export function renderMarkdown(md) {
  // Strip any <think>...</think> blocks if emitted by a reasoning model
  const cleanedMd = String(md || "")
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .trim();

  const lines = cleanedMd.split("\n");
  const html = [];
  let inList = false;
  let inCodeBlock = false;
  let codeBuffer = [];

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.trim().startsWith("```")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBuffer = [];
      } else {
        html.push(`<pre class="arch-pre"><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`);
        inCodeBlock = false;
        codeBuffer = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(rawLine);
      continue;
    }

    if (!line.trim()) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      continue;
    }

    if (line.startsWith("### ")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h3>${formatInlineMarkdown(line.slice(4))}</h3>`);
    } else if (line.startsWith("#### ")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h4>${formatInlineMarkdown(line.slice(5))}</h4>`);
    } else if (/^(\s*[-•]|\d+\.)\s+/.test(line)) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      const itemText = line.replace(/^(\s*[-•]|\d+\.)\s+/, "");
      html.push(`<li>${formatInlineMarkdown(itemText)}</li>`);
    } else if (line === "---") {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push('<hr style="border:0;border-top:1px solid var(--border-subtle);margin:0.75rem 0;" />');
    } else {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<p>${formatInlineMarkdown(line)}</p>`);
    }
  }

  if (inCodeBlock && codeBuffer.length > 0) {
    html.push(`<pre class="arch-pre"><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`);
  }
  if (inList) html.push("</ul>");
  return html.join("");
}

/* ================= RENDER PORTFOLIO SECTIONS ================= */
function renderTelemetry() {
  const grid = document.getElementById("telemetryMetricsGrid");
  if (!grid) return;
  grid.innerHTML = PROFILE.telemetryMetrics
    .map(
      (m) => `
      <div class="telemetry-box">
        <div class="tb-val">${escapeHtml(m.value)}</div>
        <div class="tb-label">${escapeHtml(m.label)}</div>
        <div class="tb-detail">${escapeHtml(m.detail)}</div>
      </div>`
    )
    .join("");
}

function renderPillars() {
  const grid = document.getElementById("pillarsGrid");
  if (!grid) return;
  grid.innerHTML = PILLARS.map(
    (p) => `
    <article class="pillar-card" data-accent="${escapeHtml(p.accent)}">
      <div>
        <div class="pillar-badge">${escapeHtml(p.badge)}</div>
        <h3 class="pillar-title">${escapeHtml(p.title)}</h3>
        <p class="pillar-summary">${escapeHtml(p.summary)}</p>
        <ul class="pillar-list">
          ${p.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
        </ul>
      </div>
      <div class="pillar-actions">
        <button type="button" class="btn btn-secondary btn-sm" data-filter-pillar="${escapeHtml(p.id)}">
          Filter 4 Flagships ↓
        </button>
        <button type="button" class="btn btn-ghost btn-sm" data-ask-pillar="${escapeHtml(p.title)}">
          Ask AI Agent &gt;_
        </button>
      </div>
    </article>`
  ).join("");

  grid.querySelectorAll("[data-filter-pillar]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pillarId = btn.getAttribute("data-filter-pillar");
      applyProjectFilter(pillarId);
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  grid.querySelectorAll("[data-ask-pillar]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-ask-pillar");
      triggerAgentPrompt(`Tell me about Nikunj's projects and experience in ${title}.`);
    });
  });
}

function renderFlagshipProjects(filter = "all") {
  const grid = document.getElementById("flagshipProjectsGrid");
  if (!grid) return;

  grid.toggleAttribute("data-filtered", filter !== "all");

  const filtered =
    filter === "all"
      ? FLAGSHIP_PROJECTS
      : FLAGSHIP_PROJECTS.filter((p) => p.pillar === filter);

  grid.innerHTML = filtered
    .map(
      (p) => `
      <article class="project-card" data-pillar="${escapeHtml(p.pillar)}">
        <div>
          <div class="proj-top-meta">
            <span class="proj-code">[${escapeHtml(p.code)}] // ${escapeHtml(p.pillarLabel.toUpperCase())}</span>
            <span class="proj-date">${escapeHtml(p.date)}</span>
          </div>
          <h3 class="proj-title">${escapeHtml(p.title)}</h3>
          <p class="proj-subtitle">${escapeHtml(p.subtitle)}</p>
          <p class="proj-summary">${escapeHtml(p.summary)}</p>

          <div class="proj-metrics-row">
            ${p.metrics.map((m) => `<span class="metric-pill">${escapeHtml(m)}</span>`).join("")}
          </div>

          <div class="proj-stack-row">
            ${p.stack.map((s) => `<span class="stack-tag">${escapeHtml(s)}</span>`).join("")}
          </div>
        </div>

        <div class="proj-card-footer">
          <button type="button" class="btn btn-secondary btn-sm" data-inspect-id="${escapeHtml(p.id)}">
            [Inspect Architecture]
          </button>
          <button type="button" class="btn btn-ghost btn-sm" data-ask-project="${escapeHtml(p.title)}">
            Ask AI &gt;_
          </button>
        </div>
      </article>`
    )
    .join("");

  grid.querySelectorAll("[data-inspect-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-inspect-id");
      openArchitectureDialog(id);
    });
  });

  grid.querySelectorAll("[data-ask-project]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-ask-project");
      triggerAgentPrompt(`Give me a deep technical breakdown of ${title} and its key metrics.`);
    });
  });
}

function applyProjectFilter(filter) {
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    const isMatch = tab.getAttribute("data-filter") === filter;
    tab.classList.toggle("active", isMatch);
    tab.setAttribute("aria-selected", String(isMatch));
  });
  renderFlagshipProjects(filter);
}

function openArchitectureDialog(projectId) {
  const project = FLAGSHIP_PROJECTS.find((p) => p.id === projectId);
  const dialog = document.getElementById("archDialog");
  const codeEl = document.getElementById("archDialogCode");
  const bodyEl = document.getElementById("archDialogBody");
  if (!project || !dialog || !bodyEl) return;

  if (codeEl) {
    codeEl.textContent = `${project.code} // ${project.repoPath} // ARCHITECTURE_SPEC`;
  }

  const repoLinkHtml = project.repoUrl
    ? `<p style="margin:0.5rem 0 0;"><a href="${escapeHtml(project.repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">View Public Repository on GitHub ↗</a></p>`
    : "";

  bodyEl.innerHTML = `
    <h2 id="archDialogTitle" class="dialog-title">${escapeHtml(project.title)}</h2>
    <p class="proj-subtitle">${escapeHtml(project.subtitle)} (${escapeHtml(project.date)})</p>
    ${repoLinkHtml}
    <div class="proj-metrics-row">
      ${project.metrics.map((m) => `<span class="metric-pill">${escapeHtml(m)}</span>`).join("")}
    </div>
    <pre class="arch-pre"><code>${escapeHtml(project.architecture)}</code></pre>
    <h3 class="sub-heading">Engineering &amp; Implementation Highlights</h3>
    <ul class="tl-bullets">
      ${project.bullets.map((b) => `<li>${formatInlineMarkdown(b)}</li>`).join("")}
    </ul>
  `;

  dialog.showModal();
}

function renderExperience() {
  const container = document.getElementById("experienceTimeline");
  if (!container) return;
  container.innerHTML = EXPERIENCE.map(
    (e) => `
    <article class="timeline-card">
      <div class="tl-header">
        <span class="tl-tag">${escapeHtml(e.tag)}</span>
        <span class="tl-period">${escapeHtml(e.period)}</span>
      </div>
      <h3 class="tl-role">${escapeHtml(e.role)}</h3>
      <p class="tl-org">${escapeHtml(e.organization)} • ${escapeHtml(e.location)}</p>
      <ul class="tl-bullets">
        ${e.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
      </ul>
    </article>`
  ).join("");
}

function renderSkillsAndCerts() {
  const skillsGrid = document.getElementById("skillsGrid");
  if (skillsGrid) {
    skillsGrid.innerHTML = SKILL_GROUPS.map(
      (g) => `
      <article class="terminal-card">
        <div class="card-cmd-header">${escapeHtml(g.category.toUpperCase())}</div>
        <div class="skill-chip-wrap">
          ${g.items.map((item) => `<span class="skill-chip">${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>`
    ).join("");
  }

  const certList = document.getElementById("certList");
  if (certList) {
    certList.innerHTML = LEADERSHIP_AND_CERTS.map((c) => `<li>${escapeHtml(c)}</li>`).join("");
  }
}

function renderResumes() {
  const container = document.getElementById("resumeTracksList");
  if (!container) return;
  container.innerHTML = RESUME_TRACKS.map(
    (r) => `
    <div class="resume-track-card">
      <div>
        <span class="rt-tag">${escapeHtml(r.tag)}</span>
        <h4 class="rt-title">${escapeHtml(r.label)}</h4>
        <p class="rt-desc">${escapeHtml(r.focus)}</p>
      </div>
      <a href="${escapeHtml(r.filename)}" download class="btn btn-secondary btn-sm">
        Download PDF ↓
      </a>
    </div>`
  ).join("");
}

/* ================= INTERACTIVE AI AGENT TERMINAL ================= */
const chatHistory = [];

function appendChatMessage(role, markdownContent, sourceLabel = "") {
  const log = document.getElementById("agentChatLog");
  if (!log) return;

  const wrapper = document.createElement("div");
  wrapper.className = `chat-msg ${role === "user" ? "chat-msg-user" : "chat-msg-agent"}`;

  const meta = document.createElement("div");
  meta.className = "chat-meta";
  meta.textContent =
    role === "user"
      ? "guest@recruiter"
      : `nikunj-agent v2.7 ${sourceLabel ? `[${sourceLabel}]` : ""}`;

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble";
  if (role === "user") {
    bubble.textContent = markdownContent;
  } else {
    bubble.innerHTML = renderMarkdown(markdownContent);
  }

  wrapper.appendChild(meta);
  wrapper.appendChild(bubble);
  log.appendChild(wrapper);
  log.scrollTop = log.scrollHeight;
}

function initAgentTerminalGreeting() {
  const log = document.getElementById("agentChatLog");
  if (!log) return;
  log.innerHTML = "";
  appendChatMessage(
    "assistant",
    [
      "### Welcome to `nikunj-agent v2.7` (Command-Center AI)",
      "I am connected to Nikunj Gupta's complete portfolio memory — including his **12 Flagship Systems** (featuring `Memory Setup`, `Accounting Document Assistant`, `local-agent`, `ASM`, and `AF_XDP DDoS Pipeline`), **8 Additional & Hobby Projects** (`Portable Smart Room IoT`, `Digital Scotland Yard`, `Multiverse RPG & Campus RAG`, `NetWatch`, `Next Class`, etc.), and his internships at **Jio Platforms**, **Hiroshima University (Japan)**, and **Leo Technosoft**.",
      "",
      "- Click any **Quick Prompt** above, ask a question in plain English, or type `/archive` or `/help`."
    ].join("\n"),
    "system-ready"
  );
}

async function sendAgentQuery(rawMessage) {
  const message = String(rawMessage || "").trim();
  if (!message) return;

  if (message.toLowerCase() === "/clear" || message.toLowerCase() === "clear") {
    chatHistory.length = 0;
    initAgentTerminalGreeting();
    return;
  }

  appendChatMessage("user", message);
  const sendBtn = document.getElementById("agentSendBtn");
  const badge = document.getElementById("agentEngineBadge");
  if (sendBtn) sendBtn.disabled = true;
  if (badge) badge.textContent = "ENGINE: QUERYING...";

  let replyText = "";
  let providerLabel = "local-rag";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(16000),
      body: JSON.stringify({
        message,
        history: chatHistory.slice(-6)
      })
    });

    if (response.ok) {
      const data = await response.json();
      if (data && data.reply) {
        replyText = data.reply;
        providerLabel = data.provider || "serverless-agent";
      }
    }
  } catch {
    // Expected when running static preview without serverless functions proxy
  }

  if (!replyText) {
    replyText = generateLocalAgentResponse(message);
    providerLabel = "local-knowledge-engine";
  }

  chatHistory.push({ role: "user", content: message });
  chatHistory.push({ role: "assistant", content: replyText });

  appendChatMessage("assistant", replyText, providerLabel);
  if (sendBtn) sendBtn.disabled = false;
  if (badge) badge.textContent = `ENGINE: ${providerLabel.toUpperCase()}`;
}

function triggerAgentPrompt(promptText) {
  const section = document.getElementById("ai-terminal");
  const input = document.getElementById("agentChatInput");
  section?.scrollIntoView({ behavior: "smooth" });
  if (input) {
    input.value = "";
    input.focus();
  }
  sendAgentQuery(promptText);
}

/* ================= CLOCK & EVENT LISTENERS ================= */
function updateDubaiClock() {
  const clockEl = document.getElementById("hudClock");
  if (!clockEl) return;
  try {
    const now = new Date();
    const timeStr = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Dubai",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(now);
    clockEl.textContent = `DXB // ${timeStr} UTC+4`;
  } catch {
    clockEl.textContent = "DXB // UTC+4";
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    renderTelemetry();
    renderPillars();
    renderFlagshipProjects("all");
    renderExperience();
    renderSkillsAndCerts();
    renderResumes();
    initAgentTerminalGreeting();
    setupNavigationDrawer();

    updateDubaiClock();
    setInterval(updateDubaiClock, 1000);

    // Filter tabs
    document.querySelectorAll(".filter-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const filter = tab.getAttribute("data-filter") || "all";
        applyProjectFilter(filter);
      });
    });

    // Architecture dialog setup
    const archDialog = document.getElementById("archDialog");
    setupDialogBehavior(archDialog);
    document.getElementById("closeArchDialogBtn")?.addEventListener("click", () => {
      closeTopLayer(archDialog);
    });

    // AI Agent form submission
    const chatForm = document.getElementById("agentChatForm");
    const chatInput = document.getElementById("agentChatInput");
    chatForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!chatInput) return;
      const msg = chatInput.value;
      chatInput.value = "";
      sendAgentQuery(msg);
    });

    // Submit chat on Enter (allow Shift+Enter for newline)
    chatInput?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        chatForm?.requestSubmit();
      }
    });

    // Prompt chips
    document.querySelectorAll(".prompt-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const prompt = chip.getAttribute("data-prompt");
        if (prompt) sendAgentQuery(prompt);
      });
    });

    // Clear chat button
    document.getElementById("clearChatBtn")?.addEventListener("click", () => {
      chatHistory.length = 0;
      initAgentTerminalGreeting();
    });

    // Archive projects callout button
    document.getElementById("askArchiveProjectsBtn")?.addEventListener("click", () => {
      triggerAgentPrompt("/archive");
    });

    // Top HUD "Ask AI Agent" button & Cmd+K shortcut
    document.getElementById("openAgentModalBtn")?.addEventListener("click", () => {
      document.getElementById("ai-terminal")?.scrollIntoView({ behavior: "smooth" });
      chatInput?.focus();
    });

    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        document.getElementById("ai-terminal")?.scrollIntoView({ behavior: "smooth" });
        chatInput?.focus();
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "l") {
        if (document.activeElement === chatInput) {
          e.preventDefault();
          chatHistory.length = 0;
          initAgentTerminalGreeting();
        }
      }
    });

    // Netlify Contact Form enhancement
    const contactForm = document.getElementById("contactForm");
    const contactStatus = document.getElementById("contactFormStatus");
    contactForm?.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      const formData = new FormData(contactForm);
      if (contactStatus) contactStatus.textContent = "Transmitting payload...";
      try {
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        });
        if (res.ok) {
          if (contactStatus) {
            contactStatus.textContent = "[200 OK] Transmission received! Nikunj will reply shortly.";
          }
          contactForm.reset();
        } else {
          throw new Error("Non-200 response");
        }
      } catch {
        // Fallback mailto when testing locally outside Netlify
        const name = formData.get("name") || "";
        const domain = formData.get("domain") || "";
        const message = formData.get("message") || "";
        const subject = encodeURIComponent(`Portfolio Inquiry [${domain}] from ${name}`);
        const body = encodeURIComponent(String(message));
        window.location.href = `mailto:${PROFILE.links.email}?subject=${subject}&body=${body}`;
        if (contactStatus) {
          contactStatus.textContent = "Opened mail client (deploy on Netlify for serverless form capture).";
        }
      }
    });
  });
}
