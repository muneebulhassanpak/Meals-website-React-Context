import React from "react";

import styles from "./Header.module.css";
import globalStyles from "../../index.module.css";
import Cart from "../cart/Cart";

const Header = () => {
  return (
    <div className={globalStyles["container"]}>
      <header className={styles["header"]}>
        <h1 className={styles["header__logo"]}>ReactMeals</h1>
        <Cart />
      </header>
    </div>
  );
};

export default Header;
