import type { Metadata } from "next";
import { PageShell } from "@/app/components/PageShell";
import { PageHero } from "@/app/components/PageHero";
import { AboutContent } from "@/app/components/AboutContent";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Omnitech Inc. — a Shopify apps and themes studio founded in 2026, based in Tangail, Dhaka, Bangladesh.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="About"
        title="Building since 2026"
        description="Omnitech Inc. builds custom software—and publishes Shopify apps and themes merchants rely on."
      />
      <AboutContent />
    </PageShell>
  );
}
