import React, { useState } from "react";
import { InquiryForm, ModalCalendar } from "../components";
import { motion } from "framer-motion";

const Packages = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };
  return (
    <div className="w-full pt-16">
      {/* Showcase Wrapper */}
      <div className="smooth-scroll w-full h-screen flex md:items-align bg-mainTeal">
        {/* Card */}
        <div className="w-340 md:w-656 h-[750px] flex items-center justify-center bg-white">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/hotshotpartyrentals-70927.appspot.com/o/website%2Ftemp%2FBeige%20Minimalist%20Sale%20New%20Arrivals%20Instagram%20Story.png?alt=media&token=de15e043-cc43-4d99-bc1c-79195b4b4fa9"
          ></img>
        </div>
        <div className="w-375 flex gap-4 flex-col justify-center items-center">
          {/* <iframe className="w-full" src="https://calendar.google.com/calendar/embed?src=28085d6549f7d53bb8a10ab1ba10c11197493ca082c73aca07bd3648988341f5%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameBorder="0"></iframe> */}
          <motion.button
            className="rounded-md w-220 bg-white shadow-lg p-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : open())}
          >
            View Calendar 📆
          </motion.button>

          {modalOpen && (
            <ModalCalendar modalOpen={modalOpen} handleClose={close} />
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => null}
            className="rounded-md w-220 bg-white shadow-lg p-4"
          >
            Reserve Package 📦
          </motion.button>
        </div>
        <div className="w-340 md:w-656 h-[750px] min-w-[20rem] flex items-center justify-center bg-white">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/hotshotpartyrentals-70927.appspot.com/o/website%2Ftemp%2FBeige%20Minimalist%20Sale%20New%20Arrivals%20Instagram%20Story.png?alt=media&token=de15e043-cc43-4d99-bc1c-79195b4b4fa9"
          ></img>
        </div>
        {/* Card End */}
      </div>
      <div className="smooth-scroll min-w-380 w-full h-340 flex items-align bg-mainOrange">
        <div className="min-w-380 p-2 bg-white">
        </div>

        <div className="w-full min-w-380 bg-mainRed">
        </div>
        <div className="w-full min-w-380 bg-mainBlue">
        </div>
      </div>
      <InquiryForm />
    </div>
  );
};

export default Packages;
