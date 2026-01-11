import React from "react";
import HomeHeader from "../HomeHeader";
import img1 from "/img/f1.png";
import img2 from "/img/f2.png";
import img3 from "/img/f3.png";
import img4 from "/img/f4.png";
import PromoCard from "../PromoCard";

const Featured = () => {
  return (
    <div className="w-full h-screen pt-20 px-50">
      <HomeHeader type="Featured" title="New Arrival" />

      <div className="grid grid-cols-4 grid-rows-2 gap-4 pt-10">
        <PromoCard
          imgSrc={img1}
          title="PlayStation 5"
          description="Black and White version of the PS5 coming out on sale."
          linkText="Shop Now"
          linkUrl="#"
          colSpan="col-span-2"
          rowSpan="row-span-2"
          textPosition={{ bottom: "bottom-4", left: "left-4" }}
          maxTextWidth="max-w-[70%]"
        />

        {/* الكارد الأعلى يمين */}
        <PromoCard
          imgSrc={img2}
          title="Women's Collections"
          description="Featured woman collections that give you another vibe."
          linkText="Shop Now"
          linkUrl="#"
          colSpan="col-span-2"
          rowSpan="row-span-1"
          textPosition={{ bottom: "bottom-4", left: "left-4" }}
          maxTextWidth="max-w-[70%]"
        />

        {/* الكارد الأسفل يمين */}
        <PromoCard
          imgSrc={img3}
          title="Speakers"
          description="Amazon wireless speakers"
          linkText="Shop Now"
          linkUrl="#"
          colSpan="col-span-1"
          rowSpan="row-span-1"
          textPosition={{ bottom: "bottom-4", left: "left-4" }}
          maxTextWidth="max-w-[70%]"
        />

        <PromoCard
          imgSrc={img4}
          title="Perfume"
          description="GUCCI INTENSE OUD EDP"
          linkText="Shop Now"
          linkUrl="#"
          colSpan="col-span-1"
          rowSpan="row-span-1"
          textPosition={{ bottom: "bottom-4", left: "left-4" }}
          maxTextWidth="max-w-[70%]"
        />
      </div>
    </div>
  );
};

export default Featured;
