"use client";

import { useEffect } from "react";
import { useLenis } from "../lib/useLenis";

export function SmoothScroll() {
  useLenis();

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("mr-hide-scrollbar");
    html.style.scrollbarWidth = "none";
    return () => {
      html.classList.remove("mr-hide-scrollbar");
      html.style.scrollbarWidth = "";
    };
  }, []);

  return null;
}
