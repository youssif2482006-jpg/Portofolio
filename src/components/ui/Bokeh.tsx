"use client";

import { motion } from "framer-motion";

type BokehDot = {
  size: number;
  top: string;
  left: string;
  color: "accent" | "accent-deep" | "ink";
  opacity: number;
  duration: number;
  delay: number;
  range: number;
};

const DOTS: BokehDot[] = [
  { size: 84, top: "14%", left: "74%", color: "accent", opacity: 0.24, duration: 14, delay: 0, range: 30 },
  { size: 36, top: "58%", left: "88%", color: "accent-deep", opacity: 0.28, duration: 9, delay: 1.4, range: 36 },
  { size: 22, top: "38%", left: "68%", color: "accent", opacity: 0.3, duration: 7.5, delay: 2.1, range: 34 },
  { size: 46, top: "76%", left: "72%", color: "accent-deep", opacity: 0.18, duration: 12, delay: 0.9, range: 26 },
];

export function Bokeh() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {DOTS.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
            backgroundColor: `var(--color-${dot.color})`,
            opacity: dot.opacity,
            filter: `blur(${Math.max(dot.size / 4, 6)}px)`,
          }}
          animate={{
            y: [0, -dot.range, dot.range * 0.35, 0],
            x: [0, dot.range * 0.5, -dot.range * 0.3, 0],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
