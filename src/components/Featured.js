import React from "react";

function Featured() {
  return (
    <div className="bg-white rounded-lg flex flex-col justify-evenly md:flex-row border border-black p-4 gap-2">
      <div className="box border-2 border-white md:w-508 h-150 md:h-250 rounded-lg drop-shadow-xl bg-green-500">
        <div className="text-center">
          <h1 className="font-bold text-white text-xl">Hello</h1>
        </div>
      </div>
      <div className="box border-2 border-white md:w-508 h-150 md:h-250 rounded-lg drop-shadow-xl bg-green-500">
        <div className="text-center">
          <h1 className="font-bold text-white text-xl">Hello</h1>
        </div>
      </div>
    </div>
  );
}

export default Featured;
