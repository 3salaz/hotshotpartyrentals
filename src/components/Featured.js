import React from "react";
import iphone from "../images/iphone.png";
import yelp from "../images/yelp.png";
import facebook from "../images/facebook.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaYelp } from "react-icons/fa";

function Featured() {
  return (
    <section className="">
      <div className="container mx-auto p-2">
        <div className="-mx-4 p-16 flex flex-wrap justify-between items-center">
          <div className="w-full px-4 md:w-1/3 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-lg bg-red-600  text-white drop-shadow-2xl">
              <img src={yelp} alt="image" className="w-full" />
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="https://www.yelp.com/writeareview/biz/3NG4Bs3L-fa75JOaFrllsA?return_url=%2Fbiz%2F3NG4Bs3L-fa75JOaFrllsA&review_origin=biz-details-war-button"
                    className="text-dark hover:text-red-500 mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                  >
                    Leave Us A Yelp Review
                  </a>
                </h3>
                <p className="text-body-color mb-7 text-base leading-relaxed">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
                <a
                  href="https://www.yelp.com/writeareview/biz/3NG4Bs3L-fa75JOaFrllsA?return_url=%2Fbiz%2F3NG4Bs3L-fa75JOaFrllsA&review_origin=biz-details-war-button"
                  className="text-body-color hover:border-red-500 hover:bg-red-500 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                >
                  Review 📊
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/3 xl:w-1/3">
            <div className="overflow-hidden rounded-lg">
              <div className="w-full flex justify-center items-center">
                <img src={iphone} alt="image" className="text-center" />
              </div>
              
              <div className="flex flex-row items-center justify-center gap-6 py-12">
                <div className="mx-3 flex justify-center items-center">
                  <ul className="flex justify-evenly items-center gap-3">
                    <li className="white p-3 rounded-full shadow-lg bg-red-200 drop-shadow-sm hover:drop-shadow-lg">
                      <a href="https://www.instagram.com/hotshotpartyrentals/">
                        <BsInstagram className="text-8xl md:text-4xl lg:text-8xl text-white py-3 md:py-1" />
                      </a>
                    </li>
                    <li className="bg-blue-500 p-3 rounded-full shadow-lg w-320 drop-shadow-sm hover:drop-shadow-lg">
                      <a href="https://www.facebook.com/Hotshotpartyrentals/">
                        <BsFacebook className="text-8xl md:text-4xl lg:text-8xl text-white py-3 md:py-1" />
                      </a>
                    </li>
                    <li className="bg-red-600 p-3 rounded-full shadow-lg w-520 drop-shadow-sm hover:drop-shadow-lg">
                      <a href="https://yelp.com/biz/hotshot-party-rentals-pittsburg">
                        <FaYelp className="text-8xl md:text-4xl lg:text-8xl text-white py-3 md:py-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/3 xl:w-1/3 drop-shadow-2xl">
            <div className="mb-10 overflow-hidden rounded-lg bg-white drop-shadow-2xl">
              <img src={facebook} alt="image" className="w-full" />
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href=""
                    className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                  >
                    Follow us on Facebook and Instagram!
                  </a>
                </h3>
                <p className="text-body-color mb-7 text-base leading-relaxed">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
                <a
                  href=""
                  className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Featured;
