"use client";

import { motion } from "framer-motion";

type AmbientGlowProps = {
  className?: string;
};

const floatAnimate = {
  x: [0, 90, -30, -70, 0],
  y: [0, -80, 55, -35, 0],
  scale: [1, 1.3, 0.85, 1.18, 1],
  opacity: [0.6, 0.9, 0.6, 0.85, 0.6],
};

const floatTransition = {
  x: { duration: 11, repeat: Infinity, ease: "easeInOut" },
  y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
  opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" },
} as const;

export function AmbientGlow({ className = "" }: AmbientGlowProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={`glow-ambient pointer-events-none absolute rounded-full ${className}`}
      animate={floatAnimate}
      transition={floatTransition}
    />
  );
}
