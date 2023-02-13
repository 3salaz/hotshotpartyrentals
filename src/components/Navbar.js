import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import icon from '../assets/img/icon.png';

const Navbar = () => {
  const [isMenu, setIsMenu] = React.useState(false);
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <nav className=" drop-shadow-md w-full fixed z-10">
      {/* Desktop */}
      <div className="hidden bg-orange-500 px-10 justify-between md:flex py-2">
        <Link
          to="/"
          onClick={() => {
            window.scroll(0, 0);
          }}
          className="flex flex-row justify-center items-center"
        >
          <img
            src= {icon}
            alt="hot-shot-party-rentals-logo"
            className="w-20 rounded-lg"
          />
          <div className="text-white text-xl font-bold">
            HotShot Party Rentals
          </div>
        </Link>

        <ul className="flex justify-space-evenly items-center text-white font-bold gap-4 text-lg">
          <li className=" hover:border-b-white hover:border-b-2">
            <Link
              className="flex justify-center items-center"
              to="/"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              Home
            </Link>
          </li>
          <li className=" hover:border-b-white hover:border-b-2">
            <Link
              className="flex justify-center items-center"
              to="/about"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              About
            </Link>
          </li>
          <li className=" hover:border-b-white hover:border-b-2">
            <Link
              className="flex justify-center items-center"
              to="/faq"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              FAQ
            </Link>
          </li>
          <li className=" rounded-lg bg-white text-orange-400 p-3 drop-shadow-lg">
            <Link
              to="/packages"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              Packages
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-orange-500 justify-between items-center flex rounded-sm px-4">
        <Link
          to="/"
          onClick={() => {
            window.scroll(0, 0);
          }}
          className="flex flex-row justify-center items-center"
        >
          <img
            src={icon}
            alt="hot-shot-party-rentals-logo"
            className="w-16 rounded-lg p-1"
          />
          <div className="text-white text-xl font-bold">
            Hot Shot Party Rentals
          </div>
        </Link>
        <div className="relative">
          {/* <motion.img whileTap={{ scale: 0.6 }} className='w-0 min-w-[40px] h-10 min-h-[40px] ml-3 drop-shadow-xl rounded-full'
                        src={user ? user.photoURL : Avatar}
                        alt="uP"
                        onClick={login}
                    /> */}
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="w-0 min-w-[40px] h-10 min-h-[40px] ml-3 drop-shadow-xl rounded-full bg-white flex items-center justify-center"
            onClick={toggleMenu}
          >
            <HiMenu className="text-xl" />
          </motion.div>
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute top-12 mr-1 right-0 w-150 bg-white shadow-xl rounded-lg flex flex-col"
            >
              <ul className="flex flex-col text-center">
                <Link
                  to={"/"}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  className="text-base text-headerColor hover:text-headerColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  className="text-base text-headerColor hover:text-headerColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                >
                  About
                </Link>
                <Link
                  to={"/faq"}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  className="text-base text-headerColor hover:text-headerColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                >
                  FAQ
                </Link>
                <Link
                  to={"/packages"}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  className="text-base text-headerColor hover:text-headerColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                >
                  Packages
                </Link>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
