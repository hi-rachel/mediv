"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PartnersSection from "./common/home/partners/PartnersSection";
import InViewAnimationIntroSection from "./common/home/animation/InViewAnimationIntroSection";
import InViewAnimationSection from "./common/home/animation/InViewAnimationSection";
import InViewCountUpAnimation from "./common/home/animation/InViewCountUpAnimation";
import slides from "./data/slides";
import businessModels from "./data/businessModels";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 슬라이드 자동 변경 타이머 설정
  useEffect(() => {
    startTimer(); // 컴포넌트 마운트 시 타이머 시작

    return () => {
      if (timerRef.current) clearInterval(timerRef.current); // 컴포넌트 언마운트 시 타이머 제거
    };
  }, [currentSlide]);

  // 타이머 시작
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current); // 기존 타이머 제거
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);
  };

  // 이전 슬라이드로 이동
  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    startTimer(); // 타이머 리셋
  };

  // 다음 슬라이드로 이동
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    startTimer(); // 타이머 리셋
  };

  // 특정 슬라이드로 이동
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startTimer(); // 타이머 리셋
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)]">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-primary bg-opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="px-16 text-md md:text-xl mb-8 font-light">
                  {slide.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Arrow Navigation */}
        <button
          onClick={goToPreviousSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
        </button>

        {/* Dot Navigation */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 mx-2 rounded-full ${
                index === currentSlide ? "bg-info" : "bg-blue-100"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <InViewAnimationIntroSection />

      {/* Business Models */}
      <InViewAnimationSection>
        <div className="py-20 bg-neutral">
          <div className="container mx-auto px-6">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-semibold text-center text-primary mb-12"
            >
              BUSINESS MODEL
            </motion.h2>
            <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessModels.map((model, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  className="bg-white rounded-lg shadow-lg p-6 transition duration-300"
                >
                  <div className="text-4xl mb-4 flex justify-center items-center">
                    <Image
                      src={model.image}
                      alt={model.title}
                      width={200}
                      height={200}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {model.title}
                  </h3>
                  <p className="text-gray-600">{model.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </InViewAnimationSection>

      {/* Stats Section */}
      <InViewAnimationSection>
        <div className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <motion.div variants={fadeInUp}>
                <h3 className="text-6xl font-bold mb-4">
                  <InViewCountUpAnimation end={2} duration={2} />+
                </h3>
                <p className="text-xl">Years of Innovation</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className="text-6xl font-bold mb-4">
                  <InViewCountUpAnimation end={23} duration={2} />+
                </h3>
                <p className="text-xl">Global Partners</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className="text-6xl font-bold mb-4">
                  <InViewCountUpAnimation end={4000} duration={3} />+
                </h3>
                <p className="text-xl">Analyzed Medical Data</p>
              </motion.div>
            </div>
          </div>
        </div>
      </InViewAnimationSection>

      {/* Research Section Preview */}
      <InViewAnimationSection>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-semibold text-center text-primary mb-16"
            >
              Latest Research
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                "ECG Analysis Research",
                "Animal Replacement Studies",
                "Personalized Treatment Solutions",
              ].map((title, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-neutral-light rounded-lg shadow-md p-8 transition duration-300 hover:shadow-lg"
                >
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Exploring the potential of AI in improving healthcare
                    outcomes.
                  </p>
                  <Link href="/research" className="text-info hover:underline">
                    Read More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </InViewAnimationSection>

      {/* Partners Section */}
      <InViewAnimationSection>
        <PartnersSection />
      </InViewAnimationSection>
    </div>
  );
};

export default HomePage;
