import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ImageCard from "./ImageCard";
import ColorCard from "./ColorCard";
import { fadeInUp, staggerContainer } from "@/app/utils/animations";
import { downloadImage } from "@/app/utils/helpers";
import { colorPalette, grayVersion, logoVariations } from "../../../data/ci";

const CIShowcase: React.FC = () => {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto px-4 py-12"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        variants={fadeInUp}
      >
        MEDIV CI
      </motion.h1>

      <motion.section className="mb-20" variants={fadeInUp}>
        <h2 className="text-3xl font-semibold text-primary mb-6">Logo</h2>
        <div className="flex justify-center items-center">
          <div className="relative w-full h-80 group">
            <Image
              src="/mediv-logo-ci.png"
              alt="MEDIV CI"
              layout="fill"
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() =>
                  downloadImage("/mediv-logo-ci.png", "mediv-logo-ci.png")
                }
                className="bg-white text-primary py-2 px-4 rounded-full flex items-center"
              >
                <Download size={16} className="mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-20" variants={fadeInUp}>
        <h2 className="font-semibold text-3xl text-primary mb-6">
          Logo Variations
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={staggerContainer}
        >
          {logoVariations.map((logo, index) => (
            <ImageCard key={index} {...logo} />
          ))}
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <div className="md:col-start-1">
            <ImageCard {...grayVersion} />
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="mb-20" variants={fadeInUp}>
        <h2 className="text-3xl font-semibold text-primary mb-6">Logo Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageCard
            src="/mediv-logo.png"
            alt="MEDIV logo light mode"
            title="Light Mode"
          />
          <ImageCard
            src="/mediv-logo-gray.png"
            alt="MEDIV logo dark mode"
            title="Dark Mode"
            darkMode={true}
          />
        </div>
      </motion.section>

      <motion.section variants={fadeInUp}>
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Color Palette
        </h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={staggerContainer}
        >
          {colorPalette.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default CIShowcase;
