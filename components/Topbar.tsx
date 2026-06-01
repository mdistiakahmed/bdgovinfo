"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Topbar = ({ lang }: { lang: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<
    "birth" | "nid" | "passport" | null
  >(null);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isAnyActive = (paths: string[]) => paths.some((p) => pathname === p);

  const navItems = [
    {
      id: "birth" as const,
      name: lang === "en" ? "Birth Certificate" : "জন্মনিবন্ধন",
      children: [
        {
          name:
            lang === "en"
              ? "Birth Certificate Check Online"
              : "জন্ম সনদ অনলাইনে যাচাই",
          href: `/${lang}/digital-birth-certificate-check-bangladesh`,
        },
        {
          name:
            lang === "en"
              ? "Birth Registration"
              : "জন্ম নিবন্ধন (রেজিস্ট্রেশন)",
          href: `/${lang}/digital-birth-certificate-registration-bangladesh`,
        },
      ],
    },
    {
      id: "nid" as const,
      name: lang === "en" ? "National ID" : "জাতীয় পরিচয়পত্র",
      children: [
        {
          name: lang === "en" ? "NID Check Online" : "এনআইডি অনলাইনে যাচাই",
          href: `/${lang}/nid-check-bangladesh`,
        },
        {
          name:
            lang === "en"
              ? "NID Registration"
              : "এনআইডি নিবন্ধন (রেজিস্ট্রেশন)",
          href: `/${lang}/nid-registration-bangladesh`,
        },
      ],
    },
    {
      id: "passport" as const,
      name: lang === "en" ? "Passport" : "পাসপোর্ট",
      children: [
        {
          name:
            lang === "en" ? "Passport Check Online" : "পাসপোর্ট অনলাইনে যাচাই",
          href: `/${lang}/check-bangladesh-e-passport-status-online`,
        },
        {
          name:
            lang === "en"
              ? "Passport Application"
              : "পাসপোর্ট আবেদন (রেজিস্ট্রেশন)",
          href: `/${lang}/how-to-apply-e-passport-bangladesh-online`,
        },
      ],
    },
  ];

  const otherLang = lang === "en" ? "bn" : "en";
  const langText = lang === "en" ? "বাংলা" : "English";

  const getSwitchLanguageHref = (targetLang: "en" | "bn") => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLang}`;

    const first = segments[0];
    const rest =
      first === "en" || first === "bn" ? segments.slice(1) : segments;
    return `/${targetLang}${rest.length ? `/${rest.join("/")}` : ""}`;
  };

  const switchLangHref = getSwitchLanguageHref(otherLang);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/gov_seal.png"
                  alt="Government Seal"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-green-700 leading-tight">
                  BDGovInfo
                </span>
                <span className="text-xs text-gray-500">.com</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const childHrefs = item.children.map((c) => c.href);
              const active = isAnyActive(childHrefs);

              return (
                <div key={item.id} className="relative group">
                  <button
                    type="button"
                    className={`px-3 py-2 text-sm font-medium inline-flex items-center gap-1 ${
                      active
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-700 hover:text-green-600"
                    }`}
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    {item.name}
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div className="absolute left-[-100px] top-full z-50 pt-2 hidden group-hover:block group-focus-within:block">
                    <div className="min-w-64 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-3 text-sm ${
                            isActive(child.href)
                              ? "bg-green-50 text-green-700"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            <Link
              href={switchLangHref}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              {langText}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              href={switchLangHref}
              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-xs font-medium"
            >
              {langText}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const childHrefs = item.children.map((c) => c.href);
              const active = isAnyActive(childHrefs);
              const expanded = openMobileSection === item.id;

              return (
                <div
                  key={item.id}
                  className="rounded-md overflow-hidden border border-gray-100"
                >
                  <button
                    type="button"
                    className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium ${
                      active
                        ? "text-green-700 bg-green-50"
                        : "text-gray-800 bg-white hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      setOpenMobileSection((prev) =>
                        prev === item.id ? null : item.id,
                      )
                    }
                    aria-expanded={expanded}
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`h-5 w-5 transition-transform ${
                        expanded ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {expanded && (
                    <div className="bg-white">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-5 py-2 text-sm ${
                            isActive(child.href)
                              ? "text-green-700 bg-green-50"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenMobileSection(null);
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
