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
      <HeaderHero />
      <SocialLinks />
      <CardCarousel />
      <PackagePricing/>
      <Featured/>
      <StickyLinks />
      {/* <ToggleDropdown/> */}
      <SelectionGrid />
    </>
  );
};

export default Home;

{/* <div className="bg-mainOrange rounded-xl shadow-xl m-10">
</div> */}
