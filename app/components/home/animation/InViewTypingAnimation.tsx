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

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startTyping = () => {
      let i = 0;
      intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
    };

    timeoutId = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay, speed, isInView]);

  return <span>{displayedText}</span>;
};

export default InViewTypingAnimation;
