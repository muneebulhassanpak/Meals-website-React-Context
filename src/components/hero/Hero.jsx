import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section>
      <div className={styles["hero-section"]}></div>
      <div className={styles["hero-section__textContent"]}>
        <h2>Delicious Food, Delivered to you</h2>
        <p>
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high quality ingredients, just in time
          and of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};

export default Hero;
