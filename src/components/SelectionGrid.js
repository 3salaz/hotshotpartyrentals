import React from "react";
import { PackageCarousel, SafetySection, WeaponsSection } from "../components";

function SelectionGrid() {
  return (
    <section className="flex flex-col md:flex-row gap-8 p-4 justify-center items-center">
      <PackageCarousel/>
      <div className="flex flex-col md:flex-row justify-center items-center bg-white text-center w-375 border-2 border-gray-400 drop-shadow-lg rounded-md">
        <WeaponsSection />
        <SafetySection />
      </div>
    </section>
  );
}

export default SelectionGrid;
