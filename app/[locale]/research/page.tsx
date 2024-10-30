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
    title: `${t("research.title")} | Mediv`,
    description: t("research.description"),
  };
}

const ResearchPage: React.FC = () => {
  return (
    <Suspense fallback={<TabCardSkeleton />}>
      <TabSection menuId="research" />
    </Suspense>
  );
};

export default ResearchPage;
