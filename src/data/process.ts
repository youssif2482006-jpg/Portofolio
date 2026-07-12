export type ProcessStep = {
  index: string;
  title: string;
  detail: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    detail:
      "A working session and a competitive audit to get the brief right before any pixels move.",
  },
  {
    index: "02",
    title: "Design",
    detail:
      "Wireframes through high-fidelity UI, refined across focused review rounds with you directly, not a black box.",
  },
  {
    index: "03",
    title: "Build",
    detail:
      "Front-end engineering, CMS setup, and QA across devices and browsers — matched pixel-for-pixel to design.",
  },
  {
    index: "04",
    title: "Launch",
    detail:
      "Deploy, monitor, and hand off with documentation and a walkthrough you can actually run with.",
  },
];
