"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Reveal } from "./Reveal";
import { differencePoints } from "../data/content";

export function Difference() {
  const visualWrapRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced || !visualWrapRef.current) return;
      gsap.fromTo(
        visualWrapRef.current,
        { y: -40 },
        {
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: visualWrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { dependencies: [prefersReduced] }
  );

  return (
    <section id="design" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-8 sm:py-32">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal scale={0.97}>
          <div className="aspect-[4/3] overflow-hidden rounded-[20px] border border-[var(--bt-border)]">
            <div ref={visualWrapRef} className="relative h-[140%] w-full">
              <Image
                src="/images/bentley/difference-craft.webp"
                alt="Artisan hand-stitching leather upholstery"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-[var(--bt-mist)]">
            The Bentley Difference
          </p>
          <h2 className="bt-serif mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            A standard measured in fractions of a millimetre.
          </h2>

          <div className="mt-8 flex flex-col gap-8">
            {differencePoints.map((point) => (
              <div key={point.title} className="border-l-2 border-[var(--bt-platinum)] pl-5">
                <h3 className="bt-serif text-xl font-medium">{point.title}</h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[var(--bt-mist)]">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
