"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-8">
          {/* Company Information */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">
              {t("companyName")}
            </h3>
            <div className="space-y-2.5">
              <p className="text-sm">
                <span className="text-gray-400 inline-block w-24">
                  {t("ceo")}
                </span>
                {t("ceoName")}
              </p>
              <p className="text-sm">
                <span className="text-gray-400 inline-block w-24">
                  {t("businessRegistrationNumber")}
                </span>
                {t("registrationNumber")}
              </p>
              <div className="text-sm">
                <span className="text-gray-400 block mb-1">
                  {t("addressTitle")}
                </span>
                <address className="not-italic leading-relaxed">
                  {t("address")}
                </address>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">
              {t("contactTitle")}
            </h3>
            <div className="space-y-2.5">
              <p className="text-sm">
                <span className="text-gray-400 inline-block w-16">
                  {t("tel")}
                </span>
                <Link
                  href={`tel:${t("phoneNumber")}`}
                  className="hover:text-white transition-colors"
                >
                  {t("phoneNumber")}
                </Link>
              </p>
              <p className="text-sm">
                <span className="text-gray-400 inline-block w-16">
                  {t("email")}
                </span>
                <Link
                  href={`mailto:${t("emailAddress")}`}
                  className="hover:text-white transition-colors"
                >
                  {t("emailAddress")}
                </Link>
              </p>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">{t("policy")}</h3>
            <Link
              href="/terms"
              className="text-sm hover:text-white transition-colors"
            >
              {t("privacyPolicy")}
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8">
          <p className="text-sm text-center text-gray-400">
            Copyright © {new Date().getFullYear()} Mediv. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
