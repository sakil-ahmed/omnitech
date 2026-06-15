"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion";

const features = [
  {
    title: "Shopify-native design",
    description:
      "Every app uses Polaris UI and embeds directly in Shopify admin—so merchants feel right at home.",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
  },
  {
    title: "One-click install",
    description:
      "Merchants install from the Shopify App Store, authorize permissions, and start using—no complex setup.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Secure & compliant",
    description:
      "GDPR-ready data handling, encrypted tokens, and privacy policies that pass Shopify App Store review.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "Built on Shopify APIs",
    description:
      "GraphQL Admin API, webhooks, billing API, and app extensions—we use the full Shopify platform.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
  {
    title: "Fast merchant support",
    description:
      "Real humans reply within 24 hours. We help with setup, billing questions, and feature requests.",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    title: "Regular updates",
    description:
      "We ship bug fixes, new features, and Shopify API updates so apps stay compatible and reliable.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  },
];

export function Features() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border bg-surface py-24">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Omnitech
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Shopify apps done right
          </h2>
          <p className="mt-4 text-lg text-muted">
            We&apos;re a focused Shopify app studio. No bloated features—just
            tools that save merchants time and help stores grow.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,128,96,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-surface to-background p-6"
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
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
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
