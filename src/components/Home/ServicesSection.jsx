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
    <div className="w-full min-h-[65vh] flex justify-center items-center pt-10 md:pt-30 px-4">
      <ul className="flex flex-col md:flex-row gap-10 md:gap-20 mt-10 md:mt-20 mx-4 md:mx-50">
        {services.map((s, index) => (
          <li
            key={index}
            className="group w-full md:w-70 h-auto md:h-70 flex flex-col items-center text-center gap-5"
          >
            <div
              className="w-30 md:w-40 h-30 md:h-40 rounded-full bg-gray-300 flex items-center justify-center
                            transition-transform duration-300 ease-out
                            group-hover:scale-110"
            >
              <span className="text-black text-5xl md:text-[70px]">
                {s.icon}
              </span>
            </div>

            <h3 className="text-xl md:text-[25px] font-bold">{s.title}</h3>
            <p className="text-gray-500 font-bold text-sm md:text-[15px]">
              {s.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesSection;
