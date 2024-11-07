import { useTranslations } from "next-intl";
import { type PrivacyPolicyProps } from "../types";
import ArticleSection from "./ArticleSection";
import VersionInfoSection from "./VersionInfoSection";

const PrivacyPolicy = ({ sections, versionInfo }: PrivacyPolicyProps) => {
  const t = useTranslations("PrivacyPolicy");
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-16">
        <div className="w-full flex justify-center flex-col items-center px-4">
          <h1 className="text-3xl font-bold text-white">{t("title")}</h1>
          <p className="text-gray-300 mt-4">{t("subTitle")}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
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
