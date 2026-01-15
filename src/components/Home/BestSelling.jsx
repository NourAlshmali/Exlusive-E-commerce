import React from "react";
import HomeHeader from "../HomeHeader";
import img1 from "/img/best.png";
import img2 from "/img/best2.png";
import SalesCard from "../Flash Sales/SalesCard";

const BestSelling = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col gap-5 pl-40">
      <div className="flex items-center justify-between w-full pr-40">
        <HomeHeader type="Today’s" title="Flash Sales" />
        <button className="w-30 h-10 mt-15 bg-red-500 hover:bg-gray-500 rounded-[6px]  text-white cursor-pointer">
          View All
        </button>
      </div>
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-20 pt-14 pl-20 ">
          <SalesCard
            //id,image, title, currentPrice, oldPrice, discount, rating, reviews
            id={1}
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40"
            rating="4"
            reviews="4"
          />

          <SalesCard
            //image, title, currentPrice, oldPrice, discount, rating, reviews
            id={2}
            image={img2}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40"
            rating="4"
            reviews="4"
          />

          <SalesCard
            //image, title, currentPrice, oldPrice, discount, rating, reviews
            id={3}
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40"
            rating="4"
            reviews="4"
          />

          <SalesCard
            //image, title, currentPrice, oldPrice, discount, rating, reviews
            id={4}
            image={img2}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40"
            rating="4"
            reviews="4"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
