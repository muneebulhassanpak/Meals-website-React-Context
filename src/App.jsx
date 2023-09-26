import React, { useState } from "react";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/menu";
import cartContext from "./components/store/cart-context";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (itemInCart) => itemInCart.title == item.title
      );
      if (itemIndex != -1) {
        const updatedItem = { ...prevCart[itemIndex] };
        updatedItem.quantity += item.quantity;
        const newCart = [...prevCart];
        newCart[itemIndex] = updatedItem;
        return newCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (itemInCart) => itemInCart.title == item.title
      );
      if (itemIndex != -1) {
        const updatedItem = { ...prevCart[itemIndex] };
        let newCart = [...prevCart];
        if (updatedItem.quantity != 1) {
          updatedItem.quantity -= item.quantity;
          newCart[itemIndex] = updatedItem;
        } else {
          newCart = newCart.filter((cartItem) => cartItem.title != item.title);
        }
        return newCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  console.log(cart);
  return (
    <cartContext.Provider
      value={{
        cartTotal: cart.length,
        addToCart: addToCart,
        cart: cart,
        removeFromCart: removeFromCart,
      }}
    >
      <Header />
      <Hero />
      <Menu />
    </cartContext.Provider>
  );
};

export default App;
