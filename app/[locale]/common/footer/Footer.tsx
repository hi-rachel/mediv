import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mb-8">
          {/* Company Information */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">{t("companyName")}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-400 w-32 flex-shrink-0 text-sm">
                  {t("ceo")}
                </span>
                <span className="text-sm">{t("ceoName")}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 w-32 flex-shrink-0 text-sm">
                  {t("businessRegistrationNumber")}
                </span>
                <span className="text-sm">{t("registrationNumber")}</span>
              </div>
              <div className="space-y-2">
                <span className="text-gray-400 block text-sm">
                  {t("addressTitle")}
                </span>
                <address className="not-italic text-sm leading-relaxed pl-0">
                  {t("address")}
                </address>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">
              {t("contactTitle")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-400 w-20 flex-shrink-0 text-sm">
                  {t("tel")}
                </span>
                <Link
                  href={`tel:${t("telephoneNumber")}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("telephoneNumber")}
                </Link>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 w-20 flex-shrink-0 text-sm">
                  {t("email")}
                </span>
                <Link
                  href={`mailto:${t("emailAddress")}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {t("emailAddress")}
                </Link>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">{t("policy")}</h3>
            <div>
              <Link
                href="/terms"
                className="text-sm hover:text-white transition-colors"
              >
                {t("privacyPolicy")}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-center text-gray-400">
            Copyright © {new Date().getFullYear()} Mediv. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
