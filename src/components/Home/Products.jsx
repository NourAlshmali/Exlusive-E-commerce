import React, { useState } from "react";
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

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  return (
    // تم استبدال pl-40 بـ mx-auto و max-w لتوسط المحتوى بشكل سليم في اللابتوب
    <div className="w-full min-h-screen pt-10 md:pt-20 flex flex-col items-center px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
      {/* هيدر الصفحة */}
      <div className="w-full">
        <HomeHeader type="Our Products" title="Explore Our Products" />
      </div>

      {/* تحسين الـ Grid: 
          1 في الموبايل، 
          2 في التابلت (sm:grid-cols-2)، 
          4 في اللابتوب (lg:grid-cols-4) 
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full pt-10 md:pt-16 gap-6 lg:gap-8">
        {productsData.map((product, index) => (
          <div
            key={product.id}
            className={`${
              index < indexOfFirstProduct || index >= indexOfLastProduct
                ? "hidden md:block" // يبقى المنطق كما هو للموبايل
                : "block"
            }`}
          >
            <SalesCard
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
          </div>
        ))}
      </div>

      {/* Pagination للموبايل فقط */}
      <div className="flex md:hidden justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm font-medium">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div className="mt-12 md:mt-16 pb-10">
        <ViewAllButton />
      </div>
    </div>
  );
};

export default Products;
