import React, { useState, useContext } from "react";
import styles from "./MenuItem.module.css";
import cartContext from "../store/cart-context";

const MenuItem = ({ title, shortText, price }) => {
  const [amount, setAmount] = useState(1);

  const caartContext = useContext(cartContext);

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const item = {
      title: title,
      price: price,
      quantity: parseInt(amount),
    };
    caartContext.addToCart(item);
  };

  return (
    <div className={styles["menu-item"]}>
      <div className={styles["menu-item__info"]}>
        <h3>{title}</h3>
        <p>{shortText}</p>
        <h4>${price}</h4>
      </div>
      <div className={styles["menu-item__form"]}>
        <form action="" onSubmit={formSubmissionHandler}>
          <label htmlFor="quantity">Amount</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            min={1}
            step={1}
            value={amount}
            className={styles["form-input-field"]}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <div className={styles["form-controls"]}>
            <button
              className={`${styles["form_button"]} ${styles["add-button"]}`}
            >
              Add +
            </button>
            {/* <button className={styles["form_button"]}>-</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuItem;
