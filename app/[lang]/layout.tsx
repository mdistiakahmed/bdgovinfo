import { ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

interface LanguageLayoutProps {
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export default async function LanguageLayout({
  children,
  params,
}: LanguageLayoutProps) {
  const { lang } = await params;

  return (
    <div className="relative isolate min-h-screen flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gray-50" />
        <div
          className="absolute inset-0 bg-[url('/gov_seal.png')] bg-fixed bg-center bg-no-repeat opacity-[0.07]"
          style={{ backgroundSize: "min(85vmin, 520px)" }}
        />
      </div>
      <Topbar lang={lang} />
      <Breadcrumb />
      <main className="relative flex-1">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
