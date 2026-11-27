import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Layers, Terminal, X } from "lucide-react";
import { PROJECT_MEDIA } from "../data/portfolioData";
import ProjectVisualBanner from "./ProjectVisualBanner";

function renderInlineText(text) {
  const parts = String(text || "").split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={idx}
          className="rounded bg-cyan-400/15 px-1.5 py-0.5 font-mono text-[0.88em] text-cyan-300"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-[#e6edf7]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

const TABS = [
  { id: "overview", label: "Overview & Visuals" },
  { id: "architecture", label: "System Architecture" },
  { id: "details", label: "Engineering Deep-Dive" }
];

export default function ProjectModal({ project, onClose, onAskProject }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    setActiveTab("overview");
    setGalleryIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  if (!project) return null;

  const media = PROJECT_MEDIA[project.id] || {};
  const gallery = media.gallery || [];
  const hasGallery = gallery.length > 0;
  const activeSlide = hasGallery ? gallery[galleryIndex % gallery.length] : null;

  const availableTabs = project.architecture
    ? TABS
    : TABS.filter((t) => t.id !== "architecture");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="projectModalTitle"
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#2e476b] bg-[#080d16] shadow-[0_25px_75px_rgba(0,0,0,0.85)]"
        >
          {/* Modal Terminal Titlebar */}
          <div className="flex items-center justify-between gap-3 border-b border-[#1e2d44] bg-[#0d1524] px-4 py-3 font-mono text-xs">
            <div className="flex items-center gap-2 min-w-0">
              <div className="hidden sm:flex items-center gap-1.5 shrink-0" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="truncate text-cyan-300">
                {project.code} // {project.repoPath} // INSPECTOR
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="inline-flex items-center gap-1 rounded border border-cyan-400/40 px-2.5 py-1 text-[11px] text-cyan-300 hover:bg-cyan-400/15 cursor-pointer whitespace-nowrap"
            >
              <X className="h-3.5 w-3.5" />
              <span>ESC</span>
            </button>
          </div>

          {/* Header & Tabs */}
          <div className="border-b border-[#1e2d44] bg-[#0b111c] px-5 pt-5 pb-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 id="projectModalTitle" className="font-mono text-lg sm:text-xl font-bold text-[#e6edf7]">
                  {project.title}
                </h2>
                <p className="mt-1 font-mono text-xs text-emerald-400">
                  {project.subtitle} • {project.date}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#2e476b] bg-[#101929] px-3 py-1.5 font-mono text-xs font-semibold text-[#e6edf7] hover:border-cyan-400 hover:text-cyan-300 whitespace-nowrap"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onAskProject(`Give me a deep technical breakdown of ${project.title}.`);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-400 px-3 py-1.5 font-mono text-xs font-semibold text-[#041017] hover:bg-cyan-300 cursor-pointer whitespace-nowrap"
                >
                  <Terminal className="h-3.5 w-3.5" />
                  <span>Ask AI</span>
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {availableTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      isActive ? "text-[#041017]" : "text-[#9bb0cc] hover:text-[#e6edf7]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="modalTabIndicator"
                        className="absolute inset-0 rounded-lg bg-cyan-400"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
            {activeTab === "overview" && (
              <div className="space-y-5">
                {/* Media Gallery / Vector Header */}
                {hasGallery ? (
                  <div className="space-y-2.5">
                    <div className="relative overflow-hidden rounded-xl border border-[#1e2d44] bg-[#05080f]">
                      <img
                        src={activeSlide.src}
                        alt={activeSlide.caption || project.title}
                        className="max-h-80 w-full object-contain bg-[#060a10]"
                      />
                      {gallery.length > 1 && (
                        <>
                          <button
                            type="button"
                            aria-label="Previous image"
                            onClick={() =>
                              setGalleryIndex((i) => (i - 1 + gallery.length) % gallery.length)
                            }
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[#2e476b] bg-[#060a10]/85 p-1.5 text-[#e6edf7] hover:border-cyan-400 cursor-pointer"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            aria-label="Next image"
                            onClick={() => setGalleryIndex((i) => (i + 1) % gallery.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[#2e476b] bg-[#060a10]/85 p-1.5 text-[#e6edf7] hover:border-cyan-400 cursor-pointer"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs text-[#9bb0cc]">
                        {activeSlide.caption}
                      </span>
                      {gallery.length > 1 && (
                        <div className="flex gap-1.5">
                          {gallery.map((g, idx) => (
                            <button
                              key={g.src}
                              type="button"
                              onClick={() => setGalleryIndex(idx)}
                              className={`h-2 w-6 rounded-full transition-colors cursor-pointer ${
                                idx === galleryIndex ? "bg-cyan-400" : "bg-[#1e2d44]"
                              }`}
                              aria-label={`View slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-xl border border-[#1e2d44]">
                    <ProjectVisualBanner project={project} className="h-56" />
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-md border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 font-mono text-xs font-medium text-cyan-200"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-[#cbd5e1]">{renderInlineText(project.summary)}</p>
              </div>
            )}

            {activeTab === "architecture" && project.architecture && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#9bb0cc]">
                  <Layers className="h-4 w-4 text-cyan-400" />
                  <span>SYSTEM DATAFLOW &amp; PIPELINE DIAGRAM</span>
                </div>
                <pre className="arch-pre">
                  <code>{project.architecture}</code>
                </pre>
              </div>
            )}

            {activeTab === "details" && (
              <div className="space-y-5">
                {project.bullets && project.bullets.length > 0 ? (
                  <div>
                    <h3 className="mb-2.5 font-mono text-xs font-semibold tracking-wider text-cyan-400">
                      ENGINEERING &amp; IMPLEMENTATION HIGHLIGHTS
                    </h3>
                    <ul className="space-y-2.5 text-sm leading-relaxed text-[#cbd5e1]">
                      {project.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5">
                          <span className="mt-1 text-emerald-400">▸</span>
                          <span>{renderInlineText(b)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-[#cbd5e1]">{renderInlineText(project.summary)}</p>
                )}

                <div>
                  <h3 className="mb-2.5 font-mono text-xs font-semibold tracking-wider text-cyan-400">
                    COMPLETE TECH STACK
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#1e2d44] bg-[#101929] px-2.5 py-1 font-mono text-xs text-[#e6edf7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
