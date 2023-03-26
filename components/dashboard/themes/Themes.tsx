import React, { useState } from "react";
import styles from "./styles.module.scss";

const Themes = () => {
  const [selected, setSelected] = useState(0);
  const themes = [0, 1, 2];
  return (
    <div className={styles.themes_container}>
      <h3>Theme</h3>
      <div className={styles.theme_cards}>
        {themes.map((theme, i) => (
          <div
            className={`${styles.theme_card} ${
              selected === theme && styles.active
            }`}
            onClick={() => setSelected(theme)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
