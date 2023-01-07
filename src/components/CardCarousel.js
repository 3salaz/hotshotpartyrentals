import React from "react";
import Carousel from "react-multi-carousel";
import { siteConfig } from '../data/initial';

function CardCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let imgCarousel = siteConfig['home']['sections']['imgCarousel'];

  return (
    <Carousel className="border-t-mainOrange border-t-4" responsive={responsive}>
      {
        imgCarousel.map(img => (
          <div key={img.id} className="bg-orange-200">
            <img src={img.link} alt={img.name}/>
          </div>
        ))
      }
    </Carousel>
  );
}

export default CardCarousel;
