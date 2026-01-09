import React from "react";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import HomeHeader from "../HomeHeader";

const SalesCard = ({
  image,
  title,
  currentPrice,
  oldPrice,
  discount,
  rating,
  reviews,
  active = false, // هي رح تكون array جاي من لما بستدعي المصفوفة
  // شكلها رح يكون هيك
  //  colors={["#FFAD33", "#1E40AF", "#16A34A"]}
  colors = [],
}) => {
  return (
    <div className="group flex flex-col gap-2 w-64">
      <div className="relative bg-[#F5F5F5] rounded-md p-10 flex justify-center items-center overflow-hidden h-64">
        <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded">
          -{discount}
        </span>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-white p-1.5 rounded-full cursor-pointer hover:bg-[#DB4444] hover:text-white transition">
            <CiHeart size={20} />
          </button>
          <button className="bg-white p-1.5 rounded-full cursor-pointer hover:bg-[#DB4444] hover:text-white transition">
            <FiEye size={20} />
          </button>
        </div>
        <img
          src={image}
          alt={title}
          className="object-contain h-full w-full transform group-hover:scale-110 transition duration-300"
        />
        <button className="absolute bottom-0 w-full bg-black cursor-pointer text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Add To Cart
        </button>
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <h2 className="font-bold text-base truncate">{title}</h2>

        <div className="flex gap-3 items-center">
          <span className="text-[#DB4444] font-medium">${currentPrice}</span>
          <span className="text-gray-500 line-through text-sm">
            ${oldPrice}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color={i < rating ? "#FFAD33" : "#D1D5DB"} />
            ))}
          </div>
          <span className="text-gray-400 text-xs font-semibold">
            ({reviews})
          </span>
        </div>
        <div>
          {active && colors.length > 0 && (
            <div className="flex gap-3 mt-2">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
