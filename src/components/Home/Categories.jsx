import React from "react";
import HomeHeader from "../HomeHeader";
import { CiCamera } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdVideogameAsset } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Phones",
      icon: <CiMobile4 size={56} />,
    },
    {
      id: 2,
      name: "Computers",
      icon: <HiOutlineDesktopComputer size={56} />,
    },
    {
      id: 3,
      name: "SmartWatch",
      icon: <BsSmartwatch size={56} />,
    },
    {
      id: 4,
      name: "Camera",
      icon: <CiCamera size={56} />,
    },
    {
      id: 5,
      name: "Gaming",
      icon: <MdVideogameAsset size={56} />,
    },
  ];
  return (
    <div className="w-full h-[80vh] flex flex-col gap-5 pl-40 ">
      <HomeHeader type="Categories" title="Browse By Category" />
      <ul className="w-full flex gap-10 mt-20">
        {categories.map((s) => (
          <li
            key={s.id}
            className="w-70 h-70 border border-black cursor-pointer text-black hover:bg-red-400 flex flex-col justify-center items-center"
          >
            {s.icon}
            {s.name}
          </li>
        ))}
      </ul>
      <div className="w-full h-0.5 mt-15 bg-gray-300 "></div>
    </div>
  );
};

export default Categories;
