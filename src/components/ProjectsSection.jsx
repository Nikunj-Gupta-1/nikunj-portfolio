import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Layers, Sparkles, Terminal } from "lucide-react";
import {
  ARCHIVE_PROJECTS,
  FEATURED_PROJECT_IDS,
  FLAGSHIP_PROJECTS
} from "../data/portfolioData";
import ProjectVisualBanner from "./ProjectVisualBanner";
import SpotlightCard from "./SpotlightCard";

const ALL_PROJECTS = [
  ...FLAGSHIP_PROJECTS.map((p) => ({ ...p, isArchive: false })),
  ...ARCHIVE_PROJECTS.map((p, idx) => ({
    ...p,
    code: `ARC-0${idx + 1}`,
    pillarLabel: p.pillar === "ai-data" ? "AI & RAG" : p.pillar === "cyber-sec" ? "Cybersecurity" : "Systems & IoT",
    subtitle: p.metrics.slice(0, 2).join(" • "),
    isArchive: true
  }))
];

const FEATURED_SET = new Set(FEATURED_PROJECT_IDS);

export default function ProjectsSection({
  activeFilter,
  onChangeFilter,
  onSelectProject,
  onAskProject
}) {
  const filterTabs = [
    { id: "featured", label: `Featured (${FEATURED_PROJECT_IDS.length})` },
    { id: "all", label: `All (${ALL_PROJECTS.length})` },
    { id: "ai-data", label: "AI & Agents" },
    { id: "cyber-sec", label: "Cybersecurity" },
    { id: "systems-ml", label: "Systems & ML" }
  ];

  const visibleProjects =
    activeFilter === "featured"
      ? ALL_PROJECTS.filter((p) => FEATURED_SET.has(p.id))
      : activeFilter === "all"
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter((p) => p.pillar === activeFilter);

  const isFeaturedBento = activeFilter === "featured";

  return (
    <section id="projects" className="mx-auto w-full max-w-[1240px] px-4 py-12 sm:px-6">
      <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="font-mono text-xs tracking-wider text-cyan-400">
            02 // VISUAL_SYSTEMS_SHOWCASE
          </div>
          <h2 className="mt-1 font-mono text-2xl font-bold text-[#e6edf7] sm:text-3xl">
            {isFeaturedBento ? "Featured Engineering Systems" : "Complete Engineering Catalog"}
          </h2>
          <p className="mt-1.5 max-w-lg text-sm text-[#9bb0cc]">
            Hover any card for quick actions, or click into a build to inspect diagrams, benchmarks, and full architecture notes.
          </p>
        </div>

        {/* Animated Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter projects"
          className="inline-flex shrink-0 flex-wrap gap-1 rounded-xl border border-[#1e2d44] bg-[#0b111c] p-1.5"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChangeFilter(tab.id)}
                className={`relative rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  isActive ? "text-[#041017]" : "text-[#9bb0cc] hover:text-[#e6edf7]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterPill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-lg bg-cyan-400"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bento / Grid */}
      <motion.div
        layout
        className={
          isFeaturedBento
            ? "grid grid-cols-1 gap-5 md:grid-cols-6"
            : "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        }
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => {
            const accent =
              project.pillar === "cyber-sec"
                ? "amber"
                : project.pillar === "systems-ml"
                  ? "emerald"
                  : "cyan";

            const spanClass = isFeaturedBento
              ? index < 2
                ? "md:col-span-3"
                : "md:col-span-2"
              : "";

            const imageHeight =
              isFeaturedBento && index < 2 ? "h-56 sm:h-64" : "h-44 sm:h-48";

            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className={spanClass}
              >
                <SpotlightCard
                  accent={accent}
                  onClick={() => onSelectProject(project)}
                  className="flex h-full cursor-pointer flex-col justify-between"
                >
                  <div>
                    {/* Visual Thumbnail Header + Hover Reveal Overlay */}
                    <div className="relative overflow-hidden border-b border-[#1e2d44]">
                      <ProjectVisualBanner project={project} className={imageHeight} />

                      {/* Top Badges */}
                      <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between gap-2 font-mono text-[10px]">
                        <span className="truncate rounded-md border border-cyan-400/30 bg-[#060a10]/85 px-2 py-0.5 font-bold text-cyan-300 backdrop-blur-xs">
                          [{project.code}] // {project.pillarLabel.toUpperCase()}
                        </span>
                        <span className="shrink-0 whitespace-nowrap rounded-md border border-[#1e2d44] bg-[#060a10]/85 px-2 py-0.5 text-[#9bb0cc] backdrop-blur-xs">
                          {project.date}
                        </span>
                      </div>

                      {/* Hover Overlay: Stack & Quick Actions (Hidden at Rest!) */}
                      <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-2 bg-gradient-to-t from-[#060a10]/95 via-[#060a10]/70 to-transparent p-3 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="flex flex-wrap gap-1">
                          {project.stack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="rounded border border-[#2e476b] bg-[#0b111c]/90 px-1.5 py-0.5 font-mono text-[10px] text-[#e6edf7]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onAskProject(
                                `Give me a concise technical breakdown of ${project.title} and its key metrics.`
                              );
                            }}
                            className="inline-flex items-center gap-1 rounded-md border border-[#2e476b] bg-[#0b111c]/90 px-2 py-1 font-mono text-[10px] font-semibold text-cyan-300 hover:border-cyan-400 cursor-pointer whitespace-nowrap"
                          >
                            <Terminal className="h-3 w-3" />
                            <span>Ask AI</span>
                          </button>
                          <span className="inline-flex items-center gap-1 rounded-md bg-cyan-400 px-2 py-1 font-mono text-[10px] font-semibold text-[#041017] whitespace-nowrap">
                            <span>Inspect</span>
                            <ArrowUpRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Minimal Card Body (No Text Walls!) */}
                    <div className="p-4 sm:p-5">
                      <h3 className="font-mono text-base font-bold leading-snug text-[#e6edf7] line-clamp-2 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-[#9bb0cc] line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Only 2 Key Metric Pills at Bottom */}
                  <div className="flex items-center justify-between gap-2 px-4 pb-4 sm:px-5 sm:pb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <span
                          key={metric}
                          className="rounded border border-[#1e2d44] bg-[#101929] px-2 py-0.5 font-mono text-[11px] text-[#e6edf7]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-[11px] text-cyan-400/80 opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">
                      Details →
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Expand / Collapse All 21 Projects Toggle */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => onChangeFilter(isFeaturedBento ? "all" : "featured")}
          className="inline-flex items-center gap-2 rounded-xl border border-[#2e476b] bg-[#0b111c] px-5 py-3 font-mono text-xs sm:text-sm font-semibold text-[#e6edf7] shadow-lg transition-all hover:border-cyan-400 hover:bg-[#101929] hover:text-cyan-300 cursor-pointer whitespace-nowrap"
        >
          {isFeaturedBento ? (
            <>
              <Layers className="h-4 w-4 text-cyan-400" />
              <span>View All {ALL_PROJECTS.length} Projects (Flagships + Archive)</span>
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>Show Featured {FEATURED_PROJECT_IDS.length} Only</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
