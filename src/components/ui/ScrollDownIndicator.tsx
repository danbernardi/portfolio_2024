'use client';

import { motion } from "framer-motion";
import './ScrollDownIndicator.css';
import Link from "next/link";

const ScrollDownIndicator = () => {
  return (
    <div className="flex w-full h-full absolute top-0 left-0 items-end justify-center pb-24">
      <div className="flex items-center">
        <motion.div
          className="relative"
          initial={{
            y: -20,
          }}
          animate={{
            y: -40,
          }}
          transition={{
            type: 'spring',
            damping: 7,
            stiffness: 50,
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: 0.5
          }}
        >
          <Link href="#about"><div className="mouse" /></Link>
        </motion.div>
      </div>
    </div>
  ) 
}

export default ScrollDownIndicator;
