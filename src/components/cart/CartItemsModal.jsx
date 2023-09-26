import React, { useContext, useState, useEffect } from "react";

import styles from "./CartItemsModal.module.css";
import cartContext from "../store/cart-context";

const CartItemsModal = (props) => {
  const caartContext = useContext(cartContext);
  const [cart, setCart] = useState(caartContext.cart);

  const increaseByOne = (item) => {
    const newItem = {
      ...item,
      quantity: 1,
    };
    caartContext.addToCart(newItem);
  };
  const decreaseByOne = (item) => {
    const newItem = {
      ...item,
      quantity: 1,
    };
    caartContext.removeFromCart(newItem);
  };
  let total = 0;
  if (cart.length > 0) {
    for (const item of cart) {
      console.log(item);
      total += parseInt(item.quantity) * parseInt(item.price);
      console.log(parseInt(item.quantity), parseInt(item.price));
    }
  }
  console.log(total);
  useEffect(() => {
    setCart(caartContext.cart);
  }, [caartContext.cart]);
  return (
    <div className={styles["cart-modal"]}>
      <h1>Your Cart</h1>
      {cart.length > 0 &&
        cart.map((cartItem) => (
          <div
            className={styles["cart-modal__item"]}
            key={Math.random()}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h3>{cartItem.title}</h3>
            <div className={styles["cart-modal__item__detailsDiv"]}>
              <div className={styles["cart-modal__item__detailsDiv__content"]}>
                <h4>${cartItem.price}</h4>
                <p>x{cartItem.quantity}</p>
              </div>
              <button
                onClick={() => {
                  increaseByOne(cartItem);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  decreaseByOne(cartItem);
                }}
              >
                -
              </button>
            </div>
          </div>
        ))}
      {cart.length == 0 && <p>Add Items to see here</p>}
      <div className={styles["cart-modal__controls"]}>
        <button
          onClick={(e) => {
            props.closePopup();
          }}
        >
          Close
        </button>
        <button
          onClick={() => {
            alert("Order placed!");
          }}
        >
          Order
        </button>
      </div>
      <h3>TOTAL: ${total}</h3>
    </div>
  );
};

export default CartItemsModal;
