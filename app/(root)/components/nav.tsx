"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-20 sticky top-0 left-0 z-50 bg-white"
    >
      <div className="flex items-center w-full h-full">
        <div className="bg-bg2 p-2 px-4 md:px-24 h-full flex-shrink-0">
          <Image
            height={100}
            width={100}
            src="/logos/main_logo.webp"
            alt="Main Logo"
          />
        </div>
        <nav className="flex gap-2 md:gap-24 text-base md:text-3xl bg-[#424B54] py-2 md:py-4 font-ndot flex-1 justify-center items-center h-full">
          <a href="/about" className="hover:underline">
            ABOUT
          </a>
          <a href="/prize" className="hover:underline">
            PRIZE
          </a>
          <a href="/faqs" className="hover:underline">
            FAQ&apos;s
          </a>
          <a href="/contact" className="hover:underline">
            CONTACT
          </a>
        </nav>

        {/* Right Section - Partner Logos */}
        <div className="hidden md:flex items-center px-4 md:px-24 h-full bg-bg4 flex-shrink-0">
          <Image
            height={100}
            width={100}
            src="/logos/second_logo.webp"
            alt="Partner Logo"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
