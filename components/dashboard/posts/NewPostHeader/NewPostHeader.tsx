import React, { useState } from "react";
import styles from "./styles.module.scss";
import usePublishPost from "@/actions/blogs/publish_post";
import { toast, Toaster } from "react-hot-toast";

const NewPostHeader = () => {
  const publishPost = usePublishPost();
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    setLoading(true);
    const res = await publishPost();
    toast("Hi");
  };
  return (
    <div className={styles.new_post_header}>
      <Toaster />
      <button onClick={handle}>Publish</button>
    </div>
  );
};

export default NewPostHeader;
