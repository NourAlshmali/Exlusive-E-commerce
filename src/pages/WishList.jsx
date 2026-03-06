import React, { useContext } from "react";
import { WishlistContextData } from "../components/WishlistContext";
import { useNavigate } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import HomeHeader from "../components/HomeHeader";
import SalesCard from "../components/SalesCard";
import img1 from "/img/best.png";
import img2 from "/img/best2.png";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useContext(WishlistContextData);
  const handleWithView = () => {
    navigate("/");
  };

  return (
    <div className="bg-white min-h-screen flex justify-center py-10">
      <div className="w-[90%] max-w-5xl flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Wishlist ({wishlist.length})</h2>
          <button className="px-4 py-2 border-2 cursor-pointer border-black rounded hover:bg-black hover:text-white transition">
            Move All To Bag
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {wishlist.map((item) => (
            <div key={item.id} className="group flex flex-col gap-2 w-64">
              <div className="relative bg-[#F5F5F5] rounded-md flex justify-center items-center overflow-hidden h-64">
                <div className="absolute top-2 right-2 w-10 h-10 rounded-full bg-red-500 hover:bg-gray-400 flex justify-center items-center">
                  <button
                    onClick={() => toggleWishlist(item)}
                    className="text-white cursor-pointer"
                  >
                    <CiTrash size={25} />
                  </button>
                </div>

                <div className="w-full bg-[#F5F5F5] rounded-md p-10 flex justify-center items-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain h-full w-full transform group-hover:scale-110 transition duration-300"
                  />
                </div>

                <button className="absolute bottom-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Add To Cart
                </button>
              </div>

              <h3 className="font-bold text-lg truncate">{item.title}</h3>

              <div className="flex gap-3 items-center">
                <span className="text-red-500 font-semibold">
                  ${item.currentPrice}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ${item.oldPrice}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-yellow-400">
                  {"★".repeat(item.rating)}
                </span>
                <span className="text-gray-400 text-sm">({item.reviews})</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-40 mb-10">
          <HomeHeader type="just for you" title=" " />
          <button
            onClick={handleWithView}
            className="px-4 py-2 border-2 cursor-pointer border-black rounded hover:bg-black hover:text-white transition"
          >
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SalesCard
            id={1}
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40"
            rating="4"
            reviews="4"
          />

          <SalesCard
            id={2}
            image={img2}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40"
            rating="4"
            reviews="4"
          />

          <SalesCard
            id={3}
            image={img1}
            title="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            currentPrice="John Doe"
            oldPrice="Youtuber"
            discount="40"
            rating="4"
            reviews="4"
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
