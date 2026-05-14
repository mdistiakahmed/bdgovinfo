import Link from "next/link";
import type { Metadata } from "next";

const BDRIS_UBRN_SEARCH =
  "https://everify.bdris.gov.bd/UBRNVerification/Search";

const content = {
  en: {
    seo: {
      title:
        "Digital Birth Certificate Check Bangladesh | Birth Registration Verification Online",
      description:
        "Verify Bangladesh digital birth certificate online using Birth Registration Number and Date of Birth through the official BDRIS portal. Learn how to check, download PDF, print, and correct birth certificate information.",
    },
    title:
      "Bangladesh Digital Birth Certificate Check & Online Birth Registration Verification",
    subtitle:
      "Verify Bangladesh digital birth certificate online using Birth Registration Number and Date of Birth through the official BDRIS verification system. Learn how to check birth certificate information, download PDF copies, print digital birth certificates, and fix birth registration problems.",
    fields: {
      brn: "Birth Registration Number (17 digits)",
      dob: "Date of Birth",
      brnPlaceholder: "Enter 17-digit birth registration number",
      dobPlaceholder: "YYYY-MM-DD",
    },
    notes: {
      officialPortal: "Official government portal",
      botChallenge:
        "Your details are submitted directly to the official portal in a new tab; complete any verification step shown there (for example captcha) and continue.",
      outcome:
        "If your record is digitized and the information matches, a digital birth certificate will be displayed.",
    },
    check: "Check",
    back: "Back to Services",
  },
  bn: {
    seo: {
      title: "ডিজিটাল জন্ম নিবন্ধন যাচাই বাংলাদেশ | অনলাইনে জন্ম সনদ চেক",
      description:
        "জন্ম নিবন্ধন নম্বর ও জন্ম তারিখ দিয়ে অনলাইনে বাংলাদেশ ডিজিটাল জন্ম সনদ যাচাই করুন। জন্ম সনদ চেক, PDF ডাউনলোড, প্রিন্ট এবং তথ্য সংশোধনের নিয়ম জানুন।",
    },
    title: "বাংলাদেশ ডিজিটাল জন্ম নিবন্ধন যাচাই ও অনলাইন জন্ম সনদ চেক",
    subtitle:
      "জন্ম নিবন্ধন নম্বর এবং জন্ম তারিখ ব্যবহার করে অফিসিয়াল BDRIS সিস্টেমের মাধ্যমে বাংলাদেশ ডিজিটাল জন্ম সনদ অনলাইনে যাচাই করুন। জন্ম সনদ চেক, PDF ডাউনলোড, প্রিন্ট এবং জন্ম নিবন্ধন সমস্যার সমাধান সম্পর্কিত তথ্য জানুন।",
    fields: {
      brn: "জন্ম নিবন্ধন নম্বর (১৭ অংক)",
      dob: "জন্ম তারিখ",
      brnPlaceholder: "১৭ অংকের জন্ম নিবন্ধন নম্বর লিখুন",
      dobPlaceholder: "YYYY-MM-DD",
    },
    notes: {
      officialPortal: "বাংলাদেশ সরকারের অফিসিয়াল পোর্টাল",
      botChallenge:
        "আপনার তথ্য সরাসরি অফিসিয়াল পোর্টালে নতুন ট্যাবে পাঠানো হয়; সেখানে ক্যাপচা বা অন্য যাচাই থাকলে সম্পন্ন করুন।",
      outcome:
        "আপনার তথ্য ডিজিটালাইজড থাকলে এবং তথ্য মিললে ডিজিটাল জন্ম সনদ দেখাবে।",
    },
    check: "সার্চ করুন",
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
  const officialUrl = "https://everify.bdris.gov.bd/UBRNVerification/";

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How can I check my digital birth certificate online in Bangladesh?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can verify your digital birth certificate using Birth Registration Number and Date of Birth through the official BDRIS verification portal.",
                },
              },
            ],
          }),
        }}
      />
      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {t.title}
            </h1>
            <p className="text-lg text-gray-700">{t.subtitle}</p>
            <p className="mt-4 text-base text-gray-600 leading-7 max-w-3xl mx-auto">
              {currentLang === "en"
                ? "This page provides step-by-step guidance for Bangladesh birth certificate verification, digital birth registration search, online PDF download, and old handwritten birth certificate digitization."
                : "এই পেজে বাংলাদেশ জন্ম নিবন্ধন যাচাই, ডিজিটাল জন্ম সনদ অনুসন্ধান, PDF ডাউনলোড এবং পুরোনো হাতে লেখা জন্ম সনদ ডিজিটালাইজ করার ধাপসমূহ বিস্তারিতভাবে দেখানো হয়েছে।"}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {currentLang === "en" ? "Table of Contents" : "সূচিপত্র"}
            </h2>

            <ul className="space-y-3 text-blue-700">
              <li>
                <a
                  href="#birth-certificate-check-form"
                  className="hover:underline"
                >
                  {currentLang === "en"
                    ? "Birth Certificate Verification Form"
                    : "জন্ম নিবন্ধন যাচাই ফর্ম"}
                </a>
              </li>

              <li>
                <a
                  href="#birth-certificate-download"
                  className="hover:underline"
                >
                  {currentLang === "en"
                    ? "How to Download or Print Birth Certificate"
                    : "জন্ম সনদ ডাউনলোড বা প্রিন্ট করার উপায়"}
                </a>
              </li>

              <li>
                <a
                  href="#birth-certificate-not-found"
                  className="hover:underline"
                >
                  {currentLang === "en"
                    ? "What to Do if Birth Certificate is Not Found"
                    : "জন্ম সনদ খুঁজে না পেলে কী করবেন"}
                </a>
              </li>

              <li>
                <a href="#digital-birth-system" className="hover:underline">
                  {currentLang === "en"
                    ? "Digital Birth Certificate System in Bangladesh"
                    : "বাংলাদেশে ডিজিটাল জন্ম নিবন্ধন ব্যবস্থা"}
                </a>
              </li>

              <li>
                <a
                  href="#birth-certificate-digitization"
                  className="hover:underline"
                >
                  {currentLang === "en"
                    ? "Convert Old Birth Certificate to Digital"
                    : "পুরোনো জন্ম সনদকে ডিজিটাল করার উপায়"}
                </a>
              </li>

              <li>
                <a
                  href="#birth-certificate-importance"
                  className="hover:underline"
                >
                  {currentLang === "en"
                    ? "Importance of Digital Birth Certificate in Bangladesh"
                    : "বাংলাদেশে ডিজিটাল জন্ম সনদের গুরুত্ব"}
                </a>
              </li>

              <li>
                <a href="#birth-certificate-faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Verification Form */}
          <div
            id="birth-certificate-check-form"
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {currentLang === "en"
                  ? "Online Digital Birth Certificate Verification Form"
                  : "অনলাইন ডিজিটাল জন্ম নিবন্ধন যাচাই ফর্ম"}
              </h2>

              <p className="text-gray-700 leading-7">
                {currentLang === "en"
                  ? "Enter your 17-digit Birth Registration Number and Date of Birth to verify your Bangladesh digital birth certificate online through the official BDRIS verification system."
                  : "বাংলাদেশ ডিজিটাল জন্ম সনদ অনলাইনে যাচাই করার জন্য আপনার ১৭ অংকের জন্ম নিবন্ধন নম্বর এবং জন্ম তারিখ প্রদান করুন।"}
              </p>
            </div>
            <form
              className="space-y-6"
              action={BDRIS_UBRN_SEARCH}
              method="post"
              target="_blank"
            >
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="ubrn"
                >
                  {t.fields.brn}
                </label>
                <input
                  id="ubrn"
                  type="number"
                  name="UBRN"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder={t.fields.brnPlaceholder}
                  inputMode="numeric"
                  autoComplete="off"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="birth-date"
                >
                  {t.fields.dob}
                </label>
                <input
                  id="birth-date"
                  type="text"
                  name="BirthDate"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.fields.dobPlaceholder}
                  pattern="\d{4}-\d{2}-\d{2}"
                  autoComplete="bday"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium cursor-pointer"
              >
                {t.check}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm">
              <p className="text-sm text-gray-500">Last updated: May 2026</p>
              <p>
                <a
                  href={officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:text-blue-800 underline"
                >
                  everify.bdris.gov.bd
                </a>
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {currentLang === "en" ? "Disclaimer" : "দাবিত্যাগ"}
            </h2>

            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              {currentLang === "en"
                ? "This website is not affiliated with the Government of Bangladesh and is not an official government website. This platform is created as an independent helper tool to make it easier for people to access Bangladesh government service information such as digital birth certificate verification, birth registration guidance, and online document-related instructions."
                : "এই ওয়েবসাইটটি বাংলাদেশ সরকারের সাথে সংশ্লিষ্ট নয় এবং এটি কোনো অফিসিয়াল সরকারি ওয়েবসাইট নয়। সাধারণ মানুষের জন্য জন্ম নিবন্ধন যাচাই, জন্ম সনদ সম্পর্কিত নির্দেশনা এবং সরকারি অনলাইন সেবা সহজভাবে ব্যবহার করার সহায়ক প্ল্যাটফর্ম হিসেবে এই ওয়েবসাইট তৈরি করা হয়েছে।"}
            </p>
          </div>

          {/* How to Download or Print Digital Birth Certificate in Bangladesh */}
          <div id="birth-certificate-download" className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {currentLang === "en"
                ? "How to Download or Print Digital Birth Certificate in Bangladesh"
                : "বাংলাদেশে ডিজিটাল জন্ম সনদ ডাউনলোড বা প্রিন্ট করার উপায়"}
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-10 text-gray-700 leading-8">
              {currentLang === "en" ? (
                <>
                  <div>
                    <p className="mb-4">
                      Downloading or printing a Bangladesh digital birth
                      certificate online is a simple process. You can easily
                      verify and save your birth certificate from the official
                      Birth and Death Registration Information System (BDRIS)
                      portal using your Birth Registration Number and date of
                      birth.
                    </p>

                    <p>
                      Below are the 3 simple steps to check, download, and print
                      your digital birth certificate in Bangladesh for school
                      admission, passport application, visa processing, NID
                      registration, and other official purposes.
                    </p>
                  </div>

                  {/* Step 1 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Step 1: Enter Birth Registration Number and Date of Birth
                    </h3>

                    <img
                      src="/birth_certificate_page1.png"
                      alt="Bangladesh birth certificate verification form page"
                      className="w-full rounded-xl border border-gray-200 mb-5"
                    />

                    <p className="mb-4">
                      First, visit the Bangladesh digital birth certificate
                      verification page. You need to enter your{" "}
                      <span className="font-semibold">
                        Birth Registration Number
                      </span>{" "}
                      and <span className="font-semibold">Date of Birth</span>{" "}
                      correctly.
                    </p>

                    <p className="mb-4">
                      The portal also includes a simple captcha verification
                      where you need to solve a small math problem, usually the
                      sum of two numbers. After completing the captcha, click
                      the verify or search button to continue.
                    </p>

                    <p>
                      Make sure all information matches your official birth
                      registration record to avoid verification errors.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Step 2: View the Digital Birth Certificate
                    </h3>

                    <img
                      src="/birth_certificate_page2.png"
                      alt="Digital birth certificate displayed online in Bangladesh"
                      className="w-full rounded-xl border border-gray-200 mb-5"
                    />

                    <p className="mb-4">
                      If the birth registration number is valid and already
                      registered in the Bangladesh government database, the
                      digital birth certificate will appear on your screen.
                    </p>

                    <p className="mb-4">
                      Carefully check all information including name, parents’
                      information, date of birth, and Birth Registration Number
                      before downloading or printing the certificate.
                    </p>

                    <p>
                      If no record is found or the certificate is not registered
                      yet, you should proceed to the online birth registration
                      application page to apply for a new digital birth
                      certificate in Bangladesh.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Step 3: Press Ctrl + P and Save as PDF
                    </h3>

                    <img
                      src="/birth_certificate_page3.png"
                      alt="Save Bangladesh birth certificate as PDF using browser print option"
                      className="w-full rounded-xl border border-gray-200 mb-5"
                    />

                    <p className="mb-4">
                      Once the certificate becomes visible on your browser,
                      press <span className="font-semibold">Ctrl + P</span> on
                      Windows or{" "}
                      <span className="font-semibold">Command + P</span> on Mac
                      devices. This will open the browser print window.
                    </p>

                    <p className="mb-4">
                      Inside the print window, choose{" "}
                      <span className="font-semibold">“Save as PDF”</span> as
                      the printer destination. Then click the{" "}
                      <span className="font-semibold">Save</span> button to
                      download the digital birth certificate PDF file to your
                      device.
                    </p>

                    <p className="mb-4">
                      You can also directly print the certificate using a
                      connected printer if you need a hard copy for official
                      use.
                    </p>

                    <p>
                      Modern browsers like Google Chrome, Microsoft Edge, and
                      Mozilla Firefox fully support PDF download and printing
                      for Bangladesh digital birth certificates.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="mb-4">
                      বাংলাদেশে ডিজিটাল জন্ম সনদ অনলাইনে ডাউনলোড বা প্রিন্ট করা
                      খুবই সহজ। Birth and Death Registration Information System
                      (BDRIS) পোর্টাল ব্যবহার করে জন্ম নিবন্ধন নম্বর ও জন্ম
                      তারিখ দিয়ে সহজেই ডিজিটাল জন্ম সনদ যাচাই ও সংরক্ষণ করা যায়।
                    </p>

                    <p>
                      নিচে বাংলাদেশ ডিজিটাল জন্ম সনদ যাচাই, ডাউনলোড এবং প্রিন্ট
                      করার ৩টি সহজ ধাপ দেখানো হলো। এটি স্কুল ভর্তি, পাসপোর্ট
                      আবেদন, ভিসা প্রসেসিং, এনআইডি আবেদন এবং অন্যান্য সরকারি
                      কাজে ব্যবহার করা যায়।
                    </p>
                  </div>

                  {/* Step 1 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      ধাপ ১: জন্ম নিবন্ধন নম্বর ও জন্ম তারিখ প্রদান করুন
                    </h3>

                    <img
                      src="/birth_certificate_page1.png"
                      alt="বাংলাদেশ জন্ম নিবন্ধন যাচাই ফর্ম"
                      className="w-full rounded-xl border border-gray-200 mb-5"
                    />

                    <p className="mb-4">
                      প্রথমে জন্ম নিবন্ধন যাচাই পেজে গিয়ে আপনার{" "}
                      <span className="font-semibold">জন্ম নিবন্ধন নম্বর</span>{" "}
                      এবং <span className="font-semibold">জন্ম তারিখ</span>{" "}
                      সঠিকভাবে লিখুন।
                    </p>

                    <p className="mb-4">
                      এরপর একটি সহজ ক্যাপচা যাচাই করতে হবে যেখানে সাধারণত দুইটি
                      সংখ্যার যোগফল দিতে হয়। ক্যাপচা পূরণ করার পর Verify বা
                      Search বাটনে ক্লিক করুন।
                    </p>

                    <p>
                      ভুল এড়ানোর জন্য তথ্যগুলো অফিসিয়াল জন্ম নিবন্ধন তথ্য
                      অনুযায়ী সঠিকভাবে প্রদান করুন।
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      ধাপ ২: ডিজিটাল জন্ম সনদ দেখুন
                    </h3>

                    <img
                      src="/birth_certificate_page2.png"
                      alt="বাংলাদেশ ডিজিটাল জন্ম সনদ প্রদর্শন"
                      className="w-full rounded-xl border border-gray-200 mb-5"
                    />

                    <p className="mb-4">
                      জন্ম নিবন্ধন নম্বরটি যদি সরকারি ডাটাবেজে নিবন্ধিত থাকে,
                      তাহলে ডিজিটাল জন্ম সনদ স্ক্রিনে প্রদর্শিত হবে।
                    </p>

                    <p className="mb-4">
                      ডাউনলোড বা প্রিন্ট করার আগে নাম, জন্ম তারিখ, বাবা-মায়ের
                      তথ্য এবং জন্ম নিবন্ধন নম্বর ভালোভাবে মিলিয়ে দেখুন।
                    </p>

                    <p>
                      যদি কোনো তথ্য না পাওয়া যায় অথবা জন্ম নিবন্ধন এখনও না করা
                      থাকে, তাহলে নতুন জন্ম নিবন্ধন আবেদন পেজে গিয়ে অনলাইনে
                      আবেদন করতে হবে।
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      ধাপ ৩: Ctrl + P চাপুন এবং PDF হিসেবে Save করুন
                    </h3>

                    <img
                      src="/birth_certificate_page3.png"
                      alt="বাংলাদেশ জন্ম সনদ PDF হিসেবে সংরক্ষণ"
                      className="w-full rounded-xl border border-gray-200 mb-5"
                    />

                    <p className="mb-4">
                      জন্ম সনদ স্ক্রিনে দেখানোর পর কীবোর্ড থেকে{" "}
                      <span className="font-semibold">Ctrl + P</span> চাপুন
                      (Windows এর ক্ষেত্রে) অথবা{" "}
                      <span className="font-semibold">Command + P</span> চাপুন
                      (Mac এর ক্ষেত্রে)। এতে ব্রাউজারের Print Window চালু হবে।
                    </p>

                    <p className="mb-4">
                      Print Window থেকে{" "}
                      <span className="font-semibold">“Save as PDF”</span> অপশন
                      নির্বাচন করুন এবং{" "}
                      <span className="font-semibold">Save</span> বাটনে ক্লিক
                      করে PDF ফাইলটি ডাউনলোড করুন।
                    </p>

                    <p className="mb-4">
                      চাইলে সরাসরি প্রিন্টার ব্যবহার করে হার্ড কপিও প্রিন্ট করা
                      যাবে।
                    </p>

                    <p>
                      Google Chrome, Microsoft Edge এবং Mozilla Firefox এর মতো
                      আধুনিক ব্রাউজারগুলো বাংলাদেশ ডিজিটাল জন্ম সনদ PDF ডাউনলোড
                      ও প্রিন্ট সম্পূর্ণভাবে সাপোর্ট করে।
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Birth Certificate Not Found */}
          <div id="birth-certificate-not-found" className="mt-12">
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

          {/* Digital Birth System */}
          <div id="digital-birth-system" className="mt-10">
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

          {/* How to Convert an Old Birth Certificate to a Digital Birth Certificate in Bangladesh */}
          <div id="birth-certificate-digitization" className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {currentLang === "en"
                ? "How to Convert an Old Birth Certificate to a Digital Birth Certificate in Bangladesh"
                : "পুরোনো জন্ম সনদকে ডিজিটাল জন্ম সনদে রূপান্তর করার উপায়"}
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4 text-gray-700 leading-8">
              {currentLang === "en" ? (
                <>
                  <p>
                    Many older birth certificates in Bangladesh were originally
                    issued in handwritten or paper-based formats before the
                    nationwide digital birth registration system was introduced.
                    As a result, some citizens still possess old birth
                    certificates that cannot be verified online through the
                    official Birth and Death Registration Information System
                    (BDRIS) portal.
                  </p>

                  <p>
                    To upgrade a non-digital or handwritten birth certificate
                    into a digital birth certificate, you usually need to
                    contact the local Union Parishad, Municipality, or City
                    Corporation office where the original birth registration was
                    completed. The local registrar office is responsible for
                    transferring older paper records into the government’s
                    digital database.
                  </p>

                  <p>
                    During the application process, you may be asked to submit
                    supporting documents such as the old birth certificate copy,
                    National ID cards of parents, educational certificates,
                    passport copy, vaccination card, or other identity-related
                    documents. These documents help the local authority verify
                    the authenticity of the birth information before
                    digitization.
                  </p>

                  <p>
                    In some cases, additional corrections may also be required
                    if there are spelling mistakes, incorrect dates, missing
                    parent information, or inconsistencies between different
                    documents. After verification and approval, the updated
                    information is entered into the BDRIS system and a new
                    digital Birth Registration Number may be issued if
                    necessary.
                  </p>

                  <p>
                    Once the record is successfully digitized, the birth
                    certificate can usually be verified online using the
                    official government verification portal. Digital birth
                    certificates are now widely required in Bangladesh for
                    passport applications, school admission, National ID related
                    services, bank account opening, visa applications, and many
                    other public or private services.
                  </p>

                  <p>
                    Because procedures may slightly vary between different local
                    government offices, it is recommended to contact your
                    respective Union Parishad, Municipality, or City Corporation
                    office directly for the latest requirements and processing
                    instructions regarding birth certificate digitization.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    বাংলাদেশে অনেক পুরোনো জন্ম সনদ হাতে লেখা বা কাগজভিত্তিক
                    পদ্ধতিতে তৈরি করা হয়েছিল, যখন ডিজিটাল জন্ম নিবন্ধন ব্যবস্থা
                    চালু হয়নি। ফলে এখনো অনেক মানুষের কাছে এমন জন্ম সনদ রয়েছে যা
                    অনলাইনে যাচাই করা যায় না এবং সরকারি ডিজিটাল ডাটাবেজে
                    সংরক্ষিত নেই।
                  </p>

                  <p>
                    পুরোনো বা নন-ডিজিটাল জন্ম সনদকে ডিজিটাল জন্ম সনদে রূপান্তর
                    করতে সাধারণত যে ইউনিয়ন পরিষদ, পৌরসভা বা সিটি কর্পোরেশন অফিস
                    থেকে মূল জন্ম নিবন্ধন করা হয়েছিল সেখানে যোগাযোগ করতে হয়।
                    স্থানীয় নিবন্ধন অফিস পুরোনো কাগজভিত্তিক তথ্য সরকারি ডিজিটাল
                    ডাটাবেজে অন্তর্ভুক্ত করার কাজ করে।
                  </p>

                  <p>
                    আবেদন করার সময় পুরোনো জন্ম সনদের কপি, বাবা-মায়ের জাতীয়
                    পরিচয়পত্র, শিক্ষাগত সনদ, পাসপোর্ট কপি, টিকা কার্ড বা
                    অন্যান্য পরিচয় সংক্রান্ত ডকুমেন্ট জমা দিতে হতে পারে। এসব
                    তথ্যের মাধ্যমে কর্তৃপক্ষ জন্ম নিবন্ধনের তথ্য যাচাই করে
                    ডিজিটাল সিস্টেমে অন্তর্ভুক্ত করে।
                  </p>

                  <p>
                    অনেক ক্ষেত্রে নামের বানান ভুল, জন্ম তারিখের অমিল, অসম্পূর্ণ
                    তথ্য বা বিভিন্ন কাগজপত্রের তথ্যের অসামঞ্জস্য থাকলে সংশোধনের
                    প্রয়োজন হতে পারে। যাচাই ও অনুমোদনের পর তথ্য BDRIS সিস্টেমে
                    সংরক্ষণ করা হয় এবং প্রয়োজন হলে নতুন ডিজিটাল জন্ম নিবন্ধন
                    নম্বর প্রদান করা হতে পারে।
                  </p>

                  <p>
                    তথ্য সফলভাবে ডিজিটালাইজড হওয়ার পর অফিসিয়াল অনলাইন পোর্টালের
                    মাধ্যমে জন্ম সনদ যাচাই করা যায়। বর্তমানে বাংলাদেশে পাসপোর্ট
                    আবেদন, স্কুলে ভর্তি, জাতীয় পরিচয়পত্র সংক্রান্ত সেবা, ব্যাংক
                    একাউন্ট খোলা, ভিসা আবেদনসহ বিভিন্ন সরকারি ও বেসরকারি কাজে
                    ডিজিটাল জন্ম সনদ গুরুত্বপূর্ণ ভূমিকা পালন করে।
                  </p>

                  <p>
                    বিভিন্ন ইউনিয়ন পরিষদ, পৌরসভা বা সিটি কর্পোরেশন অফিসে
                    প্রক্রিয়ায় কিছু পার্থক্য থাকতে পারে। তাই জন্ম সনদ ডিজিটালাইজ
                    করার সর্বশেষ নিয়ম ও প্রয়োজনীয় কাগজপত্র সম্পর্কে জানতে
                    সংশ্লিষ্ট স্থানীয় অফিসে সরাসরি যোগাযোগ করা ভালো।
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Importance of Digital Birth Certificate in Bangladesh */}
          <div id="birth-certificate-importance" className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {currentLang === "en"
                ? "Why Digital Birth Certificate Verification is Important in Bangladesh"
                : "বাংলাদেশে ডিজিটাল জন্ম সনদ যাচাই কেন গুরুত্বপূর্ণ"}
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 p-6 text-gray-700 leading-8 mb-6">
              {currentLang === "en" ? (
                <>
                  <p className="mb-4">
                    A Bangladesh digital birth certificate is currently one of
                    the most important identity-related documents for citizens.
                    Online birth registration verification helps people confirm
                    whether their birth registration information is correctly
                    stored in the government database through the official Birth
                    and Death Registration Information System (BDRIS).
                  </p>

                  <p>
                    Digital birth certificates are widely required in Bangladesh
                    for passport applications, National ID (NID) related
                    services, school admission, visa processing, bank account
                    opening, mobile SIM registration, and many other public or
                    private services. Online verification also helps users
                    download, print, and save birth certificate PDF copies more
                    easily.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4">
                    বাংলাদেশে ডিজিটাল জন্ম সনদ বর্তমানে সবচেয়ে গুরুত্বপূর্ণ
                    পরিচয়ভিত্তিক ডকুমেন্টগুলোর একটি। অনলাইন জন্ম নিবন্ধন
                    যাচাইয়ের মাধ্যমে সরকারি Birth and Death Registration
                    Information System (BDRIS) ডাটাবেজে জন্ম নিবন্ধনের তথ্য
                    সঠিকভাবে সংরক্ষিত আছে কিনা তা নিশ্চিত করা যায়।
                  </p>

                  <p>
                    বাংলাদেশে পাসপোর্ট আবেদন, জাতীয় পরিচয়পত্র (এনআইডি) সংক্রান্ত
                    সেবা, স্কুল ভর্তি, ভিসা আবেদন, ব্যাংক একাউন্ট খোলা, মোবাইল
                    সিম নিবন্ধনসহ বিভিন্ন সরকারি ও বেসরকারি কাজে ডিজিটাল জন্ম
                    সনদ প্রয়োজন হয়। অনলাইন যাচাইয়ের মাধ্যমে জন্ম সনদের PDF
                    ডাউনলোড, প্রিন্ট এবং তথ্য যাচাইও সহজ হয়।
                  </p>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLang === "en"
                    ? "Faster online birth certificate verification"
                    : "দ্রুত অনলাইন জন্ম সনদ যাচাই"}
                </h3>

                <p className="text-gray-700 leading-7">
                  {currentLang === "en"
                    ? "Digital birth certificate verification allows citizens to instantly verify birth registration information online using Birth Registration Number and Date of Birth. This reduces the need for repeated visits to Union Parishad, Municipality, or City Corporation offices."
                    : "ডিজিটাল জন্ম সনদ যাচাইয়ের মাধ্যমে জন্ম নিবন্ধন নম্বর ও জন্ম তারিখ ব্যবহার করে অনলাইনে দ্রুত তথ্য যাচাই করা যায়। এতে ইউনিয়ন পরিষদ, পৌরসভা বা সিটি কর্পোরেশন অফিসে বারবার যাওয়ার প্রয়োজন কমে যায়।"}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLang === "en"
                    ? "Required for passport, NID, and education services"
                    : "পাসপোর্ট, এনআইডি ও শিক্ষা সংক্রান্ত সেবায় প্রয়োজন"}
                </h3>

                <p className="text-gray-700 leading-7">
                  {currentLang === "en"
                    ? "In Bangladesh, digital birth certificates are commonly required for passport application, National ID registration, school admission, exam registration, visa processing, bank account opening, and many public or private services."
                    : "বাংলাদেশে ডিজিটাল জন্ম সনদ পাসপোর্ট আবেদন, জাতীয় পরিচয়পত্র নিবন্ধন, স্কুল ভর্তি, পরীক্ষার নিবন্ধন, ভিসা প্রসেসিং, ব্যাংক একাউন্ট খোলা এবং বিভিন্ন সরকারি ও বেসরকারি সেবার জন্য প্রয়োজন হয়।"}
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLang === "en"
                    ? "Helps identify incorrect or missing records"
                    : "ভুল বা অনুপস্থিত তথ্য শনাক্ত করতে সহায়তা করে"}
                </h3>

                <p className="text-gray-700 leading-7">
                  {currentLang === "en"
                    ? "Online birth certificate checking helps identify spelling mistakes, incorrect birth dates, missing parent information, or records that have not yet been digitized in the BDRIS database."
                    : "অনলাইন জন্ম সনদ যাচাইয়ের মাধ্যমে নামের বানান ভুল, জন্ম তারিখের সমস্যা, বাবা-মায়ের তথ্যের অসামঞ্জস্য বা এখনো ডিজিটালাইজ না হওয়া রেকর্ড শনাক্ত করা সহজ হয়।"}
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLang === "en"
                    ? "Improves security and reduces fraud"
                    : "নিরাপত্তা বৃদ্ধি ও জালিয়াতি কমাতে সহায়তা করে"}
                </h3>

                <p className="text-gray-700 leading-7">
                  {currentLang === "en"
                    ? "Digital verification helps confirm whether the Birth Registration Number and Date of Birth match official government records. This helps reduce duplicate registrations, misinformation, and document fraud."
                    : "ডিজিটাল যাচাইয়ের মাধ্যমে জন্ম নিবন্ধন নম্বর ও জন্ম তারিখ সরকারি রেকর্ডের সাথে মিলিয়ে দেখা যায়। এতে ভুয়া তথ্য, ডুপ্লিকেট নিবন্ধন এবং জালিয়াতির ঝুঁকি কমে।"}
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLang === "en"
                    ? "Supports long-term digital record preservation"
                    : "দীর্ঘমেয়াদী ডিজিটাল রেকর্ড সংরক্ষণে সহায়ক"}
                </h3>

                <p className="text-gray-700 leading-7">
                  {currentLang === "en"
                    ? "Digital birth registration systems improve long-term preservation of citizen records and make it easier to retrieve birth certificate information whenever required."
                    : "ডিজিটাল জন্ম নিবন্ধন ব্যবস্থা নাগরিকদের তথ্য দীর্ঘমেয়াদে সংরক্ষণ করতে সহায়তা করে এবং প্রয়োজনের সময় দ্রুত জন্ম সনদের তথ্য খুঁজে পাওয়া সহজ করে।"}
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLang === "en"
                    ? "Useful for downloading and printing PDF birth certificates"
                    : "PDF জন্ম সনদ ডাউনলোড ও প্রিন্টে সহায়ক"}
                </h3>

                <p className="text-gray-700 leading-7">
                  {currentLang === "en"
                    ? "After successful online verification, users can view, print, or save digital birth certificates as PDF files using modern web browsers such as Google Chrome, Microsoft Edge, and Mozilla Firefox."
                    : "অনলাইন যাচাই সফল হলে ব্যবহারকারীরা Google Chrome, Microsoft Edge এবং Mozilla Firefox এর মতো আধুনিক ব্রাউজার ব্যবহার করে ডিজিটাল জন্ম সনদ PDF হিসেবে ডাউনলোড বা প্রিন্ট করতে পারেন।"}
                </p>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions (FAQ) */}
          <div id="birth-certificate-faq" className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {currentLang === "en"
                ? "Frequently Asked Questions (FAQ)"
                : "সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)"}
            </h2>

            <div className="space-y-4">
              {currentLang === "en" ? (
                <>
                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How can I check my digital birth certificate online in
                      Bangladesh?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      You can verify a Bangladesh digital birth certificate
                      online using your 17-digit Birth Registration Number and
                      Date of Birth through the official Birth and Death
                      Registration Information System (BDRIS) verification
                      portal.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What information is required for birth certificate
                      verification?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      To verify a digital birth certificate, you usually need
                      the 17-digit Birth Registration Number and the registered
                      Date of Birth. The official portal may also require
                      completing a simple bot verification challenge.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Why is my birth certificate not showing online?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      Some older birth records in Bangladesh were originally
                      maintained in paper format and may not yet be fully
                      digitized. Incorrect Birth Registration Numbers, wrong
                      dates of birth, or mismatched information can also prevent
                      successful verification.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How can I convert an old handwritten birth certificate
                      into a digital birth certificate?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      You usually need to contact the Union Parishad,
                      Municipality, or City Corporation office where the birth
                      registration was originally completed. The local authority
                      may request supporting documents before updating the
                      information in the BDRIS database.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How can I download or print my digital birth certificate?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      After successfully viewing the digital birth certificate
                      online, you can press{" "}
                      <span className="font-semibold">Ctrl + P</span> on a
                      Windows computer or{" "}
                      <span className="font-semibold">Command + P</span> on Mac
                      devices to open the browser print option. From there, you
                      can print the certificate or save it as a PDF file.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Is a digital birth certificate required for passport
                      application in Bangladesh?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      In many cases, a digital birth certificate is required for
                      passport application, school admission, National ID
                      related services, visa processing, and various other
                      government or private services in Bangladesh.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Can I correct mistakes in my birth certificate
                      information?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      Yes. If there are spelling mistakes, incorrect dates, or
                      other information mismatches, you may need to contact the
                      local registrar office with supporting documents to
                      request correction of the birth registration information.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      অনলাইনে জন্ম নিবন্ধন যাচাই কীভাবে করবো?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      ১৭ অংকের জন্ম নিবন্ধন নম্বর এবং জন্ম তারিখ ব্যবহার করে
                      অফিসিয়াল Birth and Death Registration Information System
                      (BDRIS) পোর্টালের মাধ্যমে অনলাইনে ডিজিটাল জন্ম সনদ যাচাই
                      করা যায়।
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      জন্ম সনদ যাচাই করতে কী কী তথ্য প্রয়োজন?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      সাধারণত জন্ম নিবন্ধন যাচাই করার জন্য ১৭ অংকের জন্ম নিবন্ধন
                      নম্বর এবং জন্ম তারিখ প্রয়োজন হয়। অফিসিয়াল পোর্টালে
                      অতিরিক্তভাবে একটি সহজ বট যাচাইও সম্পন্ন করতে হতে পারে।
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      জন্ম সনদ অনলাইনে খুঁজে পাওয়া না গেলে কী করবেন?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      অনেক পুরোনো জন্ম নিবন্ধনের তথ্য এখনো সম্পূর্ণভাবে
                      ডিজিটালাইজড নাও হতে পারে। এছাড়া ভুল জন্ম নিবন্ধন নম্বর,
                      জন্ম তারিখের অমিল বা তথ্যের ভুলের কারণেও অনলাইন যাচাই
                      ব্যর্থ হতে পারে।
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      পুরোনো হাতে লেখা জন্ম সনদকে ডিজিটাল জন্ম সনদে রূপান্তর
                      করবেন কীভাবে?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      সাধারণত যে ইউনিয়ন পরিষদ, পৌরসভা বা সিটি কর্পোরেশন অফিস
                      থেকে জন্ম নিবন্ধন করা হয়েছিল সেখানে যোগাযোগ করতে হয়।
                      প্রয়োজনীয় কাগজপত্র যাচাই করার পর তথ্য BDRIS ডাটাবেজে
                      অন্তর্ভুক্ত করা হতে পারে।
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      ডিজিটাল জন্ম সনদ PDF ডাউনলোড বা প্রিন্ট করবেন কীভাবে?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      জন্ম সনদ অনলাইনে দেখানোর পর কম্পিউটার বা ল্যাপটপ থেকে{" "}
                      <span className="font-semibold">Ctrl + P</span> চাপলে
                      ব্রাউজারের Print Window চালু হয়। সেখান থেকে সরাসরি প্রিন্ট
                      করা যায় অথবা{" "}
                      <span className="font-semibold">Save as PDF</span> অপশন
                      ব্যবহার করে PDF ফাইল হিসেবে সংরক্ষণ করা যায়।
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      পাসপোর্ট করার জন্য কি ডিজিটাল জন্ম সনদ প্রয়োজন?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      বাংলাদেশে পাসপোর্ট আবেদন, স্কুলে ভর্তি, জাতীয় পরিচয়পত্র
                      সংক্রান্ত সেবা, ভিসা আবেদনসহ বিভিন্ন কাজে ডিজিটাল জন্ম সনদ
                      প্রয়োজন হতে পারে।
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      জন্ম নিবন্ধনের ভুল তথ্য সংশোধন করা যায় কি?
                    </h3>
                    <p className="text-gray-700 leading-7">
                      হ্যাঁ। নামের বানান ভুল, জন্ম তারিখের ভুল বা অন্যান্য
                      তথ্যগত সমস্যা থাকলে প্রয়োজনীয় ডকুমেন্টসহ স্থানীয় নিবন্ধন
                      অফিসে যোগাযোগ করে তথ্য সংশোধনের আবেদন করা যায়।
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
