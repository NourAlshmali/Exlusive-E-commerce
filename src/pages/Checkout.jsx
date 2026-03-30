import React, { useContext } from "react";
import { CartContextData } from "../components/CartContext";
import Breadcrumb from "../components/Breadcrumb";

const Checkout = () => {
  const { cart } = useContext(CartContextData);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.currentPrice * item.quantity;
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="mb-10">
        <Breadcrumb
          items={["Account", "My Account", "Product", "View Cart"]}
          current="CheckOut"
        />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-10">Billing Details</h2>

      {/* تحويل الـ Grid ليكون عمودياً في الموبايل (cols-1) وأفقياً في اللابتوب (lg:grid-cols-2) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32">
        
        {/* Form Section */}
        <div className="space-y-4">
          <div className="flex flex-col gap-4">
            <label className="text-gray-400 text-sm">First Name <span className="text-red-500">*</span></label>
            <input className="w-full border bg-gray-50 px-4 py-3 rounded focus:outline-red-400" />
            
            <label className="text-gray-400 text-sm">Company Name</label>
            <input className="w-full border bg-gray-50 px-4 py-3 rounded" />
            
            <label className="text-gray-400 text-sm">Street Address <span className="text-red-500">*</span></label>
            <input className="w-full border bg-gray-50 px-4 py-3 rounded" />
            
            <label className="text-gray-400 text-sm">Town/City <span className="text-red-500">*</span></label>
            <input className="w-full border bg-gray-50 px-4 py-3 rounded" />
            
            <label className="text-gray-400 text-sm">Phone Number <span className="text-red-500">*</span></label>
            <input className="w-full border bg-gray-50 px-4 py-3 rounded" />
            
            <label className="text-gray-400 text-sm">Email Address <span className="text-red-500">*</span></label>
            <input className="w-full border bg-gray-50 px-4 py-3 rounded" />
          </div>

          <div className="flex items-center gap-3 pt-4">
            <input type="checkbox" className="w-4 h-4 accent-[#DB4444]" />
            <p className="text-sm">
              Save this information for faster check-out next time
            </p>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="space-y-6 lg:mt-0 mt-10">
          <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={item.image} alt="" className="w-14 h-14 object-contain" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">{item.title}</p>
                    <p className="text-xs text-gray-500 font-bold">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium">${item.currentPrice * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-4">
            <div className="flex justify-between border-b pb-4">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between border-b pb-4">
              <p>Shipping:</p>
              <p className="text-green-600">Free</p>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <p>Total:</p>
              <p>${totalPrice}</p>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <label className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" className="w-4 h-4 accent-black" />
                <span>Bank</span>
              </div>
              <div className="flex gap-2">
               
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" defaultChecked className="w-4 h-4 accent-black" />
              <span>Cash on delivery</span>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 border px-4 py-3 rounded focus:outline-none"
            />
            <button className="bg-[#DB4444] text-white px-8 py-3 rounded hover:bg-red-600 transition-colors">
              Apply
            </button>
          </div>

          <button className="bg-[#DB4444] text-white w-full py-4 rounded-md font-bold text-lg mt-6 hover:bg-red-600 shadow-lg active:scale-[0.98] transition-all">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;