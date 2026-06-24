"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { themeCapabilities, themeStudio, themes } from "@/app/data/themes";
import { ThemePreviewBox } from "@/app/components/ThemePreview";
import { FadeIn, Stagger, StaggerItem } from "./motion";

export function Themes() {
  const featuredThemes = themes.slice(0, 2);

  return (
    <section id="themes" className="relative overflow-hidden border-t border-border bg-background py-24">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {themeStudio.eyebrow}
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              {themeStudio.title}
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              {themeStudio.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {themeStudio.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <motion.div whileHover={{ x: 4 }}>
              <Link
                href="/themes"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent"
              >
                View all themes →
              </Link>
            </motion.div>
          </FadeIn>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
          {featuredThemes.map((theme) => (
            <StaggerItem key={theme.slug}>
              <Link href={`/themes/${theme.slug}`}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className={`card-shine group relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-surface to-background p-6 shadow-sm transition-shadow hover:border-accent/40 hover:shadow-xl ${theme.glow}`}
                >
                  <div className="flex items-start justify-between">
                    <ThemePreviewBox theme={theme} />
                    <p className="text-xs font-semibold text-accent">{theme.status}</p>
                  </div>
                  <h3 className="font-display relative mt-6 text-xl font-semibold transition-colors group-hover:text-accent">
                    {theme.title}
                  </h3>
                  <p className="relative mt-1 text-sm font-medium text-accent/80">{theme.tagline}</p>
                  <p className="relative mt-2 leading-relaxed text-muted">{theme.description}</p>
                  <p className="relative mt-6 text-sm font-semibold text-accent">Learn more →</p>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {themeCapabilities.map((capability) => (
            <StaggerItem key={capability.title}>
              <div className="rounded-2xl border border-border/80 bg-surface p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 text-accent ring-1 ring-accent/20">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={capability.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-display mt-4 text-base font-semibold">{capability.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{capability.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
