"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  className?: string;
  as?: "div" | "li";
};

export function Reveal({ children, delay = 0, y = 30, scale = 1, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || prefersReduced) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y, scale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "restart none none reverse",
          },
        }
      );
    },
    { dependencies: [prefersReduced] }
  );

  const Component = as;

  return (
    <Component ref={ref as never} className={className}>
      {children}
    </Component>
  );
}
