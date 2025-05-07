import { motion as Motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimationWrapper = ({ children, delay = 0, customVariants }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  const defaultVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      rotateX: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay,
      },
    },
  };

  return (
    <Motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={customVariants || defaultVariants}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </Motion.div>
  );
};

export default AnimationWrapper;
