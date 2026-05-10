import Link from 'next/link';

const content = {
  en: {
    title: "Bangladesh Government Services",
    subtitle: "Access government services online",
    services: {
      birthCertificate: "Birth Certificate",
      nid: "National ID (NID)",
      passport: "Passport"
    },
    actions: {
      registration: "Registration",
      check: "Check Status"
    }
  },
  bn: {
    title: "বাংলাদেশ সরকারি সেবা",
    subtitle: "অনলাইনে সরকারি সেবা নিন",
    services: {
      birthCertificate: "জন্মনিবন্ধন",
      nid: "জাতীয় পরিচয়পত্র (এনআইডি)",
      passport: "পাসপোর্ট"
    },
    actions: {
      registration: "নিবন্ধন",
      check: "যাচাই"
    }
  }
};

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = lang as 'en' | 'bn';
  const t = content[currentLang];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            {t.subtitle}
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
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.services.birthCertificate}
                </h3>
              </div>
              <div className="space-y-4">
                <Link 
                  href={`/${currentLang}/birth-certificate/registration`}
                  className="block w-full text-center bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {t.actions.registration}
                </Link>
                <Link 
                  href={`/${currentLang}/birth-certificate/check`}
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
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.services.nid}
                </h3>
              </div>
              <div className="space-y-4">
                <Link 
                  href={`/${currentLang}/nid/registration`}
                  className="block w-full text-center bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  {t.actions.registration}
                </Link>
                <Link 
                  href={`/${currentLang}/nid/check`}
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
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.services.passport}
                </h3>
              </div>
              <div className="space-y-4">
                <Link 
                  href={`/${currentLang}/passport/registration`}
                  className="block w-full text-center bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  {t.actions.registration}
                </Link>
                <Link 
                  href={`/${currentLang}/passport/check`}
                  className="block w-full text-center border border-red-600 text-red-600 py-4 rounded-lg hover:bg-red-50 transition-colors font-medium"
                >
                  {t.actions.check}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}