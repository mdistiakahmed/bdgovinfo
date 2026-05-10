import Link from 'next/link';

const content = {
  en: {
    title: "Check NID Status",
    subtitle: "Enter your NID number to check status",
    nidNumber: "NID Number",
    check: "Check Status",
    back: "Back to Services",
    result: {
      title: "NID Information",
      name: "Name",
      dob: "Date of Birth",
      status: "Status",
      issued: "Issued",
      pending: "Pending"
    }
  },
  bn: {
    title: "এনআইডি যাচাই",
    subtitle: "অবস্থা পরীক্ষা করতে আপনার এনআইডি নম্বর লিখুন",
    nidNumber: "এনআইডি নম্বর",
    check: "যাচাই",
    back: "সেবায় ফিরুন",
    result: {
      title: "এনআইডি তথ্য",
      name: "নাম",
      dob: "জন্ম তারিখ",
      status: "অবস্থা",
      issued: "জারি করা হয়েছে",
      pending: "অপেক্ষমান"
    }
  }
};

export default async function NIDCheck({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = lang as 'en' | 'bn';
  const t = content[currentLang];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link href={`/${currentLang}/nid`} className="text-green-600 hover:text-green-700 mb-6 inline-block">
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
                  {t.nidNumber}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter NID number"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {t.check}
              </button>
            </form>

            {/* Demo Result - Hidden by default */}
            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200 hidden">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t.result.title}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.result.name}:</span>
                  <span className="font-medium">Jane Smith</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t.result.dob}:</span>
                  <span className="font-medium">20-05-1985</span>
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