import React, { useState } from "react";
import styles from "./styles.module.scss";
import usePublishPost from "@/actions/blogs/publish_post";
import { toast, Toaster } from "react-hot-toast";

const NewPostHeader = () => {
  const publishPost = usePublishPost();
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    setLoading(true);
    toast.loading("Publishing...", {
      id: "publishing",
    });
    const res = await publishPost();
    console.log(res);

    if (res.status !== 201) {
      toast.error(res.data.message || "Something went wrong");
      toast.dismiss("publishing");
    } else {
      toast.dismiss("publishing");
      toast.success(res.data.message);
    }
  };
  return (
    <div className={styles.new_post_header}>
      <Toaster />
      <button onClick={handle}>Publish</button>
    </div>
  );
};

export default NewPostHeader;
