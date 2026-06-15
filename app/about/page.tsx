import type { Metadata } from "next";
import { PageShell } from "@/app/components/PageShell";
import { PageHero } from "@/app/components/PageHero";
import { AboutContent } from "@/app/components/AboutContent";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Omnitech — a Shopify app studio building tools that help merchants automate workflows, save time, and grow their stores.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="About"
        title="Building Shopify apps merchants love"
        description="We're a focused Shopify app studio helping store owners work smarter."
      />
      <AboutContent />
    </PageShell>
  );
}
