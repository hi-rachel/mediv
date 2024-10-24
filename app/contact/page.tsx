"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Building2, Mail, Phone, Clock } from "lucide-react";

const NaverMap = dynamic(() => import("./NaverMap"), {
  ssr: false,
});

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "주소",
      content: "충북 청주시 서원구 두꺼비로 27번길 58",
      subContent: "202호(산남동, 대우빌딩)",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "전화번호",
      content: "043-272-2398",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "이메일",
      content: "mediv_admin@mediv.kr",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "운영시간",
      content: "평일 09:00 - 18:00",
      subContent: "주말 및 공휴일 휴무",
    },
  ];

  return (
    <div className="h-screen max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">CONTACT</h1>
        <p className="text-lg text-gray-600">
          메디브는 문의해 주신 내용에 대해 성심껏 답변해 드리겠습니다.
        </p>
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
                  <p className="text-gray-600">{info.content}</p>
                  {info.subContent && (
                    <p className="text-gray-500 text-sm">{info.subContent}</p>
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
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <NaverMap />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
