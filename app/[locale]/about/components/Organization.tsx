import Image from "next/image";
import { motion } from "framer-motion";

const Organization = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          ORGANIZATION
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full sm:h-[500px] h-[300px] flex justify-center text-center py-5">
          <Image
            src="/organization.png"
            alt="Mediv 조직도"
            fill
            className="md:pl-28 pl-4 object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Organization;
