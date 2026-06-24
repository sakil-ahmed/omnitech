import type { MetadataRoute } from "next";
import { apps } from "@/app/data/apps";
import { themes } from "@/app/data/themes";
import { siteConfig } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/apps",
    "/themes",
    "/about",
    "/contact",
    "/pricing",
    "/privacy",
    "/terms",
    "/refund",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const appEntries: MetadataRoute.Sitemap = apps.map((app) => ({
    url: `${siteConfig.url}/apps/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const themeEntries: MetadataRoute.Sitemap = themes.map((theme) => ({
    url: `${siteConfig.url}/themes/${theme.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticEntries, ...appEntries, ...themeEntries];
}
