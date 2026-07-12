"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  className?: string;
  as?: "div" | "li";
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  scale = 1,
  className = "",
  as = "div",
}: RevealProps) {
  const prefersReduced = usePrefersReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={prefersReduced ? undefined : { opacity: 0, y, scale }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </Component>
  );
}
