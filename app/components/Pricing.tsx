"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { liveApps, appPlansMap } from "@/app/data/apps";
import { FadeIn } from "./motion";

export function Pricing({ hideHeader = false }: { hideHeader?: boolean }) {
  const [activeApp, setActiveApp] = useState(liveApps[0]?.id ?? "ordernotify");
  const [annual, setAnnual] = useState(false);
  const plans = appPlansMap[activeApp] ?? [];
  const tabLayoutId = hideHeader ? "activeTabPage" : "activeTab";

  return (
    <section id="pricing" className={`bg-grid relative ${hideHeader ? "py-16 md:py-20" : "py-24"}`}>
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          {!hideHeader && (
            <>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Pricing
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Simple plans for every store
              </h2>
            </>
          )}
          <p className={`mx-auto max-w-lg text-muted ${hideHeader ? "" : "mt-4"}`}>
            Billed through Shopify. 7-day free trial on all paid plans. Cancel
            anytime from your Shopify admin.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {liveApps.map((app) => (
              <motion.button
                key={app.id}
                type="button"
                onClick={() => setActiveApp(app.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeApp === app.id
                    ? "text-white"
                    : "border border-border bg-surface text-muted hover:text-foreground"
                }`}
              >
                {activeApp === app.id && (
                  <motion.span
                    layoutId={tabLayoutId}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-light shadow-md shadow-accent/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{app.title}</span>
              </motion.button>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                !annual ? "bg-foreground text-background" : "text-muted hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                annual ? "bg-foreground text-background" : "text-muted hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-1.5 text-xs text-emerald-500">-17%</span>
            </button>
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeApp + String(annual)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-14 grid gap-6 ${
              plans.length === 2 ? "mx-auto max-w-2xl lg:grid-cols-2" : "lg:grid-cols-3"
            }`}
          >
            {plans.map((plan, i) => {
              const price = annual
                ? Math.round(plan.price * 0.83 * 100) / 100
                : plan.price;
              const currentApp = liveApps.find((a) => a.id === activeApp);

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                  className={`relative flex flex-col rounded-2xl border p-8 ${
                    plan.popular
                      ? "border-accent/50 bg-surface shadow-2xl shadow-accent/15 ring-1 ring-accent/20"
                      : "border-border/80 bg-surface/90 shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent-light px-4 py-1 text-xs font-semibold text-white shadow-md"
                    >
                      Most popular
                    </motion.span>
                  )}
                  <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold">${price}</span>
                    <span className="text-muted">/mo</span>
                  </div>
                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={currentApp ? `/apps/${currentApp.slug}#pricing` : "/apps"}
                    className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                      plan.popular
                        ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-lg shadow-accent/25"
                        : "border border-border bg-background text-foreground hover:border-accent/40 hover:text-accent"
                    }`}
                  >
                    View full details
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <FadeIn delay={0.2}>
          <p className="mt-10 text-center text-sm text-muted">
            Secure billing via Shopify · 7-day free trial · Cancel anytime ·{" "}
            <Link href="/refund" className="text-accent hover:underline">
              Refund policy
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
