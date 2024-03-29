"use client";

import LinkItem from "./LinkItem";
import { motion } from "framer-motion";

const NavLinks = ({ links }) => {
  const linkItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {links.map((link, index) => (
        <motion.div
          variants={linkItemVariants}
          key={index}
          className="relative z-[99999]"
        >
          <LinkItem link={link} />
        </motion.div>
      ))}
    </>
  );
};

export default NavLinks;
