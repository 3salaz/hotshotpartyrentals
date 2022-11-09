import React from "react";
import { motion } from "framer-motion";
import BouncingArrow from "./BouncingArrow";

function ToggleDropdown() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed bottom--200 bg-opacity-90 pb-2 p-2 w-full rounded-t-xl shadow-lg bg-purple-400" >
      <button onClick={handleOpen} className="z-100">
      <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 bottom-10 z-100 p-3"
        >
          <BouncingArrow className="text-2xl"/>
      </motion.div>
      </button>
      {open ?  <motion.div
      animate={{ y: 100 }}
      transition={{ delay: .5 }}
      className="rounded-t-xl shadow-lg bg-white">
        <ul className="sticky flex flex-col items-center">
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
      </motion.div> : <div className="w-full">Something Here</div>}
    </div>
  );
}

export default ToggleDropdown;
