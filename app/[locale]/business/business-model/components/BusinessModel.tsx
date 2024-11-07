"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { useTranslations } from "next-intl";

interface IBusinessModel {
  image: string;
  title: string;
  description1: string;
  description2?: string;
  category: string;
}

const BusinessModelPage: React.FC = () => {
  const t = useTranslations("BusinessModel");
  const models: IBusinessModel[] = t.raw("list");

  const categories = [
    {
      name: "Biomedical",
      color: "from-secondary-light to-secondary",
      icon: "🧬",
    },
    { name: "Data", color: "from-secondary to-secondary-light", icon: "📊" },
    { name: "AI", color: "from-secondary-light to-secondary", icon: "🤖" },
    { name: "ICT", color: "from-secondary to-secondary-light", icon: "💻" },
  ];

  const modelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    modelRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 pt-8 sm:pt-12 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-24 sm:w-40 h-24 sm:h-40 bg-secondary-light/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-10 right-10 w-24 sm:w-40 h-24 sm:h-40 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-10 left-20 w-24 sm:w-40 h-24 sm:h-40 bg-secondary-light/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          variants={fadeInUpVariants}
          className="text-center mb-12 sm:mb-20 relative"
        >
          <div className="inline-block">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary"
            >
              BUSINESS MODEL
            </motion.h2>
          </div>

          {/* Enhanced Categories Section */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-10">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 sm:gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                  onClick={() => scrollToSection(index)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
                  />
                  <div
                    className={`relative font-semibold text-base sm:text-xl px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-white/95 shadow-lg
                    hover:bg-gradient-to-r hover:${category.color} hover:text-info
                    transition-all duration-300 cursor-pointer flex items-center gap-2 backdrop-blur-sm`}
                  >
                    <span className="text-xl sm:text-2xl">{category.icon}</span>
                    {category.name}
                  </div>
                </motion.div>
                {index < categories.length - 1 && (
                  <span className="text-secondary-light text-xl sm:text-2xl hidden sm:inline">
                    •
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col gap-16 sm:gap-32 items-center relative z-10">
          {models.map((model: IBusinessModel, index: number) => (
            <motion.div
              key={model.title + index}
              ref={(el) => {
                modelRefs.current[index] = el;
              }}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.4,
              }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6 sm:gap-12 w-full`}
            >
              {/* Icon and Title Section */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-secondary-light/20 w-full md:w-[350px] lg:w-[400px] flex flex-col items-center text-center p-4 sm:p-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-light/10 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={model.image}
                  alt={model.title}
                  width={180}
                  height={180}
                  className="rounded-lg relative z-10 transform transition-all duration-500 w-[160px] sm:w-[220px] h-auto"
                />
                <h3 className="text-xl sm:text-2xl font-bold leading-tight min-h-[3rem] sm:min-h-[4rem] text-center mt-4 sm:mt-8 relative z-10 px-2 sm:px-4">
                  {model.title}
                </h3>
              </motion.div>

              {/* Description Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex-1 w-full h-full space-y-4 sm:space-y-6"
              >
                <motion.div className="p-4 sm:p-8 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-light/20 group">
                  <p className="text-base sm:text-lg font-semibold leading-relaxed transition-colors duration-300">
                    <HighlightedText
                      text={model.description1}
                      highlight={[
                        "고품질의",
                        "바이오메디컬",
                        "연구개발",
                        "데이터 기반 분석 지원 플랫폼",
                        "데이터",
                        "수집",
                        "연구의 신뢰도",
                        "AI 기술을 활용한 분석 소프트웨어",
                        "의 정밀한 분석",
                        "과 ICT 기술의 접목",
                        "혁신적인 연구",
                      ]}
                    />
                  </p>
                </motion.div>
                {model.description2 && (
                  <motion.div className="p-4 sm:p-8 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-light/20 group">
                    <p className="text-base sm:text-lg font-semibold leading-relaxed transition-colors duration-300">
                      <HighlightedText
                        text={model.description2}
                        highlight={[
                          "연구자 친화적 분석 지원 플랫폼",
                          "다양한 바이오메디컬 데이터의 품질을 유지",
                          "체계적 분석",
                          "의료, 바이오, 통계, 신호처리 및 영상 분야",
                          "데이터 분석",
                          "최신 IT 인프라와 협력기관",
                          "빅데이터 · AI · 첨단바이오",
                          "연구의 효율성",
                        ]}
                      />
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelPage;
