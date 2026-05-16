import Link from "next/link";

const content = {
  en: {
    title: "Bangladesh Government Services Portal",
    subtitle:
      "Birth Certificate Verification, NID Check, Passport Status & Online Government Services in Bangladesh",

    description:
      "Access Bangladesh government online services including digital birth certificate verification, birth registration application, NID verification, passport status check, e-passport services, and other important citizen services.",

    services: {
      birthCertificate: "Birth Certificate",
      nid: "National ID (NID)",
      passport: "Passport",
    },

    actions: {
      registration: "Registration",
      check: "Check Status",
    },
  },

  bn: {
    title: "বাংলাদেশ সরকারি সেবা পোর্টাল",

    subtitle:
      "জন্ম নিবন্ধন যাচাই, এনআইডি চেক, পাসপোর্ট স্ট্যাটাস ও সরকারি অনলাইন সেবা",

    description:
      "ডিজিটাল জন্ম নিবন্ধন যাচাই, জন্ম নিবন্ধন আবেদন, এনআইডি যাচাই, পাসপোর্ট স্ট্যাটাস চেক, ই-পাসপোর্ট সেবা এবং বাংলাদেশের অন্যান্য গুরুত্বপূর্ণ সরকারি সেবা সহজে ব্যবহার করুন।",

    services: {
      birthCertificate: "জন্মনিবন্ধন",
      nid: "জাতীয় পরিচয়পত্র (এনআইডি)",
      passport: "পাসপোর্ট",
    },

    actions: {
      registration: "নিবন্ধন",
      check: "যাচাই",
    },
  },
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

/** Only `/en` and `/bn` exist as static HTML for this segment. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang === "bn") {
    return {
      title: "বাংলাদেশ সরকারি সেবা | জন্ম নিবন্ধন, এনআইডি ও পাসপোর্ট যাচাই",
      description:
        "বাংলাদেশের সরকারি অনলাইন সেবা ব্যবহার করুন। জন্ম নিবন্ধন যাচাই, এনআইডি চেক, পাসপোর্ট স্ট্যাটাস, জন্ম নিবন্ধন আবেদন এবং অন্যান্য সরকারি তথ্য সহজে দেখুন।",
    };
  }

  return {
    title:
      "Bangladesh Government Services | Birth Certificate, NID & Passport Check",
    description:
      "Access Bangladesh government online services including birth certificate verification, NID check, passport status check, birth registration, and other citizen services.",
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as "en" | "bn";
  const t = content[currentLang];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.title}
          </h1>

          <p className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            {t.description}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Birth Certificate Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.services.birthCertificate}
                </h3>
              </div>
              <div className="space-y-4">
                <Link
                  href={`/${currentLang}/digital-birth-certificate-registration-bangladesh`}
                  className="block w-full text-center bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {t.actions.registration}
                </Link>
                <Link
                  href={`/${currentLang}/digital-birth-certificate-check-bangladesh`}
                  className="block w-full text-center border border-blue-600 text-blue-600 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  {t.actions.check}
                </Link>
              </div>
            </div>

            {/* NID Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.services.nid}
                </h3>
              </div>
              <div className="space-y-4">
                <Link
                  href={`/${currentLang}/nid-registration-bangladesh`}
                  className="block w-full text-center bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  {t.actions.registration}
                </Link>
                <Link
                  href={`/${currentLang}/nid-check-bangladesh`}
                  className="block w-full text-center border border-green-600 text-green-600 py-4 rounded-lg hover:bg-green-50 transition-colors font-medium"
                >
                  {t.actions.check}
                </Link>
              </div>
            </div>

            {/* Passport Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.services.passport}
                </h3>
              </div>
              <div className="space-y-4">
                <Link
                  href={`/${currentLang}/how-to-apply-e-passport-bangladesh-online`}
                  className="block w-full text-center bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  {t.actions.registration}
                </Link>
                <Link
                  href={`/${currentLang}/passport-check-bangladesh`}
                  className="block w-full text-center border border-red-600 text-red-600 py-4 rounded-lg hover:bg-red-50 transition-colors font-medium"
                >
                  {t.actions.check}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {currentLang === "en"
              ? "Bangladesh Online Government Services"
              : "বাংলাদেশ অনলাইন সরকারি সেবা"}
          </h2>

          <div className="space-y-6 text-gray-700 leading-8 text-lg">
            <p>
              {currentLang === "en"
                ? "Access important Bangladesh government services online including birth certificate registration, birth certificate verification, NID registration, passport application, passport status check, and other citizen services."
                : "জন্ম নিবন্ধন, জন্ম নিবন্ধন যাচাই, এনআইডি নিবন্ধন, পাসপোর্ট আবেদন, পাসপোর্ট স্ট্যাটাস যাচাইসহ বাংলাদেশের গুরুত্বপূর্ণ সরকারি সেবা অনলাইনে সহজে ব্যবহার করুন।"}
            </p>

            <p>
              {currentLang === "en"
                ? "This platform helps Bangladeshi citizens quickly find official information and step-by-step guidance for government-related online services."
                : "এই প্ল্যাটফর্মটি বাংলাদেশের নাগরিকদের সরকারি অনলাইন সেবা সম্পর্কিত তথ্য ও ধাপে ধাপে নির্দেশনা সহজে খুঁজে পেতে সহায়তা করে।"}
            </p>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {currentLang === "en"
              ? "Popular Bangladesh Government Services"
              : "জনপ্রিয় বাংলাদেশ সরকারি সেবা"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                {currentLang === "en"
                  ? "Birth Certificate Services"
                  : "জন্ম নিবন্ধন সেবা"}
              </h3>

              <p className="text-gray-700 leading-7 mb-4">
                {currentLang === "en"
                  ? "Check digital birth certificate verification, apply for new birth registration, correct birth certificate information, and download online birth registration records in Bangladesh."
                  : "ডিজিটাল জন্ম নিবন্ধন যাচাই, নতুন জন্ম নিবন্ধন আবেদন, জন্ম সনদের তথ্য সংশোধন এবং অনলাইন জন্ম নিবন্ধন তথ্য দেখুন।"}
              </p>

              <ul className="space-y-3 text-blue-600">
                <li>
                  <Link
                    href={`/${currentLang}/digital-birth-certificate-check-bangladesh`}
                    className="hover:underline"
                  >
                    Birth Certificate Verification
                  </Link>
                </li>

                <li>
                  <Link
                    href={`/${currentLang}/digital-birth-certificate-registration-bangladesh`}
                    className="hover:underline"
                  >
                    Birth Registration Application
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                {currentLang === "en"
                  ? "NID and Passport Services"
                  : "এনআইডি ও পাসপোর্ট সেবা"}
              </h3>

              <p className="text-gray-700 leading-7 mb-4">
                {currentLang === "en"
                  ? "Find information about Bangladesh National ID card registration, smart NID verification, e-passport registration, passport renewal, and passport delivery status."
                  : "বাংলাদেশ জাতীয় পরিচয়পত্র নিবন্ধন, স্মার্ট এনআইডি যাচাই, ই-পাসপোর্ট আবেদন, পাসপোর্ট নবায়ন এবং পাসপোর্ট ডেলিভারি স্ট্যাটাস সম্পর্কিত তথ্য দেখুন।"}
              </p>

              <ul className="space-y-3 text-green-600">
                <li>
                  <Link
                    href={`/${currentLang}/nid-check-bangladesh`}
                    className="hover:underline"
                  >
                    NID Verification
                  </Link>
                </li>

                <li>
                  <Link
                    href={`/${currentLang}/passport-check-bangladesh`}
                    className="hover:underline"
                  >
                    Passport Status Check
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How To Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            {currentLang === "en"
              ? "How to Use Bangladesh Government Online Services"
              : "বাংলাদেশ সরকারি অনলাইন সেবা ব্যবহারের নিয়ম"}
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                {currentLang === "en"
                  ? "1. Select a Government Service"
                  : "১. একটি সরকারি সেবা নির্বাচন করুন"}
              </h3>

              <p className="text-gray-700 leading-7">
                {currentLang === "en"
                  ? "Choose the government service you need such as birth certificate verification, NID registration, or passport application."
                  : "জন্ম নিবন্ধন যাচাই, এনআইডি নিবন্ধন অথবা পাসপোর্ট আবেদনসহ আপনার প্রয়োজনীয় সরকারি সেবা নির্বাচন করুন।"}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">
                {currentLang === "en"
                  ? "2. Submit Required Information"
                  : "২. প্রয়োজনীয় তথ্য প্রদান করুন"}
              </h3>

              <p className="text-gray-700 leading-7">
                {currentLang === "en"
                  ? "Provide required information such as birth registration number, date of birth, NID number, or passport application ID."
                  : "জন্ম নিবন্ধন নম্বর, জন্ম তারিখ, এনআইডি নম্বর অথবা পাসপোর্ট আবেদন আইডির মতো প্রয়োজনীয় তথ্য প্রদান করুন।"}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">
                {currentLang === "en"
                  ? "3. Check Your Application Status"
                  : "৩. আবেদন স্ট্যাটাস যাচাই করুন"}
              </h3>

              <p className="text-gray-700 leading-7">
                {currentLang === "en"
                  ? "Track the latest status of your government application online anytime from anywhere."
                  : "যেকোনো সময় অনলাইনে আপনার সরকারি আবেদন স্ট্যাটাস যাচাই করুন।"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            FAQ
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                {currentLang === "en"
                  ? "How can I check my birth certificate online in Bangladesh?"
                  : "বাংলাদেশে অনলাইনে জন্ম নিবন্ধন কিভাবে যাচাই করবো?"}
              </h3>

              <p className="text-gray-700 leading-7">
                {currentLang === "en"
                  ? "You can verify your Bangladesh digital birth certificate using your birth registration number and date of birth."
                  : "আপনি জন্ম নিবন্ধন নম্বর এবং জন্ম তারিখ ব্যবহার করে ডিজিটাল জন্ম নিবন্ধন যাচাই করতে পারবেন।"}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                {currentLang === "en"
                  ? "How do I apply for Bangladesh NID?"
                  : "বাংলাদেশ এনআইডি কার্ডের জন্য কিভাবে আবেদন করবো?"}
              </h3>

              <p className="text-gray-700 leading-7">
                {currentLang === "en"
                  ? "You can apply for Bangladesh National ID card registration through the official Election Commission services."
                  : "বাংলাদেশ নির্বাচন কমিশনের অফিসিয়াল সেবার মাধ্যমে জাতীয় পরিচয়পত্রের জন্য আবেদন করা যায়।"}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                {currentLang === "en"
                  ? "How can I check my passport status?"
                  : "পাসপোর্ট স্ট্যাটাস কিভাবে যাচাই করবো?"}
              </h3>

              <p className="text-gray-700 leading-7">
                {currentLang === "en"
                  ? "You can check Bangladesh passport delivery and application status online using your application ID."
                  : "আপনার আবেদন আইডি ব্যবহার করে অনলাইনে বাংলাদেশ পাসপোর্ট স্ট্যাটাস যাচাই করতে পারবেন।"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-10 px-4 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl border border-yellow-300 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {currentLang === "en" ? "Disclaimer" : "দাবিত্যাগ"}
            </h2>

            <p className="text-gray-700 leading-8">
              {currentLang === "en"
                ? "This website is not an official government website and is not affiliated with the Government of Bangladesh. The purpose of this platform is to help people easily access information, guidance, and links related to Bangladesh government services such as birth certificate verification, NID services, and passport services."
                : "এই ওয়েবসাইটটি কোনো সরকারি ওয়েবসাইট নয় এবং বাংলাদেশ সরকারের সাথে সংশ্লিষ্ট নয়। এই প্ল্যাটফর্মের উদ্দেশ্য হলো জন্ম নিবন্ধন যাচাই, এনআইডি সেবা, পাসপোর্ট সেবা এবং অন্যান্য সরকারি সেবা সম্পর্কিত তথ্য, নির্দেশনা ও লিংক সহজভাবে মানুষের কাছে পৌঁছে দেওয়া।"}
            </p>

            <p className="text-gray-700 leading-8 mt-4">
              {currentLang === "en"
                ? "We aim to make government-related online services easier to understand and access for everyone."
                : "আমাদের লক্ষ্য হলো সরকারি অনলাইন সেবাগুলো সবার জন্য সহজভাবে বুঝতে ও ব্যবহার করতে সহায়তা করা।"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
