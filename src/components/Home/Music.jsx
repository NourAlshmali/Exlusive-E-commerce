import React from "react";
import CountdownTimer from "../Flash Sales/CountdownTimer";
import img from "/img/music.png";

const Music = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000; //مدة 3 أيام بالميللي ثانية
  const NOW_IN_MS = new Date().getTime(); //يأخذ الوقت الحالي (تاريخ + الوقت) ويحوّله لـ ميللي ثانية
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS; //يعطينا تاريخ + وقت بعد 3 أيام من الآن (بميللي ثانية).
  return (
    <div className="w-full h-screen pb-10 flex justify-center items-center">
      <div
        className="w-[90%] h-full
          bg-linear-to-r from-[#000000] from-40% via-[#6b6e70] via-70% to-[#000000]
      "
      >
        <div className="flex ">
          <div className="flex flex-col ">
            <h3 className="text-green-400 font-bold text-[30px] pl-30 py-20">
              categories
            </h3>
            <p className="text-white pl-30 font-bold text-6xl max-w-[80%] leading-20">
              Enhance Your Music Experience
            </p>
            <div className="pl-30 pt-10">
              <CountdownTimer
                targetDate={dateTimeAfterThreeDays}
                variant="circle"
              />
            </div>
            <button className=" ml-45 mt-10 cursor-pointer w-40 h-15 bg-green-400 hover:bg-red-400 rounded-[10px] text-white">
              Buy Now!
            </button>
          </div>
          <div className="flex justify-center items-center mr-40 pt-30 ">
            <img src={img} alt="" className="w-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
