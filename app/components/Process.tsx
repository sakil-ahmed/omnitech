"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion";
import { processSteps } from "@/app/data/site-content";

export function Process() {
  return (
    <section id="process" className="bg-grid relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our process</p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            From idea to App Store
          </h2>
          <p className="mt-4 text-lg text-muted">
            We follow Shopify&apos;s best practices at every step—so our apps pass review,
            perform well, and earn merchant trust.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <StaggerItem key={item.step}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="absolute top-10 left-[calc(100%-8px)] z-0 hidden h-px w-[calc(100%-16px)] lg:block">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="h-full origin-left bg-gradient-to-r from-accent/60 to-accent/10"
                    />
                  </div>
                )}
                <div className="relative rounded-2xl border border-border/80 bg-surface/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/10">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-display text-3xl font-bold text-accent/20 transition-colors group-hover:text-accent/40">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display mt-4 text-lg font-semibold group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
