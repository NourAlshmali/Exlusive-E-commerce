import React, { useContext } from "react";
import { CartContextData } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Checkout = () => {
  const { cart } = useContext(CartContextData);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.currentPrice * item.quantity;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-2 gap-40 pt-10 ">
        <div className="space-y-4">
      <Breadcrumb
    items={["Account", "My Account", "Product", "View Cart"]}
    current="CheckOut"
  />
          <h2 className="text-3xl font-bold mb-6">Billing Details</h2>

          <input
            className="w-full border px-4 py-2"
            placeholder="First Name *"
          />
          <input
            className="w-full border px-4 py-2"
            placeholder="Company Name"
          />
          <input
            className="w-full border px-4 py-2"
            placeholder="Street Address *"
          />
          <input
            className="w-full border px-4 py-2"
            placeholder="Apartment, floor, etc. (optional)"
          />
          <input
            className="w-full border px-4 py-2"
            placeholder="Town/City *"
          />
          <input
            className="w-full border px-4 py-2"
            placeholder="Phone Number *"
          />
          <input
            className="w-full border px-4 py-2"
            placeholder="Email Address *"
          />

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-sm">
              Save this information for faster check-out next time
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE (Order Summary) ================= */}
        <div className="space-y-6">
          {/* Products */}
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={item.image} alt="" className="w-14" />
                <div>
                  <p>{item.title}</p>
                  <p className="text-sm text-gray-500">x{item.quantity}</p>
                </div>
              </div>
              <p>${item.currentPrice * item.quantity}</p>
            </div>
          ))}

          {/* Totals */}
          <div className="border-t pt-4 space-y-4">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>

            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <p>Total:</p>
              <p>${totalPrice}</p>
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <label className="flex items-center gap-3">
              <input type="radio" name="payment" />
              Bank
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" defaultChecked />
              Cash on delivery
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 border px-4 py-2"
            />
            <button className="bg-[#DB4444] text-white cursor-pointer px-6 py-2 hover:bg-red-500">
              Apply Coupon
            </button>
          </div>

          <button className="bg-[#DB4444] text-white cursor-pointer w-full py-3 mt-4 hover:bg-red-500">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
