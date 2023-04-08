import React from "react";
import styles from "./styles.module.scss";
import publishPost from "@/actions/blogs/publish_post";

const NewPostHeader = () => {
  return (
    <div className={styles.new_post_header}>
      <button onClick={publishPost}>Publish</button>
    </div>
  );
};

export default NewPostHeader;
