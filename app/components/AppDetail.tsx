"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { App } from "@/app/data/apps";
import { apps } from "@/app/data/apps";
import { AppIcon, AppIconBox } from "@/app/components/AppIcon";
import { FadeIn, Stagger, StaggerItem } from "@/app/components/motion";
import { company, emails, pricingNotes } from "@/app/data/site-content";

type AppDetailProps = {
  app: App;
};

export function AppDetail({ app }: AppDetailProps) {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const otherApps = apps.filter((a) => a.slug !== app.slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-grid relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className={`absolute -top-20 right-0 h-80 w-80 rounded-full bg-gradient-to-br ${app.color} blur-3xl opacity-30`}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <FadeIn>
            <Link
              href="/apps"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All apps
            </Link>
          </FadeIn>

          <div className="mt-8 flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-4">
                  <AppIconBox app={app} size="lg" />
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                        app.status === "Coming soon"
                          ? "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {app.status === "Coming soon" ? "⏳" : "✓"} {app.status}
                    </span>
                    {app.rating > 0 && (
                      <p className="mt-2 text-sm text-muted">
                        <span className="font-semibold text-foreground">{app.rating}★</span>
                        {" "}({app.reviewCount} reviews) · {app.installs} installs
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="font-display mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  {app.title}
                </h1>
                <p className="mt-2 text-xl font-medium text-accent">{app.tagline}</p>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                  {app.longDescription}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {app.highlights.map((h) => (
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
                  {app.status === "Live on App Store" ? (
                    <motion.a
                      href={app.shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-light px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent/25"
                    >
                      Install on Shopify
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </motion.a>
                  ) : (
                    <motion.a
                      href={`mailto:${emails.hello}?subject=Stock Alert Waitlist`}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl"
                    >
                      Join waitlist
                    </motion.a>
                  )}
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-surface/80 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    View pricing
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Preview mockup */}
            <FadeIn delay={0.3} direction="left" className="hidden lg:block">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass w-[360px] overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs text-muted">{app.title}</span>
                </div>
                <div className={`bg-gradient-to-br ${app.color} p-6 text-white`}>
                  <AppIcon iconPath={app.iconPath} className="h-8 w-8" />
                  <p className="font-display mt-4 text-lg font-bold">{app.title}</p>
                  <p className="mt-1 text-sm text-white/80">{app.tagline}</p>
                </div>
                <div className="space-y-2 p-4">
                  {app.features.slice(0, 3).map((f, i) => (
                    <div key={f.title} className="flex items-center gap-3 rounded-lg bg-background p-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${app.color} text-white`}>
                        <AppIcon iconPath={f.icon} className="h-4 w-4" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold">{f.title}</p>
                        <p className="text-xs text-muted line-clamp-1">{f.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Features</p>
            <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
              Everything you need
            </h2>
          </FadeIn>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {app.features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,128,96,0.1)" }}
                  className="rounded-2xl border border-border/80 bg-background p-6"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${app.color} text-white`}>
                    <AppIcon iconPath={feature.icon} className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="font-display mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-grid py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">How it works</p>
            <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Get started in 3 steps</h2>
          </FadeIn>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {app.steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative rounded-2xl border border-border/80 bg-surface p-6 text-center shadow-sm">
                  <span className={`font-display text-4xl font-bold bg-gradient-to-br ${app.color} bg-clip-text text-transparent`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Pricing</p>
            <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Choose your plan</h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              {pricingNotes.billing} · {pricingNotes.trial} · {pricingNotes.cancel}
            </p>

            <div className="mt-6 inline-flex rounded-full border border-border bg-background p-1">
              {[{ label: "Monthly", val: false }, { label: "Annual", val: true }].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setAnnual(opt.val)}
                  className={`relative rounded-full px-5 py-2 text-sm font-medium ${annual === opt.val ? "text-background" : "text-muted"}`}
                >
                  {annual === opt.val && (
                    <motion.span layoutId={`billing-${app.slug}`} className="absolute inset-0 rounded-full bg-foreground" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                  <span className="relative z-10">
                    {opt.label}
                    {opt.val && (
                      <span className="ml-1 text-xs text-emerald-400">
                        -{pricingNotes.annualDiscountPercent}%
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </FadeIn>

          <div className={`mt-12 grid gap-6 ${app.plans.length === 2 ? "mx-auto max-w-2xl lg:grid-cols-2" : "lg:grid-cols-3"}`}>
            {app.plans.map((plan, i) => {
              const price = annual ? Math.round(plan.price * 0.83 * 100) / 100 : plan.price;
              return (
                <FadeIn key={plan.name} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                      plan.popular ? "border-accent/50 bg-surface shadow-xl shadow-accent/10 ring-1 ring-accent/20" : "border-border bg-background"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent-light px-4 py-1 text-xs font-semibold text-white">
                        Most popular
                      </span>
                    )}
                    <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                    <p className="mt-1 text-sm text-muted">{plan.description}</p>
                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="font-display text-4xl font-bold">${price}</span>
                      <span className="text-muted">/mo</span>
                    </div>
                    <ul className="mt-6 flex-1 space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href={app.shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`mt-6 block rounded-full py-3 text-center text-sm font-semibold ${
                        plan.popular ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-lg" : "border border-border hover:border-accent hover:text-accent"
                      }`}
                    >
                      {app.status === "Coming soon" ? "Join waitlist" : "Start free trial"}
                    </motion.a>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-grid py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-display text-3xl font-bold">FAQ</h2>
          </FadeIn>
          <div className="mt-10 space-y-3">
            {app.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <FadeIn key={faq.question} delay={index * 0.05}>
                  <div className={`overflow-hidden rounded-2xl border transition-colors ${isOpen ? "border-accent/30 bg-surface shadow-md" : "border-border bg-surface/80"}`}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className="font-medium">{faq.question}</span>
                      <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} className="h-5 w-5 shrink-0 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
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

      {/* Other apps */}
      {otherApps.length > 0 && (
        <section className="border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <h2 className="font-display text-2xl font-bold">More {company.name} apps</h2>
              <p className="mt-2 text-muted">Explore our other Shopify apps</p>
            </FadeIn>
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherApps.map((other) => (
                <StaggerItem key={other.slug}>
                  <Link href={`/apps/${other.slug}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-accent/30"
                    >
                      <AppIconBox app={other} size="sm" />
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
