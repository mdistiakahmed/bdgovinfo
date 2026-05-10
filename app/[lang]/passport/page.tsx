import Link from 'next/link';

const content = {
  en: {
    title: "Passport Services",
    description: "Apply for passport or check passport status",
    registration: "New Application",
    check: "Check Passport Status",
    back: "Back to Home"
  },
  bn: {
    title: "পাসপোর্ট সেবা",
    description: "পাসপোর্টের জন্য আবেদন করুন বা পাসপোর্টের অবস্থা পরীক্ষা করুন",
    registration: "নতুন আবেদন",
    check: "পাসপোর্ট যাচাই",
    back: "হোমে ফিরুন"
  }
};

export default async function PassportPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = lang as 'en' | 'bn';
  const t = content[currentLang];

  return (
    <div className="bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link href={`/${currentLang}`} className="text-red-600 hover:text-red-700 mb-6 inline-block">
          ← {t.back}
        </Link>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600">
              {t.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Registration Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.registration}
                </h3>
                <p className="text-gray-600 mb-6">
                  Apply for a new passport
                </p>
                <Link 
                  href={`/${currentLang}/passport/registration`}
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  {t.registration}
                </Link>
              </div>
            </div>

            {/* Check Status Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.check}
                </h3>
                <p className="text-gray-600 mb-6">
                  Check your passport status
                </p>
                <Link 
                  href={`/${currentLang}/passport/check`}
                  className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  {t.check}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}