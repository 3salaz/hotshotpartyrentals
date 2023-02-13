import React from "react";

function SocialLinks() {
  return (
      <div className="relative h-28 w-full">
        <div className="absolute top--8 left-10 md:top--12 md:left-14">
          <img className="w-28 md:w-48" src={nerfGun} alt="nerf gun" />
        </div>
        <div className="absolute top--16 left-10 md:top--24 md:left-36">
          <img className="w-20 md:w-36" src={nerfGun} alt="nerf gun" />
        </div>
        <div className="absolute md:top--12 right-4 md:right-14">
          <img className="flip w-48" src={nerfGun} alt="nerf gun" />
        </div>
        <div className="absolute md:top--42 right-10 md:right-36">
          <img
            className="flip w-32 transform-scaleX(-1);"
            src={nerfGun}
            alt="nerf gun"
          />
        </div>
      </div>
  );
}

export default SocialLinks;
