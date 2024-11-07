"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Publication } from "@/types/publication";
import { getMonthName } from "@/app/utils/date";
import { createSlug } from "@/app/utils/url";

interface PublicationDetailProps {
  slug: string;
}

const PublicationDetail = ({ slug }: PublicationDetailProps) => {
  const router = useRouter();
  const t = useTranslations("Publications");
  const publications = t.raw("list") as Publication[];
  const publication = publications.find(
    (pub) => createSlug(pub.title) === slug
  );

  if (!publication) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <div className="text-center py-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {t("details.notFound")}
          </h1>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("details.backToList")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 mb-14">
      <button
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-6"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-5 h-5" />
        {t("details.backToList")}
      </button>

      <article className="bg-white">
        <div className="p-6">
          {/* Header Section */}
          <header className="mb-12 border-b border-gray-200 pb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold md:text-sm text-xs break-all">
                {publication.publication}
              </span>
            </div>
            <h1 className="md:text-3xl text-2xl font-extrabold text-gray-800 mb-4 leading-snug">
              {publication.title}
            </h1>
            <span className="text-sm text-gray-500 bg-slate-50 px-3 py-1 rounded">
              {getMonthName(publication.month)}. {publication.year}
            </span>
          </header>

          {/* Link Section */}
          {publication.href && (
            <section className="mb-10">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                {t("details.link")}
              </h2>
              <a
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors break-all"
              >
                {publication.href}
              </a>
            </section>
          )}

          {/* Authors Section */}
          <section className="mb-12">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              {t("details.author")}
            </h2>
            <p className="text-gray-700">{publication.author.join(", ")}</p>
          </section>

          {/* Keywords Section */}
          <section className="pt-10 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {publication.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{keyword}
                </span>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default PublicationDetail;
