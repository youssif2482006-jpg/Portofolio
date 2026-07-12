export type Service = {
  title: string;
  summary: string;
  detail: string;
  includes: string[];
};

export const services: Service[] = [
  {
    title: "Brand & Identity",
    summary: "A visual system that holds up across every surface.",
    detail:
      "I build the identity underneath the website — logotype, color, type system, and a set of guidelines your team can actually use, not just admire.",
    includes: ["Logo & mark", "Type & color system", "Brand guidelines", "Naming support"],
  },
  {
    title: "Web Design",
    summary: "Interfaces that are considered down to the pixel.",
    detail:
      "From information architecture to high-fidelity UI, I design every screen with intent — clear hierarchy, confident typography, and interactions that feel inevitable.",
    includes: ["UX architecture", "High-fidelity UI", "Design systems", "Interactive prototypes"],
  },
  {
    title: "Development",
    summary: "Fast, accessible builds that match the design exactly.",
    detail:
      "I ship what design intended — pixel-accurate, performant, and built on a stack your team can maintain long after handoff.",
    includes: ["Front-end engineering", "CMS integration", "Performance tuning", "QA & handoff"],
  },
  {
    title: "Motion & Interaction",
    summary: "Micro-interactions that add polish, not noise.",
    detail:
      "I choreograph scroll, hover, and transition states that reinforce the story you're telling — subtle enough to feel native, deliberate enough to be remembered.",
    includes: ["Scroll storytelling", "Micro-interactions", "Page transitions", "Prototype animation"],
  },
];
