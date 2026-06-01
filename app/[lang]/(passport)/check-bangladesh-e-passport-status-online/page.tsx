import type { Metadata } from "next";

const PASSPORT_STATUS_URL =
  "https://www.epassport.gov.bd/authorization/application-status";

const content = {
  en: {
    seo: {
      title:
        "Bangladesh e-Passport Status Check Online | Track Passport Application Status",
      description:
        "Check Bangladesh e-passport application status online using Application ID or Online Registration ID (OID). Learn passport status meanings and know when your passport is ready for collection.",
    },
  },

  bn: {
    seo: {
      title:
        "বাংলাদেশ ই-পাসপোর্ট স্ট্যাটাস চেক | অনলাইনে পাসপোর্টের অবস্থা দেখুন",
      description:
        "বাংলাদেশ ই-পাসপোর্ট স্ট্যাটাস অনলাইনে চেক করুন। Application ID বা Online Registration ID (OID) ব্যবহার করে পাসপোর্টের বর্তমান অবস্থা জানুন।",
    },
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
  const path = `/${currentLang}/check-bangladesh-e-passport-status-online`;

  const canonical = `${baseUrl}${path}`;
  const ogImage = "/passport/passport_cover.png";

  return {
    title: t.seo.title,
    description: t.seo.description,

    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en/check-bangladesh-e-passport-status-online`,
        bn: `${baseUrl}/bn/check-bangladesh-e-passport-status-online`,
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
  };
}

export default async function PassportStatusPage({
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
                name: "How can I check my Bangladesh passport status online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can check your Bangladesh e-passport status online using your Application ID or Online Registration ID (OID) and date of birth.",
                },
              },
            ],
          }),
        }}
      />

      <section className="py-12 px-4">
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="mt-10 text-2xl font-semibold mb-4">
              {currentLang === "en"
                ? "How to Check Bangladesh e-Passport Status Online"
                : "বাংলাদেশ ই-পাসপোর্ট স্ট্যাটাস অনলাইনে চেক করার নিয়ম"}
            </h2>

            <p className="text-base leading-8 mb-4">
              {currentLang === "en"
                ? "After submitting your Bangladesh e-passport application and completing biometric enrollment at the passport office, you can easily check your passport status online through the official Bangladesh e-passport portal. The online passport tracking system allows applicants to monitor every stage of the application process, including police verification, backend verification, printing status, shipment status, and passport collection readiness."
                : "বাংলাদেশ ই-পাসপোর্ট আবেদন সম্পন্ন করার পর এবং পাসপোর্ট অফিসে বায়োমেট্রিক নিবন্ধন শেষ করার পর আপনি অফিসিয়াল ই-পাসপোর্ট পোর্টালের মাধ্যমে অনলাইনে পাসপোর্টের বর্তমান অবস্থা দেখতে পারবেন। অনলাইন পাসপোর্ট ট্র্যাকিং সিস্টেম ব্যবহার করে আবেদনকারী পুলিশ ভেরিফিকেশন, ব্যাকএন্ড ভেরিফিকেশন, পাসপোর্ট প্রিন্টিং, পাসপোর্ট শিপমেন্ট এবং পাসপোর্ট সংগ্রহের জন্য প্রস্তুত কিনা তা জানতে পারবেন।"}
            </p>

            <p className="text-base leading-8 mb-4">
              {currentLang === "en"
                ? "To check your Bangladesh passport status online, you will need either your Application ID from the delivery slip issued by the passport office or your Online Registration ID (OID) from the online application. You will also need to provide your date of birth exactly as entered during the passport application process. Once the required information is submitted, the system will instantly display the latest status of your passport application."
                : "বাংলাদেশ পাসপোর্ট স্ট্যাটাস চেক করার জন্য আপনার ডেলিভারি স্লিপে থাকা Application ID অথবা অনলাইন আবেদনের সময় পাওয়া Online Registration ID (OID) প্রয়োজন হবে। পাশাপাশি আবেদন করার সময় ব্যবহৃত জন্ম তারিখও প্রদান করতে হবে। প্রয়োজনীয় তথ্য সঠিকভাবে প্রদান করলে সিস্টেম সঙ্গে সঙ্গে আপনার পাসপোর্ট আবেদনের সর্বশেষ অবস্থা প্রদর্শন করবে।"}
            </p>

            <p className="text-base leading-8">
              {currentLang === "en"
                ? "This guide explains the complete Bangladesh e-passport status checking process, where to find your Application ID or OID, the meaning of each passport application status, and how to know when your passport is ready for collection from the passport office."
                : "এই গাইডে বাংলাদেশ ই-পাসপোর্ট স্ট্যাটাস চেক করার সম্পূর্ণ প্রক্রিয়া, Application ID বা OID কোথায় পাওয়া যাবে, বিভিন্ন পাসপোর্ট স্ট্যাটাসের অর্থ কী এবং কখন পাসপোর্ট অফিস থেকে পাসপোর্ট সংগ্রহ করা যাবে তা বিস্তারিতভাবে ব্যাখ্যা করা হয়েছে।"}
            </p>
          </div>

          {/* TOC */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              {currentLang === "en" ? "Table of Contents" : "সূচিপত্র"}
            </h2>

            <ul className="space-y-3 text-blue-700">
              <li>
                <a href="#status-check" className="hover:underline">
                  {currentLang === "en"
                    ? "How to Check Passport Status"
                    : "পাসপোর্ট স্ট্যাটাস চেক করার নিয়ম"}
                </a>
              </li>

              <li>
                <a href="#required-info" className="hover:underline">
                  {currentLang === "en"
                    ? "Required Information"
                    : "যে তথ্যগুলো লাগবে"}
                </a>
              </li>

              <li>
                <a href="#status-meanings" className="hover:underline">
                  {currentLang === "en"
                    ? "Passport Status Meanings"
                    : "বিভিন্ন স্ট্যাটাসের অর্থ"}
                </a>
              </li>

              <li>
                <a href="#faq-section" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Required Info */}
          <div id="required-info" className="mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">
                {currentLang === "en"
                  ? "Information Required to Check Passport Status"
                  : "পাসপোর্ট স্ট্যাটাস চেক করার জন্য প্রয়োজনীয় তথ্য"}
              </h2>

              <p className="text-gray-700 leading-7 mb-4">
                {currentLang === "en"
                  ? "To check your Bangladesh e-passport application status online, you only need one of the following identification numbers along with your date of birth."
                  : "বাংলাদেশ ই-পাসপোর্টের স্ট্যাটাস চেক করার জন্য নিচের যেকোনো একটি নম্বর এবং আপনার জন্ম তারিখ প্রয়োজন হবে।"}
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  {currentLang === "en"
                    ? "Application ID OR Online Registration ID (OID)"
                    : "Application ID অথবা Online Registration ID (OID)"}
                </li>

                <li>{currentLang === "en" ? "Date of Birth" : "জন্ম তারিখ"}</li>
              </ul>
            </div>
          </div>

          {/* Steps */}
          <div
            id="status-check"
            className="bg-white rounded-xl border border-gray-200 p-6 space-y-12"
          >
            {/* Step 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {currentLang === "en"
                  ? "Step 1: Open the Official Bangladesh e-Passport Status Check Portal"
                  : "ধাপ ১: অফিসিয়াল বাংলাদেশ ই-পাসপোর্ট স্ট্যাটাস চেক পোর্টাল খুলুন"}
              </h2>

              <p className="text-gray-700 leading-8">
                {currentLang === "en" ? (
                  <>
                    To check your Bangladesh e-passport application status,
                    first open the official government passport tracking portal
                    at{" "}
                    <a
                      href="https://epassport.gov.bd/authorization/application-status"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline font-medium break-all"
                    >
                      epassport.gov.bd/authorization/application-status
                    </a>
                    . This is the only authorized website where you can track
                    your passport progress in real time, including application
                    review, police verification, printing, and delivery updates.
                  </>
                ) : (
                  <>
                    আপনার বাংলাদেশ ই-পাসপোর্টের বর্তমান অবস্থা জানতে প্রথমে
                    অফিসিয়াল সরকারি পাসপোর্ট ট্র্যাকিং পোর্টাল{" "}
                    <a
                      href="https://epassport.gov.bd/authorization/application-status"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline font-medium break-all"
                    >
                      epassport.gov.bd/authorization/application-status
                    </a>
                    -এ প্রবেশ করুন। এখান থেকেই আপনি আবেদন যাচাই, পুলিশ
                    ভেরিফিকেশন, প্রিন্টিং এবং ডেলিভারি সম্পর্কিত সব আপডেট জানতে
                    পারবেন।
                  </>
                )}
              </p>
              <img
                src="/passport/passport_status_main.png"
                alt="Bangladesh e-passport status check portal login page"
                className="my-4 w-full rounded-xl border border-gray-200 mb-5"
              />
            </div>

            {/* Step 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {currentLang === "en"
                  ? "Step 2: Enter Your Application ID or Online Registration ID (OID)"
                  : "ধাপ ২: Application ID অথবা Online Registration ID (OID) লিখুন"}
              </h2>

              <p className="text-gray-700 leading-8 mb-3">
                {currentLang === "en"
                  ? "You must enter either your Application ID or Online Registration ID (OID). You do not need both—any one of them is enough to track your passport status."
                  : "আপনাকে শুধু Application ID অথবা Online Registration ID (OID) এর যেকোনো একটি দিতে হবে। দুইটি একসাথে দেওয়ার প্রয়োজন নেই।"}
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <p className="text-gray-700">
                  <span className="font-semibold">
                    {currentLang === "en"
                      ? "Application ID Example:"
                      : "Application ID উদাহরণ:"}
                  </span>{" "}
                  4000-100000000
                </p>

                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">
                    {currentLang === "en"
                      ? "Online Registration ID (OID) Example:"
                      : "Online Registration ID (OID) উদাহরণ:"}
                  </span>{" "}
                  OID1000001234
                </p>
              </div>

              <p className="text-gray-600 leading-7">
                {currentLang === "en"
                  ? "You can find these details on the delivery slip provided by the passport office after completing your biometric enrollment. This slip is very important for tracking your application status online."
                  : "এই তথ্যগুলো আপনি বায়োমেট্রিক সম্পন্ন করার পর পাসপোর্ট অফিস থেকে পাওয়া ডেলিভারি স্লিপে পাবেন। অনলাইনে স্ট্যাটাস চেক করার জন্য এই স্লিপ অত্যন্ত গুরুত্বপূর্ণ।"}
              </p>

              <img
                src="/passport/passport_delivery_slip.png"
                alt="Bangladesh e-passport status check portal login page"
                className="my-4 w-full rounded-xl border border-gray-200 mb-5"
              />
            </div>

            {/* Step 3 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {currentLang === "en"
                  ? "Step 3: Enter Your Date of Birth for Verification"
                  : "ধাপ ৩: যাচাইয়ের জন্য আপনার জন্ম তারিখ প্রদান করুন"}
              </h2>

              <p className="text-gray-700 leading-8">
                {currentLang === "en"
                  ? "Enter your date of birth exactly as it was provided in your passport application. This step is required for identity verification and ensures that only the applicant can access the passport status information."
                  : "আপনার পাসপোর্ট আবেদনের সময় যেভাবে জন্ম তারিখ দিয়েছেন ঠিক সেভাবেই জন্ম তারিখ প্রদান করুন। এটি পরিচয় যাচাইয়ের জন্য প্রয়োজন এবং শুধুমাত্র আবেদনকারীই যেন স্ট্যাটাস দেখতে পারে তা নিশ্চিত করে।"}
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {currentLang === "en"
                  ? "Step 4: Click on the 'Check' Button to View Status"
                  : "ধাপ ৪: স্ট্যাটাস দেখার জন্য 'Check' বাটনে ক্লিক করুন"}
              </h2>

              <p className="text-gray-700 leading-8">
                {currentLang === "en"
                  ? "After entering your Application ID or OID and date of birth, click on the Check button. Your latest Bangladesh e-passport application status will be displayed instantly at the top of the page, showing the current processing stage of your passport."
                  : "Application ID বা OID এবং জন্ম তারিখ দেওয়ার পর Check বাটনে ক্লিক করুন। এরপর আপনার পাসপোর্ট আবেদনের সর্বশেষ অবস্থা সঙ্গে সঙ্গে স্ক্রিনের উপরে দেখানো হবে, যেখানে আপনার আবেদনের বর্তমান স্ট্যাটাস জানা যাবে।"}
              </p>

              <img
                src="/passport/passport_status.png"
                alt="Bangladesh e-passport status check portal login page"
                className="my-4 w-full rounded-xl border border-gray-200 mb-5"
              />
            </div>
          </div>

          {/* Status Meanings */}
          <div id="status-meanings" className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">
              {currentLang === "en"
                ? "Bangladesh e-Passport Status Meanings"
                : "বাংলাদেশ ই-পাসপোর্ট স্ট্যাটাসের অর্থ"}
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Submitted",
                  en: "Your online registration or application has been successfully submitted, but it has not yet reached the passport office.",
                  bn: "আপনার অনলাইন রেজিস্ট্রেশন বা আবেদনটি সফলভাবে জমা হয়েছে, তবে এটি এখনও পাসপোর্ট অফিসে পৌঁছায়নি।",
                },
                {
                  title: "Appointment Scheduled",
                  en: "A specific date and time has been assigned for you to visit the passport office for biometrics and document submission.",
                  bn: "বায়োমেট্রিক এবং প্রয়োজনীয় কাগজপত্র জমা দেওয়ার জন্য আপনাকে পাসপোর্ট অফিসে উপস্থিত হওয়ার একটি নির্দিষ্ট তারিখ ও সময় নির্ধারণ করা হয়েছে।",
                },
                {
                  title: "Enrolment in Process",
                  en: "You have visited the passport office, and your photo, fingerprints, and digital signature have been captured and are being processed.",
                  bn: "আপনি পাসপোর্ট অফিসে উপস্থিত হয়েছেন এবং আপনার ছবি, আঙুলের ছাপ ও ডিজিটাল স্বাক্ষর গ্রহণ করা হয়েছে এবং তা প্রক্রিয়াধীন রয়েছে।",
                },
                {
                  title: "Pending Backend Verification",
                  en: "Your data and documents are being cross-checked against national databases (like the NID or Birth Certificate databases).",
                  bn: "আপনার তথ্য এবং কাগজপত্র জাতীয় ডেটাবেসের (যেমন এনআইডি বা জন্ম নিবন্ধন ডেটাবেস) সাথে যাচাই করা হচ্ছে।",
                },
                {
                  title: "Pending SB/DSB Police Clearance",
                  en: "Your application is with the police Special Branch (SB) or District Special Branch (DSB) for background and address verification.",
                  bn: "আপনার ব্যাকগ্রাউন্ড এবং ঠিকানা যাচাইয়ের জন্য আবেদনটি পুলিশের স্পেশাল ব্রাঞ্চ (SB) বা ডিস্ট্রিক্ট স্পেশাল ব্রাঞ্চে (DSB) তদন্তাধীন রয়েছে।",
                },
                {
                  title: "Sent for Rework",
                  en: "An issue or inconsistency (e.g., mismatched name spellings or missing documents) was found, and your application requires correction or re-submission.",
                  bn: "আবেদনে কোনো ভুল বা অসঙ্গতি (যেমন- নামের বানান অমিল বা প্রয়োজনীয় কাগজের ঘাটতি) পাওয়া গেছে, যার জন্য এটি সংশোধন বা পুনরায় সাবমিট করতে হবে।",
                },
                {
                  title: "Pending Final Approval",
                  en: "The police verification report is clear, and the application is waiting for the Assistant Director's final approval.",
                  bn: "পুলিশ ভেরিফিকেশন রিপোর্ট সফলভাবে সম্পন্ন হয়েছে এবং আবেদনটি এখন সহকারী পরিচালকের (AD) চূড়ান্ত অনুমোদনের অপেক্ষায় রয়েছে।",
                },
                {
                  title: "Approved",
                  en: "The passport office has officially approved your application and forwarded it to the printing queue.",
                  bn: "পাসপোর্ট অফিস আনুষ্ঠানিকভাবে আপনার আবেদনটি অনুমোদন করেছে এবং এটি প্রিন্টিংয়ের জন্য পাঠানো হয়েছে।",
                },
                {
                  title: "Pending in Print Queue",
                  en: "Your passport is waiting to be printed at the central printing facility.",
                  bn: "আপনার পাসপোর্টটি কেন্দ্রীয় প্রিন্টিং সুবিধায় (Central Printing Facility) মুদ্রণের অপেক্ষায় রয়েছে।",
                },
                {
                  title: "Passport Shipped",
                  en: "The printed passport is in transit from the central facility to your local regional passport office.",
                  bn: "মুদ্রিত পাসপোর্টটি কেন্দ্রীয় প্রিন্টিং কেন্দ্র থেকে আপনার স্থানীয় আঞ্চলিক পাসপোর্ট অফিসে পাঠানোর জন্য স্থানান্তরিত হচ্ছে।",
                },
                {
                  title: "Passport Ready for Issuance",
                  en: "The passport has arrived at your local passport office and is ready to be collected.",
                  bn: "পাসপোর্টটি আপনার আঞ্চলিক পাসপোর্ট অফিসে পৌঁছেছে এবং এটি বিতরণের জন্য সম্পূর্ণ প্রস্তুত।",
                },
                {
                  title: "Passport Issued",
                  en: "You have successfully collected your passport, and your file is closed.",
                  bn: "আপনি সফলভাবে আপনার পাসপোর্ট সংগ্রহ করেছেন এবং আপনার আবেদনের ফাইলটি সম্পন্ন করা হয়েছে।",
                },
              ].map((status) => (
                <div
                  key={status.title}
                  className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm transition-all hover:border-gray-300"
                >
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {status.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {currentLang === "en" ? status.en : status.bn}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-medium text-green-800">
                {currentLang === "en"
                  ? 'When the status becomes "Passport Ready for Issuance", you can collect your passport from the passport office.'
                  : '"Passport Ready for Issuance" দেখালে আপনি পাসপোর্ট অফিস থেকে পাসপোর্ট সংগ্রহ করতে পারবেন।'}
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faq-section" className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">
              {currentLang === "en"
                ? "Frequently Asked Questions (FAQ)"
                : "সাধারণ জিজ্ঞাসা (FAQ)"}
            </h2>

            <div className="space-y-4">
              {[
                {
                  qEn: "Where can I find my Application ID or Online Registration ID (OID)?",
                  qBn: "আমি আমার Application ID অথবা Online Registration ID (OID) কোথায় পাব?",
                  aEn: "You can find both numbers printed at the top of the delivery slip (enrollment receipt) provided to you by the passport office after you complete your biometrics (photo, fingerprints, and signature).",
                  aBn: "আপনার বায়োমেট্রিক (ছবি, আঙুলের ছাপ এবং স্বাক্ষর) সম্পন্ন করার পর পাসপোর্ট অফিস থেকে যে ডেলিভারি স্লিপ বা রশিদ দেওয়া হয়েছে, তার উপরের অংশে এই নম্বরগুলো পেয়ে যাবেন।",
                },
                {
                  qEn: "Do I need to enter both the Application ID and the OID to check my status?",
                  qBn: "স্ট্যাটাস চেক করার জন্য কি Application ID এবং OID দুটিই প্রয়োজন?",
                  aEn: "No, you do not need both. Entering either your Application ID OR your Online Registration ID (OID) along with your Date of Birth is enough to track your passport.",
                  aBn: "না, দুটিরই প্রয়োজন নেই। আপনার জন্ম তারিখের সাথে শুধুমাত্র Application ID অথবা Online Registration ID (OID)-এর যেকোনো একটি দিলেই পাসপোর্ট ট্র্যাক করা যাবে।",
                },
                {
                  qEn: "What should I do if my passport status says 'Sent for Rework'?",
                  qBn: "আমার পাসপোর্ট স্ট্যাটাস যদি 'Sent for Rework' দেখায় তবে আমার কী করা উচিত?",
                  aEn: "This status means an error or mismatch (such as spelling mistakes or missing documents) was found. You should contact or visit your regional passport office immediately to fix the issue and re-submit.",
                  aBn: "এই স্ট্যাটাসের অর্থ হলো আপনার আবেদনে কোনো ভুল, অসঙ্গতি (যেমন- বানানের ভুল) অথবা প্রয়োজনীয় কাগজের ঘাটতি পাওয়া গেছে। সমস্যাটি সমাধান ও পুনরায় সাবমিট করতে অবিলম্বে আপনার আঞ্চলিক পাসপোর্ট অফিসে যোগাযোগ বা সশরীরে যোগাযোগ করুন।",
                },
                {
                  qEn: "How long does the 'Pending SB/DSB Police Clearance' stage take?",
                  qBn: "'Pending SB/DSB Police Clearance' ধাপটি সম্পন্ন হতে কত দিন সময় লাগে?",
                  aEn: "Police verification usually takes anywhere from 7 to 15 days, depending on your local jurisdiction. An officer will typically contact you or visit your permanent/present address during this period.",
                  aBn: "পুলিশ ভেরিফিকেশন সাধারণত আপনার এলাকার ওপর ভিত্তি করে ৭ থেকে ১৫ দিন পর্যন্ত সময় নিতে পারে। এই সময়ের মধ্যে একজন তদন্তকারী কর্মকর্তা আপনার বর্তমান বা স্থায়ী ঠিকানায় যোগাযোগ অথবা সশরীরে উপস্থিত হতে পারেন।",
                },
                {
                  qEn: "Can I collect my passport as soon as it shows 'Passport Shipped'?",
                  qBn: "'Passport Shipped' দেখালেই কি আমি পাসপোর্ট সংগ্রহ করতে পারব?",
                  aEn: "No, 'Passport Shipped' means your passport is in transit from the central printing office in Dhaka. Wait until the status officially changes to 'Passport Ready for Issuance' before going to collect it.",
                  aBn: "না, 'Passport Shipped' মানে হলো আপনার পাসপোর্টটি ঢাকা কেন্দ্রীয় প্রিন্টিং অফিস থেকে আপনার আঞ্চলিক অফিসে পাঠানোর উদ্দেশ্যে রাস্তায় রয়েছে। এটি সংগ্রহ করতে যাওয়ার আগে স্ট্যাটাস পরিবর্তন হয়ে 'Passport Ready for Issuance' হওয়া পর্যন্ত অপেক্ষা করুন।",
                },
                {
                  qEn: "What documents do I need to bring when collecting my e-Passport?",
                  qBn: "ই-পাসপোর্ট সংগ্রহের সময় আমাকে সাথে করে কী কী কাগজপত্র নিয়ে যেতে হবে?",
                  aEn: "You must bring the original delivery slip given to you during enrollment. It is also highly recommended to bring your previous original passport (if renewing) and your National ID (NID) card.",
                  aBn: "পাসপোর্ট সংগ্রহের সময় অবশ্যই বায়োমেট্রিক দেওয়ার সময় প্রাপ্ত মূল ডেলিভারি স্লিপটি সাথে নিয়ে যেতে হবে। এছাড়াও পূর্বের মূল পাসপোর্ট (যদি নবায়ন করা হয়) এবং আপনার জাতীয় পরিচয়পত্র (NID) সাথে রাখা আবশ্যক।",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
                >
                  <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-2 flex gap-2">
                    <span className="text-green-600 font-bold">Q.</span>
                    {currentLang === "en" ? faq.qEn : faq.qBn}
                  </h3>
                  <div className="text-gray-600 leading-relaxed pl-6 flex gap-2">
                    <p>{currentLang === "en" ? faq.aEn : faq.aBn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Pages Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">
              {currentLang === "en"
                ? "Related Government Services"
                : "সম্পর্কিত সরকারি সেবাসমূহ"}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <a
                href={`/${currentLang}/how-to-apply-e-passport-bangladesh-online`}
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {currentLang === "en"
                    ? "How to Apply for Bangladesh e-Passport Online"
                    : "বাংলাদেশ ই-পাসপোর্ট অনলাইনে আবেদন করার নিয়ম"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {currentLang === "en"
                    ? "Complete guide to applying for e-passport online"
                    : "ই-পাসপোর্ট অনলাইনে আবেদন করার সম্পূর্ণ নির্দেশিকা"}
                </p>
              </a>

              <a
                href={`/${currentLang}/nid-check-bangladesh`}
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {currentLang === "en"
                    ? "Check NID Status Online"
                    : "এনআইডি স্ট্যাটাস অনলাইনে চেক করুন"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {currentLang === "en"
                    ? "Verify your National ID card status online"
                    : "আপনার জাতীয় পরিচয়পত্রের স্ট্যাটাস অনলাইনে যাচাই করুন"}
                </p>
              </a>

              <a
                href={`/${currentLang}/nid-registration-bangladesh`}
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {currentLang === "en"
                    ? "NID Registration Bangladesh"
                    : "বাংলাদেশ এনআইডি রেজিস্ট্রেশন"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {currentLang === "en"
                    ? "Apply for new National ID card registration"
                    : "নতুন জাতীয় পরিচয়পত্রের জন্য আবেদন করুন"}
                </p>
              </a>

              <a
                href={`/${currentLang}/digital-birth-certificate-check-bangladesh`}
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {currentLang === "en"
                    ? "Digital Birth Certificate Check"
                    : "ডিজিটাল জন্ম সনদ যাচাই করুন"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {currentLang === "en"
                    ? "Check your birth certificate online"
                    : "আপনার জন্ম সনদ অনলাইনে যাচাই করুন"}
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
