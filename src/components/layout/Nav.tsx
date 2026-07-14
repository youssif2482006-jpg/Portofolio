"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { easeOut } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  return (
    <motion.header
      initial={prefersReduced ? undefined : { opacity: 0, y: -20 }}
      animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav className="glass flex w-full max-w-4xl items-center gap-8 rounded-pill px-4 py-2.5 sm:px-5">
        <ul className="hidden flex-1 items-center justify-between md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-mist transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton href="#contact" variant="secondary" className="px-5 py-2 text-[13px]">
            Request a free demo
          </MagneticButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-full bg-ink transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="glass absolute inset-x-4 top-[68px] flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-body text-[15px] text-ink/90 transition-colors hover:bg-ink/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-ink px-4 py-3 text-center font-semibold text-canvas"
            >
              Request a free demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
