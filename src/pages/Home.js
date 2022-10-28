import React from "react";
import {
  Greeting,
  StickyLinks,
  SelectionGrid,
  CardCarousel,
  SocialLinks,
  Featured,
} from "../components";

const Home = () => {
  return (
    <>
      <CardCarousel />
      <Greeting />
      <div className="bg-mainOrange rounded-xl shadow-xl m-10">
        <SocialLinks />
        <Featured/>
      </div>
      <StickyLinks />
      <SelectionGrid />
    </>
  );
};

export default Home;
