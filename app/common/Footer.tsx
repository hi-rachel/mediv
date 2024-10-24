"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-8">
          {/* Company Information */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">
              주식회사 메디브
            </h3>
            <div className="space-y-2.5">
              <p className="text-sm">
                <span className="text-gray-400 inline-block w-24">
                  대표이사
                </span>
                박승
              </p>
              <p className="text-sm">
                <span className="text-gray-400 inline-block w-24">
                  사업자등록번호
                </span>
                281-81-02722
              </p>
              <div className="text-sm">
                <span className="text-gray-400 block mb-1">주소</span>
                <address className="not-italic leading-relaxed">
                  충북 청주시 서원구 두꺼비로 27번길 58 202호
                  <br />
                  (산남동, 대우빌딩)
                </address>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">연락처</h3>
            <div className="space-y-2.5">
              <p className="text-sm">
                <span className="text-gray-400 inline-block w-16">Tel</span>
                <a
                  href="tel:043-715-2498"
                  className="hover:text-white transition-colors"
                >
                  043-715-2498
                </a>
              </p>
              <p className="text-sm">
                <span className="text-gray-400 inline-block w-16">Email</span>
                <a
                  href="mailto:mediv_admin@mediv.kr"
                  className="hover:text-white transition-colors"
                >
                  mediv_admin@mediv.kr
                </a>
              </p>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">정책</h3>
            <Link
              href="/terms"
              className="text-sm hover:text-white transition-colors"
            >
              개인정보처리방침
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8">
          <p className="text-sm text-center text-gray-400">
            Copyright © {new Date().getFullYear()} Mediv. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
