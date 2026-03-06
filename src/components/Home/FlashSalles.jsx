import React from "react";
import CountdownTimer from "../Flash Sales/CountdownTimer";
import img1 from "/img/sales.png";
import SalesCard from "../SalesCard";
import HomeHeader from "../HomeHeader";
import ViewAllButton from "../ViewAllButton";

const FlashSalles = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000; //مدة 3 أيام بالميللي ثانية
  const NOW_IN_MS = new Date().getTime(); //يأخذ الوقت الحالي (تاريخ + الوقت) ويحوّله لـ ميللي ثانية
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS; //يعطينا تاريخ + وقت بعد 3 أيام من الآن (بميللي ثانية).

  const flashSalles = [
    { id: 7, image: img1, title: "car", currentPrice: "30", oldPrice: "200", discount: "40%", rating: "3", reviews: "3", },
    { id: 8, image: img1, title: "car", currentPrice: "100", oldPrice: "140", discount: "40%", rating: "3", reviews: "3", },
    { id: 9, image: img1, title: "car", currentPrice: "200", oldPrice: "250", discount: "40%", rating: "3", reviews: "3", },
    { id: 10, image: img1, title: "car", currentPrice: "170", oldPrice: "203", discount: "40", rating: "3", reviews: "3", },
    { id: 11, image: img1, title: "car", currentPrice: "100", oldPrice: "140", discount: "40", rating: "3", reviews: "3", },
    { id: 12, image: img1, title: "car", currentPrice: "100", oldPrice: "140", discount: "40", rating: "3", reviews: "3", },
    { id: 13, image: img1, title: "car", currentPrice: "100", oldPrice: "140", discount: "40", rating: "3", reviews: "3", },
  ];

  return (
    <div className="w-full h-screen flex flex-col gap-5 pt-26 pl-40 ">
      <div className="flex items-center justify-between w-full pr-40">
        <HomeHeader type="Today’s" title="Flash Sales" />
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-20 pt-10 pl-20 ">
          {flashSalles.map((sale) => (
            <SalesCard
              //image, title, currentPrice, oldPrice, discount, rating, reviews
              key={sale.id}
              id={sale.id}
              image={sale.image}
              title={sale.title}
              currentPrice={sale.currentPrice}
              oldPrice={sale.oldPrice}
              discount={sale.discount}
              rating={sale.rating}
              reviews={sale.reviews}
            />
          ))}
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
