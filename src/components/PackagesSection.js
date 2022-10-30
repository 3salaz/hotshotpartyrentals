import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";

const PackagesSection = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center flex-col gap-12 bg-slate-100 drop-shadow-lg rounded-md">
        <div className="w-full">
          <div className=" bg-red-500 p-4 text-white text-left text-2xl rounded-t-md">
            Services
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="bg-white border-t-xl w-20 h-10 flex justify-center items-center">
              1hr
            </div>
            <div className="w-full text-center bg-transparent text-7xl font-bold text-blue-500 h-24 pt-8">
              Expert
            </div>
            <div className="w-20 h-16">
              <div className="w-full h-full bg-white border-solid border-black flex justify-center items-center rounded-md">
                <HiOutlineUserGroup className="text-2xl" />
              </div>
              <div className="w-full text-center text-sm">10 Guests</div>
            </div>
          </div>
        </div>
        
        <div className="">
          <div className="w-full h-48 flex justify-center items-center">
            <ul className="text-center">
              <li className="text-lg p-1">Rifle Gel Blasters</li>
              <li className="text-lg p-1">Protective Face & Eyewear</li>
              <li className="text-lg p-1">Unlimited Gel</li>
            </ul>
          </div>

          <button className="w-48 bg-white btn btn-primary">More Info</button>
        </div>
      </div>
    </div>
  );
};
export default PackagesSection;
