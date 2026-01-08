import React from "react";
import SideBarHero from "../components/SideBarHero";

const Hero = () => {
  return (
    <div className="">
      <div className="w-50% flex justify-start ml-25 gap-20">
        <SideBarHero />
        <div className="w-145 h-0.5 bg-gray-300 rotate-90 origin-top-left"></div>
      </div>
    </div>
  );
};

export default Hero;
