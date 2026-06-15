"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "@/app/components/motion";

const values = [
  {
    title: "Merchant-first",
    description:
      "Every app starts with a real merchant problem. We build tools that save time and drive revenue—not feature bloat.",
  },
  {
    title: "Shopify-native",
    description:
      "Polaris UI, embedded apps, GraphQL APIs. Our apps feel like a natural part of Shopify admin.",
  },
  {
    title: "Ship & support",
    description:
      "We publish to the App Store and stand behind every app with fast, human support.",
  },
];

const stats = [
  { value: "4+", label: "Apps built" },
  { value: "1K+", label: "Store installs" },
  { value: "30+", label: "Countries" },
  { value: "4.9★", label: "Avg. rating" },
];

export function AboutContent() {
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                A Shopify app studio from Bangladesh
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Omnitech is a small, focused team building Shopify apps for
                merchants worldwide. We design, develop, and publish apps on
                the Shopify App Store—helping store owners automate workflows,
                save time, and grow their business.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                From order notifications to bulk editing and review collection,
                each app solves one problem really well. We believe the best
                Shopify apps are simple, reliable, and built with merchants in
                mind.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} direction="left">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/5 to-accent/10 p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Our mission
                </p>
                <p className="font-display mt-4 text-2xl font-bold leading-snug">
                  Build Shopify apps that merchants actually love to use.
                </p>
                <Link
                  href="/apps"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  Explore our apps →
                </Link>
              </div>
            </FadeIn>
          </div>

          <Stagger className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-border bg-surface p-6 text-center"
                >
                  <p className="font-display text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-display text-3xl font-bold">What we believe</h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl border border-border bg-background p-6">
                  <h3 className="font-display text-lg font-semibold text-accent">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold">Want to work with us?</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Whether you need a custom Shopify app or have feedback on our
              products—we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
