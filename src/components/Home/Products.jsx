import React from "react";
import HomeHeader from "../HomeHeader";
import SalesCard from "../SalesCard";
import img1 from "/img/p1.png";
import img2 from "/img/p2.png";
import img3 from "/img/p3.png";
import ViewAllButton from "../ViewAllButton";

const Products = () => {
  const productsData = [
    {
      id: 14,
      image: img1,
      title: "product",
      currentPrice: "100",
      oldPrice: "160",
      discount: "40%",
      rating: "4",
      reviews: "4",
    },
    {
      id: 15,
      image: img1,
      title: "product",
      currentPrice: "150",
      oldPrice: "160",
      discount: "40%",
      rating: "4",
      reviews: "4",
    },
    {
      id: 16,
      image: img1,
      title: "product",
      currentPrice: "150",
      oldPrice: "160",
      discount: "40%",
      rating: "4",
      reviews: "4",
    },
    {
      id: 17,
      image: img1,
      title: "product",
      currentPrice: "150",
      oldPrice: "160",
      discount: "40%",
      rating: "4",
      reviews: "4",
    },
    {
      id: 18,
      image: img1,
      title: "product",
      currentPrice: "150",
      oldPrice: "160",
      discount: "40%",
      rating: "4",
      reviews: "4",
      active: true,
      colors: ["#ffffff", "#EEFF61"],
    },
    {
      id: 19,
      image: img2,
      title: "product",
      currentPrice: "150",
      oldPrice: "160",
      discount: "40%",
      rating: "4",
      reviews: "4",
      active: true,
      colors: ["#DB4444", "#EEFF61"],
    },
    {
      id: 20,
      image: img3,
      title: "product",
      currentPrice: "150",
      oldPrice: "160",
      discount: "40%",
      rating: "4",
      reviews: "4",
      active: true,
      colors: ["#000000", "#DB4444"],
    },
    {
      id: 21,
      image: img1,
      title: "product",
      currentPrice: "150",
      oldPrice: "160",
      discount: "40%",
      rating: "4",
      reviews: "4",
      active: true,
      colors: ["#000000", "#EEFF61"],
    },
  ];

  return (
    <div className="w-full min-h-screen pt-20 flex flex-col pl-40">
      <HomeHeader type="Our Products" title="Explore Our Products" />
      <div className="grid grid-cols-4 pt-20 gap-5 px-30">
        {productsData.map((product) => (
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
            active={product.active}
            colors={product.colors}
          />
        ))}
      </div>

      <div className="flex self-center mt-10">
        <ViewAllButton />
      </div>
    </div>
  );
};

export default Products;
