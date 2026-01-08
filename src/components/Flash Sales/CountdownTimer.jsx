import React from "react";
import Countdown from "react-countdown";

const TimeUnit = ({ label, value, variant = "default" }) => {
  const isCircle = variant === "circle";

  // الوضع العادي (مثل قبل)
  if (!isCircle) {
    return (
      <div className="flex flex-col items-center">
        <span className="text-[12px] font-medium font-poppins mb-1 text-black">
          {label}
        </span>
        <span className="text-[32px] font-bold font-inter leading-none text-black">
          {String(value).padStart(2, "0")}
        </span>
      </div>
    );
  }

  // الوضع الدائري
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bg-white border-2 border-white flex flex-col items-center justify-center">
        <span className="text-[18px] font-bold font-inter text-black leading-none">
          {String(value).padStart(2, "0")}
        </span>
        <span className="text-[10px] font-medium font-poppins text-black uppercase leading-none">
          {label}
        </span>
      </div>
    </div>
  );
};
/* ===== Separator ===== */
const Separator = () => (
  <div className="flex flex-col justify-end pb-1 h-[60px]">
    <div className="flex flex-col gap-2">
      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
    </div>
  </div>
);

/* ===== Countdown Timer ===== */
const CountdownTimer = ({ targetDate, variant = "default" }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-red-600 font-bold">العرض انتهى!</span>;
    }

    return (
      <div className="flex items-center gap-4 select-none">
        <TimeUnit label="Days" value={days} variant={variant} />
        {variant === "default" && <Separator />}

        <TimeUnit label="Hours" value={hours} variant={variant} />
        {variant === "default" && <Separator />}

        <TimeUnit label="Minutes" value={minutes} variant={variant} />
        {variant === "default" && <Separator />}

        <TimeUnit label="Seconds" value={seconds} variant={variant} />
      </div>
    );
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
