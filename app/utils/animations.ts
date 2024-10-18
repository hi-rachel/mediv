import { Variants } from "framer-motion";

export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

export const staggerContainer: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};
