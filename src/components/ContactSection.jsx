import { useState } from "react";
import { Download, Send, CheckCircle2 } from "lucide-react";
import { PROFILE, RESUME_TRACKS } from "../data/portfolioData";
import SpotlightCard from "./SpotlightCard";

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    setSubmitting(true);
    setStatus("Transmitting payload...");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      if (res.ok) {
        setStatus("[200 OK] Transmission received! Nikunj will reply shortly.");
        form.reset();
      } else {
        throw new Error("Non-200 status");
      }
    } catch {
      const name = formData.get("name") || "";
      const domain = formData.get("domain") || "";
      const message = formData.get("message") || "";
      const subject = encodeURIComponent(`Portfolio Inquiry [${domain}] from ${name}`);
      const body = encodeURIComponent(String(message));
      window.location.href = `mailto:${PROFILE.links.email}?subject=${subject}&body=${body}`;
      setStatus("Opened mail client (live capture runs automatically on Netlify).");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="resumes" className="mx-auto w-full max-w-[1240px] px-4 py-12 sm:px-6">
      <div className="mb-7">
        <div className="font-mono text-xs tracking-wider text-cyan-400">
          05 // RESUME_ARTIFACTS_&_DIRECT_TRANSMISSION
        </div>
        <h2 className="mt-1 font-mono text-2xl font-bold text-[#e6edf7] sm:text-3xl">
          Role-Tailored Resumes &amp; Direct Contact
        </h2>
        <p className="mt-1.5 max-w-2xl text-sm text-[#9bb0cc]">
          Download the public-safe PDF track tailored to your team, or send a message directly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
        {/* 3 Sanitized Resume Tracks */}
        <div className="space-y-3.5 lg:col-span-6">
          {RESUME_TRACKS.map((track) => (
            <SpotlightCard key={track.id} accent="cyan" className="p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <span className="font-mono text-[10px] font-semibold text-cyan-400">
                    {track.tag}
                  </span>
                  <h3 className="mt-0.5 font-mono text-sm sm:text-base font-bold text-[#e6edf7]">
                    {track.label}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#9bb0cc] line-clamp-2">
                    {track.focus}
                  </p>
                </div>

                <a
                  href={track.filename}
                  download
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-[#2e476b] bg-[#101929] px-3.5 py-2 font-mono text-xs font-semibold text-[#e6edf7] transition-colors hover:border-cyan-400 hover:text-cyan-300 whitespace-nowrap"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>PDF</span>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Netlify Contact Form */}
        <SpotlightCard accent="emerald" className="p-5 sm:p-6 lg:col-span-6">
          <div className="mb-4 border-b border-[#1e2d44] pb-3 font-mono text-xs text-cyan-400">
            NETLIFY_FORMS // SEND_MESSAGE
          </div>

          <form
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="portfolio-contact" />
            <p className="sr-only">
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="senderName" className="mb-1.5 block font-mono text-[11px] text-[#9bb0cc]">
                NAME / ORGANIZATION *
              </label>
              <input
                type="text"
                id="senderName"
                name="name"
                required
                autoComplete="name"
                placeholder="Jane Doe // Security Engineering"
                className="w-full rounded-lg border border-[#1e2d44] bg-[#080d16] px-3 py-2.5 font-mono text-xs sm:text-sm text-[#e6edf7] placeholder:text-[#647a99] focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="senderEmail" className="mb-1.5 block font-mono text-[11px] text-[#9bb0cc]">
                RETURN EMAIL *
              </label>
              <input
                type="email"
                id="senderEmail"
                name="email"
                required
                autoComplete="email"
                placeholder="jane@company.com"
                className="w-full rounded-lg border border-[#1e2d44] bg-[#080d16] px-3 py-2.5 font-mono text-xs sm:text-sm text-[#e6edf7] placeholder:text-[#647a99] focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="rolePillar" className="mb-1.5 block font-mono text-[11px] text-[#9bb0cc]">
                PRIMARY DOMAIN OF INTEREST
              </label>
              <select
                id="rolePillar"
                name="domain"
                className="w-full rounded-lg border border-[#1e2d44] bg-[#080d16] px-3 py-2.5 font-mono text-xs sm:text-sm text-[#e6edf7] focus:border-cyan-400 focus:outline-none"
              >
                <option value="AI + Cybersecurity (Security Agents, VAPT & Threat ML)">
                  AI + Cybersecurity (Security Agents, VAPT &amp; Threat ML)
                </option>
                <option value="AI Agents, LLMs & Data Science">
                  01. AI Agents, LLMs &amp; Data Science
                </option>
                <option value="Cybersecurity, VAPT & Security Engineering">
                  02. Cybersecurity, VAPT &amp; Security Engineering
                </option>
                <option value="Distributed Systems, ML & Software Engineering">
                  03. Distributed Systems, ML &amp; Software Engineering
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="senderMessage" className="mb-1.5 block font-mono text-[11px] text-[#9bb0cc]">
                MESSAGE *
              </label>
              <textarea
                id="senderMessage"
                name="message"
                required
                rows={3}
                placeholder="Hi Nikunj, reaching out regarding an AI + Cybersecurity / SWE role..."
                className="w-full rounded-lg border border-[#1e2d44] bg-[#080d16] px-3 py-2.5 font-mono text-xs sm:text-sm text-[#e6edf7] placeholder:text-[#647a99] focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-400 bg-cyan-400 px-4 py-2.5 font-mono text-xs sm:text-sm font-semibold text-[#041017] transition-all hover:bg-cyan-300 disabled:opacity-60 cursor-pointer whitespace-nowrap"
              >
                <Send className="h-4 w-4" />
                <span>{submitting ? "Sending..." : "Transmit Message"}</span>
              </button>

              {status && (
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>{status}</span>
                </span>
              )}
            </div>
          </form>
        </SpotlightCard>
      </div>
    </section>
  );
}
