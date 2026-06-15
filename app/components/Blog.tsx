"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion";

const posts = [
  {
    title: "How to pass Shopify App Store review on the first try",
    excerpt:
      "A checklist for listing quality, privacy policies, OAuth scopes, and common rejection reasons—and how to avoid them.",
    date: "Jun 10, 2026",
    category: "App Store",
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Shopify embedded apps with Remix: a practical guide",
    excerpt:
      "Set up Shopify CLI, authenticate sessions, use Polaris components, and deploy your first embedded app to production.",
    date: "Jun 3, 2026",
    category: "Development",
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    title: "Choosing the right pricing model for your Shopify app",
    excerpt:
      "Compare free, freemium, usage-based, and flat-rate billing—and how Shopify's Billing API handles each model.",
    date: "May 28, 2026",
    category: "Business",
    gradient: "from-amber-500/20 to-orange-500/10",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Blog
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Shopify app insights
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="text-sm font-semibold text-accent"
            >
              View all articles →
            </motion.a>
          </FadeIn>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.title}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-sm transition-shadow hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
                      {post.category}
                    </span>
                    <span className="text-muted">{post.date}</span>
                  </div>
                  <h3 className="font-display mt-4 text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <motion.a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover:text-accent"
                    whileHover={{ x: 4 }}
                  >
                    Read article
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
