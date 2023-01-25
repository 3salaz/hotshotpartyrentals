import React from "react";
import yelp from "../images/yelp.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaYelp } from "react-icons/fa";

function Social() {
  return (
    <section>
      <div className="py-8 flex flex-wrap justify-center items-center bg-mainBlue">
        <div className="w-full md:w-880 px-4 drop-shadow-2xl">
          <div className="overflow-hidden rounded-lg">
            <div className="w-full flex flex-col px-6">
              <div className="overflow-hidden rounded-t-lg bg-mainRed  hover:border-mainTeal hover:bg-mainTeal  text-white hover:drop-shadow-2xl">
                {/* <img src={yelp} alt="image" className="w-full" /> */}
                <div className="text-center py-4 sm:p-9 md:p-7 xl:p-9">
                  <h3 className="text-dark hover:text-red-600 mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                      Leave Us A Yelp Review
                  </h3>
                  <a
                    href="https://www.yelp.com/writeareview/biz/3NG4Bs3L-fa75JOaFrllsA?return_url=%2Fbiz%2F3NG4Bs3L-fa75JOaFrllsA&review_origin=biz-details-war-button"
                    className="text-body-color hover:bg-red-500 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                  >
                    Review 📊
                  </a>
                </div>
              </div>
              <div className="text-center py-4 text-black hover:text-white rounded-b-lg sm:p-9 md:p-7 xl:p-9 bg-white hover:bg-mainTeal mb-4 hover:border-mainTeal hover::border">
                <h3>
                  <div className="  hover:text-red-700 mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                    Follow us on Facebook and Instagram!
                  </div>
                </h3>
                <p className="text-body-color mb-7 text-base leading-relaxed">
                  Join us as we build our social presence this year on Facebook
                  and Instagram
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full md:w-375">
          <div className="flex flex-row items-center justify-center gap-6 py-8">
              <div className="relative bottom-2 mx-3 flex justify-center items-center">
                <ul className="flex justify-evenly items-center gap-3">
                  <li className="bg-red-200 p-4 rounded-full shadow-lg  drop-shadow-sm hover:drop-shadow-lg">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/hotshotpartyrentals/"
                    >
                      <BsInstagram className="text-white text-3xl md:text-4xl" />
                    </a>
                  </li>
                  <li className="bg-blue-500 p-4 rounded-full shadow-lg  drop-shadow-sm hover:drop-shadow-lg">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/Hotshotpartyrentals/"
                    >
                      <BsFacebook className="text-white text-3xl md:text-4xl" />
                    </a>
                  </li>
                  <li className="bg-red-600 bg p-4 rounded-full shadow-lg drop-shadow-sm hover:drop-shadow-lg">
                    <a
                      target="_blank"
                      href="https://yelp.com/biz/hotshot-party-rentals-pittsburg"
                    >
                      <FaYelp className="text-white text-3xl md:text-4xl" />
                    </a>
                  </li>
                </ul>
              </div>
          </div>
          <img className="relative" src="https://via.placeholder.com/500x800"></img>
        </div>
      </div>
    </section>
  );
}

export default Social;
