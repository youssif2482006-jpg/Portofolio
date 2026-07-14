"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-sm font-semibold tracking-tight transition-colors focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-ink text-canvas hover:opacity-90 shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-ink)_10%,transparent)]",
  secondary:
    "glass text-ink hover:border-accent/40",
};

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Component = motion[href ? "a" : "button"] as typeof motion.a;
  const stateProps = (
    href ? { "aria-disabled": disabled || undefined } : { disabled }
  ) as Record<string, unknown>;

  return (
    <Component
      ref={ref as never}
      href={href}
      {...stateProps}
      onClick={disabled ? undefined : onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={prefersReduced ? undefined : { scale: 0.94 }}
      style={{ x: springX, y: springY }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}
