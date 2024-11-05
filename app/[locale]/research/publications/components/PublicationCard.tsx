import Link from "next/link";
import { useLocale } from "next-intl";
import { createSlug } from "@/app/utils/string";
import { Publication } from "@/types/publication";

interface PublicationCardProps {
  publication: Publication;
  formatAuthors: (authors: string[]) => string;
  getMonthName: (month: number) => string;
}

export const PublicationCard = ({
  publication,
  formatAuthors,
  getMonthName,
}: PublicationCardProps) => {
  const locale = useLocale();
  const slug = createSlug(publication.title);

  return (
    <Link href={`/${locale}/research/${slug}`}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <div className="text-sm text-gray-500 rounded-sm bg-slate-50 p-1 mb-4 w-fit">
              {getMonthName(publication.month)}. {publication.year}
            </div>

            {publication.publication && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {publication.publication}
                  {/* IF {publication.publication.match(/\(IF ([\d.]+)\)/)?.[1]} */}
                </span>
              </div>
            )}

            <h3 className="text-xl font-bold mb-4 line-clamp-2">
              {publication.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {formatAuthors(publication.author)}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
          {publication.keywords.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
