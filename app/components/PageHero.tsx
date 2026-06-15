"use client";

import { FadeIn } from "@/app/components/motion";

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="bg-grid relative overflow-hidden border-b border-border pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {label}
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-muted">{description}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
