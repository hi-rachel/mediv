"use client";

import { Link } from "@/i18n/routing";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { getMonthName } from "@/app/utils/date";
import { Publication } from "@/types/publication";
import { motion, useInView, useReducedMotion } from "framer-motion";

const LatestResearchSection = () => {
  const t = useTranslations("Publications");
  const publications = t.raw("list") as Publication[];
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-16">
          Latest Research
        </h2>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {latestResearch.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-[380px] min-w-80"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="text-sm text-gray-500 mb-4">
                  {getMonthName(item.month)}. {item.year}
                </div>

                {item.publication && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {formatPublicationBadge(item.publication).if}
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-3">
                  {item.title}
                </h3>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-600 text-sm">
                      {formatAuthors(item.author || [])}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="w-full flex justify-center">
          <Link
            href="/research"
            className="transform shadow-lg bg-info text-white font-bold py-3 px-8 rounded-full hover:bg-primary transition-all duration-300 text-lg inline-flex hover:-translate-y-1"
          >
            {t("home.researchCTA")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestResearchSection;
