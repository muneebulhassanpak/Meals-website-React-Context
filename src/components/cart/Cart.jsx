import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";
import cartContext from "../store/cart-context";
import CartItemsModal from "./CartItemsModal";
import Overlay from "../overlay/Overlay";

const Cart = () => {
  const caartContext = useContext(cartContext);
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };

  return (
    <>
      <button
        className={styles["cart-button"]}
        onClick={() => {
          openModal();
        }}
      >
        <span>CART</span> {caartContext.cartTotal}
      </button>
      {
        modal && (
          // (ReactDOM.createPortal(
          <Overlay closePopup={closeModal}>
            <CartItemsModal closePopup={closeModal} />
          </Overlay>
        )
        // ),
        // document.getElementById("overlay-modal"))
      }
    </>
  );
};

export default Cart;
