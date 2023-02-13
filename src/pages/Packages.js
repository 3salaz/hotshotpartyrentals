import React, { useState } from "react";
import videoBackground from "../assets/videos/playground.mp4";
import weapon1 from "../assets/img/weapon1.png";
import weapon2 from "../assets/img/weapon2.png";
import weapon3 from "../assets/img/weapon3.png";
import weapon4 from "../assets/img/weapon4.png";
import { MarksmanModal, SharpshooterModal, ExpertModal } from "../components";
import { siteConfig } from "../data/initial";
import { motion, AnimatePresence } from "framer-motion";

const Packages = () => {
  const [modalOneOpen, setModalOneOpen] = useState(false);
  const closeModalOne = () => setModalOneOpen(false);
  const openModalOne = () => setModalOneOpen(true);

  const [modalTwoOpen, setModalTwoOpen] = useState(false);
  const closeModalTwo = () => setModalTwoOpen(false);
  const openModalTwo = () => setModalTwoOpen(true);

  const [modalThreeOpen, setModalThreeOpen] = useState(false);
  const closeModalThree = () => setModalThreeOpen(false);
  const openModalThree = () => setModalThreeOpen(true);

  return (
    <div className="w-full md:pt-24">
      <div className="w-full h-screen">
        <video
          className="w-full h-full object-cover"
          controls={false}
          autoPlay
          playsInline
          loop
          muted
          src={videoBackground}
        />
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center gap-4">
          <div className="text-6xl md:text-8xl text-white font-bold drop-shadow-2xl">
            Packages
          </div>
          <motion.button
            className="rounded-md w-220 bg-mainOrange text-white shadow-lg p-4 hidden md:block "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scroll(0, 1400)}
          >
            View Weapons
          </motion.button>

          <motion.button
            className="rounded-md w-220 bg-mainOrange text-white shadow-lg p-4 md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scroll(0, 1800)}
          >
            View Weapons
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => null}
            className="rounded-md w-220 bg-white text-black shadow-lg p-4"
          >
            <a target="_blank" href="https://form.jotform.com/230359197359164">
              Reserve Rental 📦
            </a>
          </motion.button>
        </div>
      </div>
      {/* Package Pricing */}
      <section className="relative overflow-hidden pt-10 px-10 bg-img-grad-1">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <p className="text-white drop-shadow-lg mb-4 text-5xl font-bold text-center">
                  Check Them Out Below
                </p>
                <p className="text-body-color text-base text-gray-700">
                  A deposit is required to book your event, Deposit amount due
                  to book your event is $200.00, Cancellations must be made no
                  less than 5 days in advance or no refund will be granted.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="border-mainRed shadow-xl relative mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
                <span className="text-mainRed mb-4 block text-lg font-semibold text-center">
                  Marksman
                </span>
                <h2 className="text-dark mb-5 text-[42px] font-bold text-center">
                  $375
                  <span className="text-body-color text-base font-medium">
                    {" "}
                    / pkg{" "}
                  </span>
                </h2>
                <img
                  className="hidden rounded-xl mb-2 shadow-lg"
                  src="https://via.placeholder.com/400x200"
                ></img>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-mainRed border-mainRed hover:bg-mainRed block w-full rounded-md border bg-transparent p-4 text-center text-base font-semibold transition hover:text-white"
                  onClick={() =>
                    modalOneOpen ? closeModalOne() : openModalOne()
                  }
                >
                  View Marksman
                </motion.button>
              </div>

            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="border-mainRed shadow-pricing relative mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
                <span className="text-mainRed mb-4 block text-lg font-semibold text-center">
                  Sharpshooter
                </span>
                <h2 className="text-dark mb-5 text-[42px] font-bold text-center">
                  $400
                  <span className="text-body-color text-base font-medium">
                    {" "}
                    / pkg{" "}
                  </span>
                </h2>
                <img
                  className="hidden rounded-xl mb-2 shadow-lg"
                  src="https://via.placeholder.com/400x200"
                ></img>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-mainRed border-mainRed hover:bg-mainRed block w-full rounded-md border bg-transparent p-4 text-center text-base font-semibold transition hover:text-white"
                  onClick={() =>
                    modalTwoOpen ? closeModalTwo() : openModalTwo()
                  }
                >
                  View Sharpshooter
                </motion.button>
              </div>

            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="border-mainRed shadow-pricing relative mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
                <span className="text-mainRed mb-4 block text-lg font-semibold text-center">
                  Expert
                </span>
                <h2 className="text-dark mb-5 text-[42px] font-bold text-center">
                  $425
                  <span className="text-body-color text-base font-medium">
                    {" "}
                    / pkg{" "}
                  </span>
                </h2>
                <img
                  className="hidden rounded-xl mb-2 shadow-lg"
                  src="https://via.placeholder.com/400x200"
                ></img>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-mainRed border-mainRed hover:bg-mainRed block w-full rounded-md border bg-transparent p-4 text-center text-base font-semibold transition hover:text-white"
                  onClick={() =>
                    modalThreeOpen ? closeModalThree() : openModalThree()
                  }
                >
                  View Expert
                </motion.button>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <section className="smooth-scroll w-full flex items-align">
        <div className="w-full min-w-350 bg-mainTeal">
          <div className="flex flex-col p-4 gap-4">
            <img className="bg-white rounded-lg" src={weapon1}></img>
            <h1 className="text-center text-2xl text-bold text-gray-800">
              Pisol M1911
            </h1>
            <p className="text-center h-150">
              Top hopper that can be filled with bullets. Battery is in extended
              clip. Front handle is available for added stability, or can be
              folded away.
            </p>
            <div className=" bg-yellow-200 rounded-md p-2 flex gap-3 flex-col">
              <p className="text-center">Safety Gear ⚠️</p>
              <div className="flex items-center justify-center gap-2">
                <button className="bg-white rounded-lg p-1 text-sm">
                  Face Shield
                </button>
                <button className="bg-white rounded-lg p-1 text-sm">
                  Goggles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-w-350 bg-mainRed">
          <div className="flex flex-col p-4 gap-4">
            <img className="bg-white rounded-lg" src={weapon2}></img>
            <h1 className="text-center text-2xl text-bold text-gray-800">
              Rifle M416
            </h1>
            <p className="text-center h-150">
              Clip attached to the bottom and can be filled with bullets, butt
              stock for added stability as well as a extended barrel and scope
              for accuracy.{" "}
            </p>
            <div className=" bg-yellow-200 rounded-md p-2 flex gap-3 flex-col flex-wrap">
              <p className="text-center">Safety Gear ⚠️</p>
              <div className="flex items-center justify-center gap-2">
                <button className="bg-white rounded-lg p-1 text-sm">
                  Face Shield
                </button>
                <button className="bg-white rounded-lg p-1 text-sm">
                  Goggles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-w-350 bg-mainBlue">
          <div className="flex flex-col p-4 gap-4">
            <img className="bg-white rounded-lg" src={weapon3}></img>
            <h1 className="text-center text-2xl text-bold text-gray-800">
              Foam Air Pressure Gun
            </h1>
            <p className="text-center h-150">
              Foam balls are preloaded into the gun. Bottom handle and barrel
              handle are used to shoot the foam ball out. Single shot. (Adult
              help and supervision required
            </p>
            <div className=" bg-yellow-200 p-2 rounded-md flex gap-3 flex-col">
              <p className="text-center">Safety Gear ⚠️</p>
              <div className="flex items-center justify-center gap-2">
                <button className="bg-white rounded-lg p-1 text-sm">
                  Face Shield
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-w-350 bg-mainOrange">
          <div className="flex flex-col p-4 gap-4">
            <img className="bg-white rounded-lg" src={weapon4}></img>
            <h1 className="text-center text-2xl text-bold text-gray-800">
              Foam Air Pressure Animals
            </h1>
            <p className="text-center h-150">
              A foam ball is placed in the animals mouth. Pressure applied to
              the body shoots the ball out. Single shot. (Adult help and
              supervision required).
            </p>
            <div className=" bg-yellow-200 p-2 rounded-md flex gap-3 flex-col">
              <p className="text-center">Safety Gear ⚠️</p>
              <div className="flex items-center justify-center gap-2">
                <button className="bg-white rounded-lg p-1 text-sm">
                  Face Shield
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modals */}
      <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
              >
                {modalOneOpen && (
                  <MarksmanModal
                    modalOpen={modalOneOpen}
                    handleClose={closeModalOne}
                  />
                )}
      </AnimatePresence>
      <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
              >
                {modalTwoOpen && (
                  <SharpshooterModal
                    modalOpen={modalTwoOpen}
                    handleClose={closeModalTwo}
                  />
                )}
      </AnimatePresence>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalThreeOpen && (
          <ExpertModal
            modalOpen={modalThreeOpen}
            handleClose={closeModalThree}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Packages;
