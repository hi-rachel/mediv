import { Suspense } from "react";
import TabSection from "../common/TabSection";
import TabCardSkeleton from "../common/loading/TabCardSkeleton";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: `${t("business.title")} | Mediv`,
    description: t("business.description"),
  };
}

const BusinessPage = () => {
  return (
    <Suspense fallback={<TabCardSkeleton />}>
      <TabSection menuId="business" />
    </Suspense>
  );
};

export default BusinessPage;
