import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const NotFoundPage = () => {
  const locale = useLocale() as "ko" | "en";
  const messages = {
    ko: {
      title: "404",
      subtitle: "페이지를 찾을 수 없습니다",
      description: "요청하신 페이지가 존재하지 않거나 삭제되었습니다.",
      home: "홈으로 돌아가기",
    },
    en: {
      title: "404",
      subtitle: "Page Not Found",
      description:
        "The page you are looking for might have been removed or is temporarily unavailable.",
      home: "Return to Home",
    },
  };

  const { title, subtitle, description, home } =
    messages[locale] || messages.en;

  return (
    <div className="text-center flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Image src="/images/error/404.webp" alt="404" width={500} height={500} />
      <h1 className="text-6xl font-bold">{title}</h1>
      <h2 className="mt-4 text-2xl">{subtitle}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <Link href="/" locale={locale}>
        <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded">
          {home}
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
