import Link from 'next/link';

const content = {
  en: {
    title: "Birth Certificate Registration",
    subtitle: "Fill in the form to register for birth certificate",
    fields: {
      name: "Full Name",
      dob: "Date of Birth",
      placeOfBirth: "Place of Birth",
      fatherName: "Father's Name",
      motherName: "Mother's Name",
      gender: "Gender"
    },
    genderOptions: {
      male: "Male",
      female: "Female",
      other: "Other"
    },
    submit: "Submit Application",
    back: "Back to Services"
  },
  bn: {
    title: "জন্মনিবন্ধন নিবন্ধন",
    subtitle: "জন্মনিবন্ধনের জন্য ফর্মটি পূরণ করুন",
    fields: {
      name: "পূর্ণ নাম",
      dob: "জন্ম তারিখ",
      placeOfBirth: "জন্মস্থান",
      fatherName: "পিতার নাম",
      motherName: "মাতার নাম",
      gender: "লিঙ্গ"
    },
    genderOptions: {
      male: "পুরুষ",
      female: "মহিলা",
      other: "অন্যান্য"
    },
    submit: "আবেদন জমা দিন",
    back: "সেবায় ফিরুন"
  }
};

export default async function BirthCertificateRegistration({ params }: { params: Promise<{ lang: string }> }) {
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

      {/* Form */}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.placeOfBirth}
                </label>
                <input
                  type="text"
                  name="placeOfBirth"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.fatherName}
                </label>
                <input
                  type="text"
                  name="fatherName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.motherName}
                </label>
                <input
                  type="text"
                  name="motherName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.gender}
                </label>
                <select
                  name="gender"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">{t.genderOptions.male}</option>
                  <option value="female">{t.genderOptions.female}</option>
                  <option value="other">{t.genderOptions.other}</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
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