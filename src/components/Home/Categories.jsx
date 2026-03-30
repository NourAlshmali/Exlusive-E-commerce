import React from "react";
import HomeHeader from "../HomeHeader";
import { CiCamera, CiMobile4 } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdVideogameAsset } from "react-icons/md";
import CategoryCard from "../CategoryCard";

const Categories = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const categories = [
    { id: 1, name: "Phones", icon: <CiMobile4 size={isMobile ? 40 : 56} /> },
    {
      id: 2,
      name: "Computers",
      icon: <HiOutlineDesktopComputer size={isMobile ? 40 : 56} />,
    },
    {
      id: 3,
      name: "SmartWatch",
      icon: <BsSmartwatch size={isMobile ? 40 : 56} />,
    },
    { id: 4, name: "Camera", icon: <CiCamera size={isMobile ? 40 : 56} /> },
    {
      id: 5,
      name: "Gaming",
      icon: <MdVideogameAsset size={isMobile ? 40 : 56} />,
    },
  ];

  return (
    <div className="w-full min-h-[60vh] md:min-h-[80vh] flex flex-col gap-3 md:gap-5 px-4 md:px-0 md:pl-25">
      <HomeHeader type="Categories" title="Browse By Category" />

      <ul className="w-full flex flex-wrap justify-center md:justify-start gap-3 md:gap-10 mt-6 md:mt-20">
        {categories.map((category) => (
          <div
            key={category.id}
            className="scale-90 sm:scale-100 origin-center"
          >
            <CategoryCard name={category.name} icon={category.icon} />
          </div>
        ))}
      </ul>

      <div className="w-full h-[1px] md:h-0.5 mt-8 md:mt-15 bg-gray-300 opacity-50 md:opacity-100"></div>
    </div>
  );
};

export default Categories;
