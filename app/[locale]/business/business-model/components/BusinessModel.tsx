"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HighlightedText from "./HighlightedText";

interface BusinessModel {
  image: string;
  title: string;
  description1: string;
  description2?: string;
  category: string;
}

const BusinessModel: React.FC = () => {
  const models: BusinessModel[] = [
    {
      image: "/images/business-model/model-stat.webp",
      title: "분석 지원 플랫폼 구축",
      description1:
        "바이오메디컬 연구개발을 위한 데이터 기반 분석 지원 플랫폼을 구축합니다.",
      description2:
        "연구자 친화적 분석 지원 플랫폼을 통해 효율적인 업무 프로세스를 제공합니다.",
      category: "Biomedical",
    },
    {
      image: "/images/business-model/model-data.webp",
      title: "데이터 구축 솔루션",
      description1:
        "고품질의 바이오메디컬 데이터 수집과 최적화된 정제 프로세스를 통해 연구의 신뢰도를 제고합니다.",
      description2:
        "다양한 바이오메디컬 데이터의 품질을 유지하고 체계적 분석을 지원합니다.",
      category: "Data",
    },
    {
      image: "/images/business-model/model-ai.webp",
      title: "AI 기반 분석 SW 개발",
      description1:
        "AI 기술을 활용한 분석 소프트웨어를 개발하여 데이터의 정밀한 분석을 수행합니다.",
      description2:
        "의료, 바이오, 통계, 신호처리 및 영상 분야 등 다양한 분야의 데이터 분석을 지원합니다.",
      category: "AI",
    },
    {
      image: "/images/business-model/model-ict.webp",
      title: "ICT 융합 연구지원",
      description1:
        "바이오메디컬과 ICT 기술의 접목을 통해 혁신적인 연구를 지원합니다.",
      description2:
        "최신 IT 인프라와 협력기관을 통해 빅데이터 · AI · 첨단바이오 연구의 효율성을 높입니다.",
      category: "ICT",
    },
  ];

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
      <div className="max-w-6xl mx-auto px-4 pb-24 pt-12 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-secondary-light/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-10 right-10 w-40 h-40 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-10 left-20 w-40 h-40 bg-secondary-light/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          variants={fadeInUpVariants}
          className="text-center mb-20 relative"
        >
          <div className="inline-block">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-primary"
            >
              BUSINESS MODEL
            </motion.h2>
          </div>

          {/* Enhanced Categories Section */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
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
                    className={`relative font-semibold text-xl px-8 py-3 rounded-full bg-white/95 shadow-lg
                    hover:bg-gradient-to-r hover:${category.color} hover:text-info
                    transition-all duration-300 cursor-pointer flex items-center gap-2 backdrop-blur-sm`}
                  >
                    <span className="text-2xl">{category.icon}</span>
                    {category.name}
                  </div>
                </motion.div>
                {index < categories.length - 1 && (
                  <span className="text-secondary-light text-2xl">•</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col gap-32 items-center relative z-10">
          {models.map((model, index) => (
            <motion.div
              key={index}
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
              } items-center gap-12 w-full`}
            >
              {/* Icon and Title Section */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-secondary-light/20 md:w-[350px] lg:w-[400px] flex flex-col items-center text-center p-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-light/10 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={`${model.image}`}
                  alt={`${model.title}`}
                  width={220}
                  height={220}
                  className="rounded-lg relative z-10 transform transition-all duration-500"
                />
                <h3 className="text-2xl font-bold leading-tight min-h-[4rem] text-center mt-8 relative z-10 px-4 ">
                  {model.title}
                </h3>
              </motion.div>

              {/* Description Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex-1 w-full h-full space-y-6"
              >
                <motion.div className="p-8 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-light/20 group">
                  <p className="text-lg font-semibold leading-relaxed transition-colors duration-300">
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
                  <motion.div className="p-8 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-light/20 group">
                    <p className="text-lg font-semibold leading-relaxed transition-colors duration-300">
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

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default BusinessModel;
