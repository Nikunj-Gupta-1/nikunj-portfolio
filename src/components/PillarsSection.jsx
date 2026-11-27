import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Filter, Terminal } from "lucide-react";
import { PILLARS } from "../data/portfolioData";
import SpotlightCard from "./SpotlightCard";

export default function PillarsSection({ onFilterPillar, onAskPillar }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [pinnedId, setPinnedId] = useState(null);

  return (
    <section id="pillars" className="mx-auto w-full max-w-[1240px] px-4 py-12 sm:px-6">
      <div className="mb-7">
        <div className="font-mono text-xs tracking-wider text-cyan-400">
          01 // CORE_ENGINEERING_VERTICALS
        </div>
        <h2 className="mt-1 font-mono text-2xl font-bold text-[#e6edf7] sm:text-3xl">
          Core Engineering Verticals
        </h2>
        <p className="mt-1.5 max-w-2xl text-sm text-[#9bb0cc]">
          Hover or click a vertical to inspect technical highlights, or filter the visual showcase below.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {PILLARS.map((pillar, idx) => {
          const isPinned = pinnedId === pillar.id;
          const isOpen = hoveredId === pillar.id || isPinned;
          const borderTop =
            pillar.accent === "amber"
              ? "border-t-2 border-t-amber-400"
              : pillar.accent === "emerald"
                ? "border-t-2 border-t-emerald-400"
                : "border-t-2 border-t-cyan-400";

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <SpotlightCard
                accent={pillar.accent}
                onMouseEnter={() => setHoveredId(pillar.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`flex h-full flex-col justify-between p-5 ${borderTop}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-semibold text-[#647a99]">
                      {pillar.badge}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPinnedId(isPinned ? null : pillar.id)}
                      aria-expanded={isOpen}
                      aria-label={`Toggle highlights for ${pillar.title}`}
                      className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[10px] text-[#9bb0cc] hover:bg-[#101929] hover:text-cyan-300 cursor-pointer"
                    >
                      <span>{isPinned ? "Pin Off" : isOpen ? "Hide" : "Specs"}</span>
                      <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  <h3 className="mt-2 font-mono text-lg font-bold text-[#e6edf7]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9bb0cc]">
                    {pillar.summary}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="mt-3 space-y-1.5 overflow-hidden border-t border-[#1e2d44] pt-3 text-xs text-[#9bb0cc]"
                      >
                        {pillar.highlights.map((h) => (
                          <li key={h} className="flex gap-2">
                            <span className="text-cyan-400">▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-[#1e2d44]/70">
                  <button
                    type="button"
                    onClick={() => onFilterPillar(pillar.id)}
                    className="inline-flex items-center gap-1.5 rounded-md border border-[#2e476b] bg-[#101929] px-3 py-1.5 font-mono text-xs font-semibold text-[#e6edf7] transition-colors hover:border-cyan-400 hover:text-cyan-300 cursor-pointer whitespace-nowrap"
                  >
                    <Filter className="h-3.5 w-3.5" />
                    <span>Filter Projects</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onAskPillar(`Tell me about Nikunj's projects and experience in ${pillar.title}.`)
                    }
                    className="inline-flex items-center gap-1.5 rounded-md border border-[#1e2d44] px-3 py-1.5 font-mono text-xs text-[#9bb0cc] transition-colors hover:border-cyan-400/50 hover:text-cyan-300 cursor-pointer whitespace-nowrap"
                  >
                    <Terminal className="h-3.5 w-3.5" />
                    <span>Ask AI</span>
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
