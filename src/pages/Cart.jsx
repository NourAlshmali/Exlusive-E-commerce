import React, { useContext } from "react";
import WishlistContext, {
  WishlistContextData,
} from "../components/WishlistContext";
import { useNavigate } from "react-router-dom";
import { CartContextData } from "../components/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    setCart,
    toggleCart,
    isInCart,
    updateQuantity,
    removeFromCart,
  } = useContext(CartContextData);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.currentPrice * item.quantity;
  }, 0);
  return (
    <div>
      <div className="overflow-x-auto flex justify-center flex-col">
        <table className=" mt-10 w-[80%] self-center ">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 text-2xl">Product</th>
              <th className="text-left py-4 text-2xl">Price</th>
              <th className="text-left py-4 text-2xl">Quantity</th>
              <th className="text-right py-4 text-2xl">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => (
              <tr className="border-b w-full" key={item.id}>
                <td className="py-6 flex items-center gap-4">
                  <button
                    className="group text-red-500 text-xl cursor-pointer flex items-center gap-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <span className="group-hover:hidden">✕</span>
                    <span className="hidden group-hover:inline text-sm font-bold">
                      Remove
                    </span>
                  </button>
                  <img src={item.image} className="w-14" />
                  <span>{item.title} </span>
                </td>

                <td>${item.currentPrice}</td>

                <td>
                 <input
                    type="number" value={item.quantity}
               onChange={(e) => { const val = parseInt(e.target.value);

               if (val >= 1) {
                  updateQuantity(item.id, val); 
                 } else {
                removeFromCart(item.id); 
    }
  }}
  className="w-16 border rounded px-2 py-1"
/>
                </td>

                <td className="text-right">
                  ${item.currentPrice * item.quantity}
                </td>
              </tr>
            ))}
            <button
              onClick={() => navigate("/")}
              className="border-2 mt-5 w-40 h-12 border-black text-[18px] text-gray-500 cursor-pointer hover:bg-red-400 hover:text-white"
            >
              return to shop{" "}
            </button>
          </tbody>
        </table>
        <div className="mt-20 flex justify-center gap-150  ">
          <div className="flex gap-5 pr-26">
            <input
              type="text"
              name="coupon"
              placeholder="Enter coupon code"
              className="border-2 w-60 h-12 px-4 py-2 mt-4"
            />
            <button className="border-2 w-40 h-12 px-4 py-2 mt-4  cursor-pointer bg-[#DB4444] text-white hover:bg-red-400">
              Applay coupon
            </button>
          </div>
          <div className="w-100 h-90 border-2 pl-7 border-black ">
            <h3 className=" pt-6 text-2xl text-black">Cart Total </h3>
            <div className="flex self-center pt-6 pb-4 w-[80%] justify-between border-b-2 ">
              <p>Subtotal : </p>
              <p>{totalPrice}$</p>
            </div>

            <div className="flex self-center py-4 w-[80%] justify-between border-b-2 ">
              <p>Shipping: : </p>
              <p>free </p>
            </div>

            <div className="flex self-center py-4 w-[80%] justify-between border-b-2 ">
              <p>Total : </p>
              <p>{totalPrice}$</p>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="border-2 w-45 h-12 self-center my-10 mt-4 cursor-pointer bg-[#DB4444] text-white hover:bg-red-400"
            >
              Procees to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
6;
