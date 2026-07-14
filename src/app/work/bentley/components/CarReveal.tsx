"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Grain } from "./Grain";
import { MagneticButton } from "./MagneticButton";
import { revealStops, finalCarTarget } from "../data/content";

const PIN_DISTANCE = 8000;
const STOP_SPAN = 100 / (revealStops.length + 1);
// the intro block (heading + CTA) is taller than the corner spec blocks, so the car
// starts lower to clear it, then rises to its centered resting position for every other stop
const INTRO_CAR_Y = 170;

const primaryBtn =
  "rounded-full bg-[var(--bt-platinum)] px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-transform hover:scale-[1.03]";
const secondaryBtn =
  "rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10";

type FloatDot = {
  size: number;
  top: string;
  left: string;
  color: "sapphire" | "platinum";
  opacity: number;
  duration: number;
  delay: number;
  x: number;
  y: number;
};

const FLOAT_DOTS: FloatDot[] = [
  { size: 10, top: "22%", left: "16%", color: "platinum", opacity: 0.55, duration: 11, delay: 0, x: 14, y: -34 },
  { size: 6, top: "30%", left: "82%", color: "sapphire", opacity: 0.6, duration: 8.5, delay: 1.2, x: -10, y: -26 },
  { size: 14, top: "68%", left: "12%", color: "sapphire", opacity: 0.4, duration: 13, delay: 2, x: 12, y: -30 },
  { size: 8, top: "18%", left: "58%", color: "platinum", opacity: 0.5, duration: 9.5, delay: 0.8, x: -8, y: -22 },
  { size: 5, top: "74%", left: "70%", color: "platinum", opacity: 0.6, duration: 7.5, delay: 1.6, x: 10, y: -20 },
  { size: 12, top: "48%", left: "90%", color: "sapphire", opacity: 0.35, duration: 12.5, delay: 0.4, x: -14, y: -28 },
];

function Backdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, color-mix(in srgb, var(--bt-sapphire) 22%, var(--bt-bg)) 0%, var(--bt-bg) 68%)",
        }}
      />

      {/* soft base fill light — subtle, just enough to light the car */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[42%] h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[130px]"
        style={{ background: "var(--bt-sapphire)" }}
      />

      {/* slow-rotating conic halo rings — a studio light rig, not a soft pulsing blob */}
      <div
        aria-hidden="true"
        className="bt-halo absolute left-1/2 top-1/2 h-[900px] w-[900px] opacity-40 blur-[60px]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, var(--bt-sapphire) 25deg, transparent 70deg, transparent 180deg, var(--bt-platinum) 205deg, transparent 250deg, transparent 360deg)",
        }}
      />
      <div
        aria-hidden="true"
        className="bt-halo-reverse absolute left-1/2 top-1/2 h-[620px] w-[620px] opacity-30 blur-[50px]"
        style={{
          background:
            "conic-gradient(from 90deg, transparent 0deg, var(--bt-platinum) 20deg, transparent 60deg, transparent 360deg)",
        }}
      />

      {/* sweeping studio light streaks crossing the frame */}
      <div
        aria-hidden="true"
        className="bt-sweep-a absolute left-0 top-[30%] h-[2px] w-[55%] opacity-0 blur-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--bt-platinum), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="bt-sweep-b absolute left-0 top-[64%] h-[2px] w-[42%] opacity-0 blur-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--bt-sapphire), transparent)" }}
      />

      {/* floating glowing dust / light motes */}
      {FLOAT_DOTS.map((dot, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="bt-float absolute rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            background: `var(--bt-${dot.color})`,
            filter: `blur(${Math.max(dot.size / 3, 2)}px)`,
            ["--bt-float-op" as string]: dot.opacity,
            ["--bt-float-dur" as string]: `${dot.duration}s`,
            ["--bt-float-delay" as string]: `${dot.delay}s`,
            ["--bt-float-x" as string]: `${dot.x}px`,
            ["--bt-float-y" as string]: `${dot.y}px`,
          }}
        />
      ))}

      {/* floor fog / haze */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[46%] opacity-75 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, color-mix(in srgb, var(--bt-platinum) 22%, transparent), transparent 72%)",
        }}
      />

      {/* deep contact shadow beneath the car's stage */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[30%]"
        style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.85) 85%)" }}
      />

      {/* vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 280px 90px rgba(0,0,0,0.82)" }}
      />
    </>
  );
}

function StaticFallback() {
  return (
    <section id="overview" className="relative overflow-hidden py-24">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-[var(--bt-mist)]">
          {revealStops[0].eyebrow}
        </p>
        <h1 className="bt-serif mt-6 text-5xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
          {revealStops[0].heading}
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--bt-mist)] sm:text-lg">
          {revealStops[0].detail}
        </p>
      </div>

      <div className="relative mx-auto mt-12 w-full max-w-xl px-6">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[86%] h-[16%] w-[60%] -translate-x-1/2 rounded-[100%] bg-black/50 blur-2xl"
        />
        <div className="relative aspect-[1900/1049] w-full">
          <Image
            src="/images/bentley/continental-gt-cutout.png"
            alt="Bentley Continental GT"
            fill
            priority
            className="object-contain drop-shadow-[0_30px_35px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-14 px-6">
        {revealStops.slice(1).map((stop) => (
          <div key={stop.id} className="text-center sm:text-left">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-[var(--bt-mist)]">
              {stop.eyebrow}
            </p>
            <h2 className="bt-serif mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              {stop.heading}
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[var(--bt-mist)] sm:mx-0 mx-auto">
              {stop.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-4 px-6">
        <a href="#design" className={primaryBtn}>Discover More</a>
        <a href="#specs" className={secondaryBtn}>View Specifications</a>
      </div>
    </section>
  );
}

export function CarReveal() {
  const prefersReduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current || prefersReduced) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${PIN_DISTANCE}`,
          pin: true,
          scrub: 1.4,
          anticipatePin: 1,
        },
      });

      // the car starts lower (to clear the taller intro block) and rises to center
      // once the first transition begins
      tl.set(carRef.current, { y: INTRO_CAR_Y }, 0);

      revealStops.forEach((stop, i) => {
        const start = i * STOP_SPAN;
        const holdEnd = start + STOP_SPAN * 0.62;

        // the intro block is already visible on load — only the later stops fade in
        if (i > 0) {
          tl.to(textRefs.current[i], { opacity: 1, y: 0, duration: 8, ease: "power3.out" }, start + 1);
        }
        tl.to(textRefs.current[i], { opacity: 0, duration: 5, ease: "power2.inOut" }, holdEnd);

        const target = revealStops[i + 1]?.car ?? finalCarTarget;
        tl.to(
          carRef.current,
          {
            x: target.x,
            y: 0,
            rotationY: target.rotateY,
            rotationX: target.rotateX,
            duration: 10,
            ease: "power2.inOut",
          },
          holdEnd
        );

        if (i === 0) {
          tl.to(hintRef.current, { opacity: 0, duration: 3 }, start + 2);
        }
      });

      tl.to(finalRef.current, { opacity: 1, y: 0, duration: 8, ease: "power3.out" }, 100 - STOP_SPAN * 0.7);
      tl.to({}, { duration: 0 }, 100);

      // subtle independent mouse-tilt on the stage, layered on top of the scroll-driven car transform
      if (stageRef.current) {
        const rotYTo = gsap.quickTo(stageRef.current, "rotationY", { duration: 0.9, ease: "power3" });
        const rotXTo = gsap.quickTo(stageRef.current, "rotationX", { duration: 0.9, ease: "power3" });
        const handleMove = (e: MouseEvent) => {
          const rect = sectionRef.current!.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          rotYTo(relX * 3);
          rotXTo(-relY * 2);
        };
        sectionRef.current!.addEventListener("mousemove", handleMove);
        return () => sectionRef.current?.removeEventListener("mousemove", handleMove);
      }
    },
    { scope: sectionRef, dependencies: [prefersReduced] }
  );

  if (prefersReduced) {
    return <StaticFallback />;
  }

  return (
    <div
      ref={sectionRef}
      id="overview"
      className="relative flex h-[100dvh] min-h-[560px] items-center justify-center overflow-hidden"
      style={{ perspective: "1600px" }}
    >
      <Backdrop />
      <Grain />

      <div ref={stageRef} className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
        <div
          ref={carRef}
          className="relative aspect-[1900/1049] w-[58vw] max-w-[720px]"
          style={{ transformStyle: "preserve-3d", transformOrigin: "50% 100%" }}
        >
          {/* ground contact shadow — moves with the car */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 bottom-[4%] h-[14%] w-[72%] -translate-x-1/2 rounded-[100%] bg-black/70 blur-2xl"
          />

          {/* floor reflection — moves with the car */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-full h-full opacity-20 blur-[3px] [mask-image:linear-gradient(to_bottom,black,transparent_65%)]"
            style={{ transform: "scaleY(-1)" }}
          >
            <Image src="/images/bentley/continental-gt-cutout.png" alt="" fill className="object-contain" />
          </div>

          <Image
            src="/images/bentley/continental-gt-cutout.png"
            alt="Bentley Continental GT"
            fill
            priority
            sizes="58vw"
            className="relative object-contain drop-shadow-[0_35px_28px_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>

      {revealStops.map((stop, i) => {
        const positionClass =
          i === 0
            ? "inset-x-0 top-24 mx-auto items-center text-center"
            : stop.align === "top-left"
              ? "left-8 top-28 items-start text-left sm:left-[13%]"
              : stop.align === "top-right"
                ? "right-8 top-28 items-end text-right sm:right-[13%]"
                : stop.align === "bottom-left"
                  ? "left-8 bottom-28 items-start text-left sm:left-[13%]"
                  : "right-8 bottom-28 items-end text-right sm:right-[13%]";
        const centered = i === 0;

        return (
          <div
            key={stop.id}
            ref={(el) => {
              textRefs.current[i] = el;
            }}
            className={`pointer-events-none absolute z-20 flex max-w-sm translate-y-6 flex-col px-6 ${positionClass} ${
              centered ? "max-w-lg" : ""
            } ${i === 0 ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex items-center gap-3">
              {centered && <span className="h-px w-9 bg-gradient-to-r from-transparent to-[var(--bt-platinum)]/70" />}
              <p className="font-body text-xs font-semibold uppercase tracking-[0.4em] text-[var(--bt-platinum)] [text-shadow:0_2px_16px_rgba(0,0,0,0.85)]">
                {stop.eyebrow}
              </p>
              {centered && <span className="h-px w-9 bg-gradient-to-l from-transparent to-[var(--bt-platinum)]/70" />}
            </div>
            <h2
              className={`bt-serif bt-gradient-text mt-3 font-medium leading-[1.08] tracking-tight [text-shadow:0_4px_34px_rgba(0,0,0,0.65)] ${
                centered ? "text-3xl sm:text-5xl" : "text-5xl sm:text-7xl"
              }`}
            >
              {stop.heading}
            </h2>
            <p
              className={`max-w-md text-[15px] leading-relaxed text-white/80 [text-shadow:0_2px_16px_rgba(0,0,0,0.85)] sm:text-base ${
                centered ? "mt-2" : "mt-3"
              }`}
            >
              {stop.detail}
            </p>

            {i === 0 && (
              <div className="pointer-events-auto mt-4">
                <MagneticButton href="#design" className={primaryBtn}>
                  Discover More
                </MagneticButton>
              </div>
            )}
          </div>
        );
      })}

      <div
        ref={finalRef}
        className="pointer-events-auto absolute inset-x-0 bottom-[6%] z-20 flex translate-y-6 flex-col items-center gap-6 px-6 text-center opacity-0"
      >
        <h2 className="bt-serif text-3xl font-medium tracking-tight text-white sm:text-5xl [text-shadow:0_2px_20px_rgba(0,0,0,0.85)]">
          Experience Extraordinary.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="#specs" className={primaryBtn}>
            View Specifications
          </MagneticButton>
          <MagneticButton href="#design" className={secondaryBtn}>
            Discover More
          </MagneticButton>
        </div>
      </div>

      <div ref={hintRef} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2" aria-hidden="true">
        <div className="flex flex-col items-center gap-3">
          <span className="font-body text-[11px] uppercase tracking-[0.3em] text-white/60">Scroll to Discover</span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
