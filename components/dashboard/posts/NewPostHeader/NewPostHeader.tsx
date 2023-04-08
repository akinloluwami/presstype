import React from "react";
import styles from "./styles.module.scss";
import usePublishPost from "@/actions/blogs/publish_post";

const NewPostHeader = () => {
  const publishPost = usePublishPost();
  return (
    <div className={styles.new_post_header}>
      <button onClick={publishPost}>Publish</button>
    </div>
  );
};

export default NewPostHeader;
