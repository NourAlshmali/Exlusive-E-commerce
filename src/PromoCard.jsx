import React from "react";

const PromoCard = ({
  imgSrc,
  title,
  description,
  linkText,
  linkUrl,
  colSpan = "col-span-2",
  rowSpan = "row-span-2",
  textPosition = { bottom: "bottom-0", left: "left-4" },
  maxTextWidth = "max-w-[70%]",
}) => {
  return (
    <div
      className={`${colSpan} ${rowSpan} bg-black relative overflow-hidden flex justify-center items-center group `}
    >
      <img
        src={imgSrc}
        alt={title}
        className="max-w-[90%] max-h-[90%] z-0 transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      <div
        className={`absolute ${textPosition.bottom} ${textPosition.left} flex flex-col gap-3 p-4 z-10 transition-all duration-500 ease-in-out `}
      >
        <h3 className="text-white text-[20px]">{title}</h3>
        <p className={`text-white text-[15px] ${maxTextWidth}`}>
          {description}
        </p>
        <a href={linkUrl} className="text-white text-[15px] underline">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default PromoCard;
