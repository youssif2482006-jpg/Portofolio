"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/faq";
import { easeOut } from "@/lib/motion";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative mx-auto max-w-4xl px-6 py-28 sm:py-36">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
          FAQ
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Questions worth answering upfront.
        </h2>
      </Reveal>

      <div className="mt-14 border-t border-hairline">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={faq.question} delay={index * 0.05} y={12}>
              <div className="border-b border-hairline">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 rounded-lg py-6 text-left transition-colors duration-300 hover:bg-white/[0.02]"
                >
                  <span className="font-display text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-accent sm:text-xl">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: easeOut }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline text-base text-ink transition-colors duration-300 group-hover:border-accent/50"
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
                      transition={{ duration: 0.35, ease: easeOut }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-mist">
                        {faq.answer}
                      </p>
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
