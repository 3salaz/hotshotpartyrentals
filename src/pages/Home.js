import React from "react";
import {
  HeaderHero,
  StickyLinks,
  SelectionGrid,
  CardCarousel,
  SocialLinks,
  Featured,
  PackagePricing,
  ToggleDropdown
} from "../components";

const Home = () => {
  return (
    <>
      <header>
      <HeaderHero />
      <CardCarousel />
      </header>
      {/* <div className="text-center font-bold text-3xl text-blue-600">
        Look no further!
      </div> */}
      {/* <SocialLinks /> */}
      <Featured/>
      <PackagePricing/>
      {/* <StickyLinks /> */}
      <ToggleDropdown/>
      <SelectionGrid />
    </>
  );
};

export default Home;

{/* <div className="bg-mainOrange rounded-xl shadow-xl m-10">
</div> */}
