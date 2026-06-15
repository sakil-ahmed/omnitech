import type { Metadata } from "next";
import { PageShell } from "@/app/components/PageShell";
import { PageHero } from "@/app/components/PageHero";
import { LegalPageContent } from "@/app/components/LegalPageContent";
import { privacyPolicy } from "@/app/data/legal";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read how Omnitech collects, uses, stores, and protects your data when you use our website and Shopify applications.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="How we handle your data when you use our website and Shopify apps."
      />
      <LegalPageContent
        lastUpdated={privacyPolicy.lastUpdated}
        intro={privacyPolicy.intro}
        sections={privacyPolicy.sections}
      />
    </PageShell>
  );
}
