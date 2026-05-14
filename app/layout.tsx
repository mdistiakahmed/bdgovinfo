import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "BDGovInfo - Bangladesh Government Services Portal | Birth Certificate, NID & Passport Online Check",

  description:
    "BDGovInfo helps you access Bangladesh government online services including digital birth certificate verification, NID check, passport status tracking, birth registration information, and step-by-step guides for official government services.",

  keywords: [
    "Bangladesh Government Services",
    "Birth Certificate Bangladesh",
    "Digital Birth Certificate Check",
    "BDRIS verification",
    "NID check Bangladesh",
    "National ID verification",
    "Passport status check Bangladesh",
    "Bangladesh e passport",
    "Birth registration Bangladesh",
    "Government online services Bangladesh",
    "BDGovInfo",
  ],

  openGraph: {
    title: "BDGovInfo - Bangladesh Government Services Portal",

    description:
      "Check Bangladesh digital birth certificates, NID information, passport status, and other government services online with step-by-step guidance.",

    url: "https://www.bdgovinfo.com",

    siteName: "BDGovInfo",

    type: "website",

    images: [
      {
        url: "https://www.bdgovinfo.com/gov_seal.png",
        width: 1200,
        height: 630,
        alt: "BDGovInfo Bangladesh Government Services Portal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "BDGovInfo - Bangladesh Government Services Portal",

    description:
      "Check birth certificate, NID, and passport services online in Bangladesh.",

    images: ["https://www.bdgovinfo.com/gov_seal.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-6YMLKH63H4" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
