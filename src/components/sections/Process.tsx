"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";
import { easeOut } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

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
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-px origin-top bg-accent"
          initial={prefersReduced ? undefined : { scaleY: 0 }}
          whileInView={prefersReduced ? undefined : { scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: easeOut }}
        />

        <ol>
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.index}
              delay={i * 0.08}
              className="relative pb-16 last:pb-0"
            >
              <motion.span
                aria-hidden="true"
                initial={prefersReduced ? undefined : { scale: 0.4, opacity: 0 }}
                whileInView={prefersReduced ? undefined : { scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: i * 0.08 + 0.15,
                }}
                className="absolute -left-[45px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 bg-canvas font-mono text-[11px] text-accent sm:-left-[61px] sm:h-10 sm:w-10"
              >
                {step.index}
              </motion.span>

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
