import { useState } from "react";
import { X } from "lucide-react";

const StockNoticeAlert = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);

  if (!isVisible) return null;

  return (
    <>
      <div className="relative w-full bg-blue-50 py-2">
        <div className="max-w-4xl mx-auto px-4 text-sm text-gray-700">
          <div className="absolute top-0 right-0">
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-blue-100 rounded-full transition-colors absolute top-0"
              aria-label="닫기"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <span className="font-semibold mr-2">신주발행공고:</span>
          <span>보통주식 19,351주 (1주 10,000원) 제3자 배정 유상증자</span>
          <button
            onClick={() => setShowModal(true)}
            className="ml-2 text-blue-600 hover:underline cursor-pointer"
          >
            자세히 보기
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-3xl font-bold mx-auto">신 주 발 행 공 고</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-gray-700">
              <p className="whitespace-pre-line text-gray-500 break-words pb-4 text-center px-10">
                상법 제416조에 의거 2025년 1월 14일에 개최한 당사 주주총회에서
                가수금 유상증자에 따른 신주발행에 관하여 상법 제418조 제4항에
                의거하여 아래와 같이 결의하였기에 그 내용을 공고합니다.
              </p>
              <div className="flex justify-center flex-col text-center items-center border mx-20">
                <h2 className="text-xl font-semibold bg-gray-200 w-full">
                  - 아 래 -
                </h2>
                <ul className="space-y-2 text-left pt-4 p-4">
                  <li>1. 신주의 종류와 수: 보통주식 19,351주</li>
                  <li>2. 신주의 발행가역: 1주 10,000원</li>
                  <li>3. 주금납입일: 2025년 1월 15일</li>
                  <li>4. 신주의 인수 방법: 제3자 배정 유상증자</li>
                  <li>5. 신주인수권의 사항: 유통제한 없음</li>
                  <li>
                    6. 주금 납입 금융기관: 상법 제421조 제2항에 의한 상계납입
                  </li>
                </ul>
              </div>
              <div className="pt-4 space-y-1 text-center">
                <p className="pb-2">2025.01.14.</p>
                <p className="pb-2 text-gray-500">
                  충청북도 청주시 서원구 충대로 1, E9(학연산공동기술연구원),
                  402호
                </p>
                <p className="font-bold">주식회사 메디브</p>
                <p className="font-bold">대표이사 박승</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StockNoticeAlert;
