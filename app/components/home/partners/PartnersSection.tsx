// [x] 이미지 형식 기본 webp 제공하기
// [x] 왼쪽, 오른쪽 애니메이션 마우스 호버시 멈추기
// [] 모바일 환경에서 최소 3개 정도는 보이게 (작게) 설정

import partners from "@/app/data/partners";
import PartnersRowAnimation from "./PartnersRowAnimation";

const PartnersSection = () => {
  const middleIndex = Math.ceil(partners.length / 2);
  const firstRowPartners = partners.slice(0, middleIndex);
  const secondRowPartners = partners.slice(middleIndex);

  return (
    <section className="bg-gray-100 py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Partners
        </h2>
        <div className="space-y-12">
          <div>
            <PartnersRowAnimation
              partners={firstRowPartners}
              direction="left"
            />
          </div>
          <div>
            <PartnersRowAnimation
              partners={secondRowPartners}
              direction="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
