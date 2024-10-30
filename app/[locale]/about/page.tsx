import { Suspense } from "react";
import TabSection from "../common/TabSection";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import AboutSkeleton from "../common/loading/AboutSkeleton";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("about.title"),
    description: t("about.description"),
  };
}

const AboutPage = () => {
  return (
    <Suspense fallback={<AboutSkeleton />}>
      <TabSection menuId="about" />
    </Suspense>
  );
};

export default AboutPage;
