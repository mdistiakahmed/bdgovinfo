import Link from "next/link";
import type { Metadata } from "next";

const content = {
  en: {
    seo: {
      title: "Check Digital Birth Certificate Bangladesh verification",
      description:
        "Check Bangladesh digital birth certificate verification using birth registration number and date of birth. Official portal: everify.bdris.gov.bd",
    },
    title: "Check Digital Birth Certificate (Bangladesh)",
    subtitle:
      "To verify a digital birth certificate, you need your Birth Registration Number and Date of Birth.",
    fields: {
      brn: "Birth Registration Number (17 digits)",
      dob: "Date of Birth",
      brnPlaceholder: "Enter 17-digit birth registration number",
      dobPlaceholder: "YYYY-MM-DD",
    },
    notes: {
      officialPortal: "Official government portal",
      botChallenge:
        "On the official portal you must also pass a bot challenge by summing two numbers.",
      outcome:
        "If your record is digitized and the information matches, a digital birth certificate will be displayed.",
    },
    importance: {
      title: "Why a digital birth certificate matters in Bangladesh",
      blocks: [
        {
          title: "Faster verification and reduced hassle",
          text: "A digital birth certificate helps you verify registration details quickly, without repeated visits or manual checks.",
        },
        {
          title: "Useful for education and services",
          text: "Birth registration is commonly needed for school admission, exam registration, and many public services.",
        },
        {
          title: "Helps avoid mistakes and fraud",
          text: "Digital verification helps confirm that the Birth Registration Number and Date of Birth match official records, reducing errors and misuse.",
        },
        {
          title: "Improves record keeping",
          text: "Digitization supports better preservation of records and makes it easier to retrieve information when needed.",
        },
      ],
    },
    check: "Check on Official Portal",
    back: "Back to Services",
  },
  bn: {
    seo: {
      title: "Check Digital Birth Certificate Bangladesh verification",
      description:
        "জন্ম নিবন্ধন নম্বর ও জন্ম তারিখ দিয়ে বাংলাদেশ ডিজিটাল জন্ম সনদ যাচাই করুন। অফিসিয়াল পোর্টাল: everify.bdris.gov.bd",
    },
    title: "ডিজিটাল জন্ম সনদ যাচাই (বাংলাদেশ)",
    subtitle:
      "ডিজিটাল জন্ম সনদ যাচাই করতে দুটি তথ্য প্রয়োজন: জন্ম নিবন্ধন নম্বর এবং জন্ম তারিখ।",
    fields: {
      brn: "জন্ম নিবন্ধন নম্বর (১৭ অংক)",
      dob: "জন্ম তারিখ",
      brnPlaceholder: "১৭ অংকের জন্ম নিবন্ধন নম্বর লিখুন",
      dobPlaceholder: "YYYY-MM-DD",
    },
    notes: {
      officialPortal: "বাংলাদেশ সরকারের অফিসিয়াল পোর্টাল",
      botChallenge:
        "অফিসিয়াল পোর্টালে যাচাই করতে দুইটি সংখ্যার যোগফল দিয়ে বট চ্যালেঞ্জ পাশ করতে হয়।",
      outcome:
        "আপনার তথ্য ডিজিটালাইজড থাকলে এবং তথ্য মিললে ডিজিটাল জন্ম সনদ দেখাবে।",
    },
    importance: {
      title: "বাংলাদেশে ডিজিটাল জন্ম সনদের গুরুত্ব",
      blocks: [
        {
          title: "দ্রুত যাচাই ও কম ভোগান্তি",
          text: "ডিজিটাল জন্ম সনদ/যাচাই ব্যবস্থায় নিবন্ধনের তথ্য দ্রুত যাচাই করা যায়—বারবার অফিসে গিয়ে যাচাই করার প্রয়োজন কমে।",
        },
        {
          title: "শিক্ষা ও বিভিন্ন সেবায় প্রয়োজন",
          text: "স্কুলে ভর্তি, পরীক্ষার নিবন্ধন এবং বিভিন্ন সরকারি/বেসরকারি সেবায় জন্ম নিবন্ধনের তথ্য প্রায়ই প্রয়োজন হয়।",
        },
        {
          title: "ভুল ও জালিয়াতি কমাতে সহায়তা করে",
          text: "অফিসিয়াল রেকর্ডের সাথে জন্ম নিবন্ধন নম্বর ও জন্ম তারিখ মিলিয়ে দেখা যায়—ভুল তথ্য বা অপব্যবহার কমে।",
        },
        {
          title: "রেকর্ড সংরক্ষণ উন্নত করে",
          text: "ডিজিটালাইজেশন রেকর্ড সংরক্ষণ ও প্রয়োজনের সময় তথ্য খুঁজে পেতে আরও সহজ করে।",
        },
      ],
    },
    check: "অফিসিয়াল পোর্টালে যাচাই করুন",
    back: "সেবায় ফিরুন",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang === "bn" ? "bn" : "en") as "en" | "bn";
  const t = content[currentLang];
  return {
    title: t.seo.title,
    description: t.seo.description,
  };
}

export default async function BirthCertificateCheck({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = (lang === "bn" ? "bn" : "en") as "en" | "bn";
  const t = content[currentLang];
  const officialUrl = "https://everify.bdris.gov.bd/";

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {t.title}
            </h1>
            <p className="text-lg text-gray-700">{t.subtitle}</p>
            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium">{t.notes.officialPortal}:</span>{" "}
                <a
                  href={officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:text-blue-800 underline"
                >
                  everify.bdris.gov.bd
                </a>
              </p>
              <p>{t.notes.botChallenge}</p>
              <p>{t.notes.outcome}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form
              className="space-y-6"
              action={officialUrl}
              method="get"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.brn}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.fields.brnPlaceholder}
                  inputMode="numeric"
                  autoComplete="off"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.dob}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.fields.dobPlaceholder}
                  autoComplete="bday"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                {t.check}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm">
              <Link
                href={`/${currentLang}/birth-certificate`}
                className="text-gray-600 hover:text-gray-800 underline"
              >
                {t.back}
              </Link>
              <a
                href={officialUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:text-blue-800 underline"
              >
                {officialUrl}
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t.importance.title}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {t.importance.blocks.map((b) => (
                <div
                  key={b.title}
                  className="bg-white rounded-xl border border-gray-200 p-5"
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
