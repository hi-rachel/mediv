import { type PrivacyPolicyProps } from "../types";
import ArticleSection from "./ArticleSection";
import ContactSection from "./ContactSection";
import VersionInfoSection from "./VersionInfoSection";

const PrivacyPolicy = ({
  sections,
  contactInfo,
  versionInfo,
}: PrivacyPolicyProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-16">
        <div className="w-full flex justify-center flex-col items-center">
          <h1 className="text-3xl font-bold text-white">개인정보처리방침</h1>
          <p className="text-gray-400 mt-4">
            메디브는 개인정보 보호를 최우선으로 생각합니다
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          {sections[0] && <div className="mb-12">{sections[0].content}</div>}

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.slice(1, 9).map((section, index) => (
              <ArticleSection
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}

            {/* Contact Info Section (제 10 조) */}
            <ArticleSection
              title="제 10 조 (개인정보 보호책임자)"
              content={<ContactSection contactInfo={contactInfo} />}
            />

            {/* Continue with the rest of the sections */}
            {sections.slice(9).map((section, index) => (
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
