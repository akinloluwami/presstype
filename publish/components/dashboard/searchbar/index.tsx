import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import styles from "./styles.module.scss";

const Searchbar = () => {
  const { theme } = useTheme();
  return (
    <input
      type="text"
      placeholder="Search..."
      className={styles.searchbar}
      data-theme={theme}
    ></input>
  );
};

export default Searchbar;
