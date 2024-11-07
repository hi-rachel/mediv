import { Suspense } from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TabLayout from "../../common/tabs/TabLayout";
import { LayoutProps } from "@/types/layout";
import PatentsSkeleton from "../../common/skeleton/PatentsSkeleton";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("research.title"),
    description: t("research.description"),
  };
};

const ResearchLayout = ({ children }: LayoutProps) => {
  return (
    <TabLayout params={{ basePath: "research" }}>
      <Suspense fallback={<PatentsSkeleton />}>{children}</Suspense>
    </TabLayout>
  );
};

export default ResearchLayout;
