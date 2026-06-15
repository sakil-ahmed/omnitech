import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apps, getAppBySlug } from "@/app/data/apps";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { AppDetail } from "@/app/components/AppDetail";
import { createPageMetadata } from "@/app/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) {
    return { title: "App Not Found" };
  }

  return createPageMetadata({
    title: app.title,
    description: app.longDescription,
    path: `/apps/${app.slug}`,
    keywords: [
      app.title,
      app.tagline,
      "Shopify app",
      "Shopify App Store",
      "Omnitech",
    ],
  });
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) notFound();

  return (
    <>
      <Header />
      <main>
        <AppDetail app={app} />
      </main>
      <Footer />
    </>
  );
}
