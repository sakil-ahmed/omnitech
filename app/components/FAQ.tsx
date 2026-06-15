"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./motion";

const faqs = [
  {
    question: "How do I install your Shopify apps?",
    answer:
      "Visit the Shopify App Store, search for the app name (e.g. OrderNotify Pro), and click Install. Authorize the requested permissions and the app opens inside your Shopify admin—ready to configure.",
  },
  {
    question: "How does billing work?",
    answer:
      "All subscriptions are billed through Shopify's billing API. Charges appear on your regular Shopify invoice. You get a 7-day free trial on paid plans, and you can cancel anytime from Apps > Manage in your admin.",
  },
  {
    question: "Will the app slow down my store?",
    answer:
      "No. Our apps run as embedded admin tools and use lightweight storefront scripts only when needed (e.g. review widgets). We follow Shopify performance best practices and test on live stores.",
  },
  {
    question: "Do you offer custom Shopify app development?",
    answer:
      "Yes. If you need a private or custom app for your agency or brand, contact us with your requirements. We build custom apps using Shopify CLI, Remix, and the latest APIs.",
  },
  {
    question: "What happens if I uninstall the app?",
    answer:
      "Your subscription stops immediately. Per Shopify policy, we delete store data within 48 hours of uninstall unless you request an export. You can reinstall anytime.",
  },
  {
    question: "How can I get support?",
    answer:
      "Email us at support@omnitech.dev or use the in-app help widget. We respond within 24 hours on business days. Pro plan customers get priority support.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Common questions
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={faq.question} delay={index * 0.05}>
                <motion.div
                  layout
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-accent/30 bg-surface shadow-md shadow-accent/5"
                      : "border-border/80 bg-background"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                        isOpen ? "bg-accent/10 text-accent" : "bg-border/50 text-muted"
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
