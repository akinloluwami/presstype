import React from "react";
import styles from "./styles.module.scss";

const Themes = () => {
  return (
    <div className={styles.themes_container}>
      <h3>Themes</h3>
      <div className={styles.theme_cards}>
        <div className={styles.theme_card}></div>
        <div className={styles.theme_card}></div>
        <div className={styles.theme_card}></div>
      </div>
    </div>
  );
};

export default Themes;
