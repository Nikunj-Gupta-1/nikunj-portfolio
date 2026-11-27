import { useRef, useState } from "react";

/**
 * Mouse-tracking radial spotlight card matching the Obsidian Command-Center palette.
 */
export default function SpotlightCard({
  children,
  className = "",
  accent = "cyan",
  onClick,
  as: Component = "div",
  ...rest
}) {
  const ref = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, active: false });

  const glowColor =
    accent === "amber"
      ? "rgba(245, 158, 11, 0.16)"
      : accent === "emerald"
        ? "rgba(16, 185, 129, 0.16)"
        : "rgba(34, 211, 238, 0.16)";

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  }

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCoords((prev) => ({ ...prev, active: false }))}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl border border-[#1e2d44] bg-[#0b111c]/95 transition-colors duration-300 hover:border-[#2e476b] ${className}`}
      {...rest}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: coords.active ? 1 : 0,
          background: `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 60%)`
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}
