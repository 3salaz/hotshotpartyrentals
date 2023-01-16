import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const menuToggle = () => {};
  return (
    <nav className=" drop-shadow-md w-full">
      <div className="hidden bg-orange-500 px-10 justify-between md:flex rounded-lg py-2">
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
              Shop
            </a>
          </li>
        </ul>
      </div>

      <div className="md:hidden bg-orange-500 px-2 justify-between items-center flex rounded-sm">
        <a href="/" className="flex flex-row justify-center items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hotshotpartyrentals-70927.appspot.com/o/website%2FGraphics%2FLogos%2Ficon.png?alt=media&token=65e2bf1f-2f21-4d28-a8a1-6ba765706ed2"
            alt="hot-shot-party-rentals-logo"
            className="w-16 rounded-lg p-1"
          />
          <div className="text-white text-xl font-bold">
            Hot Shot Party Rentals
          </div>
        </a>
        <div className="bg-white p-2 flex justify-center items-center rounded-sm">
          <HiMenu onClick={menuToggle()} className="text-2xl text-orange-500" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
