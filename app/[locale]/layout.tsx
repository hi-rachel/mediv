import "../globals.css";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import ScrollToTopButton from "./common/ScrollToTopButton";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { Metadata } from "next";
import GlobalLoading from "./loading";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://mediv.kr"),
    title: t("home.title"),
    description: t("home.description"),
    keywords: [
      "의료",
      "Biomedical",
      "첨단바이오",
      "Data",
      "데이터",
      "AI",
      "ICT",
      "메디브",
      "Mediv",
      "SW 개발",
      "분석 지원 플랫폼",
    ],
    openGraph: {
      title: t("home.title"),
      description: t("home.description"),
      url: "https://mediv.kr/",
      type: "website",
      images: [
        {
          url: "/images/meta/open-graph.webp",
          width: 1200,
          height: 630,
          alt: t("home.title"),
        },
      ],
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("home.title"),
      description: t("home.description"),
      site: "https://mediv.kr/",
      images: "/images/meta/open-graph.webp",
    },
  };
}

// 모든 가능한 locale을 정적 경로로 지정
export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

const Layout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  // 지원하지 않는 locale인 경우 404
  if (!routing.locales.includes(locale as "en" | "ko")) {
    notFound();
  }

  // 정적 렌더링을 위한 locale 설정
  setRequestLocale(locale);

  // 서버에서 locale에 맞는 메시지 불러오기
  const messages = await getMessages({ locale: locale as "en" | "ko" });

  return (
    <Suspense fallback={<GlobalLoading />}>
      <NextIntlClientProvider messages={messages}>
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </NextIntlClientProvider>
    </Suspense>
  );
};

export default Layout;
