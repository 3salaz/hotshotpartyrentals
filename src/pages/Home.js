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
    <>
      <HeaderHero />
      <CardCarousel />
      <PackagePricing/>
      <Social/>
      <SelectionGrid />
    </>
  );
};

export default Home;

