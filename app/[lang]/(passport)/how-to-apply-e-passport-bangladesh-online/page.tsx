import Link from "next/link";
import type { Metadata } from "next";

const E_PASSPORT_URL = "https://www.epassport.gov.bd/landing";

const content = {
  en: {
    seo: {
      title:
        "Bangladesh e-Passport Registration Online | How to Apply for e-Passport Bangladesh",
      description:
        "Learn how to apply for Bangladesh e-passport online step by step. Complete guide for e-passport registration, payment, appointment booking, biometric enrollment, police verification, and required documents.",
    },
    title: "Bangladesh e-Passport Online Registration & Application Guide",
    subtitle:
      "Learn the complete step-by-step process for Bangladesh e-passport online application, payment, biometric registration, appointment booking, and police verification through the official e-passport portal.",
    check: "Open Official e-Passport Portal",
  },

  bn: {
    seo: {
      title: "বাংলাদেশ ই-পাসপোর্ট আবেদন | অনলাইনে ই-পাসপোর্ট করার নিয়ম",
      description:
        "বাংলাদেশ ই-পাসপোর্ট অনলাইনে আবেদন করার সম্পূর্ণ গাইড। ই-পাসপোর্ট রেজিস্ট্রেশন, পেমেন্ট, বায়োমেট্রিক এনরোলমেন্ট, অ্যাপয়েন্টমেন্ট এবং পুলিশ ভেরিফিকেশন সম্পর্কে বিস্তারিত জানুন।",
    },
    title: "বাংলাদেশ ই-পাসপোর্ট অনলাইন আবেদন ও রেজিস্ট্রেশন গাইড",
    subtitle:
      "অফিসিয়াল ই-পাসপোর্ট পোর্টালের মাধ্যমে বাংলাদেশ ই-পাসপোর্ট আবেদন, পেমেন্ট, বায়োমেট্রিক নিবন্ধন, অ্যাপয়েন্টমেন্ট এবং পুলিশ ভেরিফিকেশন করার সম্পূর্ণ ধাপসমূহ জানুন।",
    check: "অফিসিয়াল ই-পাসপোর্ট পোর্টাল খুলুন",
  },
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (lang === "bn" ? "bn" : "en") as "en" | "bn";
  const t = content[currentLang];

  const baseUrl = "https://bdgovinfo.com";
  const path = `/${currentLang}/how-to-apply-e-passport-bangladesh-online`;
  const canonical = `${baseUrl}${path}`;
  const ogImage = "/passport/passport_cover.png";

  return {
    title: t.seo.title,
    description: t.seo.description,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en/how-to-apply-e-passport-bangladesh-online`,
        bn: `${baseUrl}/bn/how-to-apply-e-passport-bangladesh-online`,
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

export default async function PassportRegistrationBangladesh({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const currentLang = (lang === "bn" ? "bn" : "en") as "en" | "bn";

  const t = content[currentLang];

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
                name: "How can I apply for Bangladesh e-passport online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can apply for Bangladesh e-passport online through the official e-passport portal by creating an account, filling up personal information, selecting passport options, paying fees, and attending biometric registration.",
                },
              },
            ],
          }),
        }}
      />

      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {t.title}
            </h1>

            <p className="text-lg text-gray-700">{t.subtitle}</p>

            <p className="mt-4 text-base text-gray-600 leading-7 max-w-3xl mx-auto">
              {currentLang === "en"
                ? "This page provides a complete step-by-step guide for Bangladesh e-passport online registration, payment, biometric enrollment, police verification, and required document preparation."
                : "এই পেজে বাংলাদেশ ই-পাসপোর্ট অনলাইন আবেদন, পেমেন্ট, বায়োমেট্রিক নিবন্ধন, পুলিশ ভেরিফিকেশন এবং প্রয়োজনীয় ডকুমেন্ট প্রস্তুতির সম্পূর্ণ ধাপসমূহ বিস্তারিতভাবে দেখানো হয়েছে।"}
            </p>
          </div>

          {/* TOC */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {currentLang === "en" ? "Table of Contents" : "সূচিপত্র"}
            </h2>

            <ul className="space-y-3 text-blue-700">
              <li>
                <a href="#passport-registration" className="hover:underline">
                  {currentLang === "en"
                    ? "How to Apply for Bangladesh e-Passport"
                    : "বাংলাদেশ ই-পাসপোর্ট আবেদন করার নিয়ম"}
                </a>
              </li>

              <li>
                <a href="#required-documents" className="hover:underline">
                  {currentLang === "en"
                    ? "Required Documents"
                    : "প্রয়োজনীয় ডকুমেন্ট"}
                </a>
              </li>

              <li>
                <a href="#payment-process" className="hover:underline">
                  {currentLang === "en"
                    ? "Online Payment Process"
                    : "অনলাইন পেমেন্ট প্রক্রিয়া"}
                </a>
              </li>

              <li>
                <a href="#biometric-process" className="hover:underline">
                  {currentLang === "en"
                    ? "Biometric Registration & Police Verification"
                    : "বায়োমেট্রিক নিবন্ধন ও পুলিশ ভেরিফিকেশন"}
                </a>
              </li>

              <li>
                <a href="#passport-faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Portal CTA */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {currentLang === "en"
                ? "Official Bangladesh e-Passport Portal"
                : "অফিসিয়াল বাংলাদেশ ই-পাসপোর্ট পোর্টাল"}
            </h2>

            <p className="text-gray-700 leading-7 mb-6">
              {currentLang === "en"
                ? "Bangladesh e-passport application must be completed online through the official government e-passport portal. It can be completed using a mobile phone or personal computer, although using a desktop or laptop with Google Chrome browser is recommended for a better experience."
                : "বাংলাদেশ ই-পাসপোর্ট আবেদন অফিসিয়াল সরকারি ই-পাসপোর্ট পোর্টালের মাধ্যমে অনলাইনে করতে হয়। মোবাইল ফোন অথবা কম্পিউটার ব্যবহার করে আবেদন করা যায়, তবে ভালো অভিজ্ঞতার জন্য ডেস্কটপ বা ল্যাপটপে Google Chrome ব্রাউজার ব্যবহার করার পরামর্শ দেওয়া হয়।"}
            </p>

            <a
              href={E_PASSPORT_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              {t.check}
            </a>
          </div>

          {/* Main Steps */}
          <div
            id="passport-registration"
            className="bg-white rounded-xl border border-gray-200 p-6 space-y-12"
          >
            {/* Step 1 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 1: Select “Apply Online for e-Passport / Re-Issue”
                  </h2>

                  <img
                    src="/passport/passport_1.png"
                    alt="Bangladesh e-passport portal homepage"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    Visit the official Bangladesh e-passport portal and click on
                    “Apply Online for e-Passport / Re-Issue” to begin your
                    online passport application process.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ১: “Apply Online for e-Passport / Re-Issue” নির্বাচন
                    করুন
                  </h2>

                  <img
                    src="/passport/passport_1.png"
                    alt="বাংলাদেশ ই-পাসপোর্ট পোর্টাল"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    অফিসিয়াল বাংলাদেশ ই-পাসপোর্ট ওয়েবসাইটে প্রবেশ করে “Apply
                    Online for e-Passport / Re-Issue” অপশনে ক্লিক করুন। এখান
                    থেকেই অনলাইন ই-পাসপোর্ট আবেদন প্রক্রিয়া শুরু হবে।
                  </p>
                </>
              )}
            </div>

            {/* Step 2 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 2: Select Your Passport Office Location
                  </h2>

                  <img
                    src="/passport/passport_2.png"
                    alt="Select passport office location"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    If you are currently living in Bangladesh, select your
                    district and nearest police station area for passport
                    processing.
                  </p>

                  <p className="text-gray-700 leading-8">
                    If you are living abroad, select your current country and
                    the Bangladesh embassy or mission where you want to process
                    your passport application.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ২: পাসপোর্ট অফিসের লোকেশন নির্বাচন করুন
                  </h2>

                  <img
                    src="/passport/passport_2.png"
                    alt="পাসপোর্ট অফিস নির্বাচন"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    আপনি যদি বর্তমানে বাংলাদেশে থাকেন, তাহলে আপনার জেলা এবং
                    নিকটস্থ থানার তথ্য নির্বাচন করুন।
                  </p>

                  <p className="text-gray-700 leading-8">
                    যদি বিদেশে থাকেন, তাহলে আপনার বর্তমান দেশ এবং বাংলাদেশ
                    দূতাবাস বা মিশন নির্বাচন করুন যেখান থেকে পাসপোর্ট প্রসেস
                    করতে চান।
                  </p>
                </>
              )}
            </div>

            {/* Step 3 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 3: Create Account or Login
                  </h2>

                  <img
                    src="/passport/passport_3.png"
                    alt="Bangladesh e-passport account registration"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    Enter your email address. If you already have an account,
                    the system may ask for your existing passport information.
                  </p>

                  <p className="text-gray-700 leading-8 mb-4">
                    Otherwise, you will be redirected to create a new account
                    using your email address, given name, surname, and mobile
                    number.
                  </p>

                  <img
                    src="/passport/passport_3_1.png"
                    alt="Bangladesh e-passport account registration"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    Make sure your name exactly matches your NID or Birth
                    Certificate information.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ৩: একাউন্ট তৈরি করুন অথবা লগইন করুন
                  </h2>

                  <img
                    src="/passport/passport_3.png"
                    alt="ই-পাসপোর্ট একাউন্ট নিবন্ধন"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    আপনার ইমেইল ঠিকানা প্রদান করুন। আগে থেকে একাউন্ট থাকলে
                    সিস্টেম আপনাকে লগইন করতে বলবে।
                  </p>

                  <p className="text-gray-700 leading-8 mb-4">
                    নতুন ব্যবহারকারী হলে ইমেইল, Given Name, Surname এবং মোবাইল
                    নম্বর দিয়ে নতুন একাউন্ট তৈরি করতে হবে।
                  </p>

                  <img
                    src="/passport/passport_3_1.png"
                    alt="Bangladesh e-passport account registration"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    নাম অবশ্যই NID অথবা জন্ম সনদের তথ্য অনুযায়ী লিখতে হবে।
                  </p>
                </>
              )}
            </div>

            {/* Step 4 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 4: Apply for a New e-Passport
                  </h2>

                  <img
                    src="/passport/passport_4.png"
                    alt="Apply for new e-passport"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    After logging in successfully, click on “Apply for a new
                    e-Passport” to begin your passport application form.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ৪: নতুন ই-পাসপোর্টের জন্য আবেদন করুন
                  </h2>

                  <img
                    src="/passport/passport_4.png"
                    alt="নতুন ই-পাসপোর্ট আবেদন"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    সফলভাবে লগইন করার পর “Apply for a new e-Passport” বাটনে
                    ক্লিক করে আবেদন ফরম শুরু করুন।
                  </p>
                </>
              )}
            </div>

            {/* Step 5 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 5: Select Passport Type
                  </h2>

                  <img
                    src="/passport/passport_5.png"
                    alt="Passport type selection"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    Select your passport category such as “Ordinary Passport” or
                    “Official Passport”.
                  </p>

                  <p className="text-gray-700 leading-8">
                    Government employees who are eligible for official passports
                    may select “Official Passport”. Most applicants should
                    select “Ordinary Passport”.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ৫: পাসপোর্টের ধরন নির্বাচন করুন
                  </h2>

                  <img
                    src="/passport/passport_5.png"
                    alt="পাসপোর্ট টাইপ নির্বাচন"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    “Ordinary Passport” অথবা “Official Passport” নির্বাচন করুন।
                  </p>

                  <p className="text-gray-700 leading-8">
                    সরকারি চাকরিজীবীরা “Official Passport” নির্বাচন করতে পারবেন।
                    সাধারণ আবেদনকারীদের জন্য “Ordinary Passport” নির্বাচন করতে
                    হবে।
                  </p>
                </>
              )}
            </div>

            {/* Step 6 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 6: Fill Personal Information
                  </h2>

                  <p className="text-gray-700 leading-8">
                    Fill up your personal information exactly according to your
                    NID card or Birth Certificate including full name, date of
                    birth, place of birth, gender, and profession.
                  </p>

                  <img
                    src="/passport/passport_6_1.png"
                    alt="Passport personal information form"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <img
                    src="/passport/passport_6_2.png"
                    alt="Passport personal information form"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ৬: ব্যক্তিগত তথ্য পূরণ করুন
                  </h2>

                  <p className="text-gray-700 leading-8">
                    আপনার নাম, জন্ম তারিখ, জন্মস্থান, লিঙ্গ এবং পেশাসহ সকল তথ্য
                    NID অথবা জন্ম সনদের সাথে মিল রেখে পূরণ করুন।
                  </p>

                  <img
                    src="/passport/passport_6_1.png"
                    alt="Passport personal information form"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <img
                    src="/passport/passport_6_2.png"
                    alt="Passport personal information form"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />
                </>
              )}
            </div>

            {/* Step 7 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 7: Fill Present & Permanent Address
                  </h2>

                  <p className="text-gray-700 leading-8 mb-4">
                    Fill up both your present address and permanent address.
                  </p>

                  <p className="text-gray-700 leading-8 mb-4">
                    The present address determines where you will collect your
                    passport and where you need to visit for biometric
                    registration.
                  </p>

                  <img
                    src="/passport/passport_7_1.png"
                    alt="Passport address information"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <img
                    src="/passport/passport_7_2.png"
                    alt="Passport address information"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    Many applicants prefer to use their permanent address for
                    both sections because police verification may occur at both
                    addresses.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ৭: বর্তমান ও স্থায়ী ঠিকানা প্রদান করুন
                  </h2>

                  <p className="text-gray-700 leading-8 mb-4">
                    বর্তমান ঠিকানা এবং স্থায়ী ঠিকানা সঠিকভাবে পূরণ করুন।
                  </p>

                  <p className="text-gray-700 leading-8 mb-4">
                    বর্তমান ঠিকানার ভিত্তিতে আপনার পাসপোর্ট অফিস নির্ধারণ হবে
                    এবং সেখানেই বায়োমেট্রিক নিবন্ধনের জন্য যেতে হবে।
                  </p>

                  <img
                    src="/passport/passport_7_1.png"
                    alt="Passport address information"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <img
                    src="/passport/passport_7_2.png"
                    alt="Passport address information"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    অনেকেই উভয় ক্ষেত্রে স্থায়ী ঠিকানা ব্যবহার করেন কারণ পুলিশ
                    ভেরিফিকেশন দুই জায়গাতেই হতে পারে।
                  </p>
                </>
              )}
            </div>

            {/* Step 8 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 8: Fill NID Information
                  </h2>

                  <p className="text-gray-700 leading-8">
                    Enter your National ID card information carefully. Even if
                    the system shows “Data not found in NID system”, you may
                    still be able to continue your passport application process.
                  </p>

                  <img
                    src="/passport/passport_8_1.png"
                    alt="Passport NID information step"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <img
                    src="/passport/passport_8_2.png"
                    alt="Passport NID information step"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ৮: NID তথ্য প্রদান করুন
                  </h2>

                  <p className="text-gray-700 leading-8">
                    আপনার জাতীয় পরিচয়পত্র (NID) এর তথ্য সঠিকভাবে প্রদান করুন।
                    অনেক সময় “Data not found in NID system” দেখাতে পারে। এতে ভয়
                    পাওয়ার কিছু নেই, সাধারণত এরপরও আবেদন প্রক্রিয়া চালিয়ে যাওয়া
                    যায়।
                  </p>

                  <img
                    src="/passport/passport_8_1.png"
                    alt="Passport NID information step"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <img
                    src="/passport/passport_8_2.png"
                    alt="Passport NID information step"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />
                </>
              )}
            </div>

            {/* Step 9 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 9: Fill Parental Information
                  </h2>

                  <img
                    src="/passport/passport_9.png"
                    alt="Passport parental information"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    Fill up your father’s and mother’s information according to
                    their NID cards and official documents.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ৯: পিতা-মাতার তথ্য প্রদান করুন
                  </h2>

                  <img
                    src="/passport/passport_9.png"
                    alt="পিতা মাতার তথ্য"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    আপনার বাবা এবং মায়ের তথ্য তাদের NID অথবা অফিসিয়াল ডকুমেন্ট
                    অনুযায়ী সঠিকভাবে পূরণ করুন।
                  </p>
                </>
              )}
            </div>

            {/* Step 10 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 10: Fill Spouse Information
                  </h2>

                  <img
                    src="/passport/passport_10.png"
                    alt="Passport spouse information"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    Select your marital status.
                  </p>

                  <p className="text-gray-700 leading-8">
                    If married, you must provide spouse information. Your
                    marital status will be printed on your passport.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ১০: স্বামী/স্ত্রীর তথ্য প্রদান করুন
                  </h2>

                  <img
                    src="/passport/passport_10.png"
                    alt="স্বামী স্ত্রীর তথ্য"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    আপনার বৈবাহিক অবস্থা নির্বাচন করুন।
                  </p>

                  <p className="text-gray-700 leading-8">
                    বিবাহিত হলে স্বামী বা স্ত্রীর তথ্য প্রদান করতে হবে। আপনার
                    বৈবাহিক অবস্থা পাসপোর্টে প্রিন্ট হবে।
                  </p>
                </>
              )}
            </div>

            {/* Step 11 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 11: Emergency Contact Information
                  </h2>

                  <img
                    src="/passport/passport_11.png"
                    alt="Emergency contact information"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    Enter the information of your emergency contact person. This
                    information may also appear in your passport records.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ১১: জরুরি যোগাযোগের তথ্য প্রদান করুন
                  </h2>

                  <img
                    src="/passport/passport_11.png"
                    alt="জরুরি যোগাযোগ তথ্য"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    জরুরি প্রয়োজনে যোগাযোগ করা যাবে এমন একজন ব্যক্তির তথ্য
                    প্রদান করুন। এই তথ্য পাসপোর্ট রেকর্ডেও সংরক্ষিত থাকতে পারে।
                  </p>
                </>
              )}
            </div>

            {/* Step 12 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 12: Select Passport Pages & Validity
                  </h2>

                  <img
                    src="/passport/passport_12.png"
                    alt="Passport pages and validity selection"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    Select the number of passport pages and validity period.
                  </p>

                  <p className="text-gray-700 leading-8">
                    Many applicants prefer choosing a 64-page passport with 10
                    years validity for long-term convenience.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ১২: পাসপোর্টের পৃষ্ঠা সংখ্যা ও মেয়াদ নির্বাচন করুন
                  </h2>

                  <img
                    src="/passport/passport_12.png"
                    alt="পাসপোর্ট পৃষ্ঠা ও মেয়াদ নির্বাচন"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    পাসপোর্টের পৃষ্ঠা সংখ্যা এবং মেয়াদ নির্বাচন করুন।
                  </p>

                  <p className="text-gray-700 leading-8">
                    দীর্ঘমেয়াদী ব্যবহারের সুবিধার জন্য অনেকেই ১০ বছরের মেয়াদসহ
                    ৬৪ পৃষ্ঠার পাসপোর্ট নির্বাচন করে থাকেন।
                  </p>
                </>
              )}
            </div>

            {/* Step 13 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 13: Delivery Options & Appointment
                  </h2>

                  <img
                    src="/passport/passport_13.png"
                    alt="Passport delivery options and appointment booking"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    Select your preferred delivery option such as Regular,
                    Express, or Super Express.
                  </p>

                  <p className="text-gray-700 leading-8">
                    Then choose an appointment date and time for biometric
                    registration at your selected passport office. The total fee
                    will be shown on this page.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ১৩: ডেলিভারি অপশন ও অ্যাপয়েন্টমেন্ট নির্বাচন করুন
                  </h2>

                  <img
                    src="/passport/passport_13.png"
                    alt="ডেলিভারি অপশন ও অ্যাপয়েন্টমেন্ট"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    আপনার প্রয়োজন অনুযায়ী Regular, Express অথবা Super Express
                    ডেলিভারি অপশন নির্বাচন করুন।
                  </p>

                  <p className="text-gray-700 leading-8">
                    এরপর বায়োমেট্রিক নিবন্ধনের জন্য নির্ধারিত পাসপোর্ট অফিসে
                    যাওয়ার তারিখ ও সময় নির্বাচন করুন। এই পেজে মোট ফি দেখানো হবে।
                  </p>
                </>
              )}
            </div>

            {/* Step 14 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 14: Final Review & Confirmation
                  </h2>

                  <img
                    src="/passport/passport_14.png"
                    alt="Passport final review page"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    Carefully review all the information you have entered. If
                    anything is incorrect, go back and fix it. Then click the
                    “Proceed to Payment” button to continue.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ১৪: চূড়ান্ত যাচাই ও নিশ্চিতকরণ
                  </h2>

                  <img
                    src="/passport/passport_14.png"
                    alt="চূড়ান্ত তথ্য যাচাই"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    আপনি যে সকল তথ্য দিয়েছেন তা ভালোভাবে যাচাই করুন। কোনো ভুল
                    থাকলে ফিরে গিয়ে সংশোধন করুন। তারপর “Proceed to Payment”
                    বাটনে ক্লিক করুন।
                  </p>
                </>
              )}
            </div>

            {/* Step 15 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 15: Select Payment Method
                  </h2>

                  <img
                    src="/passport/passport_15.png"
                    alt="Passport payment selection"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    Choose online payment option for convenience. You can select
                    EKPAY, which will redirect you to the official payment
                    gateway.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ১৫: পেমেন্ট পদ্ধতি নির্বাচন করুন
                  </h2>

                  <img
                    src="/passport/passport_15.png"
                    alt="পেমেন্ট অপশন নির্বাচন"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    সহজ পেমেন্টের জন্য অনলাইন পেমেন্ট অপশন নির্বাচন করুন। EKPAY
                    নির্বাচন করলে আপনি অফিসিয়াল পেমেন্ট গেটওয়েতে রিডাইরেক্ট
                    হবেন।
                  </p>
                </>
              )}
            </div>

            {/* Step 16 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 16: Complete Payment via Gateway
                  </h2>

                  <img
                    src="/passport/passport_16.png"
                    alt="Payment gateway options"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    From the payment gateway, you can complete payment using
                    bKash, credit/debit card, or other available options.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ১৬: পেমেন্ট সম্পন্ন করুন
                  </h2>

                  <img
                    src="/passport/passport_16.png"
                    alt="পেমেন্ট গেটওয়ে"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    পেমেন্ট গেটওয়ে থেকে আপনি bKash, ডেবিট/ক্রেডিট কার্ড বা
                    অন্যান্য পদ্ধতিতে পেমেন্ট সম্পন্ন করতে পারবেন।
                  </p>
                </>
              )}
            </div>

            {/* Step 17 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 17: Download Application Documents
                  </h2>

                  <img
                    src="/passport/passport_17.png"
                    alt="Application summary download"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    After successful payment, you will be redirected to the
                    summary page.
                  </p>

                  <p className="text-gray-700 leading-8 mb-4">
                    Download “Print Summary” and “Application Form for
                    Printing”.
                  </p>

                  <p className="text-gray-700 leading-8">
                    Save your Online Registration ID carefully as it will be
                    required later.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ১৭: আবেদন ডকুমেন্ট ডাউনলোড করুন
                  </h2>

                  <img
                    src="/passport/passport_17.png"
                    alt="আবেদন সারাংশ ডাউনলোড"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    পেমেন্ট সম্পন্ন হলে আপনাকে সারাংশ পেজে নিয়ে যাওয়া হবে।
                  </p>

                  <p className="text-gray-700 leading-8 mb-4">
                    “Print Summary” এবং “Application Form” ডাউনলোড করুন।
                  </p>

                  <p className="text-gray-700 leading-8">
                    ভবিষ্যতে ব্যবহারের জন্য Online Registration ID সংরক্ষণ করুন।
                  </p>
                </>
              )}
            </div>

            {/* Step 18 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 18: Download Payment Slip
                  </h2>

                  <img
                    src="/passport/passport_18.png"
                    alt="Passport payment slip download"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    Go to the “Passport Fees” tab and click on the link to
                    download the online payment slip using your application ID.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ১৮: পেমেন্ট স্লিপ ডাউনলোড করুন
                  </h2>

                  <img
                    src="/passport/passport_18.png"
                    alt="পেমেন্ট স্লিপ ডাউনলোড"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8">
                    “Passport Fees” ট্যাবে গিয়ে আপনার Application ID ব্যবহার করে
                    অনলাইন পেমেন্ট স্লিপ ডাউনলোড করুন।
                  </p>
                </>
              )}
            </div>

            {/* Step 19 */}
            <div>
              {currentLang === "en" ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 19: Download Bill & Final Documents
                  </h2>

                  <img
                    src="/passport/passport_19.png"
                    alt="Final passport documents download"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    Enter your Application ID and view your bill details.
                  </p>

                  <p className="text-gray-700 leading-8">
                    Download the payment challan and keep all documents safely
                    for your biometric appointment.
                  </p>

                  <img
                    src="/passport/passport_19_1.png"
                    alt="Final passport documents download"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    ধাপ ১৯: বিল ও চূড়ান্ত ডকুমেন্ট ডাউনলোড করুন
                  </h2>

                  <img
                    src="/passport/passport_19.png"
                    alt="চূড়ান্ত ডকুমেন্ট ডাউনলোড"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />

                  <p className="text-gray-700 leading-8 mb-4">
                    আপনার Application ID দিয়ে বিলের তথ্য দেখুন।
                  </p>

                  <p className="text-gray-700 leading-8">
                    পেমেন্ট চালান ডাউনলোড করুন এবং বায়োমেট্রিক
                    অ্যাপয়েন্টমেন্টের জন্য সব ডকুমেন্ট সংরক্ষণ করুন।
                  </p>

                  <img
                    src="/passport/passport_19_1.png"
                    alt="Final passport documents download"
                    className="w-full rounded-xl border border-gray-200 mb-5"
                  />
                </>
              )}
            </div>
          </div>

          {/* Documents */}
          <div id="required-documents" className="mt-12">
            {currentLang === "en" ? (
              <>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Required Documents for Bangladesh e-Passport Application
                </h2>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <ul className="list-disc pl-6 text-gray-700 leading-8 space-y-3">
                    <li>Printed application copy</li>
                    <li>Printed application summary</li>
                    <li>Payment slip / challan</li>
                    <li>NID photocopy</li>
                    <li>Original NID card</li>
                    <li>Electricity bill copy</li>
                    <li>Birth Certificate</li>
                    <li>Kabin Nama (if married)</li>
                    <li>GO / NOC for government employees</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  বাংলাদেশ ই-পাসপোর্ট আবেদনের জন্য প্রয়োজনীয় ডকুমেন্টসমূহ
                </h2>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <ul className="list-disc pl-6 text-gray-700 leading-8 space-y-3">
                    <li>প্রিন্ট করা আবেদন কপি</li>
                    <li>প্রিন্ট করা আবেদন সারাংশ</li>
                    <li>পেমেন্ট স্লিপ / চালান</li>
                    <li>NID ফটোকপি</li>
                    <li>মূল NID কার্ড</li>
                    <li>বিদ্যুৎ বিলের কপি</li>
                    <li>জন্ম সনদ</li>
                    <li>কাবিননামা (যদি বিবাহিত হন)</li>
                    <li>সরকারি কর্মচারীদের জন্য GO / NOC</li>
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Biometric */}
          <div id="biometric-process" className="mt-12">
            {currentLang === "en" ? (
              <>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Biometric Registration & Police Verification
                </h2>

                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4 text-gray-700 leading-8">
                  <p>
                    After completing the online application process, print all
                    required documents and visit your selected passport office
                    on the appointment date for biometric enrollment.
                  </p>

                  <p>
                    You must carry your ORIGINAL NID card during biometric
                    registration. Without the original NID card, your biometric
                    process may not be completed.
                  </p>

                  <p>
                    During police verification, officers may ask for supporting
                    documents such as NID copy, electricity bill, birth
                    certificate, and other identity-related documents for
                    address verification.
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  বায়োমেট্রিক নিবন্ধন ও পুলিশ ভেরিফিকেশন
                </h2>

                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4 text-gray-700 leading-8">
                  <p>
                    অনলাইন আবেদন প্রক্রিয়া সম্পন্ন করার পর প্রয়োজনীয় সকল
                    ডকুমেন্ট প্রিন্ট করে নির্ধারিত তারিখে আপনার নির্বাচিত
                    পাসপোর্ট অফিসে বায়োমেট্রিক নিবন্ধনের জন্য উপস্থিত হতে হবে।
                  </p>

                  <p>
                    বায়োমেট্রিক নিবন্ধনের সময় অবশ্যই আপনার মূল NID কার্ড সঙ্গে
                    আনতে হবে। মূল NID ছাড়া বায়োমেট্রিক প্রক্রিয়া সম্পন্ন করা
                    সম্ভব নয়।
                  </p>

                  <p>
                    পুলিশ ভেরিফিকেশনের সময় কর্মকর্তারা ঠিকানা যাচাইয়ের জন্য NID
                    কপি, বিদ্যুৎ বিল, জন্ম সনদসহ অন্যান্য পরিচয় সংক্রান্ত
                    ডকুমেন্ট চাইতে পারেন।
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            {currentLang === "en" ? (
              <>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Disclaimer
                </h2>

                <p className="text-gray-700 leading-7 text-sm sm:text-base">
                  This website is not affiliated with the Government of
                  Bangladesh and is not an official government website. This
                  page is created as an independent informational guide to help
                  users understand the Bangladesh e-passport online registration
                  process.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  দায়স্বীকার (Disclaimer)
                </h2>

                <p className="text-gray-700 leading-7 text-sm sm:text-base">
                  এই ওয়েবসাইটটি বাংলাদেশ সরকারের সাথে সংশ্লিষ্ট নয় এবং এটি কোনো
                  অফিসিয়াল সরকারি ওয়েবসাইট নয়। এই পেজটি একটি স্বাধীন তথ্যভিত্তিক
                  গাইড হিসেবে তৈরি করা হয়েছে, যাতে ব্যবহারকারীরা বাংলাদেশ
                  ই-পাসপোর্ট অনলাইন নিবন্ধন প্রক্রিয়া সহজভাবে বুঝতে পারেন।
                </p>
              </>
            )}
          </div>

          {/* FAQ */}
          <div id="passport-faq" className="mt-12">
            {currentLang === "en" ? (
              <>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Frequently Asked Questions (FAQ)
                </h2>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Can I apply for Bangladesh e-passport online using mobile
                      phone?
                    </h3>

                    <p className="text-gray-700 leading-7">
                      Yes. Bangladesh e-passport application can be completed
                      using a mobile phone or computer, although a desktop
                      browser usually provides a better experience.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Which browser is recommended for e-passport application?
                    </h3>

                    <p className="text-gray-700 leading-7">
                      Google Chrome browser is commonly recommended for smoother
                      experience during Bangladesh e-passport online
                      application.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Is original NID required during biometric registration?
                    </h3>

                    <p className="text-gray-700 leading-7">
                      Yes. You must carry your original National ID card during
                      your biometric enrollment appointment at the passport
                      office.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Which documents are required for police verification?
                    </h3>

                    <p className="text-gray-700 leading-7">
                      Police verification may require documents such as NID
                      copy, electricity bill, birth certificate, marriage
                      certificate, and other supporting address-related
                      documents.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Which passport option is recommended?
                    </h3>

                    <p className="text-gray-700 leading-7">
                      Many applicants prefer selecting a 64-page passport with
                      10 years validity for long-term convenience.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)
                </h2>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      মোবাইল ফোন দিয়ে কি ই-পাসপোর্ট আবেদন করা যায়?
                    </h3>

                    <p className="text-gray-700 leading-7">
                      হ্যাঁ। মোবাইল ফোন বা কম্পিউটার উভয় দিয়েই বাংলাদেশ
                      ই-পাসপোর্ট আবেদন করা যায়, তবে ডেস্কটপ ব্রাউজার ব্যবহার
                      করলে অভিজ্ঞতা আরও ভালো হয়।
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      ই-পাসপোর্ট আবেদন করার জন্য কোন ব্রাউজার ব্যবহার করা ভালো?
                    </h3>

                    <p className="text-gray-700 leading-7">
                      সাধারণত Google Chrome ব্রাউজার ব্যবহার করার পরামর্শ দেওয়া
                      হয়, কারণ এটি অনলাইন আবেদন প্রক্রিয়াকে আরও সহজ ও মসৃণ করে।
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      বায়োমেট্রিকের সময় কি মূল NID নিয়ে যেতে হবে?
                    </h3>

                    <p className="text-gray-700 leading-7">
                      হ্যাঁ। বায়োমেট্রিক নিবন্ধনের সময় অবশ্যই আপনার মূল জাতীয়
                      পরিচয়পত্র (NID) সঙ্গে নিয়ে যেতে হবে।
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      পুলিশ ভেরিফিকেশনের জন্য কী কী ডকুমেন্ট লাগতে পারে?
                    </h3>

                    <p className="text-gray-700 leading-7">
                      পুলিশ ভেরিফিকেশনের সময় NID কপি, বিদ্যুৎ বিল, জন্ম সনদ,
                      বিবাহ সনদ এবং অন্যান্য ঠিকানা যাচাই সম্পর্কিত ডকুমেন্ট
                      প্রয়োজন হতে পারে।
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      কোন পাসপোর্ট অপশনটি ভালো?
                    </h3>

                    <p className="text-gray-700 leading-7">
                      অনেকেই দীর্ঘমেয়াদী সুবিধার জন্য ১০ বছরের মেয়াদসহ ৬৪
                      পৃষ্ঠার পাসপোর্ট নির্বাচন করে থাকেন।
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
