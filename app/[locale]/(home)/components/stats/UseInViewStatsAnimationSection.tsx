"use client";

import InViewCountUpAnimation from "@/app/[locale]/common/animation/InViewCountUpAnimation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const UseInViewStatsAnimationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
        duration: 0.4,
      },
    },
  };

  return (
    <div className="py-20 px-4 bg-primary text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:gap-12 sm:gap-4 text-center justify-center">
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="sm:text-5xl text-4xl lg:text-6xl font-bold mb-4">
              <InViewCountUpAnimation end={2} duration={2} />+
            </h3>
            <p className="text-lg sm:text-xl">Years of Innovation</p>
          </motion.div>
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="sm:text-5xl text-4xl lg:text-6xl font-bold mb-4">
              <InViewCountUpAnimation end={7} duration={2} />+
            </h3>
            <p className="text-lg sm:text-xl">Our Partners</p>
          </motion.div>
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="sm:text-5xl text-4xl lg:text-6xl font-bold mb-4">
              <InViewCountUpAnimation end={100000} duration={3} />+
            </h3>
            <p className="text-lg sm:text-xl">Analyzed Medical Data</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UseInViewStatsAnimationSection;
