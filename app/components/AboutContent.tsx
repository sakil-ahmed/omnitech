"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "@/app/components/motion";
import { company, companyStats, companyValues } from "@/app/data/site-content";

export function AboutContent() {
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                {company.aboutTitle}
              </h2>
              {company.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
              <p className="mt-4 text-sm text-muted">
                📍 {company.headquarters.street}, {company.headquarters.city},{" "}
                {company.headquarters.state} {company.headquarters.zip},{" "}
                {company.headquarters.country}
              </p>
              <a
                href={`tel:${company.phone.tel}`}
                className="mt-1 block text-sm text-accent hover:underline"
              >
                {company.phone.display}
              </a>
            </FadeIn>

            <FadeIn delay={0.15} direction="left">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/5 to-accent/10 p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Our mission
                </p>
                <p className="font-display mt-4 text-2xl font-bold leading-snug">
                  {company.mission}
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
            {companyStats.slice(0, 4).map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex h-full flex-col justify-center rounded-2xl border border-border bg-surface p-6 text-center"
                >
                  <p className="font-display text-3xl font-bold">
                    {stat.value}
                    {stat.suffix ?? ""}
                  </p>
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
            {companyValues.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card-equal rounded-2xl border border-border bg-background p-6">
                  <h3 className="font-display text-lg font-semibold text-accent">
                    {value.title}
                  </h3>
                  <p className="card-equal-body mt-3 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-display text-3xl font-bold">Our offices</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted">
              Headquartered in Bangladesh with a global merchant base.
            </p>
          </FadeIn>
          <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
            {company.offices.map((office) => (
              <StaggerItem key={office.label}>
                <div className="card-equal rounded-2xl border border-border bg-surface p-6">
                  <p className="text-sm font-semibold text-accent">{office.label}</p>
                  <p className="font-display mt-2 text-lg font-semibold">{office.street}</p>
                  <p className="card-equal-body mt-1 text-muted">
                    {office.city}, {office.state} {office.zip}, {company.headquarters.country}
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
              Whether you need a custom Shopify app, want to partner with us, or
              have feedback on our products—we&apos;d love to hear from you.
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
