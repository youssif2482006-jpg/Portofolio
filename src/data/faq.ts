export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What's the free demo?",
    answer:
      "A short, no-cost preview — usually a working homepage concept built around your actual brand, copy, and content — so you can see the direction before committing to anything. No obligation to move forward afterward.",
  },
  {
    question: "What's included in the price?",
    answer:
      "Every project includes strategy and discovery, full design across breakpoints, front-end development, QA, and a launch walkthrough. Ongoing support and content work are scoped separately, so you're never paying for time you don't need.",
  },
  {
    question: "Do you work with an existing brand or start from scratch?",
    answer:
      "Both. If you already have brand guidelines, I design inside them. If you don't — or they need a refresh — Brand & Identity work can run ahead of or alongside the website.",
  },
  {
    question: "Can you build on our existing CMS or platform?",
    answer:
      "Yes. I regularly build on Webflow, WordPress, Shopify, and custom Next.js stacks. I'll recommend the right platform for your team's technical comfort and content needs during discovery.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You get full documentation and a recorded walkthrough so your team can run the site independently. If you'd rather I stay on, I offer monthly retainers for updates, iteration, and performance monitoring.",
  },
  {
    question: "How do we get started?",
    answer:
      "Request a free demo through the contact form with a bit about your project and timeline. I reply within two business days to schedule an introductory call.",
  },
];
