import Image from "next/image";

const Vision = () => {
  return (
    <div className="text-center flex justify-center flex-col items-center gap-10">
      <Image src="/mediv-logo.png" alt="mediv-logo" width={300} height={300} />
      <div className="text-2xl">
        <p className="mb-5">Medical + Innovative Vision</p>
        <p className="text-text">
          AI·빅데이터로 혁신의료기술 실현을 지향합니다.
        </p>
      </div>
    </div>
  );
};

export default Vision;
