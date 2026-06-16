import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/app/components/PageShell";
import { PageHero } from "@/app/components/PageHero";
import { LegalPageContent } from "@/app/components/LegalPageContent";
import { refundPolicy } from "@/app/data/legal";
import { emails } from "@/app/data/site-content";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Refund Policy",
  description:
    "Omnitech Inc. refund policy for Shopify app subscriptions — 7-day free trial, 14-day refund window, and how to request a refund.",
  path: "/refund",
});

export default function RefundPage() {
  return (
    <PageShell>
      <PageHero
        label="Legal"
        title="Refund Policy"
        description="Our refund policy for Omnitech Inc. Shopify app subscriptions."
      />
      <LegalPageContent
        lastUpdated={refundPolicy.lastUpdated}
        intro={refundPolicy.intro}
        sections={refundPolicy.sections}
      />
      <section className="border-t border-border bg-surface py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm text-muted">
            Need to request a refund?{" "}
            <Link href="/contact" className="font-medium text-accent hover:underline">
              Contact support
            </Link>{" "}
            or email{" "}
            <a href={`mailto:${emails.support}`} className="font-medium text-accent hover:underline">
              {emails.support}
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
