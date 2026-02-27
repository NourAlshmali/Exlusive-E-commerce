import React from "react";
import WishlistContext, { WishlistContextData } from "../components/WishlistContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate() ; 
  const {cart , setCart , isInCart} = useContext (WishlistContextData)
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4">Product</th>
              <th className="text-left py-4">Price</th>
              <th className="text-left py-4">Quantity</th>
              <th className="text-right py-4">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {/* item 1 */}
            <tr className="border-b">
              <td className="py-6 flex items-center gap-4">
                <button className="text-red-500 text-xl">✕</button>
                <img src="/img/monitor.png" className="w-14" />
                <span>LCD Monitor</span>
              </td>

              <td>$650</td>

              <td>
                <input
                  type="number"
                  defaultValue={1}
                  className="w-16 border rounded px-2 py-1"
                />
              </td>

              <td className="text-right">$650</td>
            </tr>

            {/* item 2 */}
            <tr>
              <td className="py-6 flex items-center gap-4">
                <button className="text-red-500 text-xl">✕</button>
                <img src="/img/gamepad.png" className="w-14" />
                <span>H1 Gamepad</span>
              </td>

              <td>$550</td>

              <td>
                <input
                  type="number"
                  defaultValue={2}
                  className="w-16 border rounded px-2 py-1"
                />
              </td>

              <td className="text-right">$1100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
