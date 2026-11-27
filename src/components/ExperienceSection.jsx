import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, MapPin } from "lucide-react";
import { EXPERIENCE } from "../data/portfolioData";
import SpotlightCard from "./SpotlightCard";

export default function ExperienceSection() {
  const [openId, setOpenId] = useState(EXPERIENCE[0]?.id || null);

  return (
    <section id="experience" className="mx-auto w-full max-w-[1240px] px-4 py-12 sm:px-6">
      <div className="mb-7">
        <div className="font-mono text-xs tracking-wider text-cyan-400">
          03 // EXECUTION_LOG: SECURITY_OPS_&_ENGINEERING
        </div>
        <h2 className="mt-1 font-mono text-2xl font-bold text-[#e6edf7] sm:text-3xl">
          Experience, Research &amp; Teaching
        </h2>
        <p className="mt-1.5 max-w-2xl text-sm text-[#9bb0cc]">
          Click any role to expand detailed engineering logs and operational impact.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {EXPERIENCE.map((item, idx) => {
          const isOpen = openId === item.id;
          const accent =
            item.pillar === "cyber-sec"
              ? "amber"
              : item.pillar === "systems-ml"
                ? "emerald"
                : "cyan";

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
            >
              <SpotlightCard
                accent={accent}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="cursor-pointer p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded bg-cyan-400/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-300">
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-[#647a99]">{item.period}</span>
                </div>

                <div className="mt-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-mono text-base font-bold text-[#e6edf7]">
                      {item.role}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs text-emerald-400">
                      <span>{item.organization}</span>
                      <span className="text-[#647a99]">•</span>
                      <span className="inline-flex items-center gap-1 text-[#9bb0cc]">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-label={`Toggle details for ${item.organization}`}
                    className="mt-1 rounded-md border border-[#1e2d44] bg-[#101929] p-1.5 text-[#9bb0cc] hover:border-cyan-400 hover:text-cyan-300 cursor-pointer"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {!isOpen && (
                  <p className="mt-2.5 text-xs text-[#9bb0cc] line-clamp-1">
                    {item.highlights[0]}
                  </p>
                )}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.24 }}
                      className="mt-4 space-y-2 overflow-hidden border-t border-[#1e2d44] pt-3.5 text-xs sm:text-sm leading-relaxed text-[#cbd5e1]"
                    >
                      {item.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="text-cyan-400">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
