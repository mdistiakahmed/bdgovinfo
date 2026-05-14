import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isServiceSlug, type ServiceSlug } from "@/lib/service-slugs";

import BirthCertificateCheck, {
  generateMetadata as birthCertificateCheckGenerateMetadata,
} from "@/components/birth-certificate/check/page";
import BirthCertificateRegistration from "@/components/birth-certificate/registration/page";

import NIDCheck from "@/components/nid/check/page";
import NIDRegistration from "@/components/nid/registration/page";

import PassportCheck from "@/components/passport/check/page";
import PassportRegistration from "@/components/passport/registration/page";

type Lang = "en" | "bn";

function normalizeLang(lang: string): Lang {
  return lang === "bn" ? "bn" : "en";
}

const BASE_URL = "https://bdgovinfo.com";

type SlugRouteContext = {
  lang: Lang;
  slug: string;
};

type SlugDefinition = {
  render: (ctx: SlugRouteContext) => React.ReactNode;
  generateMetadata?: (ctx: SlugRouteContext) => Promise<Metadata> | Metadata;
};

const SLUGS: Record<ServiceSlug, SlugDefinition> = {
  "digital-birth-certificate-check-bangladesh": {
    render: ({ lang }) => (
      <BirthCertificateCheck params={Promise.resolve({ lang })} />
    ),
    generateMetadata: async ({ lang }) => {
      const metadata = await birthCertificateCheckGenerateMetadata({
        params: Promise.resolve({ lang }),
      });

      const canonical = `${BASE_URL}/${lang}/digital-birth-certificate-check-bangladesh`;
      const ogImage = `${BASE_URL}/birth_certificate.png`;
      return {
        ...metadata,
        alternates: {
          ...metadata.alternates,
          canonical,
          languages: {
            en: `${BASE_URL}/en/digital-birth-certificate-check-bangladesh`,
            bn: `${BASE_URL}/bn/digital-birth-certificate-check-bangladesh`,
          },
        },
        openGraph: {
          ...metadata.openGraph,
          url: canonical,
          images: [ogImage],
        },
        twitter: {
          ...metadata.twitter,
          images: [ogImage],
        },
      };
    },
  },
  "digital-birth-certificate-registration-bangladesh": {
    render: ({ lang }) => (
      <BirthCertificateRegistration params={Promise.resolve({ lang })} />
    ),
    generateMetadata: ({ lang }) => {
      const canonical = `${BASE_URL}/${lang}/digital-birth-certificate-registration-bangladesh`;
      const title =
        lang === "bn"
          ? "ডিজিটাল জন্ম নিবন্ধন নিবন্ধন বাংলাদেশ | অনলাইনে জন্ম সনদ আবেদন"
          : "Digital Birth Certificate Registration Bangladesh | Apply Online";
      const description =
        lang === "bn"
          ? "বাংলাদেশে ডিজিটাল জন্ম সনদ/জন্ম নিবন্ধনের জন্য অনলাইনে আবেদন করার নিয়ম ও ফর্ম।"
          : "Apply for Bangladesh birth certificate registration online. Form fields, requirements, and steps.";
      const ogImage = `${BASE_URL}/birth_certificate.png`;
      return {
        title,
        description,
        alternates: {
          canonical,
          languages: {
            en: `${BASE_URL}/en/digital-birth-certificate-registration-bangladesh`,
            bn: `${BASE_URL}/bn/digital-birth-certificate-registration-bangladesh`,
          },
        },
        openGraph: {
          title,
          description,
          url: canonical,
          siteName: "BDGovInfo",
          type: "website",
          images: [ogImage],
        },
        twitter: {
          card: "summary_large_image",
          title,
          description,
          images: [ogImage],
        },
        robots: {
          index: true,
          follow: true,
        },
      };
    },
  },

  "nid-check-bangladesh": {
    render: ({ lang }) => <NIDCheck params={Promise.resolve({ lang })} />,
    generateMetadata: ({ lang }) => {
      const canonical = `${BASE_URL}/${lang}/nid-check-bangladesh`;
      const title =
        lang === "bn"
          ? "এনআইডি যাচাই বাংলাদেশ | অনলাইনে জাতীয় পরিচয়পত্র স্ট্যাটাস"
          : "NID Check Bangladesh | National ID Status Online";
      const description =
        lang === "bn"
          ? "বাংলাদেশে এনআইডি (জাতীয় পরিচয়পত্র) স্ট্যাটাস অনলাইনে যাচাই করার নির্দেশনা।"
          : "Check Bangladesh National ID (NID) status online. Guidance and steps.";
      return {
        title,
        description,
        alternates: {
          canonical,
          languages: {
            en: `${BASE_URL}/en/nid-check-bangladesh`,
            bn: `${BASE_URL}/bn/nid-check-bangladesh`,
          },
        },
        robots: { index: true, follow: true },
      };
    },
  },
  "nid-registration-bangladesh": {
    render: ({ lang }) => (
      <NIDRegistration params={Promise.resolve({ lang })} />
    ),
    generateMetadata: ({ lang }) => {
      const canonical = `${BASE_URL}/${lang}/nid-registration-bangladesh`;
      const title =
        lang === "bn"
          ? "এনআইডি নিবন্ধন বাংলাদেশ | অনলাইনে জাতীয় পরিচয়পত্র আবেদন"
          : "NID Registration Bangladesh | Apply for National ID";
      const description =
        lang === "bn"
          ? "বাংলাদেশে এনআইডি (জাতীয় পরিচয়পত্র) নিবন্ধনের জন্য অনলাইনে আবেদন নির্দেশনা।"
          : "Apply for Bangladesh National ID (NID) registration online. Form and steps.";
      return {
        title,
        description,
        alternates: {
          canonical,
          languages: {
            en: `${BASE_URL}/en/nid-registration-bangladesh`,
            bn: `${BASE_URL}/bn/nid-registration-bangladesh`,
          },
        },
        robots: { index: true, follow: true },
      };
    },
  },

  "passport-check-bangladesh": {
    render: ({ lang }) => <PassportCheck params={Promise.resolve({ lang })} />,
    generateMetadata: ({ lang }) => {
      const canonical = `${BASE_URL}/${lang}/passport-check-bangladesh`;
      const title =
        lang === "bn"
          ? "পাসপোর্ট যাচাই বাংলাদেশ | অনলাইনে পাসপোর্ট স্ট্যাটাস"
          : "Passport Check Bangladesh | Passport Status Online";
      const description =
        lang === "bn"
          ? "বাংলাদেশে পাসপোর্ট স্ট্যাটাস অনলাইনে যাচাই করার নির্দেশনা।"
          : "Check Bangladesh passport status online. Guidance and steps.";
      return {
        title,
        description,
        alternates: {
          canonical,
          languages: {
            en: `${BASE_URL}/en/passport-check-bangladesh`,
            bn: `${BASE_URL}/bn/passport-check-bangladesh`,
          },
        },
        robots: { index: true, follow: true },
      };
    },
  },
  "passport-registration-bangladesh": {
    render: ({ lang }) => (
      <PassportRegistration params={Promise.resolve({ lang })} />
    ),
    generateMetadata: ({ lang }) => {
      const canonical = `${BASE_URL}/${lang}/passport-registration-bangladesh`;
      const title =
        lang === "bn"
          ? "পাসপোর্ট আবেদন বাংলাদেশ | অনলাইনে পাসপোর্ট রেজিস্ট্রেশন"
          : "Passport Application Bangladesh | Apply Online";
      const description =
        lang === "bn"
          ? "বাংলাদেশে পাসপোর্টের জন্য অনলাইনে আবেদন করার নির্দেশনা ও ফর্ম।"
          : "Apply for Bangladesh passport online. Form fields, requirements, and steps.";
      return {
        title,
        description,
        alternates: {
          canonical,
          languages: {
            en: `${BASE_URL}/en/passport-registration-bangladesh`,
            bn: `${BASE_URL}/bn/passport-registration-bangladesh`,
          },
        },
        robots: { index: true, follow: true },
      };
    },
  },
};

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

/** Only pre-built paths exist as static HTML; unknown slugs are not generated. */
export const dynamicParams = false;

export function generateStaticParams() {
  const langs: Lang[] = ["en", "bn"];
  const slugs = Object.keys(SLUGS) as ServiceSlug[];
  return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const currentLang = normalizeLang(lang);

  if (!isServiceSlug(slug)) notFound();

  const def = SLUGS[slug];
  if (!def?.generateMetadata) notFound();

  return await def.generateMetadata({ lang: currentLang, slug });
}

export default async function SlugPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const currentLang = normalizeLang(lang);

  if (!isServiceSlug(slug)) notFound();

  const def = SLUGS[slug];
  if (!def) notFound();

  return def.render({ lang: currentLang, slug });
}
