import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Award, ChevronDown, Cpu, GraduationCap } from "lucide-react";
import {
  ARCHIVE_PROJECTS,
  FLAGSHIP_PROJECTS,
  LEADERSHIP_AND_CERTS,
  PROFILE,
  SKILL_GROUPS,
  SKILL_PROJECT_MAP
} from "../data/portfolioData";
import SpotlightCard from "./SpotlightCard";

const TAB_LABELS = [
  "AI & Agents",
  "Cybersecurity & VAPT",
  "ML & Computer Vision",
  "Systems, IoT & Web"
];

export default function SkillsSection({ onSelectProject }) {
  const [activeGroupIdx, setActiveGroupIdx] = useState(0);
  const [activeSkill, setActiveSkill] = useState(SKILL_GROUPS[0].items[0]);
  const [showCoursework, setShowCoursework] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);

  const projectMap = useMemo(() => {
    const all = [
      ...FLAGSHIP_PROJECTS,
      ...ARCHIVE_PROJECTS.map((p, idx) => ({
        ...p,
        code: `ARC-0${idx + 1}`,
        pillarLabel: p.pillar === "ai-data" ? "AI & RAG" : p.pillar === "cyber-sec" ? "Cybersecurity" : "Systems & IoT",
        subtitle: p.metrics.slice(0, 2).join(" • ")
      }))
    ];
    return Object.fromEntries(all.map((p) => [p.id, p]));
  }, []);

  const row1Skills = useMemo(() => [...SKILL_GROUPS[0].items, ...SKILL_GROUPS[1].items.slice(0, 5)], []);
  const row2Skills = useMemo(() => [...SKILL_GROUPS[2].items, ...SKILL_GROUPS[3].items], []);

  const currentGroup = SKILL_GROUPS[activeGroupIdx] || SKILL_GROUPS[0];
  const linkedProjectIds = SKILL_PROJECT_MAP[activeSkill] || [];
  const linkedProjects = linkedProjectIds.map((id) => projectMap[id]).filter(Boolean);

  return (
    <section id="skills" className="mx-auto w-full max-w-[1240px] px-4 py-12 sm:px-6">
      <div className="mb-7">
        <div className="font-mono text-xs tracking-wider text-cyan-400">
          04 // SYSTEM_CAPABILITIES_&_ACADEMICS
        </div>
        <h2 className="mt-1 font-mono text-2xl font-bold text-[#e6edf7] sm:text-3xl">
          Interactive Tech Stack &amp; Credentials
        </h2>
        <p className="mt-1.5 max-w-2xl text-sm text-[#9bb0cc]">
          Select a domain tab and hover or click any skill badge to trace the exact builds where it was deployed.
        </p>
      </div>

      {/* Dual-Row Pause-on-Hover Infinite Marquee */}
      <div className="marquee-wrapper mb-6 overflow-hidden rounded-xl border border-[#1e2d44] bg-[#080d16] py-3.5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee mb-2.5 flex gap-2.5">
          {[...row1Skills, ...row1Skills].map((item, i) => (
            <span
              key={`r1-${i}`}
              className="rounded-md border border-cyan-400/20 bg-[#0b111c] px-3 py-1 font-mono text-xs text-cyan-300 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="animate-marquee-reverse flex gap-2.5">
          {[...row2Skills, ...row2Skills].map((item, i) => (
            <span
              key={`r2-${i}`}
              className="rounded-md border border-emerald-400/20 bg-[#0b111c] px-3 py-1 font-mono text-xs text-emerald-300 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Domain Tabs + Skill Chips + Provenance Bar */}
      <SpotlightCard accent="cyan" className="mb-6 p-5 sm:p-6">
        <div className="mb-5 flex flex-wrap gap-1.5 border-b border-[#1e2d44] pb-4">
          {SKILL_GROUPS.map((group, idx) => {
            const isActive = idx === activeGroupIdx;
            return (
              <button
                key={group.category}
                type="button"
                onClick={() => {
                  setActiveGroupIdx(idx);
                  setActiveSkill(group.items[0]);
                }}
                className={`relative rounded-lg px-3.5 py-2 font-mono text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  isActive ? "text-[#041017]" : "text-[#9bb0cc] hover:text-[#e6edf7]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTab"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-lg bg-cyan-400"
                  />
                )}
                <span className="relative z-10">{TAB_LABELS[idx] || group.category}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentGroup.category}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="flex flex-wrap gap-2"
          >
            {currentGroup.items.map((skill) => {
              const selected = activeSkill === skill;
              return (
                <button
                  key={skill}
                  type="button"
                  onMouseEnter={() => setActiveSkill(skill)}
                  onClick={() => setActiveSkill(skill)}
                  className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                    selected
                      ? "border-cyan-400 bg-cyan-400/15 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.18)]"
                      : "border-[#1e2d44] bg-[#101929] text-[#cbd5e1] hover:border-[#2e476b] hover:text-white"
                  }`}
                >
                  {skill}
                </button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Provenance Bar: Shows Projects Using Selected Skill */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5 rounded-lg border border-[#1e2d44] bg-[#080d16] px-4 py-3">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400">
            <Cpu className="h-3.5 w-3.5" />
            <span>DEPLOYED IN ({activeSkill}):</span>
          </div>
          {linkedProjects.length > 0 ? (
            linkedProjects.map((proj) => (
              <button
                key={proj.id}
                type="button"
                onClick={() => onSelectProject(proj)}
                className="inline-flex items-center gap-1 rounded-md border border-[#2e476b] bg-[#101929] px-2.5 py-1 font-mono text-[11px] font-medium text-cyan-300 transition-colors hover:border-cyan-400 hover:bg-cyan-400/10 cursor-pointer"
              >
                <span>{proj.title.split(":")[0]}</span>
                <ArrowUpRight className="h-3 w-3" />
              </button>
            ))
          ) : (
            <span className="font-mono text-xs text-[#9bb0cc]">
              Applied across enterprise VAPT &amp; systems internships
            </span>
          )}
        </div>
      </SpotlightCard>

      {/* Education + Leadership Bento Row */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <SpotlightCard accent="cyan" className="p-5 lg:col-span-7">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
              <GraduationCap className="h-4 w-4" />
              <span>EDUCATION // BITS_PILANI_DUBAI</span>
            </div>
            <span className="rounded bg-cyan-400/10 px-2 py-0.5 font-mono text-xs font-bold text-cyan-300">
              CGPA {PROFILE.education.cgpa}
            </span>
          </div>

          <h3 className="mt-2.5 font-mono text-base sm:text-lg font-bold text-[#e6edf7]">
            {PROFILE.education.institution}
          </h3>
          <p className="mt-1 font-mono text-xs text-emerald-400">
            {PROFILE.education.degree} • {PROFILE.education.graduation}
          </p>

          <button
            type="button"
            onClick={() => setShowCoursework(!showCoursework)}
            className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-[#1e2d44] bg-[#101929] px-3 py-1.5 font-mono text-xs text-[#9bb0cc] hover:border-cyan-400/50 hover:text-cyan-300 cursor-pointer"
          >
            <span>{showCoursework ? "Hide Key Coursework" : `View ${PROFILE.education.coursework.length} Core Courses`}</span>
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showCoursework ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {showCoursework && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 flex flex-wrap gap-1.5 overflow-hidden border-t border-[#1e2d44] pt-3"
              >
                {PROFILE.education.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded border border-[#1e2d44] bg-[#080d16] px-2 py-0.5 font-mono text-[11px] text-[#9bb0cc]"
                  >
                    {c}
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </SpotlightCard>

        <SpotlightCard accent="amber" className="p-5 lg:col-span-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
              <Award className="h-4 w-4" />
              <span>CERTS_&_LEADERSHIP</span>
            </div>
            <button
              type="button"
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="font-mono text-[11px] text-[#9bb0cc] hover:text-cyan-300 cursor-pointer"
            >
              {showAllCerts ? "Collapse" : "Show all (5)"}
            </button>
          </div>

          <ul className="mt-3 space-y-2 text-xs leading-relaxed text-[#cbd5e1]">
            {(showAllCerts ? LEADERSHIP_AND_CERTS : LEADERSHIP_AND_CERTS.slice(0, 3)).map((cert) => (
              <li key={cert} className="flex gap-2">
                <span className="text-amber-400">▸</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </SpotlightCard>
      </div>
    </section>
  );
}
