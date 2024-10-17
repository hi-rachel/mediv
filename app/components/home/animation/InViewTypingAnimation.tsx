import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
  isInView: boolean;
}

const InViewTypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  delay = 0,
  speed = 50,
  isInView,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isInView) return;

    const timeoutId = setTimeout(() => {
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, delay, speed, isInView]);

  return <span>{displayedText}</span>;
};

export default InViewTypingAnimation;
