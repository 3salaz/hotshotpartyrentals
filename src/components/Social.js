import React from "react";
import iphone from "../images/iphone.png";
import yelp from "../images/yelp.png";
import facebook from "../images/facebook.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaYelp } from "react-icons/fa";

function Social() {
  return (
    <section>
      <div className="container mx-auto p-2">
        <div className="-mx-4 p-16 flex flex-wrap justify-center items-center">
          <div className="w-full px-4 md:w-1/3 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-lg bg-red-600  text-white drop-shadow-2xl">
              <img src={yelp} alt="image" className="w-full" />
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="https://www.yelp.com/writeareview/biz/3NG4Bs3L-fa75JOaFrllsA?return_url=%2Fbiz%2F3NG4Bs3L-fa75JOaFrllsA&review_origin=biz-details-war-button"
                    className="text-dark hover:text-yellow-200 mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
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


          <div className="w-full px-4 md:w-1/3 xl:w-1/3 drop-shadow-2xl">
            <div className="mb-10 overflow-hidden rounded-lg bg-white drop-shadow-2xl">
            <div className="flex flex-row items-center justify-center gap-6 py-12">
                <div className="mx-3 flex justify-center items-center">
                  <ul className="flex justify-evenly items-center gap-3">
                    <li className="bg-red-200 p-4 rounded-full shadow-lg  drop-shadow-sm hover:drop-shadow-lg">
                      <a target="_blank" href="https://www.instagram.com/hotshotpartyrentals/">
                        <BsInstagram className="text-white md:text-6xl" />
                      </a>
                    </li>
                    <li className="bg-blue-500 p-4 rounded-full shadow-lg  drop-shadow-sm hover:drop-shadow-lg">
                      <a target="_blank" href="https://www.facebook.com/Hotshotpartyrentals/">
                        <BsFacebook className="text-white md:text-6xl" />
                      </a>
                    </li>
                    <li className="bg-red-600 p-4 rounded-full shadow-lg drop-shadow-sm hover:drop-shadow-lg">
                      <a target="_blank" href="https://yelp.com/biz/hotshot-party-rentals-pittsburg">
                        <FaYelp className="text-white md:text-6xl" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href=""
                    className="text-dark hover:text-red-700 mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
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

export default Social;
