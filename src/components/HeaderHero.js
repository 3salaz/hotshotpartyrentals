import React from "react";

function HeaderHero() {
  return (
    // relative bg-white pb-[40px] lg:pt-[150px] px-4
    <section className="flex p-4 justify-center items-center py-28">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-center">
              <div className="relative z-10 inline-block pt-3 lg:pt-0">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-01.png"
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
              <h1 className="pt-6 text-dark mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px] text-center">
                HotSh🎯t<br />
                Party Rentals
              </h1>
              <p className="text-body-color mb-8 max-w-[480px] text-base text-center">
                Thank you for visiting Hot Shot party rentals.<br></br>We value
                your interest in our company and hope that we will be able to
                assist in planning your next event.
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-3">
                <li>
                  <a
                    href="#"
                    className="bg-orange-500 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                  >
                    Our Packages
                  </a>
                </li>
                <li>
                  <a
                    href=""
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
                    Download Waiver
                  </a>
                </li>
              </ul>
              <div className="clients pt-16">
                <h6 className="text-body-color mb-2 flex items-center text-xs font-normal">
                  Some Of Our Clients
                  <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                </h6>
                <div className="flex items-center">
                  <div className="mr-4 w-full py-3">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                      alt="ayroui"
                    />
                  </div>
                  <div className="mr-4 w-full py-3">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                      alt="graygrids"
                    />
                  </div>
                  <div className="mr-4 w-full py-3">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                      alt="uideck"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderHero;
