import React from "react";

import {
  HeaderHero,
  SelectionGrid,
  CardCarousel,
  Social,
} from "../components";

const Home = () => {
  return (
    <div className="pt-8">
      <HeaderHero />
      <CardCarousel />
      <SelectionGrid />
      <Social/>
    </div>
  );
};

export default Home;

