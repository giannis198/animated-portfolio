"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
      <h1 className="text-8xl">Do you have a project?</h1>
      <div className="relative">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          viewBox="0 0 300 300"
          className="w-64 h-64 md:w-[500px] md:h-[500px] "
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <text fill="#000">
            <textPath xlinkHref="#circlePath" className="text-xl">
              Front-end Developer and UI Designer
            </textPath>
          </text>
        </motion.svg>
        <Link
          href="/contact"
          className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center z-50"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default CTA;
