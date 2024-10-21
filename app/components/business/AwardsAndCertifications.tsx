import { motion } from "framer-motion";
import awards from "@/app/data/awards";
import certifications from "@/app/data/certifications";

const AwardsAndCertifications = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* 수상 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-primary">
            수상 내역
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="text-2xl font-bold text-blue-500 mb-2">
                    {award.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{award.title}</h3>
                  <div className="w-16 h-1 bg-blue-500 mb-4"></div>
                  <p className="text-gray-600">
                    우리의 혁신과 노력을 인정받은 영광스러운 순간입니다.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 인증 섹션 */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-primary">인증</h2>
          <div className="flex flex-wrap gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-64 h-64 mx-auto mb-4 object-contain"
                />
                <p className="font-semibold text-gray-800">{cert.alt}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AwardsAndCertifications;
