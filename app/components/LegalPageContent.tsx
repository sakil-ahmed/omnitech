"use client";

import { FadeIn } from "@/app/components/motion";

type LegalSection = {
  title: string;
  content: string[];
};

type LegalPageContentProps = {
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPageContent({
  lastUpdated,
  intro,
  sections,
}: LegalPageContentProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <p className="text-sm text-muted">Last updated: {lastUpdated}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p>
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
                      key={paragraph.slice(0, 40)}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
