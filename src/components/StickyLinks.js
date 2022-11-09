import React from "react";
import { motion } from "framer-motion";
import BouncingArrow from "./BouncingArrow";

function StickyLinks() {
  // const toggleContact = () => {
  //   let isOpen;
  //   console.log(`The toggle component is open | ${isOpen}`);
  //   if (isOpen === undefined || isOpen === true) {
  //     isOpen = false;
  //     console.log(`The toggle component is open | ${isOpen}`);
  //   } else {
  //     isOpen = true;
  //     console.log(`The toggle component is open | ${isOpen}`);
  //   }
  //   console.log(`The toggle component is open ${isOpen}`);
  // };
  return (
    <>
      <div className="fixed bottom-0 z-50  bg-opacity-90 pb-2 p-2 w-full rounded-t-xl shadow-lg">
        <ul className="sticky bg-white flex flex-col items-center">
          <li className="p-3">
            <button className="rounded-md text-white drop-shadow-lg bg-orange-400 p-2 min-w-[150px] w-225 text-lg">
              Call Now
            </button>
          </li>
          <li className="p-3">
            <button className="rounded-md text-white drop-shadow-lg bg-green-400 p-2 min-w-[150px] w-225 text-lg">
              View Packages
            </button>
          </li>
        </ul>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick=""
          className="absolute right-0 bottom-0 z-50 p-3"
        >
          <BouncingArrow className="text-2xl"/>
        </motion.div>
      </div>
    </>
  );
}

export default StickyLinks;
