"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./motion";

export function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl">
            {/* Animated border glow */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-accent via-emerald-400 to-accent-light animate-gradient opacity-80" />

            <div className="relative m-px overflow-hidden rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-shopify-dark via-accent to-accent-light px-8 py-16 text-center text-white md:px-16 md:py-20">
              <div className="pointer-events-none absolute inset-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-32 -right-32 h-64 w-64 rounded-full border border-white/10"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full border border-white/10"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
              </div>

              <div className="relative">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-display text-3xl font-bold tracking-tight md:text-4xl"
                >
                  Need a custom Shopify app?
                </motion.h2>
                <p className="mx-auto mt-4 max-w-lg text-emerald-100">
                  We build public apps for the App Store and private apps for agencies and
                  brands. Tell us your idea—we&apos;ll handle the rest.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <motion.a
                    href="/apps"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-accent shadow-xl"
                  >
                    Browse our apps
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm"
                  >
                    Contact us
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
