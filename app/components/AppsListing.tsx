"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { apps } from "@/app/data/apps";
import { AppIconBox } from "@/app/components/AppIcon";
import { FadeIn, Stagger, StaggerItem } from "@/app/components/motion";
import { company } from "@/app/data/site-content";

export function AppsListing() {
  return (
    <>
      <section className="bg-grid relative overflow-hidden pt-16 pb-12 md:pt-24">
        <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Apps</p>
            <h1 className="font-display mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              Shopify apps by {company.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted">
              {company.shortDescription}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {apps.map((app) => (
              <StaggerItem key={app.slug}>
                <Link href={`/apps/${app.slug}`}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className={`card-shine group relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-surface to-background p-8 shadow-sm transition-shadow hover:border-accent/40 hover:shadow-xl ${app.glow}`}
                  >
                    <div className="flex items-start justify-between">
                      <AppIconBox app={app} />
                      <div className="text-right">
                        <span className="font-display text-4xl font-bold text-border group-hover:text-accent/20">
                          {app.num}
                        </span>
                        <p className="mt-1 text-xs font-semibold text-accent">{app.status}</p>
                      </div>
                    </div>
                    <h2 className="font-display mt-6 text-2xl font-semibold group-hover:text-accent">
                      {app.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-accent/80">{app.tagline}</p>
                    <p className="mt-3 leading-relaxed text-muted">{app.description}</p>
                    {app.rating > 0 && (
                      <p className="mt-4 text-sm text-muted">
                        <span className="font-semibold text-foreground">{app.rating}★</span>
                        {" "}· {app.installs} installs
                      </p>
                    )}
                    <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      View app details
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </p>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
