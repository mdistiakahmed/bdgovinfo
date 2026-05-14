import type { NextConfig } from "next";

/** Full static HTML/CSS/JS in `out/` for hosts like Cloudflare Pages (no Node server). */
const nextConfig: NextConfig = {
  output: "export",
  // Ensures /about becomes /about/index.html, which is more crawler-friendly
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
