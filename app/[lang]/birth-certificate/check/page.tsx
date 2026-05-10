import Link from 'next/link';

const content = {
  en: {
    title: "Check Birth Certificate Status",
    subtitle: "Enter your certificate number to check status",
    certificateNumber: "Certificate Number",
    check: "Check Status",
    back: "Back to Services",
    result: {
      title: "Certificate Information",
      name: "Name",
      dob: "Date of Birth",
      status: "Status",
      issued: "Issued",
      pending: "Pending"
    }
  },
  bn: {
    title: "জন্মনিবন্ধন যাচাই",
    subtitle: "অবস্থা পরীক্ষা করতে আপনার সার্টিফিকেট নম্বর লিখুন",
    certificateNumber: "সার্টিফিকেট নম্বর",
    check: "যাচাই",
    back: "সেবায় ফিরুন",
    result: {
      title: "সার্টিফিকেট তথ্য",
      name: "নাম",
      dob: "জন্ম তারিখ",
      status: "অবস্থা",
      issued: "জারি করা হয়েছে",
      pending: "অপেক্ষমান"
    }
  }
};

export default async function BirthCertificateCheck({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = lang as 'en' | 'bn';
  const t = content[currentLang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href={`/${currentLang}/birth-certificate`} className="text-blue-600 hover:text-blue-700">
              ← {t.back}
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-blue-700">
              {t.title}
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              {t.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.certificateNumber}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter certificate number"
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

            {/* Demo Result - Hidden by default, would show after form submission */}
            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200 hidden">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t.result.title}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.result.name}:</span>
                  <span className="font-medium">John Doe</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.result.dob}:</span>
                  <span className="font-medium">15-01-2000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.result.status}:</span>
                  <span className="font-medium text-green-600">{t.result.issued}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}