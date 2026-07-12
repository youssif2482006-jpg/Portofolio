export type ProjectPattern = "glow" | "grid" | "bars" | "sweep";

export type Project = {
  name: string;
  category: string;
  blurb: string;
  metric: string;
  tags: string[];
  pattern: ProjectPattern;
};

export const projects: Project[] = [
  {
    name: "Solace",
    category: "Wellness · SaaS",
    blurb:
      "A calmer marketing site for a mental-health platform, built to convert without feeling like a sales pitch.",
    metric: "+38% trial signups",
    tags: ["Brand", "Web Design", "Development"],
    pattern: "glow",
  },
  {
    name: "Ferrous",
    category: "Industrial · Ecommerce",
    blurb:
      "A precision-tooling brand rebuilt from the ground up — sharper systems, faster storefront, fewer clicks to cart.",
    metric: "2.1s avg. load time",
    tags: ["Brand", "Ecommerce", "Development"],
    pattern: "grid",
  },
  {
    name: "Northbound",
    category: "Fintech · Product",
    blurb:
      "The product marketing site for a treasury platform, translating dense financial tooling into a clear story.",
    metric: "3x demo requests",
    tags: ["Web Design", "Development"],
    pattern: "bars",
  },
  {
    name: "Aria",
    category: "Hospitality · Brand",
    blurb:
      "A boutique hotel group's digital home — warm, unhurried, and built to make you want to book tonight.",
    metric: "+52% direct bookings",
    tags: ["Brand", "Web Design", "Motion"],
    pattern: "sweep",
  },
];
