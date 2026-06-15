import type { Metadata } from "next";
import { PageShell } from "@/app/components/PageShell";
import { PageHero } from "@/app/components/PageHero";
import { LegalPageContent } from "@/app/components/LegalPageContent";
import { termsOfService } from "@/app/data/legal";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Terms and conditions for using the Omnitech website and Shopify applications, including subscriptions and acceptable use.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        label="Legal"
        title="Terms of Service"
        description="Please read these terms carefully before using our website or apps."
      />
      <LegalPageContent
        lastUpdated={termsOfService.lastUpdated}
        intro={termsOfService.intro}
        sections={termsOfService.sections}
      />
    </PageShell>
  );
}
