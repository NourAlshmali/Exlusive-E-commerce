import React from "react";
import HomeHeader from "../HomeHeader";
import SalesCard from "../Flash Sales/SalesCard";
import img1 from "/img/p1.png";
import img2 from "/img/p2.png";
import img3 from "/img/p3.png";
import ViewAllButton from "../ViewAllButton";

const Products = () => {
  return (
    <div className="w-full min-h-screen pt-20 flex flex-col pl-40">
      <HomeHeader type="Our Products" title="Explore Our Products" />
      <div className="grid grid-cols-4 pt-20 gap-5 px-30">
        <SalesCard
          //image, title, currentPrice, oldPrice, discount, rating, reviews
          id={14}
          image={img1}
          title="prudact"
          currentPrice="100"
          oldPrice="160"
          discount="40%"
          rating="4"
          reviews="4"
        />

        <SalesCard
          //image, title, currentPrice, oldPrice, discount, rating, reviews
          id={15}
          image={img1}
          title="prudact"
          currentPrice="150"
          oldPrice="160"
          discount="40%"
          rating="4"
          reviews="4"
        />

        <SalesCard
          //image, title, currentPrice, oldPrice, discount, rating, reviews
          id={16}
          image={img1}
          title="prudact"
          currentPrice="150"
          oldPrice="160"
          discount="40%"
          rating="4"
          reviews="4"
        />

        <SalesCard
          //image, title, currentPrice, oldPrice, discount, rating, reviews
          id={17}
          image={img1}
          title="prudact"
          currentPrice="150"
          oldPrice="160"
          discount="40%"
          rating="4"
          reviews="4"
        />

        <SalesCard
          //image, title, currentPrice, oldPrice, discount, rating, reviews , active , colors
          id={18}
          image={img1}
          title="prudact"
          currentPrice="150"
          oldPrice="160"
          discount="40%"
          rating="4"
          reviews="4"
          active={true}
          colors={["#ffffff", "#EEFF61"]}
        />

        <SalesCard
          //image, title, currentPrice, oldPrice, discount, rating, reviews ,active,colors
          id={19}
          image={img2}
          title="prudact"
          currentPrice="150"
          oldPrice="160"
          discount="40%"
          rating="4"
          reviews="4"
          active={true}
          colors={["#DB4444", "#EEFF61"]}
        />

        <SalesCard
          //image, title, currentPrice, oldPrice, discount, rating, reviews
          id={20}
          image={img3}
          title="prudact"
          currentPrice="150"
          oldPrice="160"
          discount="40%"
          rating="4"
          reviews="4"
          active={true}
          colors={["#000000", "#DB4444"]}
        />

        <SalesCard
          //image, title, currentPrice, oldPrice, discount, rating, reviews
          id={21}
          image={img1}
          title="prudact"
          currentPrice="150"
          oldPrice="160"
          discount="40%"
          rating="4"
          reviews="4"
          active={true}
          colors={["#000000", "#EEFF61"]}
        />
      </div>
      <div className="flex self-center">
        <ViewAllButton />
      </div>
    </div>
  );
};

export default Products;
