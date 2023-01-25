import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenu, setIsMenu] = React.useState(false);
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <nav className=" drop-shadow-md w-full fixed z-10">
      {/* Desktop */}
      <div className="hidden bg-orange-500 px-10 justify-between md:flex rounded-b-md py-2">
        <a href="/" className="flex flex-row justify-center items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hotshotpartyrentals-70927.appspot.com/o/website%2FGraphics%2FLogos%2Ficon.png?alt=media&token=65e2bf1f-2f21-4d28-a8a1-6ba765706ed2"
            alt="hot-shot-party-rentals-logo"
            className="w-20 rounded-lg"
          />
          <div className="text-white text-xl font-bold">
            HotShot Party Rentals
          </div>
        </a>

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
          <li className=" hover:border-b-white hover:border-b-2">
            <Link
              to="/packages"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              Packages
            </Link>
          </li>
          <li className="">
            <a
              className="rounded-lg bg-white text-orange-400 p-3 drop-shadow-lg"
              href="https://hotshotpartyrentals.myshopify.com/"
              target="_blank"
            >
              Gallery
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-orange-500 justify-between items-center flex rounded-sm px-4">
        <Link
          href="/"
          className="flex flex-row justify-center items-center"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hotshotpartyrentals-70927.appspot.com/o/website%2FGraphics%2FLogos%2Ficon.png?alt=media&token=65e2bf1f-2f21-4d28-a8a1-6ba765706ed2"
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
            {/* {user && user.email === "3salaz.dev@gmail.com" && (
                                <Link to="/createItem">
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd /></p>
                                </Link>
                            )} */}

              <ul className="flex flex-col text-center">
                <Link
                  to={"/"}
                  className="text-base text-headerColor hover:text-headerColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  className="text-base text-headerColor hover:text-headerColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                >
                  About
                </Link> 
                <Link
                  to={"/packages"}
                  className="text-base text-headerColor hover:text-headerColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                >
                  Packages
                </Link>
                <Link
                  to={"/faq"}
                  className="text-base text-headerColor hover:text-headerColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                >
                  FAQ
                </Link>
              </ul>
            </motion.div>
          )}
        </div>

        {/* <div className="bg-white p-2 flex justify-center items-center rounded-sm">
          <HiMenu className="text-2xl text-orange-500" />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
