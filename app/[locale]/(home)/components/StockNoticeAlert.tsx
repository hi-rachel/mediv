import React, { useState } from "react";
import { X } from "lucide-react";

const StockNoticeAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-blue-50 py-2">
      <div className="max-w-4xl mx-auto px-4 text-sm text-gray-700">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-blue-100 rounded-full transition-colors"
          aria-label="닫기"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>

        <span className="font-semibold mr-2">신주발행공고:</span>
        <span>보통주식 19,351주 (1주 10,000원) 제3자 배정 유상증자</span>
        <button
          onClick={() =>
            window.alert(`
신 주 발 행 공 고

상법 제416조에 의거 2025년 1월 14일에 개최한 당사 주주총회에서 가수금 유상증자에 따른 신주발행에 관하여 상법 제418조 제4항에 의거하여 아래와 같이 결의 하였기에 그 내용을 공고합니다.

1. 신주의 종류와 수: 보통주식 19,351주
2. 신주의 발행가역: 1주 10,000원
3. 주금납입일: 2025년 1월 15일
4. 신주의 인수 방법: 제3자 배정 유상증자
5. 신주인수권의 사항: 유통제한 없음
6. 주금 납입 금융기관: 상법 제421조 제2항에 의한 상계납입

2025.01.14.

주식회사 메디브

충청북도 청주시 서원구 충대로 1, E9(학연산공동기술연구원), 402호

대표이사 박승
          `)
          }
          className="ml-2 text-blue-600 hover:underline cursor-pointer"
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
};

export default StockNoticeAlert;
