"use client";

import { motion } from "framer-motion";

const MotionText = ({ text }) => {
  return (
    <div>
      {text.split("").map((letter, index) => (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
      😊
    </div>
  );
};

export default MotionText;
