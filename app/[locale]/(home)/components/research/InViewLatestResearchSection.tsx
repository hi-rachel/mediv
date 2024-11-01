import { Link } from "@/i18n/routing";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { getMonthName } from "@/app/utils/helpers";
import { Publication } from "@/types/publication";
import { motion, useInView, useAnimation } from "framer-motion";

const InViewLatestResearchSection = () => {
  const t = useTranslations("Publications");
  const publications = t.raw("list") as Publication[];

  // Refs for different sections
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  // InView states for different sections
  const isSectionInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
  });

  const isTitleInView = useInView(titleRef, {
    once: false,
    amount: 0.5,
  });

  const isGridInView = useInView(gridRef, {
    once: false,
    amount: 0.2,
  });

  const isCtaInView = useInView(ctaRef, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  // Animation controls
  const titleControls = useAnimation();
  const gridControls = useAnimation();
  const ctaControls = useAnimation();

  const latestResearch: Publication[] = [
    ...publications
      .slice(0, 3)
      .map((pub) => ({ ...pub, type: "publication" as const })),
  ];

  // Animation effects
  useEffect(() => {
    if (isTitleInView && isSectionInView) {
      titleControls.start("visible");
    } else {
      titleControls.start("hidden");
    }
  }, [isTitleInView, isSectionInView, titleControls]);

  useEffect(() => {
    if (isGridInView && isSectionInView) {
      gridControls.start("visible");
    } else {
      gridControls.start("hidden");
    }
  }, [isGridInView, isSectionInView, gridControls]);

  useEffect(() => {
    if (isCtaInView && isSectionInView) {
      ctaControls.start("visible");
    } else {
      ctaControls.start("hidden");
    }
  }, [isCtaInView, isSectionInView, ctaControls]);

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

  // Animation variants
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.2,
      },
    },
  };

  return (
    <div className="py-20 bg-white relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.h2
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleControls}
          className="text-4xl font-semibold text-center text-gray-900 mb-16"
        >
          Latest Research
        </motion.h2>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridControls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {latestResearch.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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
            className="transform shadow-lg bg-info text-white font-bold py-3 px-8 rounded-full hover:bg-primary transition-all  duration-300 text-lg inline-flex hover:-translate-y-1"
          >
            {t("home.researchCTA")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InViewLatestResearchSection;
