import Link from 'next/link';

const content = {
  en: {
    title: "Check Passport Status",
    subtitle: "Enter your passport number to check status",
    passportNumber: "Passport Number",
    check: "Check Status",
    back: "Back to Services",
    result: {
      title: "Passport Information",
      name: "Name",
      type: "Passport Type",
      status: "Status",
      issued: "Issued",
      processing: "Processing",
      pending: "Pending"
    }
  },
  bn: {
    title: "পাসপোর্ট যাচাই",
    subtitle: "অবস্থা পরীক্ষা করতে আপনার পাসপোর্ট নম্বর লিখুন",
    passportNumber: "পাসপোর্ট নম্বর",
    check: "যাচাই",
    back: "সেবায় ফিরুন",
    result: {
      title: "পাসপোর্ট তথ্য",
      name: "নাম",
      type: "পাসপোর্টের ধরন",
      status: "অবস্থা",
      issued: "জারি করা হয়েছে",
      processing: "প্রক্রিয়াধীন",
      pending: "অপেক্ষমান"
    }
  }
};

export default async function PassportCheck({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = lang as 'en' | 'bn';
  const t = content[currentLang];

  return (
    <div className="bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link href={`/${currentLang}/passport`} className="text-red-600 hover:text-red-700 mb-6 inline-block">
          ← {t.back}
        </Link>
      </div>

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
                  {t.passportNumber}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter passport number"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                {t.check}
              </button>
            </form>

            {/* Demo Result - Hidden by default */}
            <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200 hidden">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t.result.title}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.result.name}:</span>
                  <span className="font-medium">Ahmed Khan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.result.type}:</span>
                  <span className="font-medium">Regular</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.result.status}:</span>
                  <span className="font-medium text-orange-600">{t.result.processing}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}