import React, { useEffect, useState, useRef } from "react";
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
  const totalWidth = 300 * partners.length;
  const duration = 20;
  const pixelsPerSecond = totalWidth / duration;
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    let animationFrameId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!isMountedRef.current) return;

      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isHovered) {
        positionRef.current += (pixelsPerSecond * elapsed) / 1000;
        if (positionRef.current >= totalWidth) {
          positionRef.current -= totalWidth;
        }

        const x =
          direction === "left"
            ? -positionRef.current
            : positionRef.current - totalWidth;

        controls.set({ x }); // Use set instead of start
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      isMountedRef.current = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
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
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex space-x-8"
        animate={controls}
        initial={{ x: direction === "left" ? 0 : -totalWidth }}
      >
        {partners.concat(partners).map((partner, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }}>
            <PartnerCard {...partner} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnersRowAnimation;
