import React from "react";

const HomeHeader = ({type,title}) => {
  return (
    <div>
      <div className="flex gap-2">
        <div className="w-4 h-10 rounded bg-red-500 "></div>
        <h3 className="text-[20px] text-red-500 ">{type}</h3>
      </div>

      <div className="flex gap-20">
        <h3 className="text-4xl font-bold">{title}</h3>
      </div>
    </div>
  );
 };
   

export default HomeHeader;
