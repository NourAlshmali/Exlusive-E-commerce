import React from "react";

const CategoryCard = ({ name, icon }) => {
  return (
    <li className="w-70 h-70 border border-black cursor-pointer text-black hover:bg-red-400 flex flex-col justify-center items-center">
      {icon}
      <span className="mt-2">{name}</span>
    </li>
  );
};

export default CategoryCard;
