import { Metadata } from "next";
import { PrivacyPolicyProps } from "./types";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 메디브",
  description: "메디브의 개인정보처리방침입니다.",
};

const PrivacyPolicyPage = () => {
  const t = useTranslations("PrivacyPolicy");

  const props: PrivacyPolicyProps = {
    sections: [
      {
        title: t("title"),
        content: (
          <div className="prose prose-lg text-gray-600">
            <p className="leading-relaxed">
              <strong>{t("companyName")}</strong>
              {t("introParagraph")}
            </p>
            <p className="mt-4">{t("introDetails")}</p>
          </div>
        ),
      },
      {
        title: t("section1.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section1.description")}</p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>
                <strong>{t("section1.emailInquiry")}</strong>
                <ul className="mt-2 pl-8">
                  <li>{t("section1.emailDetails")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("section1.phoneInquiry")}</strong>
                <ul className="mt-2 pl-8">
                  <li>{t("section1.phoneDetails")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("section1.internetService")}</strong>
                <ul className="mt-2 pl-8">
                  <li>{t("section1.internetDetails")}</li>
                </ul>
              </li>
            </ol>
          </div>
        ),
      },
      {
        title: t("section2.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section2.description")}</p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>
                <strong>{t("section2.emailInquiry")}</strong>
                <ul className="mt-2 pl-8">
                  <li>{t("section2.emailDetails")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("section2.phoneInquiry")}</strong>
                <ul className="mt-2 pl-8">
                  <li>{t("section2.phoneDetails")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("section2.visitorInquiry")}</strong>
                <ul className="mt-2 pl-8">
                  <li>{t("section2.visitorDetails")}</li>
                </ul>
              </li>
            </ol>
          </div>
        ),
      },
      {
        title: t("section3.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section3.description1")}</p>
            <p>{t("section3.description2")}</p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>
                <strong>{t("section3.emailInquiry")}</strong>
                <ul className="mt-2 pl-8">
                  <li>{t("section3.emailDetails")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("section3.phoneInquiry")}</strong>
                <ul className="mt-2 pl-8">
                  <li>{t("section3.phoneDetails")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("section3.visitorInquiry")}</strong>
                <ul className="mt-2 pl-8">
                  <li>{t("section3.visitorDetails")}</li>
                </ul>
              </li>
            </ol>
          </div>
        ),
      },
      {
        title: t("section4.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section4.description")}</p>
          </div>
        ),
      },
      {
        title: t("section5.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section5.description")}</p>
          </div>
        ),
      },
      {
        title: t("section6.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section6.description1")}</p>
            <p>{t("section6.description2")}</p>
          </div>
        ),
      },
      {
        title: t("section7.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section7.description1")}</p>
            <p>{t("section7.description2")}</p>
          </div>
        ),
      },
      {
        title: t("section8.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section8.description")}</p>
          </div>
        ),
      },
      {
        title: t("section9.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section9.description")}</p>
          </div>
        ),
      },
      {
        title: t("section11.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section11.description")}</p>
          </div>
        ),
      },
      {
        title: t("section12.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section12.description")}</p>
          </div>
        ),
      },
      {
        title: t("section13.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section13.description")}</p>
          </div>
        ),
      },
      {
        title: t("section14.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section14.description1")}</p>
            <p>{t("section14.description2")}</p>
          </div>
        ),
      },
    ],
    contactInfo: {
      emailTitle: t("contactInfo.emailTitle"),
      contacts: [
        {
          role: t("contactInfo.responsiblePerson.role"),
          name: t("contactInfo.responsiblePerson.name"),
          email: t("contactInfo.responsiblePerson.email"),
        },
        {
          role: t("contactInfo.representative.role"),
          name: t("contactInfo.representative.name"),
          email: t("contactInfo.representative.email"),
        },
      ],
    },
    versionInfo: {
      version: "v.0.1",
      established: "2024. 10. 14",
      lastUpdated: "-",
    },
  };

  return <PrivacyPolicy {...props} />;
};

export default PrivacyPolicyPage;
