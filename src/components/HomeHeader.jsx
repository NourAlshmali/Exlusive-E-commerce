import React from "react";

const HomeHeader = ({ type, title }) => {
  return (
    <div className=" flex flex-col gap-y-4">
      <div className="flex gap-2">
        <div className="w-4 h-10 rounded bg-red-500 "></div>
        <h3 className="text-[20px] text-red-500 ">{type}</h3>
      </div>
      <h3 className="text-4xl font-bold">{title}</h3>
    </div>
  );
};

export default HomeHeader;
