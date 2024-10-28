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

  const formatAuthors = (authors: string[]) => {
    if (authors.length === 0) return "";
    if (authors.length === 1) return authors[0];
    return `${authors[0]} et al.`;
  };

  return (
    <div className="space-y-4">
      {publications.map((publication, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          {/* Date */}
          <div className="text-sm text-gray-500 rounded-sm bg-slate-50 p-1 mb-4 w-fit">
            {getMonthName(publication.month)}. {publication.year}
          </div>

          {publication.publication && (
            <div className="mb-4">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                {publication.publication}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-semibold mb-4">{publication.title}</h3>

          {/* Authors and Read More Link */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">{formatAuthors(publication.author)}</p>
            <Link
              href={publication.href}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              target="_blank"
            >
              Read more →
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
            {publication.tag.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="inline-block px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationsHistory;
