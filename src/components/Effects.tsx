import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { GitBranch, GitCommitHorizontal, Github } from "lucide-react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Count({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (reduced || value === 0) {
      setCount(value);
      return;
    }
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1000, 1);
      setCount(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, value, reduced]);
  return (
    <span ref={ref}>
      {count.toString().padStart(2, "0")}
      {suffix}
    </span>
  );
}

function createSpherePoints() {
  const points: { x: number; y: number; depth: number }[] = [];
  for (let lat = -75; lat <= 75; lat += 15) {
    for (let lon = 0; lon < 360; lon += 15) {
      const a = (lat * Math.PI) / 180;
      const b = (lon * Math.PI) / 180;
      const px = Math.cos(a) * Math.cos(b);
      const py = Math.sin(a);
      const pz = Math.cos(a) * Math.sin(b);
      points.push({
        x: Number((300 + px * 211 + pz * 27).toFixed(2)),
        y: Number((300 + py * 207 - pz * 46).toFixed(2)),
        depth: pz,
      });
    }
  }
  return points;
}

const points = createSpherePoints();

export function Sphere() {
  const [active, setActive] = useState("");
  return (
    <div className="sphere-scene">
      <div className="sphere-halo" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <svg className="sphere-mesh" viewBox="0 0 600 600" aria-hidden="true">
        <defs>
          <radialGradient id="sphereGlow">
            <stop stopColor="var(--accent)" stopOpacity=".025" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="meshColor" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="var(--sphere-mesh-start)" />
            <stop offset="1" stopColor="var(--sphere-mesh-end)" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="235" fill="url(#sphereGlow)" />
        {points.map((p, i) => {
          const next = points[Math.floor(i / 24) * 24 + ((i + 1) % 24)];
          const below = points[i + 24];
          return (
            <g key={i} opacity={p.depth > 0 ? 0.55 : 0.16}>
              <path
                d={`M${p.x},${p.y} L${next.x},${next.y}${below ? ` M${p.x},${p.y} L${below.x},${below.y}` : ""}`}
                stroke="url(#meshColor)"
                strokeWidth=".65"
                fill="none"
              />
              <circle
                cx={p.x}
                cy={p.y}
                r={p.depth > 0.4 ? 1.5 : 0.8}
                fill="var(--sphere-node)"
              />
            </g>
          );
        })}
        <ellipse
          cx="300"
          cy="300"
          rx="265"
          ry="80"
          transform="rotate(-27 300 300)"
          stroke="var(--accent)"
          strokeWidth="1"
          fill="none"
          opacity=".55"
        />
        <circle className="orbit-dot" cx="530" cy="182" r="5" fill="var(--cyan)" />
      </svg>
      <button
        className="sphere-tag tag-main"
        onMouseEnter={() => setActive("feat: start something great")}
        onMouseLeave={() => setActive("")}
        onFocus={() => setActive("feat: start something great")}
        onBlur={() => setActive("")}
        onClick={() => setActive(active ? "" : "feat: start something great")}
        aria-label="Explore the main branch commit"
      >
        <GitBranch size={14} />
        <span>main</span>
        <span className="tag-dot" />
      </button>
      <button
        className="sphere-tag tag-commit"
        onMouseEnter={() => setActive("feat: your next chapter")}
        onMouseLeave={() => setActive("")}
        onFocus={() => setActive("feat: your next chapter")}
        onBlur={() => setActive("")}
        onClick={() => setActive(active ? "" : "feat: your next chapter")}
        aria-label="Explore commit a83f92d"
      >
        <GitCommitHorizontal size={15} />
        <span>a83f92d</span>
      </button>
      <div className="sphere-tag tag-build">
        <Github size={16} />
        <span>build. commit. solve.</span>
      </div>
      <div className="sphere-caption" aria-live="polite">
        {active || "A world of possibilities. One commit at a time."}
      </div>
      <span className="scene-coordinate">BRANCH / YOUR-NEXT-CHAPTER</span>
    </div>
  );
}
