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
    <div className="w-full pt-[4rem] md:pt-[rem]">
      {/* Showcase Wrapper */}
      <div className="smooth-scroll w-full h-screen flex items-align">
        {/* Card */}
        {/* <div className="w-340 md:w-656 h-[750px] flex items-center justify-center bg-white">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/hotshotpartyrentals-70927.appspot.com/o/website%2Ftemp%2Ffoam1.png?alt=media&token=90f785e1-63d3-4d00-9808-50b408759606"
          ></img>
        </div> */}
        <div className="w-full flex justify-center items-center">
          <div className="w-375 flex gap-4 flex-col">
          <motion.button
            className="rounded-md w-220 bg-mainOrange text-white shadow-lg p-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scroll(0, 600)}
          >
            View Packages
          </motion.button>

          {modalOpen && (
            <ModalCalendar modalOpen={modalOpen} handleClose={close} />
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => null}
            className="rounded-md w-220 bg-white text-black shadow-lg p-4"
          >
            
    <a
      href="javascript:void(
        window.open(
          'https://form.jotform.com/230359197359164',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    ">Reserve Rental 📦</a>  
          </motion.button>
          </div>
        </div>

        {/* <div className="w-340 md:w-656 h-[750px] min-w-[20rem] flex items-center justify-center bg-white">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/hotshotpartyrentals-70927.appspot.com/o/website%2Ftemp%2Ffoam2.png?alt=media&token=f3a17c49-8a43-430d-b053-6ce41cb80026"
          ></img>
        </div> */}
        {/* Card End */}
      </div>

      <div className="smooth-scroll w-full flex items-align bg-mainOrange">
        <div className="w-full bg-mainTeal">
          <div className="flex flex-col p-4 gap-4">
            <img className="bg-white rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/hotshotpartyrentals-70927.appspot.com/o/website%2Ftemp%2F1.png?alt=media&token=9f3807b3-6d5a-4555-a76c-61a0896c464e"></img>
            <h1 className="text-center text-2xl text-bold text-gray-800">Pisol M1911</h1>
            <p className="text-center">Top hopper that can be filled with bullets. Battery is in extended clip. Front handle is available for added stability, or can be folded away.</p>
            <div className=" bg-yellow-200 rounded-md p-2 flex gap-3 flex-col">
            <p className="text-center">Safety Gear ⚠️</p>
            <div className="flex items-center justify-center gap-2">
              <button className="bg-white rounded-lg p-1 text-sm">Face Shield</button>
              <button className="bg-white rounded-lg p-1 text-sm">Goggles</button>
            </div>
            </div>


          </div>
        </div>
        <div className="w-full bg-mainRed">
          <div className="flex flex-col p-4 gap-4">
            <img className="bg-white rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/hotshotpartyrentals-70927.appspot.com/o/website%2Ftemp%2F2.png?alt=media&token=d2b63301-028e-4ad5-b6a4-f863ed4e3d1e"></img>
            <h1 className="text-center text-2xl text-bold text-gray-800">Rifle M416</h1>
            <p className="text-center">Clip attached to the bottom and can be filled with bullets, butt stock for added stability as well as a extended barrel and scope for accuracy. </p>
            <div className=" bg-yellow-200 rounded-md flex gap-3 flex-col flex-wrap">
            <p className="text-center">Safety Gear ⚠️</p>
            <div className="flex items-center justify-center gap-2">
              <button className="bg-white rounded-lg p-1 text-sm">Face Shield</button>
              <button className="bg-white rounded-lg p-1 text-sm">Goggles</button>
            </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-mainBlue">
        <div className="flex flex-col p-4 gap-4">
          <img className="bg-white rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/hotshotpartyrentals-70927.appspot.com/o/website%2Ftemp%2F3.png?alt=media&token=69eb6715-bed5-498b-8dbd-e238450edec7"></img>
          <h1 className="text-center text-2xl text-bold text-gray-800">Foam Air Pressure Gun</h1>
          <p className="text-center">Foam balls are preloaded into the gun. Bottom handle and barrel handle are used to shoot the foam ball out. Single shot. (Adult help and supervision required</p>
          <div className=" bg-yellow-200 rounded-md flex gap-3 flex-col">
            <p className="text-center">Safety Gear ⚠️</p>
            <div className="flex items-center justify-center gap-2">
              <button className="bg-white rounded-lg p-1 text-sm">Face Shield</button>
              <button className="bg-white rounded-lg p-1 text-sm">Goggles</button>
            </div>
            </div>
          </div>
        </div>
        <div className="w-full min-w-410 bg-mainOrange">
        <div className="flex flex-col p-4 gap-4">
          <img className="bg-white rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/hotshotpartyrentals-70927.appspot.com/o/website%2Ftemp%2F1.png?alt=media&token=9f3807b3-6d5a-4555-a76c-61a0896c464e"></img>
          <h1 className="text-center text-2xl text-bold text-gray-800">Foam Air Pressure Animals</h1>
          <p className="text-center">A foam ball is placed in the animals mouth. Pressure applied to the body shoots the ball out. Single shot. (Adult help and supervision required).</p>
          <div className=" bg-yellow-200 rounded-md flex gap-3 flex-col">
            <p className="text-center">Safety Gear ⚠️</p>
            <div className="flex items-center justify-center gap-2">
              <button className="bg-white rounded-lg p-1 text-sm">Face Shield</button>
              <button className="bg-white rounded-lg p-1 text-sm">Goggles</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
