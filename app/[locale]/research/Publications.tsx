// import publications from "../data/publications";
import { Link } from "@/i18n/routing";
import { getMonthName } from "@/app/utils/helpers";
import { useTranslations } from "next-intl";

interface Publication {
  tag: string[];
  title: string;
  author: string[];
  publication?: string;
  patentNumber?: string;
  href: string;
  year: number;
  month: number;
}

const PublicationsHistory: React.FC = () => {
  const t = useTranslations("Publications");
  const publications = t.raw("list") as Publication[];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {publications.map((publication, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6">
            <div className="text-sm rounded-sm bg-slate-50 p-1 w-fit text-gray-500 mb-4 font-light">
              {getMonthName(publication.month)}. {publication.year}
            </div>
            {publication.publication && (
              <p className="text-gray-500 text-sm mb-2">
                {publication.publication}
              </p>
            )}
            <h3 className="text-xl font-semibold mb-4">{publication.title}</h3>
            <p className="text-gray-600 mb-2">{publication.author}</p>
          </div>
          <div className="px-6 py-4 bg-gray-50">
            <Link
              href={publication.href}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              target="_blank"
            >
              Read more →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationsHistory;
