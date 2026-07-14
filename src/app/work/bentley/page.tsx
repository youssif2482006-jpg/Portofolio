import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./bentley.css";
import { BentleyNav } from "./components/BentleyNav";
import { CarReveal } from "./components/CarReveal";
import { Specifications } from "./components/Specifications";
import { Difference } from "./components/Difference";
import { InteriorGallery } from "./components/InteriorGallery";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bentley Continental GT — Concept Case Study",
  description:
    "An unofficial concept single-car showcase for the Bentley Continental GT, built to demonstrate cinematic, GSAP-driven web design and front-end engineering.",
};

export default function BentleyPage() {
  return (
    <div className={`bentley ${cormorant.variable}`}>
      <BentleyNav />
      <main>
        <CarReveal />
        <Specifications />
        <Difference />
        <InteriorGallery />
      </main>
    </div>
  );
}
