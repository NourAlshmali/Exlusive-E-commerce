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
    <div className="w-full h-[45vh] pl-60">
      <ul className="flex gap-20 mt-20 mx-50">
        {services.map((s, index) => (
          <li
            key={index}
            className="group w-70 h-70 flex flex-col items-center text-center gap-5"
          >
            <div
              className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center
                            transition-transform duration-300 ease-out
                            group-hover:scale-110"
            >
              <span className="text-black text-[70px]">{s.icon}</span>
            </div>

            <h3 className="text-[25px] font-bold">{s.title}</h3>
            <p className="text-gray-500 font-bold text-[15px]">
              {s.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesSection;
