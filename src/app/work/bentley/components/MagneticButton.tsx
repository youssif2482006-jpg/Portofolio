"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export function MagneticButton({
  children,
  href,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const el = ref.current as HTMLElement | null;
      if (!el || prefersReduced) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });

      function handleMove(e: MouseEvent) {
        const rect = el!.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        xTo(relX * 0.35);
        yTo(relY * 0.35);
      }
      function handleLeave() {
        xTo(0);
        yTo(0);
      }

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    },
    { dependencies: [prefersReduced] }
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={className}
    >
      {children}
    </button>
  );
}
