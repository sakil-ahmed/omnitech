"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { themes } from "@/app/data/themes";
import { ThemePreviewBox } from "@/app/components/ThemePreview";
import { FadeIn, Stagger, StaggerItem } from "@/app/components/motion";
import { company } from "@/app/data/site-content";

export function ThemesListing() {
  return (
    <>
      <section className="bg-grid relative overflow-hidden pt-16 pb-12 md:pt-24">
        <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Themes</p>
            <h1 className="font-display mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              Shopify themes by {company.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Online Store 2.0 themes designed and built by our team—fast, customizable, and
              ready for app blocks. Browse our showcase or request a custom build.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {themes.map((theme) => (
              <StaggerItem key={theme.slug}>
                <Link href={`/themes/${theme.slug}`}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className={`card-shine group relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-surface to-background p-8 shadow-sm transition-shadow hover:border-accent/40 hover:shadow-xl ${theme.glow}`}
                  >
                    <div className="flex items-start justify-between">
                      <ThemePreviewBox theme={theme} />
                      <div className="text-right">
                        <span className="font-display text-4xl font-bold text-border group-hover:text-accent/20">
                          {theme.num}
                        </span>
                        <p
                          className={`mt-1 text-xs font-semibold ${
                            theme.status === "Coming soon"
                              ? "text-amber-600 dark:text-amber-400"
                              : "text-accent"
                          }`}
                        >
                          {theme.status}
                        </p>
                      </div>
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted">
                      {theme.category}
                    </p>
                    <h2 className="font-display mt-1 text-2xl font-semibold group-hover:text-accent">
                      {theme.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-accent/80">{theme.tagline}</p>
                    <p className="mt-3 leading-relaxed text-muted">{theme.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {theme.highlights.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] font-medium text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      View theme details
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </p>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.2}>
            <div className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-accent/5 to-accent/10 p-8 text-center md:p-10">
              <h2 className="font-display text-2xl font-bold">Need a fully custom theme?</h2>
              <p className="mx-auto mt-3 max-w-lg text-muted">
                We can extend any of our base themes or build a bespoke storefront from scratch
                for your brand.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-opacity hover:opacity-90"
              >
                Request a custom build
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
