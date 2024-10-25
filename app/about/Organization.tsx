import Image from "next/image";
import { motion } from "framer-motion";

const Organization = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative py-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
          ORGANIZATION
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-full h-96 text-center py-10">
          <Image
            src="/organization.png"
            alt="Mediv 조직도"
            fill
            className="object-contain h-96"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Organization;
