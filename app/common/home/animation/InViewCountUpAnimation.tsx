import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const InViewCountUpAnimation: React.FC<{
  end: number;
  duration: number;
}> = ({ end, duration }) => {
  const countUpRef = useRef(null);
  const isInView = useInView(countUpRef, { amount: 0.3 });

  return (
    <span ref={countUpRef}>
      {isInView ? <CountUp end={end} duration={duration} /> : "0"}
    </span>
  );
};

export default InViewCountUpAnimation;
