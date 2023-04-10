import React from "react";
import styles from "./styles.module.scss";
import usePublishPost from "@/actions/blogs/publish_post";

const NewPostHeader = () => {
  const publishPost = usePublishPost();

  const handle = async () => {
    const res = await publishPost();
    console.log(res);
  };
  return (
    <div className={styles.new_post_header}>
      <button onClick={handle}>Publish</button>
    </div>
  );
};

export default NewPostHeader;
