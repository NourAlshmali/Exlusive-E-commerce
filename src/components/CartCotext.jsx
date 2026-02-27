import { Children, React, createContext, useState } from "react";

export const CartContextData = createContext();

const CartContext = ({ Children }) => {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <CartContextData.Provider value={{ cart, setCart, isInCart }}>
      {Children}
    </CartContextData.Provider>
  );
};

export default CartContext;
