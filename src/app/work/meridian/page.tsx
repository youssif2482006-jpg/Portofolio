import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, IBM_Plex_Mono } from "next/font/google";
import "./meridian.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { MeridianNav } from "./components/MeridianNav";
import { Hero } from "./components/Hero";
import { Collections } from "./components/Collections";
import { Craftsmanship } from "./components/Craftsmanship";
import { Performance } from "./components/Performance";
import { Heritage } from "./components/Heritage";
import { BoutiqueExperience } from "./components/BoutiqueExperience";
import { MeridianFooter } from "./components/MeridianFooter";
import { Grain } from "./components/Grain";

const mrSerif = Cormorant_Garamond({
  variable: "--font-mr-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mrSans = Inter({
  variable: "--font-mr-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mrMono = IBM_Plex_Mono({
  variable: "--font-mr-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Meridian — Fine Watchmaking Concept Case Study",
  description:
    "An original concept for a luxury watch boutique — a slow, cinematic scroll experience built with Next.js, GSAP, and Lenis.",
};

export default function MeridianPage() {
  return (
    <div
      className={`meridian relative overflow-x-hidden ${mrSerif.variable} ${mrSans.variable} ${mrMono.variable}`}
    >
      <SmoothScroll />
      <Grain />
      <MeridianNav />
      <main>
        <Hero />
        <Collections />
        <Craftsmanship />
        <Performance />
        <Heritage />
        <BoutiqueExperience />
      </main>
      <MeridianFooter />
    </div>
  );
}
