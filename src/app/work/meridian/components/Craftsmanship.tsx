"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Reveal } from "./Reveal";

export function Craftsmanship() {
  const visualWrapRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced || !visualWrapRef.current) return;
      gsap.fromTo(
        visualWrapRef.current,
        { y: -60 },
        {
          y: 60,
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
    <section
      id="craftsmanship"
      className="relative flex h-[68vh] min-h-[460px] scroll-mt-24 items-center overflow-hidden bg-[var(--mr-bg)]"
    >
      <div ref={visualWrapRef} className="absolute inset-0 -top-[10%] h-[120%] w-full">
        <Image
          src="/images/meridian/craftsmanship.jpg"
          alt="Exposed watch movement with tweezers adjusting a component"
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.55) 30%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p
            className="mr-eyebrow text-sm text-[var(--mr-gold)]"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.9)" }}
          >
            Crafted With Purpose
          </p>
          <h2
            className="mr-serif mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl"
            style={{ textShadow: "0 3px 20px rgba(0,0,0,0.8)" }}
          >
            The Pursuit of Precision
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--mr-mist)]">
            Every movement is assembled, tested, and adjusted by hand — a discipline measured
            in fractions of a second, sustained across generations of watchmakers who share
            one workshop and one standard.
          </p>

          <div className="mt-10 flex max-w-md flex-col gap-6">
            {[
              { title: "Hand-Finished", detail: "Bridges and plates are beveled and polished entirely by hand.", color: "var(--mr-gold)" },
              { title: "Independently Tested", detail: "Every movement is timed across six positions before it leaves the workshop.", color: "var(--mr-green-bright)" },
            ].map((point) => (
              <div key={point.title} className="border-l-2 pl-5" style={{ borderColor: point.color }}>
                <h3 className="mr-serif text-xl font-medium">{point.title}</h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[var(--mr-mist)]">
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
