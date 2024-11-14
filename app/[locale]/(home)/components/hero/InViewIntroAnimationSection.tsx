import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import InViewTypingAnimation from "../../../common/animation/InViewTypingAnimation";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

const InViewIntroAnimationSection: React.FC = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  // 언어별 타이핑, 지연 속도 설정
  const typingSpeed = locale === "ko" ? 70 : 70;
  const delay = locale === "ko" ? 800 : 1100;

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
          <div className="leading-relaxed min-h-32 md:text-4xl text-2xl font-semibold text-primary">
            <InViewTypingAnimation
              text={t("title1")}
              speed={typingSpeed}
              isInView={isInView}
            />
            <br />
            <p className="md:mt-2">
              <InViewTypingAnimation
                text={t("title2")}
                delay={delay}
                speed={typingSpeed}
                isInView={isInView}
              />
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex-col space-y-6 flex justify-center items-center"
          >
            <p className="min-w-80 sm:px-6 break text-center w-full text-xl text-gray-700 md:leading-relaxed leading-normal">
              {t("description")}
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="transform shadow-lg bg-info text-white font-bold py-3 px-8 rounded-full hover:bg-primary transition-all duration-300 text-lg inline-flex hover:-translate-y-1"
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

export default InViewIntroAnimationSection;
