"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Building2, Mail, Phone, Clock } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ContactSkeleton from "../../common/loading/ContactSkeleton";

const NaverMap = dynamic(() => import("./NaverMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-200 animate-pulse min-h-[400px]" />
  ),
});

const Contact = () => {
  const t = useTranslations("Contact");

  const contactInfo = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t("addressTitle"),
      content: (
        <div>
          <p className="font-medium">{t("address1")}</p>
          <p className="font-medium">{t("address2")}</p>
        </div>
      ),
      subContent: t("zipCode"),
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("telephoneNumber"),
      content: (
        <Link
          href="tel:043-715-2498"
          className="text-gray-600 hover:text-info transition-colors"
        >
          043-715-2498
        </Link>
      ),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("emailTitle"),
      content: (
        <Link
          href="mailto:mediv_admin@mediv.kr"
          className="text-gray-600 hover:text-info transition-colors"
        >
          mediv_admin@mediv.kr
        </Link>
      ),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("operatingHoursTitle"),
      content: t("operatingHours"),
      subContent: t("holidays"),
    },
  ];

  return (
    <Suspense fallback={<ContactSkeleton />}>
      <div className="min-h-screen max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CONTACT</h1>
          <p className="text-lg text-gray-600">{t("title")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-info">{info.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {info.title}
                    </h3>
                    <div className="text-gray-600">{info.content}</div>
                    {info.subContent && (
                      <p className="text-gray-500 text-sm pt-1">
                        {info.subContent}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] md:h-[500px]"
          >
            <NaverMap />
          </motion.div>
        </div>
      </div>
    </Suspense>
  );
};

export default Contact;
