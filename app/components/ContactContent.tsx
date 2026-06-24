"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "@/app/components/motion";
import { company, contactMethods, contactSubjects, emails } from "@/app/data/site-content";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <h2 className="font-display text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-muted">
                Fill out the form and we&apos;ll get back to you at {emails.support}.{" "}
                {company.responseTime}.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center"
                >
                  <p className="text-3xl">✓</p>
                  <p className="font-display mt-3 text-lg font-semibold">Message sent!</p>
                  <p className="mt-2 text-sm text-muted">
                    We&apos;ll reply to your email within 24 hours on business days.
                  </p>
                </motion.div>
              ) : (
                <form
                  className="mt-8 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder="you@store.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="store" className="mb-1.5 block text-sm font-medium">
                      Shopify store URL <span className="text-muted">(optional)</span>
                    </label>
                    <input
                      id="store"
                      name="store"
                      type="url"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="https://your-store.myshopify.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      {contactSubjects.map((subject) => (
                        <option key={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="How can we help?"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-full bg-accent py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 sm:w-auto sm:px-10"
                  >
                    Send message
                  </motion.button>
                </form>
              )}
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.15}>
              <h2 className="font-display text-2xl font-bold">Other ways to reach us</h2>
            </FadeIn>
            <Stagger className="mt-8 space-y-4">
              {contactMethods.map((method) => (
                <StaggerItem key={method.title}>
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <p className="text-sm font-semibold text-accent">{method.title}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="font-display mt-1 block text-lg font-semibold hover:text-accent"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="font-display mt-1 text-lg font-semibold">{method.value}</p>
                    )}
                    <p className="mt-2 text-sm text-muted">{method.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeIn delay={0.3}>
              <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-shopify-dark to-accent p-6 text-white">
                <p className="font-semibold">Need custom Shopify apps or themes?</p>
                <p className="mt-2 text-sm text-emerald-100">
                  {company.name} builds public apps, private apps, and custom Online Store 2.0
                  themes—and delivers custom software, data, and AI consulting. Describe your
                  project in the contact form or call {company.phone.display}.
                </p>
                <a
                  href={company.mainWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-emerald-200 hover:underline"
                >
                  Visit omnitech-inc.com →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
