import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Products } from "./components/Products";
import { Process } from "./components/Process";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Blog } from "./components/Blog";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { createPageMetadata } from "@/app/lib/metadata";
import { siteConfig } from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.tagline,
  description:
    "Omnitech builds and publishes Shopify apps on the App Store — starting with CartLift for AI upsells, with more apps coming soon.",
  path: "/",
  keywords: [
    "Shopify apps",
    "Shopify App Store",
    "CartLift",
    "Shopify app studio",
    "ecommerce automation",
  ],
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Process />
        <Stats />
        <Features />
        <Pricing />
        <FAQ />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
