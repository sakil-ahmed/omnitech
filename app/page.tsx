import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Products } from "./components/Products";
import { Themes } from "./components/Themes";
import { Process } from "./components/Process";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Blog } from "./components/Blog";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Shopify Apps & Themes Built for Merchants",
  description:
    "Omnitech builds and publishes Shopify apps on the App Store—and crafts custom Online Store 2.0 themes for growing ecommerce brands.",
  path: "/",
  keywords: [
    "Shopify apps",
    "Shopify themes",
    "Shopify theme development",
    "Shopify App Store",
    "Shopify app studio",
    "Online Store 2.0",
    "ecommerce automation",
    "merchant tools",
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
        <Themes />
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
