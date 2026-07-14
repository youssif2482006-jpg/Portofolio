"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps, type ProcessStep } from "@/data/process";
import { easeOut } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { getScrollDirection } from "@/lib/scrollDirection";

function ProcessLine({ prefersReduced }: { prefersReduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (prefersReduced) return;
    if (isInView) {
      if (getScrollDirection() === "down") {
        controls.start({ scaleY: 1, transition: { duration: 1.4, ease: easeOut } });
      } else {
        controls.set({ scaleY: 1 });
      }
    } else {
      controls.set({ scaleY: 0 });
    }
  }, [isInView, prefersReduced, controls]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-y-0 left-0 w-px origin-top bg-accent"
      initial={prefersReduced ? undefined : { scaleY: 0 }}
      animate={prefersReduced ? undefined : controls}
    />
  );
}

function StepBadge({
  step,
  delay,
  prefersReduced,
}: {
  step: ProcessStep;
  delay: number;
  prefersReduced: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (prefersReduced) return;
    if (isInView) {
      if (getScrollDirection() === "down") {
        controls.start({
          scale: 1,
          opacity: 1,
          transition: { type: "spring", stiffness: 260, damping: 18, delay },
        });
      } else {
        controls.set({ scale: 1, opacity: 1 });
      }
    } else {
      controls.set({ scale: 0.4, opacity: 0 });
    }
  }, [isInView, prefersReduced, controls, delay]);

  return (
    <motion.span
      ref={ref}
      aria-hidden="true"
      initial={prefersReduced ? undefined : { scale: 0.4, opacity: 0 }}
      animate={prefersReduced ? undefined : controls}
      className="absolute -left-[45px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 bg-canvas font-mono text-[11px] text-accent sm:-left-[61px] sm:h-10 sm:w-10"
    >
      {step.index}
    </motion.span>
  );
}

export function Process() {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section id="process" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
          Process
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Four stages, no surprises.
        </h2>
      </Reveal>

      <div className="relative mt-16 pl-10 sm:pl-14">
        <div className="absolute inset-y-0 left-0 w-px bg-hairline" aria-hidden="true" />
        <ProcessLine prefersReduced={prefersReduced} />

        <ol>
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.index}
              delay={i * 0.08}
              className="relative pb-16 last:pb-0"
            >
              <StepBadge step={step} delay={i * 0.08 + 0.15} prefersReduced={prefersReduced} />

              <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-mist">
                {step.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
