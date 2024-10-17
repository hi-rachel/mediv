// app/research/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ResearchItem {
  category: string;
  title: string;
  author?: string;
  publication?: string;
  patentNumber?: string;
}

const ResearchPage: React.FC = () => {
  const papers: ResearchItem[] = [
    {
      category: "AI",
      title:
        "Prognostic prediction of sepsis patient using transformer with skip connected token for tabular data",
      author: "Jee-Woo Choi et al.",
      publication: "Artificial Intelligence in Medicine (IF 7.5)",
    },
    {
      category: "AI",
      title: "제목을 길게 작성",
      author: "저자",
      publication: "출판",
    },
    // 추가 논문 항목...
  ];

  const patents: ResearchItem[] = [
    {
      category: "특허",
      title: "심전도 신호를 이용한 신경망 기반의 심근경색 진단 시스템",
      patentNumber: "10-2024-0056511",
    },
    {
      category: "특허",
      title: "블록체인 네트워크 기반의 의료정보 추적 시스템의 동작 방법",
      patentNumber: "10-2023-0171590",
    },
    {
      category: "특허",
      title:
        "심전도 기록지의 각 구역을 분할하여 저장하는 전자 장치의 제어 방법",
      patentNumber: "10-2022-0191118",
    },
    // 추가 특허 항목...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-80 bg-gradient-to-r from-blue-600 to-purple-600">
        <Image
          src="/research-banner.jpg"
          alt="Research Banner"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Research
            </h1>
            <p className="text-xl text-white">
              메디브는 끊임없이 연구하여 검증된 신뢰를 바탕으로 성장합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">논문</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {papers.map((paper, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2">
                    {paper.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-2">{paper.author}</p>
                  <p className="text-gray-500 text-sm">{paper.publication}</p>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6">특허</h2>
          <div className="space-y-4">
            {patents.map((patent, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-2">
                  {patent.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{patent.title}</h3>
                <p className="text-gray-600">출원번호: {patent.patentNumber}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
