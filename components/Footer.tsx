import React from "react";
import {
  FaIdCard,
  FaMapMarkerAlt,
  FaClock,
  FaInfoCircle,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = ({ lang }: { lang: string }) => {
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      brand: {
        name: "BDGovInfo",
        domain: ".com",
        description: "Your complete portal to Bangladesh Government Services. Access birth certificate, NID, passport services and more with ease and security."
      },
      sections: {
        quickLinks: "Quick Links",
        services: "Our Services",
        contactInfo: "Contact & Info"
      },
      links: {
        birthCertificate: "Birth Certificate",
        nid: "National ID",
        passport: "Passport",
        home: "Home",
        about: "About Us",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      contact: {
        support: "24/7 Government Support",
        email: "bdgovinfo@gmail.com",
        phone: "Government Hotline: 333",
        website: "Bangladesh Government Portal"
      },
      copyright: "© 2024 BDGovInfo.com. All rights reserved.",
      official: "Bangladesh Government Information Portal"
    },
    bn: {
      brand: {
        name: "BDGovInfo",
        domain: ".com",
        description: "বাংলাদেশ সরকারি সেবার সম্পূর্ণ পোর্টাল। সহজে ও নিরাপদে জন্মনিবন্ধন, এনআইডি, পাসপোর্ট সেবা এবং আরও অনেক কিছু অ্যাক্সেস করুন।"
      },
      sections: {
        quickLinks: "দ্রুত লিঙ্ক",
        services: "আমাদের সেবা",
        contactInfo: "যোগাযোগ ও তথ্য"
      },
      links: {
        birthCertificate: "জন্মনিবন্ধন",
        nid: "জাতীয় পরিচয়পত্র",
        passport: "পাসপোর্ট",
        home: "হোম",
        about: "আমাদের সম্পর্কে",
        privacy: "গোপনীয়তা নীতি",
        terms: "শর্তাবলী"
      },
      contact: {
        support: "২৪/৭ সরকারি সহায়তা",
        email: "info@bdgovcheck.গভ.বিডি",
        phone: "সরকারি হটলাইন: ৩৩৩",
        website: "বাংলাদেশ সরকারি পোর্টাল"
      },
      copyright: "© ২০২৪ বিডিগভচেক.গভ.বিডি. সর্বস্বত্ব সংরক্ষিত।",
      official: "সরকারি বাংলাদেশ সেবা পোর্টাল"
    }
  };

  const t = content[lang as 'en' | 'bn'];

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaIdCard className="text-green-500 text-2xl" />
              <span className="text-xl font-bold">{t.brand.name}</span>
              <span className="text-red-400 text-xs">{t.brand.domain}</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t.brand.description}
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/bangladeshgov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/bangladeshgov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@bdgovcheck.gov.bd"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-500" />
              {t.sections.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`/${lang}`}
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t.links.home}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/about`}
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t.links.about}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/privacy`}
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t.links.privacy}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/terms`}
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t.links.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FaIdCard className="mr-2 text-green-500" />
              {t.sections.services}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`/${lang}/birth-certificate`}
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t.links.birthCertificate}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/nid`}
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t.links.nid}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/passport`}
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t.links.passport}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FaInfoCircle className="mr-2 text-green-500" />
              {t.sections.contactInfo}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <FaClock className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                <span>{t.contact.support}</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-green-500 flex-shrink-0" />
                <span>{t.contact.email}</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-green-500 flex-shrink-0" />
                <span>{t.contact.phone}</span>
              </li>
              <li>
                <a
                  href="https://bangladesh.gov.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300"
                >
                  {t.contact.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            {t.copyright}
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            {t.official}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;