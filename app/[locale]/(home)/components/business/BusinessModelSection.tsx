import Image from "next/image";
import { motion } from "framer-motion";
import InViewAnimation from "@/app/[locale]/common/animation/InViewAnimation";
import { useTranslations } from "next-intl";

export interface BusinessModelItem {
  title: string;
  image: string;
  description: string;
}

interface BusinessModelProps {
  title?: string;
  className?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const BusinessModelSection: React.FC<BusinessModelProps> = ({
  title = "BUSINESS MODEL",
  className,
}) => {
  const t = useTranslations("BusinessModel");
  const businessModel = t.raw("list");

  return (
    <InViewAnimation>
      <div className={`py-12 ${className}`}>
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeInUp}
            className="md:text-4xl text-3xl font-bold text-center text-primary mb-12"
          >
            {title}
          </motion.h2>
          <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessModel.map((model: BusinessModelItem, index: string) => (
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
    </InViewAnimation>
  );
};

export default BusinessModelSection;
