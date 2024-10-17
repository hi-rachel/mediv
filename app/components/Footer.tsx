"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-wrap justify-between items-center">
        {/* 회사 정보 */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Mediv</h3>
          <p className="text-sm">Innovating healthcare with AI</p>
        </div>

        {/* 저작권 정보 */}
        <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
          <p>&copy; 2024 Mediv. All rights reserved.</p>
        </div>

        {/* 정책 링크 */}
        <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
          <Link href="/privacy" className="text-sm hover:underline mx-2">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm hover:underline mx-2">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
