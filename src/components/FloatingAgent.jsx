import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Bot, Command, Send, Sparkles, Trash2, X } from "lucide-react";
import { ARCHIVE_PROJECTS, FLAGSHIP_PROJECTS } from "../data/portfolioData";
import { generateLocalAgentResponse } from "../utils/localAgentFallback";
import { renderMarkdown } from "../utils/markdown";

const QUICK_PROMPTS = [
  {
    label: "AI + Cybersecurity",
    prompt: "How does Nikunj combine AI and Cybersecurity across his projects and internships?"
  },
  {
    label: "TrustGate MLX LoRA",
    prompt: "Tell me about TrustGate, the 2026 frontier benchmark, and Apple MLX QLoRA fine-tuning."
  },
  {
    label: "miniSOC Wazuh Lab",
    prompt: "Tell me about miniSOC and how the Wazuh OpenSearch AI alert explainer works."
  },
  {
    label: "3-Agent local-agent",
    prompt: "Tell me about local-agent's 3-agent collaboration loop and hybrid BM25 vector RAG."
  },
  {
    label: "Archive (9)",
    prompt: "/archive"
  },
  {
    label: "/help",
    prompt: "/help"
  }
];

const INITIAL_GREETING = {
  id: "boot-msg",
  role: "assistant",
  provider: "system-ready",
  content: [
    "### Welcome to `nikunj-agent v2.7` (Floating Command AI)",
    "Connected to Nikunj Gupta's complete **21-project** knowledge base (`12` Flagships including `local-agent`, `TrustGate`, `Memory Setup`, `Accounting RAG` + `9` Archive builds including `miniSOC` and `RoomFrame v1`), plus **Jio Platforms**, **Leo Technosoft**, and **Hiroshima University**.",
    "",
    "- Type a question, click a **Quick Prompt**, search any project name to jump straight to its modal, or run `/archive` / `/help`."
  ].join("\n")
};

