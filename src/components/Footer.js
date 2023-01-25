import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-1 bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 text-center">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Features</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-500 hover:text-orange-500"
                >
                  Marksman
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-500 hover:text-orange-500"
                >
                  Sharpshooter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-500 hover:text-orange-500"
                >
                  Expert
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-500 hover:text-orange-500"
                >
                  Safety Waiver
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-500 hover:text-orange-500"
                >
                  Checklist
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Help</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-500 hover:text-orange-500"
                >
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-500 hover:text-orange-500"
                >
                  Terms
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-500 hover:text-orange-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center">
              Stay connected
            </h5>
            <div className="flex justify-center items-center text-center">
              <a
                href="https://www.facebook.com/Hotshotpartyrentals/"
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 flex justify-center items-center"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/hotshotpartyrentals/"
                className="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-500 hover:text-white hover:bg-blue-400 hover:border-blue-400 flex justify-center items-center"
              >
                <BsInstagram />
              </a>
              <a
                href=""
                className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-500 hover:text-white hover:bg-red-500 hover:border-red-500 flex justify-center items-center"
              >
                <BsYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t text-center">
          <div className="sm:w-full px-4 md:w-1/6">
            <strong>HSPR</strong>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Address</h6>
            <address className="not-italic mb-4 text-sm">
              {/* 123 6th St.
                            <br/> */}
              Pittsburg, CA 94565
            </address>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Free Resources</h6>
            <p className="mb-4 text-sm">
              Use our links for <strong>more info</strong>.
              <br />
              <em>Serving The San Francisco Bay Area</em>
            </p>
          </div>
          <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button className="px-4 py-2 bg-orange-500 hover:bg-orange-500 rounded text-white">
              <Link
                to="/packages"
                onClick={() => {
                  window.scroll(0, 0);
                }}
                className="bg-orange-500 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
              >
                Packages
              </Link>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
