import React from "react";
import styles from "./styles.module.scss";

const BlogAccentColorInput = () => {
  return (
    <div className={styles.container}>
      <h3>Blog Accent Color</h3>
      <input placeholder="#573AD8" type={"text"} />
    </div>
  );
};

export default BlogAccentColorInput;
