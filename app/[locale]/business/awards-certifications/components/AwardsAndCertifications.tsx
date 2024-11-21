"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Award {
  title: string;
  year: number;
}

interface Certification {
  src: string;
  alt: string;
}

const AwardsAndCertifications: React.FC = () => {
  const t = useTranslations("AwardsAndCertifications");
  const awards = t.raw("awards") as Award[];
  const certifications = t.raw("certifications") as Certification[];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* 수상 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-primary">
            {t("awardsSectionTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-4 pb-10">
                  <div className="text-2xl font-bold text-blue-500 mb-2">
                    {award.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{award.title}</h3>
                  <div className="w-16 h-1 bg-blue-500 mb-4"></div>
                </div>
                <div className="absolute bottom-4 right-4 text-blue-400 opacity-80">
                  <Trophy color="gold" size={45} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 인증 섹션 */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-primary">
            {t("certificationsSectionTitle")}
          </h2>
          <div className="flex flex-wrap gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  className="w-64 h-64 mx-auto mb-4 object-contain"
                />
                <p className="text-center font-semibold text-gray-800">
                  {cert.alt}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AwardsAndCertifications;
