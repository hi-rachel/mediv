import { Suspense } from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TabLayout from "../../common/tabs/TabLayout";
import { LayoutProps } from "@/types/layout";
import PublicationSkeleton from "../../common/skeleton/PublicationSkeleton";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  console.log(locale);

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("research.title"),
    description: t("research.description"),
  };
};

const ResearchLayout = ({ children, params: { locale } }: LayoutProps) => {
  return (
    <TabLayout params={{ locale, basePath: "research" }}>
      <Suspense fallback={<PublicationSkeleton />}>{children}</Suspense>
    </TabLayout>
  );
};

export default ResearchLayout;
