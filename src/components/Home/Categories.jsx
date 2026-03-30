import React from "react";
import HomeHeader from "../HomeHeader";
import { CiCamera, CiMobile4 } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdVideogameAsset } from "react-icons/md";
import CategoryCard from "../CategoryCard";

const Categories = () => {
  const categories = [
    { id: 1, name: "Phones", icon: <CiMobile4 size={56} /> },
    { id: 2, name: "Computers", icon: <HiOutlineDesktopComputer size={56} /> },
    { id: 3, name: "SmartWatch", icon: <BsSmartwatch size={56} /> },
    { id: 4, name: "Camera", icon: <CiCamera size={56} /> },
    { id: 5, name: "Gaming", icon: <MdVideogameAsset size={56} /> },
  ];

  return (
    <div className="w-full min-h-[80vh] flex flex-col gap-5 px-4 md:pl-25">
      <HomeHeader type="Categories" title="Browse By Category" />

      <ul className="w-full flex flex-wrap justify-center md:justify-start gap-4 md:gap-10 mt-10 md:mt-20">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            icon={category.icon}
          />
        ))}
      </ul>

      <div className="w-full h-0.5 mt-10 md:mt-15 bg-gray-300"></div>
    </div>
  );
};

export default Categories;
