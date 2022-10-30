import React from "react";
import BouncingArrow from "./BouncingArrow";

function StickyLinks() {
  return (
    <div className="fixed bottom-0 z-50 bg-yellow-300 bg-opacity-80 pb-2 p-2 flex items-center justify-center flex-col w-full">
      <BouncingArrow/>
      <ul className="sticky flex flex-col items-center">
        <li className="p-3">
          <button className="rounded-md text-white drop-shadow-lg bg-orange-400 p-2 min-w-[150px] w-225 text-lg">
            Call Now
          </button>
        </li>
        <li className="p-3">
          <button className="rounded-md text-white drop-shadow-lg bg-green-400 p-2 min-w-[150px] w-225 text-lg">
            View Packages
          </button>
        </li>
      </ul>
    </div>
  );
}

export default StickyLinks;
