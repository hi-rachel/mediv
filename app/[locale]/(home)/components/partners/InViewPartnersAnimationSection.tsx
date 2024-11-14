"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PartnersRowAnimation from "./PartnersRowAnimation";

const InViewPartnersSection = () => {
  const t = useTranslations("Partners");
  const partners = t.raw("list");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-gray-100 pt-20 pb-40">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Partners
        </h2>
        <div className="space-y-12">
          <PartnersRowAnimation partners={partners} direction="left" />
        </div>
      </motion.div>
    </section>
  );
};

export default InViewPartnersSection;
