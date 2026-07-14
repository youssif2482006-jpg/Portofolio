"use client";

import { useEffect, useState } from "react";

function format(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
}

export function LiveTime({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format(new Date()));
    const kickoff = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(kickoff);
      clearInterval(id);
    };
  }, []);

  if (!time) return null;

  return (
    <span className={`mr-mono tabular-nums ${className}`} suppressHydrationWarning>
      {time}
    </span>
  );
}
