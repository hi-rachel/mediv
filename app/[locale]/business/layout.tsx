import { Suspense } from "react";
import BusinessSkeleton from "../common/loading/BusinessSkeleton";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TabLayout from "../common/tabs/TabLayout";
import { LayoutProps } from "@/types/layout";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  console.log(locale);

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("business.title"),
    description: t("business.description"),
  };
};

const BusinessLayout = ({ children, params: { locale } }: LayoutProps) => {
  return (
    <TabLayout params={{ locale, basePath: "business" }}>
      <Suspense fallback={<BusinessSkeleton />}>{children}</Suspense>
    </TabLayout>
  );
};

export default BusinessLayout;
