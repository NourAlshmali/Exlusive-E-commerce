import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import { WishlistContextData } from "../components/WishlistContext";
import { CartContextData } from "../components/CartContext";
import HomeHeader from "../components/HomeHeader";
import SalesCard from "../components/SalesCard";
import img1 from "/img/best.png";
import img2 from "/img/best2.png";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, setWishlist, toggleWishlist } = useContext(WishlistContextData);
  const { setCart } = useContext(CartContextData);

  const recommendations = [
    {
      id: 101,
      image: img1,
      title: "ASUS FHD Gaming Laptop",
      currentPrice: "960",
      oldPrice: "1160",
      discount: "35",
      rating: 5,
      reviews: 65,
    },
    {
      id: 102,
      image: img2,
      title: "IPS LCD Gaming Monitor",
      currentPrice: "370",
      oldPrice: "400",
      discount: "30",
      rating: 5,
      reviews: 99,
    },
    {
      id: 103,
      image: img1,
      title: "HAVIT HV-G92 Gamepad",
      currentPrice: "120",
      oldPrice: "160",
      discount: "40",
      rating: 5,
      reviews: 88,
    },
    {
      id: 104,
      image: img2,
      title: "AK-900 Wired Keyboard",
      currentPrice: "960",
      oldPrice: "1160",
      discount: "35",
      rating: 4,
      reviews: 75,
    },
  ];

  const handleWithView = () => {
    navigate("/");
  };

  const handleMoveAllToBag = () => {
    if (wishlist.length === 0) return;

    setCart((prevCart) => {
      const newCart = [...prevCart];
      wishlist.forEach((wishItem) => {
        const exists = newCart.find((cartItem) => cartItem.id === wishItem.id);
        if (!exists) {
          newCart.push({ ...wishItem, quantity: 1 });
        }
      });
      return newCart;
    });

    setWishlist([]);
  };

  return (
    <div className="bg-white min-h-screen flex justify-center py-10">
      <div className="w-[90%] max-w-5xl flex flex-col">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-medium text-gray-800">
            Wishlist ({wishlist.length})
          </h2>
          <button
            onClick={handleMoveAllToBag}
            className="px-6 py-3 border border-gray-400 rounded hover:bg-black hover:text-white transition duration-300 font-medium cursor-pointer"
          >
            Move All To Bag
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {wishlist.map((item) => (
            <div key={item.id} className="group flex flex-col gap-2">
              <div className="relative bg-[#F5F5F5] rounded flex justify-center items-center overflow-hidden h-64">
                <div className="absolute top-3 right-3 z-10">
                  <button
                    onClick={() => toggleWishlist(item)}
                    className="w-8 h-8 rounded-full bg-white flex justify-center items-center hover:bg-[#DB4444] hover:text-white transition duration-300 shadow-sm cursor-pointer"
                  >
                    <CiTrash size={20} />
                  </button>
                </div>

                <div className="p-10 flex justify-center items-center h-full w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain h-full w-full transform group-hover:scale-110 transition duration-500"
                  />
                </div>

                <button className="absolute bottom-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-medium">
                  Add To Cart
                </button>
              </div>

              <h3 className="font-bold text-sm truncate mt-2 text-gray-800">
                {item.title}
              </h3>
              <div className="flex gap-3 items-center text-sm">
                <span className="text-[#DB4444] font-semibold">
                  ${item.currentPrice}
                </span>
                {item.oldPrice && (
                  <span className="text-gray-400 line-through">
                    ${item.oldPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-10 mt-10">
          <HomeHeader type="just for you" title=" " />
          <button
            onClick={handleWithView}
            className="px-10 py-3 border border-gray-400 rounded hover:bg-black hover:text-white transition duration-300 cursor-pointer font-medium"
          >
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((product) => (
            <SalesCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;