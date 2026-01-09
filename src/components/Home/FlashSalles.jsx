import React from "react";
import CountdownTimer from "../Flash Sales/CountdownTimer";
import img1 from "/img/sales.png";
import SalesCard from "../Flash Sales/SalesCard";
import HomeHeader from "../HomeHeader";
import ViewAllButton from "../ViewAllButton";

const FlashSalles = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000; //مدة 3 أيام بالميللي ثانية
  const NOW_IN_MS = new Date().getTime(); //يأخذ الوقت الحالي (تاريخ + الوقت) ويحوّله لـ ميللي ثانية
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS; //يعطينا تاريخ + وقت بعد 3 أيام من الآن (بميللي ثانية).

  return (
    <div className="w-full h-screen flex flex-col gap-5 pt-26 pl-40 ">
      {/*type,title*/}
      <div className="flex items-center justify-between w-full pr-40">
        <HomeHeader type="Today’s" title="Flash Sales" />
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-20 pt-10 pl-20 ">
          <SalesCard
            //image, title, currentPrice, oldPrice, discount, rating, reviews
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40%"
            rating="4"
            reviews="4"
          />
          <SalesCard
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40%"
            rating="5"
            reviews="5"
          />
          <SalesCard
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40%"
            rating="3"
            reviews="3"
          />

          <SalesCard
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40%"
            rating="3"
            reviews="3"
          />

          <SalesCard
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40%"
            rating="3"
            reviews="3"
          />

          <SalesCard
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40"
            rating="3"
            reviews="3"
          />

          <SalesCard
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40"
            rating="3"
            reviews="3"
          />

          <SalesCard
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40"
            rating="3"
            reviews="3"
          />

          <SalesCard
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40"
            rating="3"
            reviews="3"
          />
        </div>
      </div>
      <div className="flex self-center">
        <ViewAllButton />
      </div>
      <div className="w-full h-0.5 mt-10 bg-gray-300 "></div>
    </div>
  );
};

export default FlashSalles;
