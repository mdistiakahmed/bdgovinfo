'use client';

import Link from 'next/link';
import { useState } from 'react';

const content = {
  en: {
    title: "NID Registration",
    subtitle: "Fill in the form to register for National ID",
    fields: {
      name: "Full Name",
      dob: "Date of Birth",
      nidNumber: "NID Number",
      address: "Address",
      phone: "Phone Number",
      email: "Email"
    },
    submit: "Submit Application",
    back: "Back to Services"
  },
  bn: {
    title: "এনআইডি নিবন্ধন",
    subtitle: "জাতীয় পরিচয়পত্রের জন্য ফর্মটি পূরণ করুন",
    fields: {
      name: "পূর্ণ নাম",
      dob: "জন্ম তারিখ",
      nidNumber: "এনআইডি নম্বর",
      address: "ঠিকানা",
      phone: "ফোন নম্বর",
      email: "ইমেল"
    },
    submit: "আবেদন জমা দিন",
    back: "সেবায় ফিরুন"
  }
};

export default function NIDRegistration({ params }: { params: { lang: string } }) {
  const currentLang = params.lang as 'en' | 'bn';
  const t = content[currentLang];
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    nidNumber: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href={`/${currentLang}/nid`} className="text-green-600 hover:text-green-700">
              ← {t.back}
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-green-700">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fields.nidNumber}
                </label>
                <input
                  type="text"
                  name="nidNumber"
                  value={formData.nidNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
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