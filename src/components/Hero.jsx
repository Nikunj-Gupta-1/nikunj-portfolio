import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Command, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { PROFILE } from "../data/portfolioData";
import SpotlightCard from "./SpotlightCard";

const ROLES = [
  "AI Agents & Multi-Agent Runtimes",
  "Neuro-Symbolic AI Security (TrustGate)",
  "Enterprise VAPT & Network Threat ML",
  "Distributed Systems & Edge Robotics"
];

const EXPERIENCE_TAGS = [
  "Jio Platforms (VAPT)",
  "Leo Technosoft (Threat ML)",
  "Hiroshima Univ. (Robotics)",
  "BITS Pilani Dubai (TA)"
];

export default function Hero({ onOpenAgent }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 pt-6 pb-8 sm:px-6 sm:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="overflow-hidden rounded-2xl border border-[#1e2d44] bg-[#080d16]/95 shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between gap-3 border-b border-[#1e2d44] bg-[#0d1524] px-4 py-2.5 font-mono text-xs text-[#9bb0cc]">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="truncate text-[11px] sm:text-xs">
            session: nikunj_gupta_portfolio.sh — zsh
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 rounded border border-emerald-400/35 bg-emerald-400/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            AVAILABLE 2026/2027
          </div>
        </div>

        <div className="p-5 sm:p-8">
          <div className="mb-6 border-b border-dashed border-[#1e2d44] pb-3.5 font-mono text-xs sm:text-sm">
            <span className="font-semibold text-emerald-400">nikunj@bits-dubai</span>
            <span className="text-[#647a99]">:</span>
            <span className="text-cyan-400">~/portfolio</span>
            <span className="text-[#647a99]">$ </span>
            <span className="text-[#e6edf7]">./inspect_engineer --focus=&quot;AI + Cybersecurity&quot;</span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Crisp Identity & CTAs */}
            <div className="space-y-5 lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-md border border-[#1e2d44] bg-[#101929] px-3 py-1.5 font-mono text-[11px] text-[#9bb0cc]">
                <span>B.E. COMPUTER SCIENCE + DATA SCIENCE @ BITS PILANI DUBAI</span>
              </div>

              <div>
                <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  NIKUNJ{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                    GUPTA
                  </span>
                </h1>

                <div className="mt-3 flex min-h-7 items-center gap-2 font-mono text-sm sm:text-base text-cyan-300">
                  <Sparkles className="h-4 w-4 shrink-0 text-amber-400" />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROLES[roleIndex]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28 }}
                      className="leading-snug"
                    >
                      {ROLES[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-[#9bb0cc] sm:text-base">
                Engineering at the intersection of <strong className="text-[#e6edf7]">Autonomous AI</strong> and{" "}
                <strong className="text-[#e6edf7]">Offensive/Defensive Security</strong> — from multi-agent coding
                runtimes and neuro-symbolic vulnerability gates to enterprise VAPT and real-time network threat
                detection pipelines.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenAgent("")}
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan-400 bg-cyan-400 px-4 py-2.5 font-mono text-xs sm:text-sm font-semibold text-[#041017] shadow-[0_0_24px_rgba(34,211,238,0.28)] transition-all hover:bg-cyan-300 active:translate-y-px cursor-pointer whitespace-nowrap"
                >
                  <Command className="h-4 w-4" />
                  <span>Ask AI Agent</span>
                </button>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#2e476b] bg-[#101929] px-4 py-2.5 font-mono text-xs sm:text-sm font-semibold text-[#e6edf7] transition-colors hover:border-cyan-400 hover:text-cyan-300 whitespace-nowrap"
                >
                  <span>Explore Systems</span>
                  <ArrowDown className="h-4 w-4" />
                </a>

                <a
                  href="#resumes"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#1e2d44] bg-transparent px-4 py-2.5 font-mono text-xs sm:text-sm font-semibold text-[#9bb0cc] transition-colors hover:border-[#9bb0cc] hover:text-[#e6edf7] whitespace-nowrap"
                >
                  <span>Resumes</span>
                  <Download className="h-4 w-4" />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 font-mono text-xs text-[#9bb0cc]">
                <a
                  href={`mailto:${PROFILE.links.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-300"
                >
                  <Mail className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{PROFILE.links.email}</span>
                </a>
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-cyan-300"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
                </a>
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-cyan-300"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
                </a>
                <span className="inline-flex items-center gap-1 text-[#647a99]">
                  <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Dubai, UAE</span>
                </span>
              </div>
            </div>

            {/* Right Column: Clean Portrait Showcase */}
            <div className="lg:col-span-5">
              <SpotlightCard accent="cyan" className="p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-xl border border-[#2e476b] bg-[#060a10] aspect-[4/3] sm:aspect-[5/4]">
                  <img
                    src={PROFILE.photo}
                    alt="Nikunj Gupta"
                    className="h-full w-full object-cover object-[center_22%] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-[#e6edf7]">
                      Nikunj Gupta
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-[#060a10]/85 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-300 backdrop-blur-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Dubai, UAE
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {EXPERIENCE_TAGS.map((tag) => (
                    <a
                      key={tag}
                      href="#experience"
                      className="rounded-md border border-[#1e2d44] bg-[#101929] px-2.5 py-1 font-mono text-[11px] text-[#9bb0cc] transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
