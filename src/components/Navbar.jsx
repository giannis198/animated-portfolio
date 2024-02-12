"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLinks from "./NavLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import Logo from "./Logo";
import { motion } from "framer-motion";

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 180,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="h-full flex items-center justify-between container text-lg relative z-10">
      <div className="hidden md:flex gap-4 w-1/3">
        {/* Links */}
        <NavLinks links={links} />
      </div>

      <div className="md:hidden lg:flex justify-center lg:w-1/3">
        {/* Logo */}
        <Logo />
      </div>
      <div className="hidden md:flex gap-x-4 lg:justify-end w-1/3 ">
        {/* Social Media Links */}
        <SocialMediaLinks />
      </div>

      <div className="md:hidden">
        {/* Mobile Sidebar */}
        <button className="z-50 relative" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <motion.div
              variants={variants}
              animate={isOpen ? "opened" : "closed"}
            >
              <X className="w-10 h-8" stroke="white" />
            </motion.div>
          ) : (
            <motion.div
              variants={variants}
              animate={isOpen ? "opened" : "closed"}
            >
              <Menu className="w-10 h-8" />
            </motion.div>
          )}
        </button>
        {isOpen && (
          <motion.nav
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            <NavLinks links={links} isOpen={isOpen} />
          </motion.nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
