import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmark } from "react-icons/io5";

const ServicesSection = () => {
  const services = [
    {
      icon: <TbTruckDelivery />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <BiSupport />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <IoShieldCheckmark />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="w-full min-h-[50vh] md:min-h-[65vh] flex justify-center items-center py-10 md:pt-30 px-4">
      <ul className="flex flex-col md:flex-row gap-8 md:gap-20 w-full max-w-7xl justify-center items-center">
        {services.map((s, index) => (
          <li
            key={index}
            className="group w-full max-w-[280px] md:w-70 flex flex-col items-center text-center gap-3 md:gap-5"
          >
            <div
              className="w-20 h-20 md:w-40 md:h-40 rounded-full bg-gray-300 flex items-center justify-center
                          transition-transform duration-300 ease-out
                          group-hover:scale-110 shadow-sm"
            >
              <span className="text-black text-3xl md:text-[70px]">
                {s.icon}
              </span>
            </div>

            <div className="flex flex-col gap-1 md:gap-2">
              <h3 className="text-lg md:text-[25px] font-bold leading-tight">
                {s.title}
              </h3>
              <p className="text-gray-500 font-medium text-xs md:text-[15px]">
                {s.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesSection;