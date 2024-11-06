import { Metadata } from "next";
import { PrivacyPolicyProps } from "./types";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });

  return {
    title: t("title"),
    description: t("metaDescription"),
  };
}

const PrivacyPolicyPage = () => {
  const t = useTranslations("PrivacyPolicy");

  const props: PrivacyPolicyProps = {
    sections: [
      {
        title: t("title"),
        content: (
          <div className="prose prose-lg">
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
              </li>
              <li>
                <strong>{t("section1.telephoneInquiry")}</strong>
              </li>
              <li>
                <strong>{t("section1.internetService")}</strong>
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
              </li>
              <li>
                <strong>{t("section2.telephoneInquiry")}</strong>
              </li>
              <li>
                <strong>{t("section2.visitorInquiry")}</strong>
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
              </li>
              <li>
                <strong>{t("section3.telephoneInquiry")}</strong>
              </li>
              <li>
                <strong>{t("section3.visitorInquiry")}</strong>
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
            <ul className="list-disc pl-4 space-y-2 list-inside">
              <li>
                <strong>{t("section8.ele1")}</strong>
              </li>
              <li>
                <strong>{t("section8.ele2")}</strong>
              </li>
              <li>
                <strong>{t("section8.ele3")}</strong>
              </li>
              <li>
                <strong>{t("section8.ele4")}</strong>
              </li>
            </ul>
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
        title: t("section10.title"),
        content: (
          <div className="space-y-4">
            <p>{t("section10.description")}</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>{t("section10.emailInquiry")}</strong>
              </li>
              <li>
                <strong>{t("section10.telephoneInquiry")}</strong>
              </li>
            </ul>
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
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>{t("section13.ele1")}</strong>
              </li>
              <li>
                <strong>{t("section13.ele2")}</strong>
              </li>
              <li>
                <strong>{t("section13.ele3")}</strong>
              </li>
            </ul>
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
    versionInfo: {
      version: "v.0.1",
      established: "2024. 10. 14",
      lastUpdated: "-",
    },
  };

  return <PrivacyPolicy {...props} />;
};

export default PrivacyPolicyPage;
