import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Command, Menu, Terminal, X, ArrowUpRight, Download } from "lucide-react";
import { PROFILE, RESUME_TRACKS } from "../data/portfolioData";

const NAV_ITEMS = [
  { href: "#pillars", idx: "01", label: "Verticals" },
  { href: "#projects", idx: "02", label: "Projects" },
  { href: "#experience", idx: "03", label: "Experience" },
  { href: "#skills", idx: "04", label: "Skills" },
  { href: "#resumes", idx: "05", label: "Resumes" }
];

export default function Navbar({ onOpenAgent }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dubaiTime, setDubaiTime] = useState("DXB // UTC+4");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    restDelta: 0.001
  });

  useEffect(() => {
    function tick() {
      try {
        const str = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).format(new Date());
        setDubaiTime(`DXB // ${str} UTC+4`);
      } catch {
        setDubaiTime("DXB // UTC+4");
      }
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && drawerOpen) {
        setDrawerOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#1e2d44]/90 bg-[#060a10]/85 backdrop-blur-md">
        <motion.div
          style={{ scaleX }}
          className="h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400"
        />

        <div className="mx-auto flex h-14 w-full max-w-[1240px] items-center justify-between gap-3 px-4 sm:px-6 font-mono text-xs">
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-semibold text-[#e6edf7] transition-colors hover:text-cyan-300 whitespace-nowrap"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
            <span>nikunj@command-center</span>
            <span className="hidden sm:inline text-cyan-400">~ $</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-1.5 text-[#9bb0cc] transition-colors hover:bg-[#101929] hover:text-cyan-300 whitespace-nowrap"
              >
                <span className="mr-1 text-emerald-400/90">{item.idx}.</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden xl:inline-flex items-center rounded border border-[#1e2d44] bg-[#080d16] px-2.5 py-1 text-[11px] text-cyan-400 whitespace-nowrap">
              {dubaiTime}
            </span>

            <button
              type="button"
              onClick={() => onOpenAgent("")}
              className="inline-flex items-center gap-1.5 rounded-md border border-cyan-400/40 bg-cyan-400/10 px-3 py-1.5 font-mono text-xs font-medium text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-400/20 cursor-pointer whitespace-nowrap"
            >
              <Command className="h-3.5 w-3.5" />
              <span>K</span>
              <span className="hidden sm:inline">Ask AI Agent</span>
            </button>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              className="inline-flex items-center gap-1.5 rounded-md border border-[#2e476b] bg-[#101929] px-3 py-1.5 font-mono text-xs font-semibold text-[#e6edf7] transition-colors hover:border-cyan-400 hover:text-cyan-300 cursor-pointer whitespace-nowrap"
            >
              <Menu className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 32 }}
              aria-label="Command navigation drawer"
              className="relative z-10 flex h-full w-[min(22rem,85vw)] flex-col justify-between border-r border-[#2e476b] bg-[#0b111c] shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#1e2d44] bg-[#0d1524] px-4 py-3.5 font-mono text-xs">
                  <div className="flex items-center gap-2 font-bold text-[#e6edf7]">
                    <Terminal className="h-4 w-4 text-emerald-400" />
                    <span>COMMAND_MENU</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Close navigation menu"
                    className="inline-flex items-center gap-1 rounded border border-cyan-400/40 px-2 py-1 text-[11px] text-cyan-300 hover:bg-cyan-400/15 cursor-pointer whitespace-nowrap"
                  >
                    <X className="h-3.5 w-3.5" />
                    <span>ESC</span>
                  </button>
                </div>

                <div className="space-y-5 p-4 font-mono">
                  <div className="flex items-center justify-between rounded-lg border border-[#1e2d44] bg-[#101929] px-3 py-2 text-[11px]">
                    <span className="text-[#647a99]">TELEMETRY</span>
                    <span className="text-cyan-400">{dubaiTime}</span>
                  </div>

                  <div>
                    <div className="mb-2 text-[11px] tracking-wider text-[#647a99]">SECTIONS // JUMP_TO</div>
                    <ul className="space-y-1.5">
                      {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            onClick={() => setDrawerOpen(false)}
                            className="flex items-center gap-3 rounded-lg border border-transparent bg-white/[0.02] px-3 py-2.5 text-xs text-[#9bb0cc] transition-colors hover:border-[#2e476b] hover:bg-[#101929] hover:text-cyan-300"
                          >
                            <span className="text-emerald-400">{item.idx}</span>
                            <span>{item.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="mb-2 text-[11px] tracking-wider text-[#647a99]">QUICK RESUME PDFs</div>
                    <div className="space-y-2">
                      {RESUME_TRACKS.map((r) => (
                        <a
                          key={r.id}
                          href={r.filename}
                          download
                          className="flex items-center justify-between gap-2 rounded-lg border border-[#1e2d44] bg-[#101929] px-3 py-2 text-[11px] text-[#e6edf7] transition-colors hover:border-cyan-400 hover:text-cyan-300"
                        >
                          <span className="truncate">{r.label}</span>
                          <Download className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#1e2d44] bg-[#080d16] p-4 font-mono text-xs space-y-2">
                <a href={`mailto:${PROFILE.links.email}`} className="block text-[#9bb0cc] hover:text-cyan-300">
                  {PROFILE.links.email}
                </a>
                <div className="flex gap-4">
                  <a
                    href={PROFILE.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#9bb0cc] hover:text-cyan-300"
                  >
                    GitHub <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <a
                    href={PROFILE.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#9bb0cc] hover:text-cyan-300"
                  >
                    LinkedIn <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
