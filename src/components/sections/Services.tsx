"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { easeOut } from "@/lib/motion";

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
          Services
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Everything a considered website needs.
        </h2>
      </Reveal>

      <div className="mt-14 border-t border-hairline">
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={service.title} delay={index * 0.06} y={14}>
              <div className="border-b border-hairline">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-6 rounded-lg py-7 text-left transition-colors duration-300 hover:bg-white/[0.02]"
                >
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 group-hover:scale-125 ${
                      isOpen ? "bg-accent" : "bg-mist/50 group-hover:bg-accent/70"
                    }`}
                    aria-hidden="true"
                  />

                  <span className="flex-1">
                    <span className="block font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-sm text-mist sm:hidden">
                      {service.summary}
                    </span>
                  </span>

                  <span className="hidden max-w-xs text-sm text-mist sm:block">
                    {service.summary}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: easeOut }}
                    className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline text-lg text-ink transition-colors duration-300 group-hover:border-accent/50"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: easeOut }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-8 pl-8 sm:grid-cols-[1fr_auto] sm:pl-8">
                        <p className="max-w-xl text-[15px] leading-relaxed text-mist">
                          {service.detail}
                        </p>
                        <ul className="flex flex-wrap gap-2 sm:max-w-xs sm:justify-end">
                          {service.includes.map((item) => (
                            <li
                              key={item}
                              className="h-fit rounded-pill bg-white/5 px-3 py-1 font-mono text-[11px] text-mist"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
