import React from "react";

import {
  HeaderHero,
  SelectionGrid,
  CardCarousel,
  Social,
  PackagePricing,
} from "../components";

const Home = () => {
  return (
    <div className="pt-8">
      <HeaderHero />
      <CardCarousel />
      <PackagePricing/>
      <Social/>
      <SelectionGrid />
    </div>
  );
};

export default Home;

