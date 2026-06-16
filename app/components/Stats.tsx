"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn, Stagger, StaggerItem } from "./motion";
import { companyStats } from "@/app/data/site-content";

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-shopify-dark py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-accent/40 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-emerald-400/30 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-300">
            Trusted by merchants
          </p>
          <h2 className="font-display mt-2 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Apps that merchants rely on daily
          </h2>
        </FadeIn>

        <Stagger className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-5">
          {companyStats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
              >
                <p className="font-display text-3xl font-bold md:text-4xl">
                  {stat.value}
                  {"suffix" in stat ? stat.suffix : ""}
                </p>
                <p className="mt-2 text-sm text-emerald-200/70">{stat.label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
