import Link from 'next/link';

const content = {
  en: {
    title: "National ID (NID) Services",
    description: "Register for NID or check existing NID status",
    registration: "New Registration",
    check: "Check NID Status",
    back: "Back to Home"
  },
  bn: {
    title: "জাতীয় পরিচয়পত্র (এনআইডি) সেবা",
    description: "এনআইডির জন্য নিবন্ধন করুন বা বিদ্যমান এনআইডির অবস্থা পরীক্ষা করুন",
    registration: "নতুন নিবন্ধন",
    check: "এনআইডি যাচাই",
    back: "হোমে ফিরুন"
  }
};

export default async function NIDPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = lang as 'en' | 'bn';
  const t = content[currentLang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href={`/${currentLang}`} className="text-green-600 hover:text-green-700">
              ← {t.back}
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-green-700">
              {t.title}
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Content */}
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
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.registration}
                </h3>
                <p className="text-gray-600 mb-6">
                  Register for a new National ID
                </p>
                <Link 
                  href={`/${currentLang}/nid/registration`}
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {t.registration}
                </Link>
              </div>
            </div>

            {/* Check Status Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.check}
                </h3>
                <p className="text-gray-600 mb-6">
                  Check your NID status
                </p>
                <Link 
                  href={`/${currentLang}/nid/check`}
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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