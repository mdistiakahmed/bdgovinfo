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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Topbar lang={lang} />
      <Breadcrumb />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
