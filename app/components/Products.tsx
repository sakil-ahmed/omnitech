"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { apps, getAppsGridClass } from "@/app/data/apps";
import { AppIconBox } from "@/app/components/AppIcon";
import { FadeIn, Stagger, StaggerItem } from "./motion";

export function Products() {
  return (
    <section id="apps" className="relative overflow-hidden border-t border-border bg-surface py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Apps
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Built for Shopify merchants
            </h2>
            <p className="mt-3 max-w-lg text-muted">
              Each app solves one problem really well. Install from the Shopify App Store and
              start using in minutes.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <motion.div whileHover={{ x: 4 }}>
              <Link
                href="/apps"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent"
              >
                View all apps →
              </Link>
            </motion.div>
          </FadeIn>
        </div>

        <Stagger className={`mt-12 grid gap-5 ${getAppsGridClass()}`}>
          {apps.map((app) => (
            <StaggerItem key={app.slug}>
              <Link href={`/apps/${app.slug}`} className="block h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`card-shine card-equal group relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-surface to-background p-6 shadow-sm transition-shadow hover:border-accent/40 hover:shadow-xl ${app.glow} md:p-8`}
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative flex items-start justify-between">
                    <motion.div whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }} transition={{ duration: 0.4 }}>
                      <AppIconBox app={app} />
                    </motion.div>
                    <div className="text-right">
                      <span className="font-display text-4xl font-bold text-border transition-colors duration-300 group-hover:text-accent/25">
                        {app.num}
                      </span>
                      <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                        {app.status === "Coming soon" ? "⏳" : "✓"} {app.status}
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display relative mt-6 text-xl font-semibold transition-colors group-hover:text-accent">
                    {app.title}
                  </h3>
                  <p className="card-equal-body relative mt-2 leading-relaxed text-muted">
                    {app.description}
                  </p>
                  <p className="card-equal-footer relative mt-6 text-sm font-semibold text-accent">
                    Learn more →
                  </p>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
