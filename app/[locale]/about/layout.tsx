import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import TabLayout from "../common/tabs/TabLayout";
import { LayoutProps } from "@/types/layout";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("about.title"),
    description: t("about.description"),
  };
};

const AboutLayout = ({ children }: LayoutProps) => {
  return <TabLayout params={{ basePath: "about" }}>{children}</TabLayout>;
};

export default AboutLayout;
