import React from "react";
import { Backdrop } from "..";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

function Sharpshooter({ handleClose, text }) {
  return (
    <Backdrop onClick={handleClose}>
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      className="w-full md:w-880 lg:w-[70%] px-4 "
    >
      <div className="bg-mainOrange w-full p-8 px-6 rounded-md">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 pb-6">
        <img
            src="https://via.placeholder.com/500x300"
            className="w-500 rounded-md hidden"
          ></img>
          <ul className="flex flex-col gap-2 w-480 md:w-350 text-center overflow-auto max-h-80 rounded-md border p-4 border-white drop-shadow-2xl bg-yellow-200">
            <li className="bg-mainTeal text-white p-2 rounded-md">
            Recommended for ages 8 and up
            </li>
            <li className="bg-mainTeal text-white p-2 rounded-md">
              1 hour of play time
            </li>
            <li className="bg-mainTeal text-white p-2 rounded-md">
              Up to 10 participants
            </li>
            <li className="bg-mainTeal text-white p-2 rounded-md">
              Gel Blaster Pistols
            </li>
            <li className="bg-mainTeal text-white p-2 rounded-md">
              Safety equipment
            </li>
            <li className="bg-mainTeal text-white p-2 rounded-md">
              Barriers to hide in and around
            </li>
            <li className="bg-mainTeal text-white p-2 rounded-md">
              Experienced party host
            </li>
            <li className="bg-mainTeal text-white p-2 rounded-md">
              Gel Blaster Bullets
            </li>
          </ul>
        </div>
        <div className="text-4xl text-center p-4">Sharpshooter<span className="text-4xl md:text-6xl pt-8 text-center">$400</span></div>
        <div className="flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scroll(0, 1400)}
            className="bg-mainBlue text-orange-50 m-auto w-full md:w-300 p-2 rounded-sm mb-8"
          >
            <a href="https://form.jotform.com/230359197359164">
              Reserve Your Package
            </a>
          </motion.button>
        </div>
      </div>

      <button
        className="shadow-2xl drop-shadow-2xl absolute bottom-2 right-6 bg-white border-2 border-gray-600 p-2 px-12 rounded-xl"
        onClick={handleClose}
      >
        Close
      </button>
      {text}
    </motion.div>
  </Backdrop>
  );
}

export default Sharpshooter;
