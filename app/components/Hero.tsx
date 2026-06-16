"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./motion";
import { company, trustItems } from "@/app/data/site-content";

export function Hero() {
  return (
    <section className="bg-grid hero-mesh relative -mt-16 flex min-h-[100dvh] items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-20 right-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal-200/25 blur-3xl dark:bg-teal-500/10"
        />
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-6 py-16 text-center md:py-20">
        <FadeIn delay={0.05}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface/80 px-4 py-1.5 text-sm shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-medium text-accent">{company.partnerLabel}</span>
            <span className="text-muted">· Est. {company.founded}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            We build{" "}
            <span className="text-gradient-animate">Shopify apps</span>
            <br />
            merchants love
          </h1>
        </FadeIn>

        <FadeIn delay={0.28}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {company.shortName} designs, builds, and publishes Shopify apps on the App Store—backed
            by a software engineering team serving businesses since {company.founded}.
          </p>
        </FadeIn>

        <FadeIn delay={0.38}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/apps"
                className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-light px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 sm:w-auto"
              >
                Explore our apps
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#process"
                className="inline-flex w-full items-center justify-center rounded-full border border-border bg-surface/80 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent sm:w-auto"
              >
                How we build apps
              </Link>
            </motion.div>
          </div>
        </FadeIn>

        <FadeIn delay={0.48}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.58}>
          <a
            href="#apps"
            className="mt-14 inline-flex flex-col items-center gap-1 text-muted transition-colors hover:text-accent"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <motion.svg
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 w-5 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
