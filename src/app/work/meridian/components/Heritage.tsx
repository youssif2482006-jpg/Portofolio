"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Reveal } from "./Reveal";
import { heritage } from "../data/content";

export function Heritage() {
  const lineRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced || !lineRef.current || !trackRef.current) return;
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    },
    { dependencies: [prefersReduced] }
  );

  return (
    <section id="heritage" className="relative scroll-mt-24 bg-[var(--mr-ivory)] text-[var(--mr-ivory-ink)]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="mr-eyebrow text-sm text-[var(--mr-gold-deep)]">A Heritage That Endures</p>
          <h2 className="mr-serif mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl">
            A century of one obsession.
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative mt-20">
          <div className="absolute left-0 right-0 top-[7px] h-px bg-[rgba(34,29,21,0.15)]" aria-hidden="true" />
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-[7px] h-px origin-left bg-[var(--mr-gold)]"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-4 sm:gap-x-8">
            {heritage.map((stop, i) => (
              <Reveal key={stop.year} as="li" delay={i * 0.1} y={16}>
                <div className="relative pt-6">
                  <span className="absolute left-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-[var(--mr-gold-deep)] bg-[var(--mr-ivory)]" />
                  <p className="mr-mono text-[11px] tracking-[0.05em] text-[var(--mr-gold-deep)]">
                    {stop.year}
                  </p>
                  <h3 className="mr-serif mt-2 text-xl font-medium tracking-tight">{stop.title}</h3>
                  <p className="mt-2 max-w-[22ch] text-[14px] leading-relaxed text-[var(--mr-ivory-mist)]">
                    {stop.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
