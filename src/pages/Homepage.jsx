import React from "react";
import Hero from "../components/Home/Hero";
import FlashSalles from "../components/Home/FlashSalles";
import Categories from "../components/Home/Categories";
import BestSelling from "../components/Home/BestSelling";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen bg-white ">
      <Hero />
      <FlashSalles />
      <Categories />
      <BestSelling/>
    </div>
  );
};

export default Homepage;
