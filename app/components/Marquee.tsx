"use client";

import { marqueeItems } from "@/app/data/site-content";

export function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-border/60 bg-surface/50 py-4 backdrop-blur-sm">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 inline-flex items-center gap-2 text-sm font-medium text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
