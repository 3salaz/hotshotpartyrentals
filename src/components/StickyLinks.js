import React from "react";
import { motion } from "framer-motion";
import BouncingArrow from "./BouncingArrow";

function StickyLinks() {
  return (
    <>
      <div className="fixed bottom-0 z-50  bg-opacity-90 w-full rounded-t-xl shadow-xl bg-white border">
        <div className="sticky flex items-center justify-center flex-col py-6">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick=""
            className="z-50 p-3"
          >
            <BouncingArrow className="text-2xl" />
          </motion.div>
          <ul className="flex flex-col items-center">
            <li className="py-1">
              <button className="rounded-md text-white drop-shadow-lg bg-orange-400 p-2 min-w-[150px] w-225 text-lg">
                Call Now
              </button>
            </li>
            <li className="py-1">
              <button className="rounded-md text-white drop-shadow-lg bg-green-400 p-2 min-w-[150px] w-225 text-lg">
                View Packages
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default StickyLinks;
