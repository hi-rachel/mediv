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
    <div className="p-20">
      <InViewAnimation>
        <div>
          <div className="container mx-auto px-6">
            <motion.h2
              variants={fadeInUp}
              className="md:text-4xl text-3xl font-bold text-center text-primary mb-12"
            >
              BUSINESS MODEL
            </motion.h2>
            <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessModel.map((model: BusinessModelItem, index: string) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  className="bg-white rounded-lg shadow-lg p-6 transition duration-300"
                >
                  <div className="text-4xl mb-4 flex justify-center items-center">
                    <Image
                      src={model.image}
                      alt={model.title}
                      width={200}
                      height={200}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {model.title}
                  </h3>
                  <p className="text-gray-600">{model.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </InViewAnimation>
      <div className="w-full flex justify-center">
        <Link
          href="/business/business-model"
          className="transform shadow-lg bg-info text-white font-bold py-3 px-8 rounded-full hover:bg-primary transition-all  duration-300 text-lg inline-flex hover:-translate-y-1 mt-12"
        >
          자세히 보기
        </Link>
      </div>
    </div>
  );
};

export default BusinessModelSection;
