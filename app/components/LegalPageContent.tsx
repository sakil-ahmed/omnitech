"use client";

import { FadeIn } from "@/app/components/motion";

type LegalSection = {
  title: string;
  content: string[];
  bullets?: string[];
};

type LegalPageContentProps = {
  lastUpdated: string;
  intro: string;
  scope?: string;
  sections: LegalSection[];
};

export function LegalPageContent({
  lastUpdated,
  intro,
  scope,
  sections,
}: LegalPageContentProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <p className="text-sm text-muted">Last updated: {lastUpdated}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p>
          {scope && (
            <p className="mt-4 text-sm leading-relaxed text-muted">{scope}</p>
          )}
        </FadeIn>

        <div className="mt-12 space-y-10">
          {sections.map((section, i) => (
            <FadeIn key={section.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                      {section.bullets.map((item) => (
                        <li key={item.slice(0, 48)}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
