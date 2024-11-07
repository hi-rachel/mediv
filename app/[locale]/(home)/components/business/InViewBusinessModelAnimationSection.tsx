"use client";

import Image from "next/image";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useRef } from "react";

export interface BusinessModelItem {
  title: string;
  image: string;
  description: string;
}

const InViewAnimationBusinessModelSection: React.FC = () => {
  const t = useTranslations("BusinessModel");
  const businessModel = t.raw("list");
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: prefersReducedMotion ? 0 : index * 0.1,
      },
    }),
  };

  return (
    <div className="py-16 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          BUSINESS MODEL
        </h2>
        <div ref={ref} className="flex flex-wrap justify-center gap-6 md:gap-8">
          {businessModel.map((model: BusinessModelItem, index: number) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              className="w-full md:w-[calc(50%-1rem)] xl:w-[calc(25%-1.5rem)] bg-white shadow-md rounded-lg hover:shadow-lg p-6 transition-shadow duration-300"
            >
              <div className="aspect-square relative mb-4 w-full max-w-[200px] mx-auto">
                <Image
                  src={model.image}
                  alt={model.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 text-center">
                {model.title}
              </h3>
              <p className="text-gray-600 text-center">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Link
          href="/business/business-model"
          className="transform shadow-lg bg-info text-white font-bold py-3 px-8 rounded-full hover:bg-primary transition-all duration-300 text-lg inline-flex hover:-translate-y-1 mt-12"
        >
          {t("businessModelCTA")}
        </Link>
      </div>
    </div>
  );
};

export default InViewAnimationBusinessModelSection;
