import { PROJECT_MEDIA } from "../data/portfolioData";

/**
 * Renders either the project's real cover image or an animated dark-obsidian
 * SVG technical illustration for projects without a static cover file.
 */
export default function ProjectVisualBanner({ project, className = "h-48 sm:h-52" }) {
  const media = PROJECT_MEDIA[project.id] || {};

  if (media.cover) {
    return (
      <div className={`relative w-full overflow-hidden bg-[#05080f] ${className}`}>
        <img
          src={media.cover}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b111c] via-[#0b111c]/20 to-transparent" />
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden bg-[#05080f] ${className}`}>
      <VectorProjectGraphic kind={media.visualKind} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b111c] via-transparent to-transparent" />
    </div>
  );
}

function VectorProjectGraphic({ kind }) {
  if (kind === "minisoc") {
    return (
      <svg viewBox="0 0 640 360" className="h-full w-full transition-transform duration-500 group-hover:scale-105">
        <defs>
          <radialGradient id="socGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#05080f" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="640" height="360" fill="#060a10" />
        <rect width="640" height="360" fill="url(#socGlow)" />
        <g stroke="#1e2d44" strokeWidth="1" opacity="0.55">
          {[60, 120, 180, 240, 300].map((y) => (
            <line key={y} x1="0" y1={y} x2="640" y2={y} />
          ))}
          {[100, 200, 300, 400, 500].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="360" />
          ))}
        </g>
        {/* Dual VM Topology */}
        <rect x="64" y="108" width="144" height="144" rx="14" fill="#0b111c" stroke="#f59e0b" strokeWidth="2" />
        <text x="136" y="150" textAnchor="middle" fill="#f59e0b" fontSize="13" fontFamily="JetBrains Mono" fontWeight="700">WIN EVAL VM</text>
        <text x="136" y="176" textAnchor="middle" fill="#9bb0cc" fontSize="11" fontFamily="JetBrains Mono">Sysmon + Agent</text>
        <rect x="92" y="196" width="88" height="24" rx="5" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeOpacity="0.5" />
        <text x="136" y="212" textAnchor="middle" fill="#fcd34d" fontSize="10" fontFamily="JetBrains Mono">4625 / EICAR</text>

        <path d="M 212 180 L 296 180" stroke="#22d3ee" strokeWidth="2.5" strokeDasharray="6 6" />
        <circle cx="254" cy="180" r="6" fill="#22d3ee" />

        <rect x="300" y="92" width="152" height="176" rx="14" fill="#0b111c" stroke="#22d3ee" strokeWidth="2" />
        <text x="376" y="134" textAnchor="middle" fill="#22d3ee" fontSize="13" fontFamily="JetBrains Mono" fontWeight="700">WAZUH 4.14</text>
        <text x="376" y="156" textAnchor="middle" fill="#9bb0cc" fontSize="11" fontFamily="JetBrains Mono">OpenSearch SIEM</text>
        <polyline points="322,216 346,192 368,208 394,174 426,198" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />

        <path d="M 456 180 L 502 180" stroke="#10b981" strokeWidth="2.5" />
        <polygon points="504,132 586,180 504,228" fill="#0b111c" stroke="#10b981" strokeWidth="2" />
        <text x="534" y="184" textAnchor="middle" fill="#10b981" fontSize="11" fontFamily="JetBrains Mono" fontWeight="700">AI</text>
      </svg>
    );
  }

  if (kind === "scotland") {
    return (
      <svg viewBox="0 0 640 360" className="h-full w-full transition-transform duration-500 group-hover:scale-105">
        <rect width="640" height="360" fill="#060a10" />
        <path d="M 40 280 Q 190 90 360 190 T 600 85" fill="none" stroke="#10b981" strokeWidth="3" strokeOpacity="0.85" />
        <path d="M 60 110 Q 240 240 420 120 T 590 250" fill="none" stroke="#22d3ee" strokeWidth="3" strokeOpacity="0.8" />
        <path d="M 110 310 C 210 210, 410 250, 520 60" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="8 6" />
        <circle cx="320" cy="180" r="88" fill="none" stroke="#22d3ee" strokeOpacity="0.2" strokeWidth="1.5" />
        <circle cx="320" cy="180" r="136" fill="none" stroke="#10b981" strokeOpacity="0.15" strokeWidth="1.5" />
        {[
          [175, 165, "#22d3ee"],
          [320, 180, "#f59e0b"],
          [445, 128, "#10b981"],
          [242, 232, "#10b981"],
          [505, 224, "#22d3ee"]
        ].map(([cx, cy, fill], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="12" fill={fill} fillOpacity="0.2" />
            <circle cx={cx} cy={cy} r="5.5" fill={fill} />
          </g>
        ))}
      </svg>
    );
  }

  if (kind === "netwatch") {
    return (
      <svg viewBox="0 0 640 360" className="h-full w-full transition-transform duration-500 group-hover:scale-105">
        <rect width="640" height="360" fill="#060a10" />
        <circle cx="195" cy="180" r="85" fill="none" stroke="#1e2d44" strokeWidth="14" />
        <circle cx="195" cy="180" r="85" fill="none" stroke="#22d3ee" strokeWidth="14" strokeDasharray="360 534" strokeLinecap="round" transform="rotate(-90 195 180)" />
        <circle cx="195" cy="180" r="56" fill="none" stroke="#f59e0b" strokeWidth="8" strokeDasharray="210 351" strokeLinecap="round" transform="rotate(20 195 180)" />
        <text x="195" y="186" textAnchor="middle" fill="#e6edf7" fontSize="16" fontFamily="JetBrains Mono" fontWeight="700">TCP/UDP</text>
        <rect x="330" y="76" width="248" height="208" rx="12" fill="#0b111c" stroke="#1e2d44" strokeWidth="2" />
        <polyline points="352,226 392,190 426,204 468,142 508,168 552,118" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
        <polyline points="352,248 400,236 446,244 494,210 552,222" fill="none" stroke="#22d3ee" strokeWidth="2" strokeOpacity="0.7" />
        <rect x="352" y="96" width="88" height="10" rx="5" fill="#22d3ee" fillOpacity="0.4" />
        <rect x="452" y="96" width="54" height="10" rx="5" fill="#f59e0b" fillOpacity="0.45" />
      </svg>
    );
  }

  if (kind === "aqi") {
    return (
      <svg viewBox="0 0 640 360" className="h-full w-full transition-transform duration-500 group-hover:scale-105">
        <rect width="640" height="360" fill="#060a10" />
        <path d="M 40 270 C 140 245, 190 120, 290 155 C 380 185, 450 85, 600 110" fill="none" stroke="#22d3ee" strokeWidth="3.5" />
        <path d="M 40 285 C 150 265, 220 185, 320 205 C 430 225, 480 140, 600 155" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6 6" />
        {[120, 220, 320, 420, 520].map((x, idx) => (
          <rect key={x} x={x} y={280 - (idx % 3) * 28} width="26" height={(idx % 3) * 28 + 44} rx="4" fill="#101929" stroke="#2e476b" />
        ))}
        <circle cx="468" cy="112" r="8" fill="#22d3ee" />
        <circle cx="468" cy="112" r="20" fill="#22d3ee" fillOpacity="0.18" />
      </svg>
    );
  }

  if (kind === "nextclass") {
    return (
      <svg viewBox="0 0 640 360" className="h-full w-full transition-transform duration-500 group-hover:scale-105">
        <rect width="640" height="360" fill="#060a10" />
        <rect x="88" y="48" width="464" height="36" rx="10" fill="#101929" stroke="#2e476b" />
        <circle cx="118" cy="66" r="6" fill="#10b981" />
        <text x="136" y="71" fill="#e6edf7" fontSize="13" fontFamily="JetBrains Mono">▶ CS F471 • 14m left</text>
        <rect x="138" y="104" width="364" height="204" rx="16" fill="#0b111c" stroke="#22d3ee" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="242" cy="206" r="56" fill="none" stroke="#1e2d44" strokeWidth="10" />
        <circle cx="242" cy="206" r="56" fill="none" stroke="#22d3ee" strokeWidth="10" strokeDasharray="245 352" strokeLinecap="round" transform="rotate(-90 242 206)" />
        <text x="242" y="212" textAnchor="middle" fill="#22d3ee" fontSize="18" fontFamily="JetBrains Mono" fontWeight="700">14:22</text>
        <rect x="330" y="148" width="142" height="16" rx="5" fill="#22d3ee" fillOpacity="0.25" />
        <rect x="330" y="182" width="120" height="12" rx="5" fill="#10b981" fillOpacity="0.3" />
        <rect x="330" y="210" width="132" height="12" rx="5" fill="#9bb0cc" fillOpacity="0.2" />
        <rect x="330" y="242" width="96" height="26" rx="6" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
      </svg>
    );
  }

  if (kind === "gesturedeck") {
    return (
      <svg viewBox="0 0 640 360" className="h-full w-full transition-transform duration-500 group-hover:scale-105">
        <rect width="640" height="360" fill="#060a10" />
        <g stroke="#22d3ee" strokeWidth="2.5" fill="none">
          <polyline points="170,275 170,195 142,125" />
          <polyline points="170,195 175,100" />
          <polyline points="170,195 212,108" />
          <polyline points="170,195 245,138" />
          <polyline points="170,235 120,185" />
        </g>
        {[
          [170, 275], [170, 195], [142, 125], [175, 100], [212, 108], [245, 138], [120, 185]
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="6.5" fill="#10b981" />
        ))}
        <path d="M 278 180 L 420 180" stroke="#22d3ee" strokeWidth="2.5" strokeDasharray="6 6" />
        <rect x="424" y="120" width="152" height="120" rx="14" fill="#0b111c" stroke="#10b981" strokeWidth="2" />
        <text x="500" y="172" textAnchor="middle" fill="#10b981" fontSize="14" fontFamily="JetBrains Mono" fontWeight="700">gRPC :50051</text>
        <text x="500" y="198" textAnchor="middle" fill="#9bb0cc" fontSize="11" fontFamily="JetBrains Mono">Protobuf Stream</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 640 360" className="h-full w-full transition-transform duration-500 group-hover:scale-105">
      <rect width="640" height="360" fill="#060a10" />
      <polygon points="320,56 444,128 444,232 320,304 196,232 196,128" fill="#0b111c" stroke="#22d3ee" strokeWidth="2" />
      <polygon points="320,104 396,148 396,212 320,256 244,212 244,148" fill="#101929" stroke="#f59e0b" strokeWidth="2" />
      <text x="320" y="185" textAnchor="middle" fill="#e6edf7" fontSize="15" fontFamily="JetBrains Mono" fontWeight="700">K8s RBAC</text>
    </svg>
  );
}
