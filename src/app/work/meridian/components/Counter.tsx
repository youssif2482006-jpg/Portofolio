"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function Counter({ value, prefix = "", suffix = "", className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReduced) {
        el.textContent = `${prefix}${value}${suffix}`;
        return;
      }

      const counter = { n: 0 };
      gsap.to(counter, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "restart none none reverse",
        },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(counter.n)}${suffix}`;
        },
      });
    },
    { dependencies: [prefersReduced, value] }
  );

  return <span ref={ref} className={className}>{`${prefix}0${suffix}`}</span>;
}
