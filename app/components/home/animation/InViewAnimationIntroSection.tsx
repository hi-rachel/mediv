import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import InViewTypingAnimation from "./InViewTypingAnimation";

const InViewAnimationIntroSection: React.FC = () => {
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
          <h2
            className="leading-snug text-5xl font-semibold text-primary mb-6"
            style={{ minHeight: "120px" }}
          >
            <InViewTypingAnimation
              text="AI가 만들어낼 세상,"
              speed={70}
              isInView={isInView}
            />
            <br />
            <InViewTypingAnimation
              text="의료에서 미래를 보다"
              delay={800}
              speed={70}
              isInView={isInView}
            />
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="space-y-6"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              (주)메디브는 의료데이터와 AI 기술을 융합해 의료 소프트웨어를
              구축하는 전문 기업입니다. <br />
              메디브는 AI와 의료 데이터를 융합하여 혁신적인 솔루션을 제공합니다.
              <br />
              심전도 분석, 영상 진단, 동물대체시험 검증 플랫폼 등 의료 현장의
              변화를 선도하는 기술을 개발하며,
              <br />
              의료 서비스의 미래를 만들어갑니다.
            </p>
            <div className="mt-10">
              <a
                href="/about"
                className="bg-info text-white font-bold py-3 px-8 rounded-full hover:bg-primary transition duration-300 text-lg inline-block"
              >
                회사 소개 보기
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InViewAnimationIntroSection;
