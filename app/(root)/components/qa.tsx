"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlinkText from "./blinkText";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" my-8 ">
      <div
        className="flex justify-between items-center p-4 cursor-pointer mask-acc min-h-24 bg-bg3"
        onClick={toggleAccordion}
      >
        <h2 className="font-ndot text-lg md:text-3xl md:px-16 text-black">
          {title}
        </h2>
        <span
          className={`transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {/* This is the arrow icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </div>

      {/* Accordion Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -20, opacity: 0 }}
            className="p-4 pb-10 md:px-16 bg-[#E1E4EA] rounded-b-md md:rounded-b-lg"
          >
            <p className="text-[#000000] md:text-xl">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Qa = () => {
  const accordionData = [
    {
      title: "WHAT'S NEXT AFTER THE SELECTION?",
      content:
        "Get ready to unlock mentorship, networking opportunities, and potential career paths in hardware and IoT. And of course, bragging rights as one of India’s top makers!",
    },
    {
      title: "HOW DO I START ?",
      content:
        "To start with Top 100 Makers, sign up and join the µLearn Discord server. Connect your account, get your MUID, and build your portfolio in the /profile directory on GitHub. Submit a pull request to showcase your work, link your µLearn profile, and engage in the Discord channels.",
    },
  ];
  return (
    <div className="p-8  bg-bg2">
      <div className="md:px-32 ">
        <BlinkText>
          <h1 className="title text-black ">Still Have Questions?</h1>
        </BlinkText>
        {
          // Accordion Component
          accordionData.map((data, index) => (
            <Accordion key={index} title={data.title} content={data.content} />
          ))
        }
      </div>
    </div>
  );
};

export default Qa;
