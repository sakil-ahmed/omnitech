"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion";
import { blogPosts } from "@/app/data/site-content";

export function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Blog</p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Shopify app insights
            </h2>
            <p className="mt-3 max-w-lg text-muted">
              Guides on App Store review, Remix development, and pricing—written by our team.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link href="/contact" className="text-sm font-semibold text-accent hover:underline">
              Request an article topic →
            </Link>
          </FadeIn>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.title}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card-equal group overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-sm transition-shadow hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
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
                  <p className="card-equal-body mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="card-equal-footer mt-4 inline-flex items-center gap-1 text-sm font-semibold text-muted">
                    {post.status}
                  </span>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
