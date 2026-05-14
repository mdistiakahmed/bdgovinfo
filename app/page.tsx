import Link from "next/link";

/** Root is static HTML; `/` → `/en` is also handled via `public/_redirects` on Cloudflare Pages. */
export default function RootPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-gray-900">
        Bangladesh Government Services Portal
      </h1>
      <p className="max-w-md text-gray-600">
        Birth certificate, NID, passport verification and more.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/en"
          className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
        >
          English
        </Link>
        <Link
          href="/bn"
          className="rounded-lg border border-green-600 px-6 py-3 font-medium text-green-700 hover:bg-green-50"
        >
          বাংলা
        </Link>
      </div>
    </div>
  );
}
