"use client";

// import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// const NaverMap = dynamic(() => import("../components/NaverMap"), {
//   ssr: false,
// });

const ContactPage = () => (
  <section className="space-y-8">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-extrabold"
    >
      Contact Us
    </motion.h1>

    <div className="text-lg text-gray-700">
      <p>Phone: +82-123-4567</p>
      <p>Email: info@mediv.kr</p>
    </div>

    {/* <NaverMap /> */}
  </section>
);

export default ContactPage;
