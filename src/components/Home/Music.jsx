import React from "react";
import CountdownTimer from "../Flash Sales/CountdownTimer";
import img from "/img/music.png";

const Music = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4">
      <div className="w-full md:w-[95%] lg:w-[90%] h-full bg-linear-to-r from-[#000000] from-40% via-[#6b6e70] via-70% to-[#000000] rounded-lg overflow-hidden p-6 md:p-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
            <h3 className="text-green-400 font-bold text-lg md:text-[24px] lg:text-[30px] lg:pl-20 py-4 md:py-10 uppercase tracking-wider">
              categories
            </h3>

            <p className="text-white lg:pl-20 font-bold text-2xl md:text-4xl lg:text-6xl max-w-full lg:max-w-[90%] leading-tight md:leading-snug lg:leading-20">
              Enhance Your Music Experience
            </p>

            <div className="lg:pl-20 pt-8 md:pt-10">
              <CountdownTimer
                targetDate={dateTimeAfterThreeDays}
                variant="circle"
              />
            </div>

            <button className="lg:ml-20 mt-8 md:mt-12 cursor-pointer w-36 h-11 md:w-40 md:h-14 bg-green-400 hover:bg-red-400 transition-colors duration-300 rounded-[8px] text-white font-semibold">
              Buy Now!
            </button>
          </div>

          <div className="flex justify-center items-center w-full lg:w-1/2 mt-12 lg:mt-0 px-4">
            <div className="relative group pt-20 ">
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-500"></div>
              <img
                src={img}
                alt="Music Experience"
                className="relative z-10 w-full max-w-[280px] md:max-w-[400px] lg:max-w-none lg:w-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