export default function FloatingAgent({
  isOpen,
  initialPrompt,
  onOpen,
  onClose,
  onSelectProject
}) {
  const [messages, setMessages] = useState([INITIAL_GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [engineBadge, setEngineBadge] = useState("READY (SERVERLESS + RAG)");
  const logRef = useRef(null);
  const inputRef = useRef(null);
  const handledPromptRef = useRef("");

  const allProjects = useMemo(
    () => [
      ...FLAGSHIP_PROJECTS,
      ...ARCHIVE_PROJECTS.map((p, idx) => ({
        ...p,
        code: `ARC-0${idx + 1}`,
        pillarLabel: p.pillar === "ai-data" ? "AI & RAG" : p.pillar === "cyber-sec" ? "Cybersecurity" : "Systems & IoT",
        subtitle: p.metrics.slice(0, 2).join(" • ")
      }))
    ],
    []
  );

  // Quick command-palette project matches when typing
  const matchedProjects = useMemo(() => {
    const q = input.trim().toLowerCase();
    if (!q || q.startsWith("/") || q.length < 2) return [];
    return allProjects
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q) ||
          p.stack.some((s) => s.toLowerCase().includes(q))
      )
      .slice(0, 3);
  }, [input, allProjects]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  useEffect(() => {
    function onKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onOpen("");
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "l" && isOpen) {
        e.preventDefault();
        handleClear();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, onOpen]);

  useEffect(() => {
    if (isOpen && initialPrompt && initialPrompt !== handledPromptRef.current) {
      handledPromptRef.current = initialPrompt;
      sendQuery(initialPrompt);
    }
    if (!initialPrompt) {
      handledPromptRef.current = "";
    }
  }, [isOpen, initialPrompt]);

  function handleClear() {
    setMessages([INITIAL_GREETING]);
    setEngineBadge("READY (SERVERLESS + RAG)");
  }

  async function sendQuery(rawText) {
    const query = String(rawText || "").trim();
    if (!query || isLoading) return;

    if (query.toLowerCase() === "/clear" || query.toLowerCase() === "clear") {
      handleClear();
      setInput("");
      return;
    }

    const userMsg = {
      id: `u-${Date.now()}`,
      role: "user",
      content: query
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput("");
    setIsLoading(true);
    setEngineBadge("QUERYING...");

    let replyText = "";
    let providerLabel = "local-knowledge-engine";

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(16000),
        body: JSON.stringify({
          message: query,
          history: nextHistory
            .filter((m) => m.id !== "boot-msg")
            .slice(-6)
            .map((m) => ({ role: m.role, content: m.content }))
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data?.reply) {
          replyText = data.reply;
          providerLabel = data.provider || "serverless-agent";
        }
      }
    } catch {
      // Static preview / offline fallback handled deterministically below
    }

    if (!replyText) {
      replyText = generateLocalAgentResponse(query);
      providerLabel = "local-knowledge-engine";
    }

    const assistantMsg = {
      id: `a-${Date.now()}`,
      role: "assistant",
      provider: providerLabel,
      content: replyText
    };

    setMessages((prev) => [...prev, assistantMsg]);
    setEngineBadge(providerLabel.toUpperCase());
    setIsLoading(false);
  }

  return (
    <>
      {/* Persistent Floating Trigger Pill */}
      {!isOpen && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onOpen("")}
          aria-label="Open nikunj-agent AI Terminal"
          className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/50 bg-[#0b111c]/95 px-4 py-2.5 font-mono text-xs font-semibold text-cyan-300 shadow-[0_12px_36px_rgba(34,211,238,0.25)] backdrop-blur-md hover:border-cyan-400 hover:bg-[#101929] cursor-pointer sm:right-6 sm:bottom-6 whitespace-nowrap"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <Bot className="h-4 w-4" />
          <span>Ask nikunj-agent</span>
          <span className="hidden sm:inline-flex items-center gap-0.5 rounded bg-[#060a10] px-1.5 py-0.5 text-[10px] text-[#9bb0cc]">
            <Command className="h-2.5 w-2.5" />K
          </span>
        </motion.button>
      )}

      {/* Floating Command Palette & AI Agent Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center p-2 sm:items-center sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="nikunj-agent Command Terminal"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 330, damping: 28 }}
              className="relative z-10 flex h-[84vh] sm:h-[78vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#2e476b] bg-[#080d16] shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
            >
              {/* Titlebar */}
              <div className="flex items-center justify-between gap-2 border-b border-[#1e2d44] bg-[#0d1524] px-4 py-3 font-mono text-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="hidden sm:flex items-center gap-1.5 shrink-0" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <Sparkles className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                  <span className="truncate font-semibold text-[#e6edf7]">
                    nikunj-agent v2.7 — 21-Project Knowledge Base
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden md:inline-block rounded border border-emerald-400/35 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-300">
                    {engineBadge}
                  </span>
                  <button
                    type="button"
                    onClick={handleClear}
                    title="Clear transcript (Cmd+L)"
                    className="inline-flex items-center gap-1 rounded border border-[#1e2d44] px-2 py-1 text-[11px] text-[#9bb0cc] hover:border-cyan-400 hover:text-cyan-300 cursor-pointer"
                  >
                    <Trash2 className="h-3 w-3" />
                    <span className="hidden sm:inline">Clear</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close AI overlay"
                    className="inline-flex items-center gap-1 rounded border border-cyan-400/40 px-2 py-1 text-[11px] text-cyan-300 hover:bg-cyan-400/15 cursor-pointer"
                  >
                    <X className="h-3.5 w-3.5" />
                    <span>ESC</span>
                  </button>
                </div>
              </div>

              {/* Quick Prompts */}
              <div className="flex flex-wrap items-center gap-1.5 border-b border-[#1e2d44] bg-[#0b111c] px-4 py-2.5">
                {QUICK_PROMPTS.map((qp) => (
                  <button
                    key={qp.label}
                    type="button"
                    onClick={() => sendQuery(qp.prompt)}
                    className="rounded-full border border-[#1e2d44] bg-[#101929] px-2.5 py-1 font-mono text-[11px] text-[#9bb0cc] transition-colors hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 cursor-pointer whitespace-nowrap"
                  >
                    {qp.label}
                  </button>
                ))}
              </div>

              {/* Chat Transcript */}
              <div
                ref={logRef}
                role="log"
                aria-live="polite"
                className="flex-1 space-y-4 overflow-y-auto bg-[#060a10] p-4 sm:p-5"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col gap-1 ${
                      msg.role === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[#647a99]">
                      {msg.role === "user"
                        ? "guest@recruiter"
                        : `nikunj-agent [${msg.provider || "ready"}]`}
                    </span>

                    {msg.role === "user" ? (
                      <div className="max-w-[88%] rounded-xl border border-cyan-400/35 bg-cyan-400/10 px-3.5 py-2.5 font-mono text-xs sm:text-sm text-[#e6edf7]">
                        {msg.content}
                      </div>
                    ) : (
                      <div
                        className="agent-markdown max-w-[94%] rounded-xl border border-[#1e2d44] bg-[#0b111c] px-4 py-3 text-xs sm:text-sm leading-relaxed text-[#e6edf7]"
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                      />
                    )}
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                    <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
                    <span>Synthesizing answer from portfolio memory...</span>
                  </div>
                )}
              </div>

              {/* Quick Jump Results when typing a project/tech name */}
              {matchedProjects.length > 0 && (
                <div className="border-t border-[#1e2d44] bg-[#0b111c] px-4 py-2">
                  <div className="mb-1 font-mono text-[10px] text-[#647a99]">
                    QUICK JUMP TO PROJECT MODAL:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {matchedProjects.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          onClose();
                          onSelectProject(p);
                        }}
                        className="inline-flex items-center gap-1 rounded-md border border-[#2e476b] bg-[#101929] px-2.5 py-1 font-mono text-[11px] text-cyan-300 hover:border-cyan-400 cursor-pointer"
                      >
                        <span>{p.title.split(":")[0]}</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendQuery(input);
                }}
                className="flex items-center gap-2.5 border-t border-[#1e2d44] bg-[#0d1524] p-3 sm:p-4"
              >
                <span className="hidden sm:inline font-mono text-xs font-semibold text-emerald-400 whitespace-nowrap">
                  guest:~$
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about AI + Cybersecurity, TrustGate, miniSOC, or type /help..."
                  className="flex-1 rounded-lg border border-[#1e2d44] bg-[#060a10] px-3 py-2.5 font-mono text-xs sm:text-sm text-[#e6edf7] placeholder:text-[#647a99] focus:border-cyan-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-400 px-3.5 py-2.5 font-mono text-xs font-semibold text-[#041017] transition-all hover:bg-cyan-300 disabled:opacity-50 cursor-pointer whitespace-nowrap"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Ask</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
