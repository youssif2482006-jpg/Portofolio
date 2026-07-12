"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { Bokeh } from "@/components/ui/Bokeh";
import { easeOut } from "@/lib/motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const headline = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 },
  },
};

const word = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const HEADLINE_WORDS = "I turn your idea into a website worth".split(" ");

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16"
    >
      <AmbientGlow className="-top-32 right-[-5%] h-[620px] w-[620px] sm:-top-24 sm:right-0 sm:h-[760px] sm:w-[760px]" />
      <Bokeh />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-6"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.2em] text-mist"
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
          Independent Web Designer &amp; Developer
        </motion.p>

        <motion.h1
          variants={headline}
          className="mt-6 max-w-3xl font-display text-[13vw] font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {HEADLINE_WORDS.map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block">
              {w}&nbsp;
            </motion.span>
          ))}
          <motion.span variants={word} className="text-gradient inline-block">
            remembering.
          </motion.span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-lg leading-relaxed text-mist"
        >
          I partner directly with ambitious founders and product teams to
          design, build, and ship websites with the craft of a studio — and
          the speed of working solo.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <MagneticButton href="#contact" variant="primary">
            Request a free demo
          </MagneticButton>
          <MagneticButton href="#work" variant="secondary">
            View selected work
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
