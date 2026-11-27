import { useCallback, useState } from "react";
import { MotionConfig } from "motion/react";
import { PROFILE } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PillarsSection from "./components/PillarsSection";
import ProjectsSection from "./components/ProjectsSection";
import ProjectModal from "./components/ProjectModal";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import FloatingAgent from "./components/FloatingAgent";

export default function App() {
  const [projectFilter, setProjectFilter] = useState("featured");
  const [selectedProject, setSelectedProject] = useState(null);
  const [agentState, setAgentState] = useState({ open: false, prompt: "" });

  const openAgent = useCallback((prompt = "") => {
    setAgentState({ open: true, prompt });
  }, []);

  const closeAgent = useCallback(() => {
    setAgentState((prev) => ({ ...prev, open: false }));
  }, []);

  const handleFilterPillar = useCallback((pillarId) => {
    setProjectFilter(pillarId);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-grid" aria-hidden="true" />

      <div id="top" className="relative z-10 min-h-screen flex flex-col">
        <Navbar onOpenAgent={openAgent} />

        <main className="flex-1">
          <Hero onOpenAgent={openAgent} />
          <PillarsSection
            onFilterPillar={handleFilterPillar}
            onAskPillar={(prompt) => openAgent(prompt)}
          />
          <ProjectsSection
            activeFilter={projectFilter}
            onChangeFilter={setProjectFilter}
            onSelectProject={setSelectedProject}
            onAskProject={(prompt) => openAgent(prompt)}
          />
          <ExperienceSection />
          <SkillsSection onSelectProject={setSelectedProject} />
          <ContactSection />
        </main>

        <footer className="border-t border-[#1e2d44] bg-[#05080d] pt-6 pb-20 sm:pb-8">
          <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-4 px-4 font-mono text-xs text-[#647a99] sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              <span>NIKUNJ GUPTA // AI + CYBERSECURITY COMMAND-CENTER</span>
            </div>
            <div className="flex gap-5 text-[#9bb0cc]">
              <a href={`mailto:${PROFILE.links.email}`} className="hover:text-cyan-300">
                {PROFILE.links.email}
              </a>
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300"
              >
                GitHub
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onAskProject={(prompt) => openAgent(prompt)}
      />

      <FloatingAgent
        isOpen={agentState.open}
        initialPrompt={agentState.prompt}
        onOpen={openAgent}
        onClose={closeAgent}
        onSelectProject={setSelectedProject}
      />
    </MotionConfig>
  );
}
