"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Vision from "../components/about/Vision";
import History from "../components/about/History";
import Organization from "../components/about/Organization";
import CI from "../components/about/ci/CI";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<string>("vision");

  const handleTabClick = (tab: string) => setActiveTab(tab);

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Mediv</h1>
          <p className="text-xl mb-8">
            혁신적인 의료 AI 기술로 더 나은 미래를 만듭니다
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-4 mb-8">
            {["vision", "history", "organization", "ci"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`py-2 px-4 rounded-md font-semibold transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {tab === "history"
                  ? "회사 연혁"
                  : tab === "organization"
                  ? "조직도"
                  : tab === "vision"
                  ? "비전"
                  : "CI"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "vision" && <Vision />}
            {activeTab === "history" && <History />}
            {activeTab === "organization" && <Organization />}
            {activeTab === "ci" && <CI />}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
