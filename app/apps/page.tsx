import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { AppsListing } from "@/app/components/AppsListing";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Our Apps",
  description:
    "Browse Omnitech Shopify apps on the App Store — CartLift for AI upsells, bundles, and cross-sells, with more apps on the way.",
  path: "/apps",
  keywords: [
    "Shopify apps",
    "Omnitech apps",
    "CartLift",
    "Shopify App Store",
    "cart drawer upsell",
  ],
});

export default function AppsPage() {
  return (
    <>
      <Header />
      <main>
        <AppsListing />
      </main>
      <Footer />
    </>
  );
}
