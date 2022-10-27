import React from "react";

function StickyLinks() {
  return (
    <div className="fixed bottom-4 z-50 bg-white bg-opacity-80 p-2 flex items-center justify-center w-full">
      <ul className="sticky flex flex-col">
        <li className="p-3">
          <button className="rounded-md text-white drop-shadow-lg bg-orange-400 p-2 min-w-[150px] w-225 text-lg">
            Reserve Now
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
