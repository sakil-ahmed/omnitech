import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ThemesListing } from "@/app/components/ThemesListing";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Our Themes",
  description:
    "Browse Omnitech Shopify themes — Amara, Meridian, Nova, and Bloom. Online Store 2.0 themes built for fashion, DTC, electronics, and beauty brands.",
  path: "/themes",
  keywords: [
    "Shopify themes",
    "Shopify theme development",
    "Online Store 2.0",
    "custom Shopify theme",
    "Amara theme",
    "Omnitech themes",
  ],
});

export default function ThemesPage() {
  return (
    <>
      <Header />
      <main>
        <ThemesListing />
      </main>
      <Footer />
    </>
  );
}
