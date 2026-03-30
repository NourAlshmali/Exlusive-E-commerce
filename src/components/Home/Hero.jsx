import React from "react";
import SideBarHero from "../Hero/SideBarHero";
import Slider from "../Hero/Slider";

const Hero = () => {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <div className="w-65">
              <SideBarHero />
            </div>

            <div className="w-px h-170 bg-gray-300"></div>
          </div>

          <div className="flex-1 min-w-0 w-full lg:pl-25 pt-4 lg:pt-10">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
