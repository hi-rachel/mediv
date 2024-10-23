"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-left text-gray-300 bg-gray-800 py-8">
      <div className="container mx-auto px-4 lg:px-6 mt-4">
        <div className="lg:ml-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-2 w-full">
            <p className="text-sm font-semibold">주식회사 메디브</p>
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold mr-1">대표이사</span> 박승
              </p>
              <p>
                <span className="font-semibold mr-1">사업자등록번호</span>{" "}
                281-81-02722
              </p>
              <p className="break-words">
                <span className="font-semibold mr-1">주소</span> 충북 청주시
                서원구 두꺼비로 27번길 58 202호(산남동, 대우빌딩)
              </p>
            </div>
          </div>

          {/* 연락처 정보 */}
          <div className="space-y-2 w-full">
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold mr-1">Tel.</span> 043-715-2498
              </p>
              <p className="break-words">
                <span className="font-semibold mr-1">Email.</span>
                mediv_admin@mediv.kr
              </p>
            </div>
          </div>

          {/* 정책 및 저작권 */}
          <div className="space-y-2 w-full">
            <div className="mb-4">
              <Link
                href="/terms"
                className="text-sm font-semibold hover:text-white hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-4 my-8 border-gray-500 border-t" />
      <div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">
            Copyright © 2024 Mediv. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
