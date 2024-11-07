"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Ear, Brain, HandHeart } from "lucide-react";
import { useTranslations } from "next-intl";

const Vision = () => {
  const t = useTranslations("Vision");

  const coreValues = [
    {
      icon: <Lightbulb color="#32ACB3" className="w-10 h-10" />,
      title: t("coreValues.coreValue1.title"),
      description: t("coreValues.coreValue1.content"),
    },
    {
      icon: <Ear color="#32ACB3" className="w-10 h-10" />,
      title: t("coreValues.coreValue2.title"),
      description: t("coreValues.coreValue2.content"),
    },
    {
      icon: <Brain color="#32ACB3" className="w-10 h-10" />,
      title: t("coreValues.coreValue3.title"),
      description: t("coreValues.coreValue3.content"),
    },
    {
      icon: <HandHeart color="#32ACB3" className="w-10 h-10" />,
      title: t("coreValues.coreValue4.title"),
      description: t("coreValues.coreValue4.content"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div>
        {/* Vision Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative py-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            VISION
          </h2>
        </motion.div>

        {/* Vision Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center mb-20"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 rounded-3xl" />
          <div className="relative w-[300px] h-[300px] mb-6">
            <Image
              src="/images/logo/mediv-logo.webp"
              alt="mediv-logo"
              width={300}
              height={300}
              className="drop-shadow-2xl"
            />
          </div>
          <div className="text-center z-10 mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="md:text-3xl text-xl mb-6 font-extrabold bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text"
            >
              {t("title")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-700 md:text-xl text-md mb-2"
            >
              {t("subTitle1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-700 md:text-xl text-md"
            >
              {t("subTitle2")}
            </motion.p>
          </div>
        </motion.div>
      </div>
      <hr />
      <div className="mb-20">
        {/* Core Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-20"
        >
          <div className="text-center relative mb-16">
            <h2 className="text-4xl font-bold text-primary">
              {t("coreValues.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-full bg-gray-100 text-primary group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="md:text-xl text-md font-bold text-primary mb-4 group-hover:text-[#2d8185] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
