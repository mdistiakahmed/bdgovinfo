import type { MetadataRoute } from "next";

import { SERVICE_SLUGS } from "@/lib/service-slugs";

export const dynamic = "force-static";

const BASE = "https://www.bdgovinfo.com";
const LANGS = ["en", "bn"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = LANGS.map((lang) => ({
    url: `${BASE}/${lang}`,
    lastModified: new Date(),
    changeFrequency: lang === "en" ? "daily" : "weekly",
    priority: lang === "en" ? 1 : 0.9,
  }));

  const services: MetadataRoute.Sitemap = LANGS.flatMap((lang) =>
    SERVICE_SLUGS.map((slug) => ({
      url: `${BASE}/${lang}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...home, ...services];
}
