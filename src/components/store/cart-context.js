import React, { createContext } from "react";
const cartContext = createContext({
  cartTotal: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  cart: [],
});
export default cartContext;
