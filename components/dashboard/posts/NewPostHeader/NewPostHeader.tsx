import React from "react";
import styles from "./styles.module.scss";

const NewPostHeader = () => {
  return (
    <div className={styles.new_post_header}>
      <button>Publish</button>
    </div>
  );
};

export default NewPostHeader;
