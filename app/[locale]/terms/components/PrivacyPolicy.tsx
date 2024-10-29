import { useTranslations } from "next-intl";
import { type PrivacyPolicyProps } from "../types";
import ArticleSection from "./ArticleSection";
import ContactSection from "./ContactSection";
import VersionInfoSection from "./VersionInfoSection";

const PrivacyPolicy = ({
  sections,
  contactInfo,
  versionInfo,
}: PrivacyPolicyProps) => {
  const t = useTranslations("PrivacyPolicy");
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-16">
        <div className="w-full flex justify-center flex-col items-center">
          <h1 className="text-3xl font-bold text-white">{t("title")}</h1>
          <p className="text-gray-400 mt-4">{t("subTitle")}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          {sections[0] && <div className="mb-12">{sections[0].content}</div>}

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.slice(1, 10).map((section, index) => (
              <ArticleSection
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}

            {/* Contact Info Section (제 10 조) */}
            <ArticleSection
              title={t("section10.title")}
              content={<ContactSection {...contactInfo} />}
            />

            {/* Continue with the rest of the sections */}
            {sections.slice(10).map((section, index) => (
              <ArticleSection
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}

            {/* Version Info */}
            <VersionInfoSection {...versionInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
