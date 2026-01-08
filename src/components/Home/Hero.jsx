import React from "react";
import SideBarHero from "../Hero/SideBarHero";
import Slider from "../Hero/Slider";

const Hero = () => {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-screen mx-auto px-4">
        <div className="flex justify-start items-start gap-6">
          <div className="flex items-center gap-6 shrink-0">
            <div className="w-[260px]">
              <SideBarHero />
            </div>

            <div className="hidden lg:block w-px h-170 bg-gray-300"></div>
          </div>

          <div className="flex-1 min-w-0 pl-40 pt-10">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
