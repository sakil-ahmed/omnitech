"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion";
import { company, platformFeatures } from "@/app/data/site-content";

export function Features() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border bg-surface py-24">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why {company.name}
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Shopify apps done right
          </h2>
          <p className="mt-4 text-lg text-muted">
            We&apos;re a {company.companyTagline.toLowerCase()} firm headquartered in{" "}
            {company.location}. Our Shopify apps are built with the same engineering rigor we bring
            to custom software, data, and AI projects.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platformFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,128,96,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card-equal group relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-surface to-background p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 text-accent ring-1 ring-accent/20"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </motion.div>
                <h3 className="font-display relative mt-4 text-lg font-semibold group-hover:text-accent">
                  {feature.title}
                </h3>
                <p className="card-equal-body relative mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
