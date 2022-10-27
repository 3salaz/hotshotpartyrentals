import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaYelp } from "react-icons/fa";
import nerfGun from "../../NerfGun5.png";

function SocialLinks() {
  return (
    <div className="flex flex-col items-center justify-center bg-mainOrange rounded-lg">
      <div className="relative h-28 w-full p-8">
        <div className="absolute top--8 left-10 md:top--12 md:left-14">
          <img className="w-28 md:w-48" src={nerfGun} alt="nerf gun" />
        </div>
        <div className="absolute top--16 left-10 md:top--24 md:left-36">
          <img className="w-20 md:w-36" src={nerfGun} alt="nerf gun" />
        </div>
        <div className="absolute md:top--12 right-4 md:right-14">
          <img className="flip w-48" src={nerfGun} alt="nerf gun" />
        </div>
        <div className="absolute md:top--42 right-10 md:right-36">
          <img
            className="flip w-32 transform-scaleX(-1);"
            src={nerfGun}
            alt="nerf gun"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row text-center items-center justify-between gap-4">
        <div className="mx-3 py-8 flex justify-center items-center">
          <ul className="flex justify-evenly gap-3">
            <li className="white p-3 rounded-full shadow-lg bg-red-200 drop-shadow-sm hover:drop-shadow-lg">
              <a href="https://www.instagram.com/hotshotpartyrentals/">
                <BsInstagram className="text-5xl text-white p-1" />
              </a>
            </li>
            <li className="bg-blue-500 p-3 rounded-full shadow-lg w-320 drop-shadow-sm hover:drop-shadow-lg">
              <a href="https://www.facebook.com/Hotshotpartyrentals/">
                <BsFacebook className="text-5xl text-white p-1" />
              </a>
            </li>
            <li className="bg-red-600 p-3 rounded-full shadow-lg w-520 drop-shadow-sm hover:drop-shadow-lg">
              <a href="https://yelp.com/biz/hotshot-party-rentals-pittsburg">
                <FaYelp className="text-5xl text-white p-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
