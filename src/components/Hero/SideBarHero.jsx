import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const SideBarHero = () => {
  const List = [
    { id: 1, text: "Woman’s Fashion", icon: <MdKeyboardArrowRight /> },
    { id: 2, text: "Men’s Fashion", icon: <MdKeyboardArrowRight /> },
    { id: 3, text: "Electronics" },
    { id: 4, text: "Home & Lifestyle" },
    { id: 5, text: "Medicine" },
    { id: 6, text: "Sports & Outdoor" },
    { id: 7, text: "Baby’s & Toys   " },
    { id: 8, text: "Groceries & Pets" },
    { id: 9, text: "Health & Beauty" },
  ];
  return (
    <div>
      <ul className="flex flex-col gap-y-7 pt-15">
        {List.map((n) => (
          <li
            key={n.id}
            className="text-black text-[25px] flex justify-center items-center cursor-pointer"
          >
            {n.text} {n.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarHero;
