import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:lang(en|bn)/birth-certificate/check",
        destination: "/:lang/digital-birth-certificate-check-bangladesh",
        permanent: true,
      },
      {
        source: "/:lang(en|bn)/birth-certificate/registration",
        destination: "/:lang/digital-birth-certificate-registration-bangladesh",
        permanent: true,
      },
      {
        source: "/:lang(en|bn)/nid/check",
        destination: "/:lang/nid-check-bangladesh",
        permanent: true,
      },
      {
        source: "/:lang(en|bn)/nid/registration",
        destination: "/:lang/nid-registration-bangladesh",
        permanent: true,
      },
      {
        source: "/:lang(en|bn)/passport/check",
        destination: "/:lang/passport-check-bangladesh",
        permanent: true,
      },
      {
        source: "/:lang(en|bn)/passport/registration",
        destination: "/:lang/passport-registration-bangladesh",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
