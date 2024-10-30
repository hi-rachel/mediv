import { Suspense } from "react";
import TabSection from "../common/TabSection";
import TabTextImageSkeleton from "../common/loading/TabTextImageSkeleton";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

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
    <Suspense fallback={<TabTextImageSkeleton />}>
      <TabSection menuId="about" />
    </Suspense>
  );
};

export default AboutPage;
