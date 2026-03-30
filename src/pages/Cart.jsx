import React, { useContext } from "react";
import WishlistContext, {
  WishlistContextData,
} from "../components/WishlistContext";
import { useNavigate } from "react-router-dom";
import { CartContextData } from "../components/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart } = useContext(CartContextData);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.currentPrice * item.quantity;
  }, 0);
  return (
    <div>
      <div className="overflow-x-auto flex justify-center flex-col px-4">
        <table className="mt-10 w-full md:w-[80%] self-center">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 text-lg md:text-2xl">Product</th>
              <th className="text-left py-4 text-lg md:text-2xl">Price</th>
              <th className="text-left py-4 text-lg md:text-2xl">Quantity</th>
              <th className="text-right py-4 text-lg md:text-2xl">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => (
              <tr className="border-b w-full" key={item.id}>
                <td className="py-6 flex items-center gap-2 md:gap-4">
                  <button
                    className="group text-red-500 text-lg md:text-xl cursor-pointer flex items-center gap-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <span className="group-hover:hidden">✕</span>
                    <span className="hidden group-hover:inline text-xs md:text-sm font-bold">
                      Remove
                    </span>
                  </button>
                  <img src={item.image} className="w-10 md:w-14" />
                  <span className="text-sm md:text-base">{item.title}</span>
                </td>

                <td className="text-sm md:text-base">${item.currentPrice}</td>

                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);

                      if (val >= 1) {
                        updateQuantity(item.id, val);
                      } else {
                        removeFromCart(item.id);
                      }
                    }}
                    className="w-12 md:w-16 border rounded px-2 py-1"
                  />
                </td>

                <td className="text-right text-sm md:text-base">
                  ${item.currentPrice * item.quantity}
                </td>
              </tr>
            ))}
            <button
              onClick={() => navigate("/")}
              className="border-2 mt-5 w-30 md:w-40 h-10 md:h-12 border-black text-base md:text-[18px] text-gray-500 cursor-pointer hover:bg-red-400 hover:text-white"
            >
              return to shop
            </button>
          </tbody>
        </table>
        <div className="mt-10 md:mt-20 flex flex-col lg:flex-row justify-center gap-8 lg:gap-150">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pr-0 md:pr-26">
            <input
              type="text"
              name="coupon"
              placeholder="Enter coupon code"
              className="border-2 w-full sm:w-60 h-10 md:h-12 px-4 py-2 mt-4"
            />
            <button className="border-2 w-full sm:w-40 h-10 md:h-12 px-4 py-2 mt-4 cursor-pointer bg-[#DB4444] text-white hover:bg-red-400">
              Apply coupon
            </button>
          </div>
          <div className="w-full lg:w-100 h-auto lg:h-90 border-2 pl-4 md:pl-7 border-black">
            <h3 className="pt-4 md:pt-6 text-xl md:text-2xl text-black">
              Cart Total
            </h3>
            <div className="flex self-center pt-4 md:pt-6 pb-4 w-[90%] md:w-[80%] justify-between border-b-2">
              <p>Subtotal:</p>
              <p>{totalPrice}$</p>
            </div>

            <div className="flex self-center py-4 w-[90%] md:w-[80%] justify-between border-b-2">
              <p>Shipping:</p>
              <p>free</p>
            </div>

            <div className="flex self-center py-4 w-[90%] md:w-[80%] justify-between border-b-2">
              <p>Total:</p>
              <p>{totalPrice}$</p>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="border-2 w-35 md:w-45 h-10 md:h-12 self-center my-6 md:my-10 mt-4 cursor-pointer bg-[#DB4444] text-white hover:bg-red-400"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
