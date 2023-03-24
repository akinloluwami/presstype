import React from "react";
import styles from "./styles.module.scss";

const Searchbar = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className={styles.searchbar}
    ></input>
  );
};

export default Searchbar;
