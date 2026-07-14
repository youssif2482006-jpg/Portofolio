"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/motion";
import { getScrollDirection } from "@/lib/scrollDirection";

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
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-80px" });
  const controls = useAnimation();
  const Component = motion[as];

  useEffect(() => {
    if (prefersReduced) return;

    if (isInView) {
      if (getScrollDirection() === "down") {
        controls.start({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, delay, ease: easeOut },
        });
      } else {
        controls.set({ opacity: 1, y: 0, scale: 1 });
      }
    } else {
      controls.set({ opacity: 0, y, scale });
    }
  }, [isInView, prefersReduced, controls, delay, y, scale]);

  return (
    <Component
      ref={ref as never}
      initial={prefersReduced ? undefined : { opacity: 0, y, scale }}
      animate={prefersReduced ? undefined : controls}
      className={className}
    >
      {children}
    </Component>
  );
}
