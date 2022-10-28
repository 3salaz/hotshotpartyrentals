import React from "react";
import Carousel from "react-multi-carousel";

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
  return (
    <Carousel responsive={responsive}>
      <div className="bg-orange-200">
        <img src="https://via.placeholder.com/560x300" alt="carousel" />
      </div>
      <div className="bg-orange-200">
        <img src="https://via.placeholder.com/560x300" alt="carousel" />
      </div>
      <div className="bg-orange-200">
        <img src="https://via.placeholder.com/560x300" alt="carousel" />
      </div>
      <div className="bg-orange-200">
        <img src="https://via.placeholder.com/560x300" alt="carousel" />
      </div>
    </Carousel>
  );
}

export default CardCarousel;
