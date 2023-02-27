import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/initial";

function HeaderHero() {

  let header = siteConfig["home"]["sections"]["header"];
  return (
    <header className="flex justify-center items-center py-16 lg:py-28">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center justify-left">
              <div className="relative inline-block pt-3 lg:pt-0">
                <img
                  src={header.featuredHeaderImg}
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                />
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="block px-4 lg:hidden lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="pt-6 text-dark my-6 lg:mb-18 text-4xl font-bold leading-snug sm:text-[50px] lg:text-[40px] xl:text-[50px] text-center">
                {header.headerText}
              </h1>
              <p className="text-body-color my-6 lg:mt-2 lg:mb-16 text-base text-center items-center">
                {header.headerSubText}
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-3">
                <li>
                  <Link 
                    to={header.links.buttonLink.link}
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                    className="bg-orange-500 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                  >{header.links.buttonLink.text}</Link>
                </li>
                <li>
                  <a
                    href={header.links.simpleLink.link}
                    target="_blank"
                    className="text-body-color hover:text-orange-500 inline-flex items-center justify-center py-4 px-6 text-center text-base font-normal sm:px-10 lg:px-8 xl:px-10"
                  >
                    <span className="mr-2">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3056D3" />
                        <rect
                          x="6.90906"
                          y="13.3636"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="10.1818"
                          y="6"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    {header.links.simpleLink.text}
                  </a>
                </li>
              </ul>
              <div className="w-full flex items-center justify-center p-2">
                <button className="p-4 rounded-lg w-250 bg-mainBlue text-white"><a href="tel:(925)517-3939">Call Now:(925)517-3939</a></button>
              </div>
              <div className="clients pt-16">
                <h6 className="text-body-color mb-2 flex items-center text-xs font-normal">
                  Some Of Our Clients
                  <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                </h6>
                <div className="flex items-center">
                  {header.clientHighlight.map((client) => (
                    <div key={client.id} className="">
                      <img src={client.logoImg} alt={client.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}

export default HeaderHero;
