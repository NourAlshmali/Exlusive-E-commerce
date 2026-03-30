import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContextData } from "../components/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart } = useContext(CartContextData);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.currentPrice * item.quantity;
  }, 0);

  return (
    <div className="w-full min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col">
        {/* Table for Desktop & Tablet */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="border-b">
                <th className="py-4 text-xl">Product</th>
                <th className="py-4 text-xl">Price</th>
                <th className="py-4 text-xl">Quantity</th>
                <th className="py-4 text-right text-xl">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="border-b shadow-sm hover:shadow-md transition-shadow"
                >
                  <td className="py-6 flex items-center gap-4">
                    <button
                      className="text-red-500 hover:scale-110 transition-transform cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                    <span className="font-medium">{item.title}</span>
                  </td>
                  <td className="py-6 font-medium">${item.currentPrice}</td>
                  <td className="py-6">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        val >= 1
                          ? updateQuantity(item.id, val)
                          : removeFromCart(item.id);
                      }}
                      className="w-16 border rounded-lg px-2 py-1 focus:ring-2 focus:ring-red-400 outline-none"
                    />
                  </td>
                  <td className="py-6 text-right font-bold text-[#DB4444]">
                    ${item.currentPrice * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Cards) - تظهر فقط في الموبايل */}
        <div className="md:hidden flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-4 flex flex-col gap-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="font-bold text-sm">{item.title}</span>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  ✕
                </button>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Price: ${item.currentPrice}
                </span>
                <span className="font-bold text-[#DB4444]">
                  Total: ${item.currentPrice * item.quantity}
                </span>
              </div>
              <div className="flex items-center gap-3 border-t pt-3">
                <span className="text-sm text-gray-500">Qty:</span>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    val >= 1
                      ? updateQuantity(item.id, val)
                      : removeFromCart(item.id);
                  }}
                  className="w-14 border rounded px-2 py-1 text-center"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-8 self-start px-8 py-3 border-2 border-black font-semibold hover:bg-red-500 hover:border-red-500 hover:text-white transition-all rounded-md uppercase text-sm"
        >
          Return to Shop
        </button>

        {/* Footer Info: Coupon & Total */}
        <div className="mt-16 flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border-2 border-black/20 px-6 py-3 rounded-md w-full sm:w-72 focus:border-black outline-none"
            />
            <button className="bg-[#DB4444] text-white px-10 py-3 rounded-md hover:bg-red-600 transition-colors">
              Apply Coupon
            </button>
          </div>

          <div className="w-full lg:w-[450px] border-2 border-black rounded-xl p-6 flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-2">Cart Total</h3>
            <div className="flex justify-between border-b pb-4">
              <span>Subtotal:</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span>Shipping:</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-[#DB4444] text-white py-4 rounded-md mt-4 font-bold hover:bg-red-600 transition-all shadow-lg active:scale-95"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
