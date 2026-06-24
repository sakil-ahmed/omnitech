"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Theme } from "@/app/data/themes";
import { themes } from "@/app/data/themes";
import { ThemePreview, ThemePreviewBox } from "@/app/components/ThemePreview";
import { FadeIn, Stagger, StaggerItem } from "@/app/components/motion";
import { company, emails } from "@/app/data/site-content";

type ThemeDetailProps = {
  theme: Theme;
};

function ThemeIcon({ iconPath, className = "h-5 w-5" }: { iconPath: string; className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
    </svg>
  );
}

export function ThemeDetail({ theme }: ThemeDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const otherThemes = themes.filter((t) => t.slug !== theme.slug);

  return (
    <>
      <section className="bg-grid relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className={`absolute -top-20 right-0 h-80 w-80 rounded-full bg-gradient-to-br ${theme.color} blur-3xl opacity-30`}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <FadeIn>
            <Link
              href="/themes"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All themes
            </Link>
          </FadeIn>

          <div className="mt-8 flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-4">
                  <ThemePreviewBox theme={theme} size="lg" />
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                        theme.status === "Coming soon"
                          ? "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {theme.status === "Coming soon" ? "⏳" : "✓"} {theme.status}
                    </span>
                    <p className="mt-2 text-sm text-muted">{theme.category}</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="font-display mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  {theme.title}
                </h1>
                <p className="mt-2 text-xl font-medium text-accent">{theme.tagline}</p>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                  {theme.longDescription}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {theme.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-muted backdrop-blur-sm"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {theme.status === "Coming soon" ? (
                    <motion.a
                      href={`mailto:${emails.hello}?subject=${encodeURIComponent(`${theme.title} Theme Waitlist`)}`}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl"
                    >
                      Join waitlist
                    </motion.a>
                  ) : (
                    <motion.a
                      href={`mailto:${emails.hello}?subject=${encodeURIComponent(`${theme.title} Theme Inquiry`)}`}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-light px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent/25"
                    >
                      Request this theme
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </motion.a>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-surface/80 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    Custom build quote
                  </Link>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} direction="left" className="hidden lg:block">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ThemePreview theme={theme} className="w-[360px]" />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Features</p>
            <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
              Built for {theme.category.toLowerCase()}
            </h2>
          </FadeIn>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {theme.features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,128,96,0.1)" }}
                  className="rounded-2xl border border-border/80 bg-background p-6"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${theme.color} text-white`}
                  >
                    <ThemeIcon iconPath={feature.icon} />
                  </div>
                  <h3 className="font-display mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-grid py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Sections</p>
              <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
                Merchant-friendly sections
              </h2>
              <p className="mt-4 text-muted">
                Drag, drop, and customize every section from the Shopify theme editor—no code
                required.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {theme.sections.map((section) => (
                  <li
                    key={section}
                    className="flex items-center gap-2 rounded-xl border border-border/80 bg-surface px-4 py-3 text-sm"
                  >
                    <svg className="h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {section}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Templates</p>
              <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Page templates</h2>
              <p className="mt-4 text-muted">
                JSON templates for every key storefront page—optimized for speed and app block
                support.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {theme.templates.map((template) => (
                  <span
                    key={template}
                    className={`rounded-full bg-gradient-to-r px-4 py-2 text-sm font-semibold text-white ${theme.color}`}
                  >
                    {template}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-border/80 bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Online Store 2.0
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {theme.title} is built with section groups, app blocks, and metafield-powered
                  content—compatible with Shopify&apos;s latest theme architecture and our app
                  extensions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-grid py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-display text-3xl font-bold">FAQ</h2>
          </FadeIn>
          <div className="mt-10 space-y-3">
            {theme.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <FadeIn key={faq.question} delay={index * 0.05}>
                  <div
                    className={`overflow-hidden rounded-2xl border transition-colors ${
                      isOpen ? "border-accent/30 bg-surface shadow-md" : "border-border bg-surface/80"
                    }`}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className="font-medium">{faq.question}</span>
                      <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="h-5 w-5 shrink-0 text-muted"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="px-6 pb-4 text-sm leading-relaxed text-muted">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {otherThemes.length > 0 && (
        <section className="border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <h2 className="font-display text-2xl font-bold">More {company.name} themes</h2>
              <p className="mt-2 text-muted">Explore our other Shopify theme showcases</p>
            </FadeIn>
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherThemes.map((other) => (
                <StaggerItem key={other.slug}>
                  <Link href={`/themes/${other.slug}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-accent/30"
                    >
                      <ThemePreviewBox theme={other} size="sm" />
                      <div>
                        <p className="font-semibold">{other.title}</p>
                        <p className="text-xs text-muted line-clamp-1">{other.tagline}</p>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}
    </>
  );
}
