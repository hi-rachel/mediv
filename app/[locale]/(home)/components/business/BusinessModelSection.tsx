"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import InViewAnimation from "@/app/[locale]/common/animation/InViewAnimation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export interface BusinessModelItem {
  title: string;
  image: string;
  description: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const BusinessModelSection: React.FC = () => {
  const t = useTranslations("BusinessModel");
  const businessModel = t.raw("list");

  return (
    <div className="py-16 px-4 md:px-8 lg:px-20">
      <InViewAnimation>
        <div>
          <div className="container mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
            >
              BUSINESS MODEL
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {businessModel.map((model: BusinessModelItem, index: string) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="w-full md:w-[calc(50%-1rem)] xl:w-[calc(25%-1.5rem)] bg-white shadow-md rounded-lg hover:shadow-lg p-6 transition duration-300"
                >
                  <div className="aspect-square relative mb-4 w-full max-w-[200px] mx-auto">
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2 text-center">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {model.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </InViewAnimation>
      <div className="w-full flex justify-center">
        <Link
          href="/business/business-model"
          className="transform shadow-lg bg-info text-white font-bold py-3 px-8 rounded-full hover:bg-primary transition-all duration-300 text-lg inline-flex hover:-translate-y-1 mt-12"
        >
          자세히 보기
        </Link>
      </div>
    </div>
  );
};

export default BusinessModelSection;
