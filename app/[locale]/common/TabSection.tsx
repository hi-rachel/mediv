"use client";

import { motion } from "framer-motion";
// import menuItems from "../data/menuItems";
import useTabState from "@/app/hooks/useTabState";
import ProjectHistory from "../business/ProjectHistory";
import AwardsAndCertifications from "../business/AwardsAndCertifications";
import History from "../about/History";
import Organization from "../about/Organization";
import CI from "../about/ci/CI";
import Publications from "../research/Publications";
import Patents from "../research/Patents";
import Vision from "../about/vision/Vision";
import BusinessModelSection from "./business/BusinessModelSection";
import { MenuItem } from "./Header";
import { useTranslations } from "next-intl";

const TabSection = ({ menuId }: { menuId: string }) => {
  const t = useTranslations("MenuItems");
  const menuItems = t.raw("list") as MenuItem[];

  const currentMenuItem = menuItems.find((item) => item.id === menuId);
  const tabs = currentMenuItem?.subItems || [];
  const { activeTab, handleTabClick } = useTabState(
    tabs[0]?.id,
    tabs.map((tab) => tab.id)
  );

  const tabComponents = {
    vision: <Vision />,
    history: <History />,
    organization: <Organization />,
    ci: <CI />,
    "business-model": <BusinessModelSection />,
    projects: <ProjectHistory />,
    "awards-certifications": <AwardsAndCertifications />,
    publications: <Publications />,
    patents: <Patents />,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Tab Section */}
      <div className="max-w-5xl mx-auto overflow-hidden">
        {/* Tab List */}
        <div className="flex border-b border-gray-300">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`cursor-pointer px-6 py-4 text-lg font-semibold text-center border-b-4 transition-colors duration-300 ${
                activeTab === tab.id
                  ? "border-info text-info bg-gray-50"
                  : "border-transparent text-gray-600 hover:text-info"
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="p-6">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {tabComponents[tab.id as keyof typeof tabComponents]}
                </motion.div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TabSection;
