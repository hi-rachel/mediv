import partners from "@/app/[locale]/data/partners";
import { motion } from "framer-motion";
import PartnerCard from "./PartnerCard";

const PartnersSection = () => {
  return (
    <div className="w-full bg-gray-100 py-20 overflow-hidden pb-40">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Partners
        </h2>
        <div className="flex justify-center w-full">
          <div className="flex flex-wrap justify-center gap-8 max-w-[1240px]">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="w-72"
                whileHover={{ scale: 1.05 }}
              >
                <PartnerCard {...partner} />
              </motion.div>
            ))}
            {/* 더미 요소로 마지막 줄 정렬 제어 */}
            <div className="w-72 invisible" aria-hidden="true" />
            <div className="w-72 invisible" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
