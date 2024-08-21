'use client';

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative z-20 hidden lg:block">
      <motion.div className="fixed left-0 bottom-0 bg-grey-lightest h-2 w-full origin-left" style={{ scaleX }} />
    </div>
  );
}

export default ScrollIndicator;
