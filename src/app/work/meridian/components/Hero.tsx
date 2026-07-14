"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const dialRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced) return;

      gsap.fromTo(
        "[data-mr-hero-label]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(
        "[data-mr-hero-word]",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.08, delay: 0.45, ease: "power3.out" }
      );
      gsap.fromTo(
        "[data-mr-hero-sub]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.9, ease: "power3.out" }
      );

      if (dialRef.current) {
        gsap.to(dialRef.current, {
          y: 120,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: dialRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { dependencies: [prefersReduced] }
  );

  return (
    <section
      id="top"
      className="relative -mb-px flex h-[100dvh] min-h-[640px] items-center overflow-hidden bg-[var(--mr-bg)]"
    >
      <div ref={dialRef} className="absolute inset-0">
        <Image
          src="/images/meridian/hero.jpg"
          alt="Meridian timepiece over a moonlit asteroid field"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(5,5,5,0.78) 0%, rgba(5,5,5,0.45) 32%, rgba(5,5,5,0.18) 60%, rgba(5,5,5,0.18) 100%)",
        }}
      />

      <div ref={contentRef} className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8">
        <p
          data-mr-hero-label
          className="mr-eyebrow text-lg text-[var(--mr-gold)] sm:text-xl"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.9)" }}
        >
          The Art of Precision
        </p>

        <h1
          className="mr-serif mt-6 max-w-2xl text-7xl font-medium leading-[1.02] tracking-tight sm:text-9xl"
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.7)" }}
        >
          <span className="block overflow-hidden">
            <span data-mr-hero-word className="block text-[var(--mr-text)]">
              Time,
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-mr-hero-word className="mr-gold-text block">
              Refined.
            </span>
          </span>
        </h1>

        <span
          className="mt-3 block h-[3px] w-16 rounded-full"
          style={{ background: "var(--mr-green-bright)" }}
          aria-hidden="true"
        />

        <div data-mr-hero-sub>
          <p className="mr-sans mt-8 max-w-md text-[15px] leading-relaxed text-[var(--mr-mist)]">
            Each Meridian timepiece is shaped by patient hands and exacting standards — an
            heirloom built to outlast the moment it marks.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#collections"
              className="mr-shine mr-sans inline-flex items-center rounded-full bg-[var(--mr-text)] px-7 py-3.5 text-[12px] uppercase tracking-[0.15em] text-[#050505] transition-transform"
            >
              Explore Collection
            </MagneticButton>
            <MagneticButton
              href="#boutiques"
              className="mr-sans inline-flex items-center rounded-full border border-[var(--mr-border)] px-7 py-3.5 text-[12px] uppercase tracking-[0.15em] text-[var(--mr-text)] transition-colors hover:border-[var(--mr-gold)]"
            >
              Book Appointment
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 sm:left-8 sm:translate-x-0">
        <div className="flex items-center gap-3 text-[var(--mr-mist)]">
          <span className="mr-sans text-[10px] uppercase tracking-[0.3em]">Scroll to Discover</span>
          <span className="h-8 w-px bg-gradient-to-b from-[var(--mr-gold)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
