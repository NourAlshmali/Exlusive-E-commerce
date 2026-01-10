import React from "react";
import Hero from "../components/Home/Hero";
import FlashSalles from "../components/Home/FlashSalles";
import Categories from "../components/Home/Categories";
import BestSelling from "../components/Home/BestSelling";
import Music from "../components/Home/Music";
import Products from "../components/Home/Products";
import Featured from "../components/Home/Featured";
import ServicesSection from "../components/Home/ServicesSection";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen bg-white ">
      <Hero />
      <FlashSalles />
      <Categories />
      <BestSelling />
      <Music />
      <Products />
      <Featured />
      <ServicesSection />
    </div>
  );
};

export default Homepage;
