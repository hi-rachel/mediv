import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import PartnerCard from "./PartnerCard";

interface Partner {
  name: string;
  logo: string;
}

interface PartnersRowProps {
  partners: Partner[];
  direction: "left" | "right";
}

const PartnersRowAnimation: React.FC<PartnersRowProps> = ({
  partners,
  direction,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const positionRef = useRef(0);
  const totalWidth = 208 * partners.length;
  const duration = 10;
  const pixelsPerSecond = totalWidth / duration;
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    let animationFrameId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!isMountedRef.current) return; // 마운트 상태가 아니면 애니메이션 중지

      if (!lastTimestamp) lastTimestamp = timestamp; // 초기 타임스탬프 설정
      const elapsed = timestamp - lastTimestamp; // 경과 시간 계산
      lastTimestamp = timestamp; // 타임스탬프 업데이트

      if (!isHovered) {
        // 마우스 호버가 아닐 때만 애니메이션 진행
        positionRef.current += (pixelsPerSecond * elapsed) / 1000; // 위치 업데이트
        if (positionRef.current >= totalWidth * 10) {
          // 위치가 총 길이의 10배를 넘으면 초기화하여 무한 스크롤처럼 보이게 함
          positionRef.current -= totalWidth * 10;
        }

        const x =
          direction === "left"
            ? -positionRef.current // 왼쪽 방향일 경우 음수로 이동
            : positionRef.current - totalWidth * 10; // 오른쪽 방향일 경우 양수로 이동

        controls.start({ x }); // 애니메이션 위치를 설정 (start 사용)
      }

      animationFrameId = requestAnimationFrame(animate); // 다음 애니메이션 프레임 요청
    };

    animationFrameId = requestAnimationFrame(animate); // 애니메이션 프레임 요청

    return () => {
      isMountedRef.current = false; // 컴포넌트 언마운트 시 애니메이션 중지
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId); // 애니메이션 프레임 취소
      }
    };
  }, [
    isHovered,
    direction,
    partners.length,
    controls,
    totalWidth,
    pixelsPerSecond,
  ]);

  return (
    // 마우스가 올라가면 애니메이션 정지를 위해 상태 업데이트
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex space-x-8"
        animate={controls}
        initial={{ x: direction === "left" ? 0 : -totalWidth }}
      >
        {Array(10)
          .fill(partners)
          .flat()
          .map((partner, index) => (
            // 호버 시 확대 효과 적용
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <PartnerCard {...partner} />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default PartnersRowAnimation;
