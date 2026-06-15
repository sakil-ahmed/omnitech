import type { Metadata } from "next";
import { PageShell } from "@/app/components/PageShell";
import { PageHero } from "@/app/components/PageHero";
import { ContactContent } from "@/app/components/ContactContent";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Omnitech for Shopify app support, billing help, partnerships, or custom app development inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        label="Contact"
        title="We'd love to hear from you"
        description="Questions about our apps, billing, or a custom project? Send us a message."
      />
      <ContactContent />
    </PageShell>
  );
}
