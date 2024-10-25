import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Ear, Brain, HandHeart } from "lucide-react";

const Vision = () => {
  const coreValues = [
    {
      icon: <Lightbulb color="#32ACB3" className="w-10 h-10" />,
      title: "혁신 (Innovation)",
      description:
        "우리는 기존의 의료 지식과 기술의 한계를 넘어서, AI와 데이터로 새로운 가치를 창출합니다.",
    },
    {
      icon: <Ear color="#32ACB3" className="w-10 h-10" />,
      title: "소통 (Communication)",
      description:
        "우리는 고객과 의료 현장의 목소리에 귀 기울이며, 함께 성장하는 솔루션을 만듭니다.",
    },
    {
      icon: <Brain color="#32ACB3" className="w-10 h-10" />,
      title: "전문성 (Expertise)",
      description:
        "의료와 IT 전문성을 융합해, 가장 신뢰할 수 있는 소프트웨어를 제공합니다.",
    },
    {
      icon: <HandHeart color="#32ACB3" className="w-10 h-10" />,
      title: "책임감 (Responsibility)",
      description:
        "우리는 사람의 건강과 안전을 최우선으로 생각하며, 책임 있는 기술을 실현합니다.",
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
          <h2 className="text-5xl font-extrabold text-primary">VISION</h2>
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
              src="/mediv-logo.png"
              alt="mediv-logo"
              width={300}
              height={300}
              className="drop-shadow-2xl"
            />
          </div>
          <div className="md:text-3xl text-center z-10 mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-fit text-3xl mb-6 font-extrabold bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text"
            >
              Medical + Innovative Vision
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-700 text-2xl"
            >
              AI·빅데이터로 혁신의료기술 실현을 지향합니다.
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
            <h2 className="text-4xl font-extrabold text-primary">핵심 가치</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
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
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-info transition-colors duration-300">
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
