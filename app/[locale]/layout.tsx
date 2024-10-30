import { Inter } from "next/font/google";
import "../globals.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ScrollToTopButton from "./common/ScrollToButton";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("home.title"),
    description: t("home.description"),
  };
}

// 모든 가능한 locale을 정적 경로로 지정
export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  // 유효하지 않은 locale 처리
  if (!routing.locales.includes(locale as "en" | "ko")) {
    notFound();
  }

  // 정적 렌더링을 위한 locale 설정
  setRequestLocale(locale);

  // 서버에서 locale에 맞는 메시지 불러오기
  const messages = await getMessages({ locale: locale as "en" | "ko" });

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="overflow-hidden">{children}</main>
            <Footer />
            <ScrollToTopButton />
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
