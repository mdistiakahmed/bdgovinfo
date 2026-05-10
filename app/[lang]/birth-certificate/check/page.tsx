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
  const baseUrl = "https://bdgovinfo.com";
  const path = `/${currentLang}/birth-certificate/check`;
  const canonical = `${baseUrl}${path}`;
  const ogImage = "/globe.svg";
  return {
    title: t.seo.title,
    description: t.seo.description,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en/birth-certificate/check`,
        bn: `${baseUrl}/bn/birth-certificate/check`,
      },
    },
    openGraph: {
      title: t.seo.title,
      description: t.seo.description,
      url: canonical,
      siteName: "BDGovInfo",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.title,
      description: t.seo.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
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
              {currentLang === "en"
                ? "Digital Birth Certificate System in Bangladesh"
                : "বাংলাদেশে ডিজিটাল জন্ম নিবন্ধন ব্যবস্থা"}
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4 text-gray-700 leading-8">
              {currentLang === "en" ? (
                <>
                  <p>
                    In Bangladesh, birth registration was traditionally
                    maintained in paper records at local Union Parishad,
                    Municipality, or City Corporation offices. For many years,
                    people had to visit the chairman’s office or local
                    government office physically to verify birth information or
                    collect certified copies. Paper-based records were often
                    difficult to preserve, vulnerable to damage, and
                    time-consuming to search manually.
                  </p>

                  <p>
                    To modernize public services, the Government of Bangladesh
                    introduced a digital birth registration system under the
                    Birth and Death Registration Information System (BDRIS).
                    Today, millions of birth records are stored digitally in the
                    government database, making verification faster, easier, and
                    more secure. Citizens can now verify a digital birth
                    certificate online using the Birth Registration Number and
                    Date of Birth through the official verification portal.
                  </p>

                  <p>
                    A digital birth certificate is now an essential document for
                    many important services in Bangladesh. It is commonly
                    required for school admission, passport application,
                    National ID related processes, mobile SIM registration, bank
                    account opening, and various government or private services.
                    In many cases, parents are also required to have their own
                    digital birth certificates registered before applying for a
                    birth certificate for their child.
                  </p>

                  <p>
                    The digitization process has significantly improved record
                    management and reduced the risk of errors or duplicate
                    information. Online verification also helps confirm whether
                    the provided Birth Registration Number and Date of Birth
                    match official government records, helping reduce fraud and
                    misinformation.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    বাংলাদেশে আগে জন্ম নিবন্ধনের তথ্য মূলত কাগজপত্রের মাধ্যমে
                    সংরক্ষণ করা হতো। ইউনিয়ন পরিষদ চেয়ারম্যান অফিস, পৌরসভা বা
                    সিটি কর্পোরেশন অফিসে হাতে লেখা রেজিস্টারে জন্ম নিবন্ধনের
                    তথ্য রাখা হতো। কোনো তথ্য যাচাই বা জন্ম সনদের কপি সংগ্রহ করতে
                    হলে অনেক সময় সরাসরি স্থানীয় অফিসে যেতে হতো। কাগজভিত্তিক এই
                    পদ্ধতিতে তথ্য সংরক্ষণ কঠিন ছিল এবং পুরোনো রেকর্ড খুঁজে বের
                    করতেও সময় লাগতো।
                  </p>

                  <p>
                    পরবর্তীতে বাংলাদেশ সরকার Birth and Death Registration
                    Information System (BDRIS) এর মাধ্যমে জন্ম নিবন্ধন
                    প্রক্রিয়াকে ডিজিটালাইজ করে। বর্তমানে দেশের অসংখ্য জন্ম
                    নিবন্ধনের তথ্য সরকারি ডাটাবেজে সংরক্ষিত রয়েছে। এখন জন্ম
                    নিবন্ধন নম্বর এবং জন্ম তারিখ ব্যবহার করে অনলাইনে ডিজিটাল
                    জন্ম সনদ যাচাই করা যায়, যা যাচাই প্রক্রিয়াকে দ্রুত, সহজ এবং
                    নিরাপদ করেছে।
                  </p>

                  <p>
                    বর্তমানে ডিজিটাল জন্ম সনদ বাংলাদেশে অত্যন্ত গুরুত্বপূর্ণ
                    একটি ডকুমেন্ট। স্কুলে ভর্তি, পাসপোর্ট আবেদন, জাতীয় পরিচয়পত্র
                    সম্পর্কিত কার্যক্রম, মোবাইল সিম নিবন্ধন, ব্যাংক একাউন্ট খোলা
                    এবং বিভিন্ন সরকারি ও বেসরকারি সেবার জন্য এটি প্রয়োজন হয়।
                    অনেক ক্ষেত্রে শিশুর জন্ম সনদ করার সময় বাবা-মায়ের ডিজিটাল
                    জন্ম নিবন্ধন তথ্যও প্রয়োজন হয়।
                  </p>

                  <p>
                    জন্ম নিবন্ধনের ডিজিটালাইজেশন তথ্য সংরক্ষণ ব্যবস্থাকে আরও
                    উন্নত করেছে এবং ভুল তথ্য বা ডুপ্লিকেট রেকর্ডের ঝুঁকি
                    কমিয়েছে। অনলাইন যাচাইয়ের মাধ্যমে জন্ম নিবন্ধন নম্বর ও জন্ম
                    তারিখ সরকারি রেকর্ডের সাথে মিলিয়ে দেখা যায়, যা জালিয়াতি ও
                    ভুল তথ্য প্রতিরোধে সহায়তা করে।
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {currentLang === "en"
                ? "What to do if the digital birth certificate is not found"
                : "ডিজিটাল জন্ম সনদ খুঁজে না পেলে কী করবেন"}
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4 text-gray-700 leading-8">
              {currentLang === "en" ? (
                <>
                  <p>
                    Sometimes the digital birth certificate may not appear even
                    after entering the correct Birth Registration Number and
                    Date of Birth. This can happen for several reasons,
                    especially for older birth records that were originally
                    maintained in paper format and later transferred into the
                    digital database.
                  </p>

                  <p>
                    First, carefully check whether the 17-digit Birth
                    Registration Number and Date of Birth were entered
                    correctly. Even a small typing mistake or incorrect date
                    format can prevent the system from finding the record.
                  </p>

                  <p>
                    If the information is correct but no result is shown, it may
                    mean the birth record has not yet been fully digitized or
                    updated in the government database. In such cases, you may
                    need to contact the local Union Parishad, Municipality, or
                    City Corporation office where the birth registration was
                    originally completed.
                  </p>

                  <p>
                    You may be asked to provide supporting documents such as
                    previous birth certificate copies, National ID cards of
                    parents, school certificates, or other identity documents to
                    verify the information. After verification, the local
                    authority may update or correct the digital record in the
                    system.
                  </p>

                  <p>
                    In some cases, information mismatches such as spelling
                    differences, incorrect dates, or incomplete records can also
                    prevent successful verification. Once the correction process
                    is completed, the updated digital birth certificate should
                    become available online.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    অনেক সময় সঠিক জন্ম নিবন্ধন নম্বর এবং জন্ম তারিখ দেওয়ার পরেও
                    ডিজিটাল জন্ম সনদ দেখা নাও যেতে পারে। বিশেষ করে পুরোনো জন্ম
                    নিবন্ধনের ক্ষেত্রে এমন হতে পারে, কারণ আগে অনেক তথ্য
                    কাগজপত্রে সংরক্ষিত ছিল এবং পরে সেগুলো ডিজিটাল ডাটাবেজে
                    স্থানান্তর করা হয়েছে।
                  </p>

                  <p>
                    প্রথমে নিশ্চিত করুন যে ১৭ অংকের জন্ম নিবন্ধন নম্বর এবং জন্ম
                    তারিখ সঠিকভাবে লেখা হয়েছে। সামান্য টাইপ ভুল বা ভুল তারিখ
                    ফরম্যাটের কারণেও তথ্য খুঁজে পাওয়া নাও যেতে পারে।
                  </p>

                  <p>
                    তথ্য সঠিক হওয়ার পরেও যদি ফলাফল না আসে, তাহলে সম্ভবত রেকর্ডটি
                    এখনো সম্পূর্ণভাবে ডিজিটালাইজড হয়নি অথবা সরকারি ডাটাবেজে
                    আপডেট করা হয়নি। এ ক্ষেত্রে যে ইউনিয়ন পরিষদ, পৌরসভা বা সিটি
                    কর্পোরেশন অফিস থেকে জন্ম নিবন্ধন করা হয়েছিল সেখানে যোগাযোগ
                    করতে হতে পারে।
                  </p>

                  <p>
                    প্রয়োজন হলে পুরোনো জন্ম সনদের কপি, বাবা-মায়ের জাতীয়
                    পরিচয়পত্র, শিক্ষাপ্রতিষ্ঠানের সনদ বা অন্যান্য পরিচয়পত্র জমা
                    দিতে হতে পারে। যাচাই শেষে স্থানীয় কর্তৃপক্ষ তথ্য আপডেট বা
                    সংশোধন করতে পারে।
                  </p>

                  <p>
                    অনেক সময় নামের বানান ভুল, জন্ম তারিখের অমিল বা অসম্পূর্ণ
                    তথ্যের কারণেও অনলাইন যাচাই ব্যর্থ হতে পারে। সংশোধন সম্পন্ন
                    হলে সাধারণত ডিজিটাল জন্ম সনদ অনলাইনে দেখা যায়।
                  </p>
                </>
              )}
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
