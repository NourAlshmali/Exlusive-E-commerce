import React from "react";
import HomeHeader from "../HomeHeader";
import img1 from "/img/f1.png";
import img2 from "/img/f2.png";
import img3 from "/img/f3.png";
import img4 from "/img/f4.png";
import PromoCard from "../PromoCard";

const Featured = () => {
  const featuredProducts = [
    {
      id: 1,
      imgSrc: img1,
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      colSpan: "col-span-1 lg:col-span-2", // استخدام lg للابتوب
      rowSpan: "row-span-1 lg:row-span-2",
    },
    {
      id: 2,
      imgSrc: img2,
      title: "Women's Collections",
      description: "Featured woman collections that give you another vibe.",
      colSpan: "col-span-1 lg:col-span-2",
      rowSpan: "row-span-1",
    },
    {
      id: 3,
      imgSrc: img3,
      title: "Speakers",
      description: "Amazon wireless speakers",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      id: 4,
      imgSrc: img4,
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
  ];

  return (
    /* استخدام mx-auto و max-w-[1440px] لضمان نفس حجم الصفحة السابقة 
       استبدال px-50 بـ lg:px-20 لضمان عدم انضغاط المحتوى
    */
    <div className="w-full min-h-screen pt-10 md:pt-20 px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
      
      <div className="w-full">
        <HomeHeader type="Featured" title="New Arrival" />
      </div>

      {/* تحسين نظام الـ Grid:
          - في الموبايل: عمود واحد (grid-cols-1)
          - في اللابتوب: 4 أعمدة (lg:grid-cols-4)
          - زيادة الـ gap ليعطي شكلاً أفخم
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6 lg:gap-8 pt-10 md:pt-16">
        {featuredProducts.map((item) => (
          <PromoCard
            key={item.id}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            colSpan={item.colSpan}
            rowSpan={item.rowSpan}
            linkText="Shop Now"
            linkUrl="#"
            textPosition={{ bottom: "bottom-4 md:bottom-8", left: "left-4 md:left-8" }}
            maxTextWidth="max-w-[80%] md:max-w-[70%]"
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;