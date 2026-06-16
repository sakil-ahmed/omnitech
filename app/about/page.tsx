import type { Metadata } from "next";
import { PageShell } from "@/app/components/PageShell";
import { PageHero } from "@/app/components/PageHero";
import { AboutContent } from "@/app/components/AboutContent";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Omnitech Inc. — a software, data, and AI consulting firm since 1998, and the team behind our Shopify App Store apps.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="About"
        title="Software engineering since 1998"
        description="Omnitech Inc. builds custom software—and publishes Shopify apps merchants rely on."
      />
      <AboutContent />
    </PageShell>
  );
}
