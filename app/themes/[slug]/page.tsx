import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { themes, getThemeBySlug } from "@/app/data/themes";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ThemeDetail } from "@/app/components/ThemeDetail";
import { createPageMetadata } from "@/app/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return themes.map((theme) => ({ slug: theme.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const theme = getThemeBySlug(slug);
  if (!theme) {
    return { title: "Theme Not Found" };
  }

  return createPageMetadata({
    title: `${theme.title} Theme`,
    description: theme.longDescription,
    path: `/themes/${theme.slug}`,
    keywords: [
      theme.title,
      theme.tagline,
      "Shopify theme",
      theme.category,
      "Online Store 2.0",
      "Omnitech",
    ],
  });
}

export default async function ThemePage({ params }: Props) {
  const { slug } = await params;
  const theme = getThemeBySlug(slug);

  if (!theme) notFound();

  return (
    <>
      <Header />
      <main>
        <ThemeDetail theme={theme} />
      </main>
      <Footer />
    </>
  );
}
