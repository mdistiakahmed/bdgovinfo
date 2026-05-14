import Link from 'next/link';

const content = {
  en: {
    title: "Passport Application",
    subtitle: "Fill in form to apply for passport",
    fields: {
      name: "Full Name",
      dob: "Date of Birth",
      passportType: "Passport Type",
      purpose: "Purpose of Travel",
      address: "Address",
      phone: "Phone Number",
      email: "Email"
    },
    passportTypes: {
      regular: "Regular",
      official: "Official",
      diplomatic: "Diplomatic"
    },
    submit: "Submit Application",
    back: "Back to Services"
  },
  bn: {
    title: "পাসপোর্ট আবেদন",
    subtitle: "পাসপোর্টের জন্য ফর্মটি পূরণ করুন",
    fields: {
      name: "পূর্ণ নাম",
      dob: "জন্ম তারিখ",
      passportType: "পাসপোর্টের ধরন",
      purpose: "ভ্রমণের উদ্দেশ্য",
      address: "ঠিকানা",
      phone: "ফোন নম্বর",
      email: "ইমেল"
    },
    passportTypes: {
      regular: "সাধারণ",
      official: "সরকারি",
      diplomatic: "কূটনৈতিক"
    },
    submit: "আবেদন জমা দিন",
    back: "সেবায় ফিরুন"
  }
};

export default async function PassportRegistration({ params }: { params: Promise<{ lang: string }> }) {
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
                  {t.fields.name}
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.dob}
                </label>
                <input
                  type="date"
                  name="dob"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.passportType}
                </label>
                <select
                  name="passportType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Passport Type</option>
                  <option value="regular">{t.passportTypes.regular}</option>
                  <option value="official">{t.passportTypes.official}</option>
                  <option value="diplomatic">{t.passportTypes.diplomatic}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.purpose}
                </label>
                <input
                  type="text"
                  name="purpose"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.address}
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.email}
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                {t.submit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}