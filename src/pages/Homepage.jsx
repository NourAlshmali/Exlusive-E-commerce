import React from "react";
import Hero from "../components/Home/Hero";
import FlashSalles from "../components/Home/FlashSalles";
import Categories from "../components/Home/Categories";
import BestSelling from "../components/Home/BestSelling";
import Music from "../components/Home/Music";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen bg-white ">
      <Hero />
      <FlashSalles />
      <Categories />
      <BestSelling/>
      <Music/>
    </div>
  );
};

export default Homepage;
