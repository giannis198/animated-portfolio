"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          animate={{ height: "0vh" }}
          exit={{ height: "110vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
        />
        <motion.div
          animate={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2  text-white text-8xl cursor-default z-50 w-fit h-fit"
        >
          {pathname.substring(1)}
        </motion.div>
        <motion.div
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
          className="h-screen w-screen fixed bg-black bottom-0 rounded-t-[100px] z-40"
        />

        {children}
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
