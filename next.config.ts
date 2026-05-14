import type { NextConfig } from "next";

/** Full static HTML/CSS/JS in `out/` for hosts like Cloudflare Pages (no Node server). */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
