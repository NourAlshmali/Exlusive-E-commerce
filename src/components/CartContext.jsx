import React, { createContext, useState } from "react";

export const CartContextData = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => cart.some((item) => item.id === id);
  const toggleCart = (product) => {
    if (isInCart(product.id)) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const updateQuantity = (id, amount) => {
    setCart (cart.map((item) => item.id === id ? { ...item, quantity: amount } : item));
    
  };

  return (
    <CartContextData.Provider
      value={{ cart, setCart, toggleCart, isInCart , updateQuantity, removeFromCart }}
    >
      {children}
    </CartContextData.Provider>
  );
};

export default CartContext;
