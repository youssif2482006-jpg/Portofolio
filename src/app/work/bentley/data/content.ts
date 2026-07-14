export type RevealStop = {
  id: string;
  eyebrow: string;
  heading: string;
  detail: string;
  align: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  car: { x: number; rotateY: number; rotateX: number };
};

export const revealStops: RevealStop[] = [
  {
    id: "intro",
    eyebrow: "Bentley",
    heading: "Continental GT",
    detail: "Experience the perfect blend of performance, design, and craftsmanship.",
    align: "top-left",
    car: { x: 0, rotateY: 0, rotateX: 0 },
  },
  {
    id: "engine",
    eyebrow: "Engine",
    heading: "6.0L Twin-Turbo W12",
    detail: "Hand-assembled at Crewe, cylinder by cylinder.",
    align: "bottom-right",
    car: { x: -45, rotateY: 10, rotateX: 1.5 },
  },
  {
    id: "transmission",
    eyebrow: "Transmission",
    heading: "8-Speed Dual-Clutch",
    detail: "Seamless gear changes in a fraction of a second.",
    align: "top-left",
    car: { x: 45, rotateY: -9, rotateX: -1.5 },
  },
  {
    id: "drivetrain",
    eyebrow: "Drivetrain",
    heading: "All-Wheel Drive",
    detail: "Power distributed for confident traction in any condition.",
    align: "bottom-left",
    car: { x: 45, rotateY: 9, rotateX: 1.5 },
  },
  {
    id: "power",
    eyebrow: "Power",
    heading: "650 PS",
    detail: "641 bhp, delivered with near-silent, effortless composure.",
    align: "top-right",
    car: { x: -45, rotateY: -10, rotateX: -1.5 },
  },
  {
    id: "torque",
    eyebrow: "Torque",
    heading: "900 Nm",
    detail: "Available from just 1,350 rpm, for instant, uninterrupted pull.",
    align: "bottom-right",
    car: { x: -45, rotateY: 8, rotateX: 1.5 },
  },
  {
    id: "acceleration",
    eyebrow: "Acceleration",
    heading: "3.6 Seconds",
    detail: "0–100 km/h, with the composure of a car twice its size.",
    align: "top-left",
    car: { x: 45, rotateY: -9, rotateX: -1.5 },
  },
  {
    id: "top-speed",
    eyebrow: "Top Speed",
    heading: "333 km/h",
    detail: "207 mph — the fastest four-seat Bentley ever built.",
    align: "bottom-left",
    car: { x: 45, rotateY: 6, rotateX: 1 },
  },
];

export const finalCarTarget = { x: 0, rotateY: 0, rotateX: 0 };

export const specSheet = [
  {
    title: "Engine",
    value: "6.0L Twin-Turbo W12",
    detail: "Twelve cylinders in a narrow-angle W configuration, hand-assembled at Crewe with each engine bearing the signature of the technician who built it.",
    pattern: "radial" as const,
    image: "/images/bentley/spec-engine.jpg",
  },
  {
    title: "Transmission",
    value: "8-Speed Dual-Clutch",
    detail: "Twin-clutch architecture swaps gears in milliseconds, keeping power delivery unbroken whether cruising or accelerating hard.",
    pattern: "gear" as const,
    image: "/images/bentley/spec-transmission.jpg",
  },
  {
    title: "Drivetrain",
    value: "All-Wheel Drive",
    detail: "A variable torque split sends power front-to-rear as conditions demand, biased rearward for a distinctly rear-driven feel.",
    pattern: "grid" as const,
    image: "/images/bentley/spec-drivetrain.jpg",
  },
  {
    title: "Suspension",
    value: "Active Chassis Control",
    detail: "Electronically controlled anti-roll and adaptive damping read the road up to 500 times a second, smoothing it before you feel it.",
    pattern: "wave" as const,
    image: "/images/bentley/spec-suspension.jpg",
  },
];

export const differencePoints = [
  {
    title: "Luxury Craftsmanship",
    detail: "Over 100 pairs of hands touch every interior before it leaves Crewe — nothing is automated that shouldn't be.",
  },
  {
    title: "British Heritage",
    detail: "Founded in 1919, every model still carries the same obsession with engineering as the very first.",
  },
  {
    title: "Attention to Detail",
    detail: "From hand-stitched seams to hand-polished veneers, finished to a standard measured in fractions of a millimetre.",
  },
];

export const galleryItems = [
  { title: "The Cabin", caption: "Diamond-quilted leather, hand-stitched in-house.", image: "/images/bentley/gallery-cabin.webp" },
  { title: "Veneer", caption: "Book-matched wood veneer, sourced and matched by eye.", image: "/images/bentley/gallery-veneer.webp" },
  { title: "Knurled Detail", caption: "Every switch milled from solid metal, not moulded.", image: "/images/bentley/gallery-knurled.webp" },
  { title: "Ambient Light", caption: "Illumination tuned to the exact warmth of candlelight.", image: "/images/bentley/gallery-ambient.webp" },
];
