import React from "react";

import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";

const menu = [
  {
    id: 1,
    title: "Sushi",
    shortText: "Finest Fish and Sushi",
    price: "22",
  },
  {
    id: 2,
    title: "Biryani",
    shortText: "Spicy Rice with chicken and yoghurt",
    price: "25",
  },
  {
    id: 3,
    title: "Haleem",
    shortText: "Different types of beans blended into a soupy mixture",
    price: "30",
  },
];

const Menu = () => {
  return (
    <section className={styles["menu-section"]}>
      {menu.map((recipie) => (
        <MenuItem
          title={recipie.title}
          shortText={recipie.shortText}
          price={recipie.price}
          key={recipie.id}
        />
      ))}
    </section>
  );
};

export default Menu;
