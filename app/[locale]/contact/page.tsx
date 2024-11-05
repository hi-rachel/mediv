import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import ContactSkeleton from "../common/skeleton/ContactSkeleton";

const Contact = dynamic(() => import("./components/Contact"), {
  ssr: false,
  loading: () => <ContactSkeleton />,
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contact.title"),
    description: t("contact.description"),
  };
}

export default function ContactPage() {
  return <Contact />;
}
