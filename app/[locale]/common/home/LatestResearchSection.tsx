import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { getMonthName } from "@/app/utils/helpers";
import { Publication } from "@/types/publication";

const LatestResearchSection = () => {
  const t = useTranslations("Publications");
  const publications = t.raw("list") as Publication[];

  const latestResearch: Publication[] = [
    ...publications
      .slice(0, 3)
      .map((pub) => ({ ...pub, type: "publication" as const })),
  ];

  const formatAuthors = (authors: string[]) => {
    if (!authors || authors.length === 0) return "";
    if (authors.length === 1) return authors[0];
    return `${authors[0]} et al.`;
  };

  const formatPublicationBadge = (publication: string) => {
    const parts = publication.split("(");
    if (parts.length === 2) {
      const ifValue = parts[1].replace(")", "");
      return {
        name: parts[0].trim(),
        if: ifValue,
      };
    }
    return { name: publication, if: "" };
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-16">
          Latest Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestResearch.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-[380px] min-w-80"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Date */}
                <div className="text-sm text-gray-500 mb-4">
                  {getMonthName(item.month)}. {item.year}
                </div>

                {/* Badge */}
                {item.publication && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {formatPublicationBadge(item.publication).if}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-3">
                  {item.title}
                </h3>

                {/* Bottom section */}
                <div className="mt-auto">
                  {
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-gray-600 text-sm">
                          {formatAuthors(item.author || [])}
                        </p>
                      </div>
                    </>
                  }

                  {/* Read More for both publication and patent */}
                  {/* <Link
                    href={item.href || "#"} // '#' as fallback for patents until you add the real path
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline inline-flex items-center"
                    target="_blank"
                  >
                    Read More →
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 w-full flex justify-center">
          <Link
            href="/research"
            className="bg-info text-white font-bold py-3 px-8 rounded-full hover:bg-primary transition duration-300 text-lg text-center inline-block"
          >
            {t("home.researchCTA")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestResearchSection;
