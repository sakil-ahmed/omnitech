import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { AppsListing } from "@/app/components/AppsListing";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Our Apps",
  description:
    "Browse all Omnitech Shopify apps — order notifications, bulk product editing, smart reviews, and stock alerts for your store.",
  path: "/apps",
  keywords: [
    "Shopify order notifications",
    "bulk product editor Shopify",
    "Shopify reviews app",
    "inventory alert Shopify",
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
