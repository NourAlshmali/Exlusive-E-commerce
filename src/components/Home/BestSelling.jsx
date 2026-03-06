import React from "react";
import HomeHeader from "../HomeHeader";
import img1 from "/img/best.png";
import img2 from "/img/best2.png";
import SalesCard from "../Flash Sales/SalesCard";

const BestSelling = () => {

  const products = [
    { id: 1, image: img1, title: "jaket.", currentPrice: "100", oldPrice: "140", discount: "40%", rating: "4", reviews: "4" },
    { id: 2, image: img2, title: "jaket.", currentPrice: "100", oldPrice: "140", discount: "40", rating: "4", reviews: "4" },
    { id: 3, image: img1, title: "jaket.", currentPrice: "100", oldPrice: "140", discount: "40", rating: "4", reviews: "4" },
    { id: 4, image: img2, title: "jaket.", currentPrice: "100", oldPrice: "140", discount: "40", rating: "4", reviews: "4" },
  ];

  return (
    <div className="w-full h-[80vh] flex flex-col gap-5 pl-40">
      <div className="flex items-center justify-between w-full pr-40">
        <HomeHeader type="This Month" title="Best Selling Products" />
        <button className="w-30 h-10 mt-15 bg-red-500 hover:bg-gray-500 rounded-[6px] text-white cursor-pointer">
          View All
        </button>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-20 pt-14 pl-20">
          {products.map((product) => (
            <SalesCard
              key={product.id} 
              id={product.id}
              image={product.image}
              title={product.title}
              currentPrice={product.currentPrice}
              oldPrice={product.oldPrice}
              discount={product.discount}
              rating={product.rating}
              reviews={product.reviews}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;