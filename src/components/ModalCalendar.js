import React from "react";
import { motion } from "framer-motion";
import { Backdrop } from '../components';

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transitiom: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
}
function ModalCalendar({ handleClose, text }) {
  if (!open) return null;
  return (
    <Backdrop onClick={handleClose}>
      <motion.div 
        onClick={(e) => e.stopPropagation()}
        className="w-[95%] bg-gradient-to-tr bg-white m-auto px-[2rem] rounded-[12px] flex flex-col items-center h-[380px]"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <iframe className="h-full" src="https://calendar.google.com/calendar/embed?src=28085d6549f7d53bb8a10ab1ba10c11197493ca082c73aca07bd3648988341f5%40group.calendar.google.com&ctz=America%2FLos_Angeles"></iframe>
      </motion.div>
    </Backdrop>    // <div className="w-full rounded-lg backdrop-blur-md h-screen z-50 fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
    //   <div className="flex h-full items-center justify-center">
    //     <div className="bg-white drop-shadow-md rounded-lg w-340 h-685 md:w-508 lg:w-880 mdh-420 px-8 py-4">
    //       <button className="bg-orange-500 border-2 text-white border-red-400 p-1 rounded-xl" onClick={onClose}>
    //         Close
    //       </button>
    //       {children}
    //     </div>
    //   </div>
    // </div>
  );
}

export default ModalCalendar;
