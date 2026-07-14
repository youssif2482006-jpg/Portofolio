export type ProjectPattern = "glow" | "grid" | "bars" | "sweep" | "dial";

export type Project = {
  name: string;
  category: string;
  blurb: string;
  metric: string;
  tags: string[];
  pattern: ProjectPattern;
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Bentley Continental GT",
    category: "Automotive · Concept",
    blurb:
      "An unofficial single-car showcase — the car itself moves through the page on scroll as specs reveal beside it.",
    metric: "GSAP scroll-pinned reveal",
    tags: ["Motion", "Web Design", "Development"],
    pattern: "grid",
    href: "/work/bentley",
    image: "/images/bentley/continental-gt-cutout.png",
  },
  {
    name: "Meridian",
    category: "Luxury Watches · Concept",
    blurb:
      "A slow, cinematic boutique for a fine watchmaker — GSAP scroll storytelling paired with Lenis smooth scroll.",
    metric: "GSAP + Lenis + Framer Motion",
    tags: ["Motion", "Web Design", "Development"],
    pattern: "dial",
    href: "/work/meridian",
    image: "/images/meridian/hero.jpg",
  },
];
