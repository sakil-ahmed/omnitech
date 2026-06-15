"use client";

const items = [
  "Shopify App Store",
  "Polaris UI",
  "GraphQL API",
  "Remix",
  "Webhooks",
  "Billing API",
  "App Extensions",
  "OAuth 2.0",
  "Shopify CLI",
  "Liquid",
];

export function Marquee() {
  const doubled = [...items, ...items];

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
