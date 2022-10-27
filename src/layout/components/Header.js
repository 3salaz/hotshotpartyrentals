import React from "react";
import { CardCarousel, SocialLinks } from "../components";


const Header = () => {
  return (
    <header className="w-full">
      <CardCarousel />
      <div className="bg-mainOrange rounded-xl m-10">
        <SocialLinks/>
        <div className="bg-white rounded-lg flex flex-col justify-evenly md:flex-row border-2 border-black p-4 gap-2">
            <div className="box border-2 border-gray-300 md:w-508 h-150 md:h-250 rounded-lg">p</div>
            <div className="box border-2 border-gray-300 md:w-508 h-150 md:h-250 rounded-lg">p</div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
