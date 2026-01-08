import React from "react";
import Countdown from "react-countdown";


const TimeUnit = ({ label, value }) => (
  <div className="flex flex-col items-start">
    <span className="text-[12px] font-medium font-poppins mb-1">{label}</span>
    <span className="text-[32px] font-bold font-inter leading-none">
      {String(value).padStart(2, "0")}
    </span>
  </div>
);


const Separator = () => (
  <div className="flex flex-col justify-end pb-1 h-[60px]">
    <div className="flex flex-col gap-2">
      <span className="w-[4px] h-[4px] bg-[#E07575] rounded-full"></span>
      <span className="w-[4px] h-[4px] bg-[#E07575] rounded-full"></span>
    </div>
  </div>
);

const CountdownTimer = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      
      return <span className="text-red-600 font-bold">العرض انتهى!</span>;
    }

    return (
      <div className="flex items-center gap-4 select-none">
        <TimeUnit label="Days" value={days} />
        <Separator />
        <TimeUnit label="Hours" value={hours} />
        <Separator />
        <TimeUnit label="Minutes" value={minutes} />
        <Separator />
        <TimeUnit label="Seconds" value={seconds} />
      </div>
    );
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;