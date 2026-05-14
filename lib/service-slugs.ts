/** All `[slug]` routes under `/[lang]/…` — keep in sync with handlers in `app/[lang]/[slug]/page.tsx`. */
export const SERVICE_SLUGS = [
  "digital-birth-certificate-check-bangladesh",
  "digital-birth-certificate-registration-bangladesh",
  "nid-check-bangladesh",
  "nid-registration-bangladesh",
  "passport-check-bangladesh",
  "passport-registration-bangladesh",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}
