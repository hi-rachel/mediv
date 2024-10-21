"use client";

import { motion } from "framer-motion";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import menuItems from "../data/menuItems";
import ProjectHistory from "../components/business/ProjectHistory";
import AwardsAndCertifications from "../components/business/AwardsAndCertifications";
import Vision from "../components/about/Vision";
import History from "../components/about/History";
import Organization from "../components/about/Organization";
import CI from "../components/about/ci/CI";
import useTabState from "../hooks/useTabState";
import Publications from "./research/Publications";
import Patents from "./research/Patents";

const TabSection = ({ menuId }: { menuId: string }) => {
  const menuItem = menuItems.find((item) => item.id === menuId);
  const tabs = menuItem?.subItems || [];
  const { activeTab, handleTabClick } = useTabState(
    tabs[0]?.id,
    tabs.map((tab) => tab.id)
  );

  const tabComponents = {
    projects: <ProjectHistory />,
    awards: <AwardsAndCertifications />,
    vision: <Vision />,
    history: <History />,
    organization: <Organization />,
    ci: <CI />,
    publications: <Publications />,
    patents: <Patents />,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Page Title Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-primary">
          {menuItem?.label}
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          {menuId === "about"
            ? "Mediv는 혁신적인 AI 솔루션으로 미래 의료의 패러다임을 변화시킵니다."
            : menuId === "business"
            ? "Mediv는 첨단 AI 기술을 통해 의료 산업의 혁신을 주도하고 있습니다."
            : "Mediv는 끊임없는 연구와 혁신을 바탕으로 신뢰받는 의료 소프트웨어를 개발합니다."}
        </p>
      </section>

      {/* Tab Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <TabGroup
          selectedIndex={tabs.findIndex((tab) => tab.id === activeTab)}
          onChange={(index) => handleTabClick(tabs[index].id)}
        >
          <TabList className="flex space-x-1 p-4 bg-gray-100 rounded-t-lg">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                className={({ selected }) =>
                  `flex-1 py-3 px-4 text-lg font-semibold text-center rounded-lg focus:outline-none transition-colors duration-300 ${
                    selected
                      ? "bg-secondary text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-primary"
                  }`
                }
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>

          <TabPanels className="p-6">
            {tabs.map((tab) => (
              <TabPanel key={tab.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {tabComponents[tab.id as keyof typeof tabComponents]}
                </motion.div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default TabSection;
