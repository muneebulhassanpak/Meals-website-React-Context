import React from "react";
import styles from "./Overlay.module.css";

const Overlay = (props) => {
  return (
    <div
      className={styles["overlay"]}
      onClick={(e) => {
        // e.stopPropagation();
        props.closePopup();
      }}
    >
      {props.children}
    </div>
  );
};

export default Overlay;
