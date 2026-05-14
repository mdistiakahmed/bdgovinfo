import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://bdgovinfo.com/sitemap.xml",
    host: "bdgovinfo.com",
  };
}
