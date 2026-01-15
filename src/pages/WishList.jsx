import React, { useContext } from "react";

import { WishlistContextData } from "../components/WishlistContext";
import { CiTrash } from "react-icons/ci"; 

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContextData);

  return (
    <div className="bg-white min-h-screen flex justify-center items-start py-10">
      <div className="w-[90%] max-w-5xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Wishlist ({wishlist.length})</h2>
          <button className="px-4 py-2 border-2 border-black rounded hover:bg-black hover:text-white transition">
            Move All To Bag
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="group flex flex-col gap-2 w-64">
              <div className="relative bg-[#F5F5F5] rounded-md flex justify-center items-center overflow-hidden h-64">
                <div className=" absolute top-2 right-2 w-10 h-10 rounded-full bg-red-500 hover:bg-gray-400 flex justify-center items-center">
                  <button
                    onClick={() => toggleWishlist(item)}
                    className="cursor-pointer text-white"
                  >
                    <CiTrash size={25} />
                  </button>
                </div>
                <div className="w-full bg-[#F5F5F5] rounded-md p-10 flex justify-center items-center overflow-hidden ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain h-full w-full transform group-hover:scale-110 transition duration-300"
                  />
                  <button className="absolute bottom-0 w-full bg-black cursor-pointer text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Add To Cart
                  </button>
                </div>
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
      </div>
    </div>
  );
};

export default Wishlist;
