import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import InViewTypingAnimation from "./InViewTypingAnimation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const InViewAnimationIntroSection: React.FC = () => {
  const t = useTranslations("Home");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 1.5 },
      });
    }
  }, [controls, isInView]);

  return (
    <section
      className="py-20 bg-white overflow-hidden"
      style={{ minHeight: "600px" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center" ref={ref}>
          <div className="md:text-5xl text-4xl font-semibold text-primary mb-8">
            <InViewTypingAnimation
              text={t("title1")}
              speed={70}
              isInView={isInView}
            />
            <br />
            <p className="md:mt-4 mt-2">
              <InViewTypingAnimation
                text={t("title2")}
                delay={800}
                speed={70}
                isInView={isInView}
              />
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex-col space-y-6 flex justify-center items-center"
          >
            <p className="min-w-80 sm:px-6 break text-center w-full text-xl text-gray-700 leading-relaxed">
              {t("description")}
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="bg-info text-white font-bold py-3 px-8 rounded-full hover:bg-primary transition duration-300 text-lg inline-block"
              >
                {t("aboutCTA")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InViewAnimationIntroSection;
