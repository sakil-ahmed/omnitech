import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/app/components/PageShell";
import { PageHero } from "@/app/components/PageHero";
import { Pricing } from "@/app/components/Pricing";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for Omnitech Shopify apps. 7-day free trial on paid plans, billed securely through Shopify.",
  path: "/pricing",
  keywords: [
    "Shopify app pricing",
    "Shopify subscription plans",
    "free trial Shopify apps",
    "Omnitech pricing",
  ],
});

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        label="Pricing"
        title="Simple plans for every store"
        description="Choose the right plan for your store. All apps include a 7-day free trial."
      />
      <Pricing hideHeader />
      <section className="border-t border-border bg-surface py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm text-muted">
            Have questions about billing or refunds?{" "}
            <Link href="/refund" className="font-medium text-accent hover:underline">
              Read our refund policy
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-medium text-accent hover:underline">
              contact support
            </Link>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
