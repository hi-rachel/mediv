"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
// import history from "../data/history";
import { useTranslations } from "next-intl";

interface HistoryEvent {
  month: string;
  title: string;
}

interface HistoryYear {
  year: number;
  events: HistoryEvent[];
}

const HistoryTimeline: React.FC = () => {
  const t = useTranslations("History");
  const history: HistoryYear[] = t.raw("history");

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8 pt-6" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {history.map((yearData: HistoryYear, yearIndex: number) => (
          <motion.div
            key={yearData.year}
            className="mb-24 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
          >
            <div className="sticky top-8 mb-8 bg-gray-50 pt-8 pb-4 z-10">
              <h3 className="text-5xl md:text-8xl font-bold text-primary">
                {yearData.year}
              </h3>
            </div>

            <div className="space-y-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-secondary-light"></div>
              {yearData.events.map(
                (event: HistoryEvent, eventIndex: number) => (
                  <motion.div
                    key={eventIndex}
                    className="flex items-start md:gap-8 relative gap-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: eventIndex * 0.1 }}
                  >
                    <div className="md:w-28 w-24 flex-shrink-0 md:text-right text-center">
                      <span className="text-lg font-semibold text-secondary">
                        {event.month}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <div className="w-3 h-3 bg-primary rounded-full absolute -left-[5px] top-2"></div>
                      <p className="md:text-xl text-lg text-gray-800">
                        {event.title}
                      </p>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed left-0 top-0 h-1 bg-primary z-50"
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
      />
    </div>
  );
};

export default HistoryTimeline;
