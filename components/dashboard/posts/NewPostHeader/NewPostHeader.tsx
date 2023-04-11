import React, { useState } from "react";
import styles from "./styles.module.scss";
import usePublishPost from "@/actions/blogs/publish_post";
import { toast, Toaster } from "react-hot-toast";

const NewPostHeader = () => {
  const publishPost = usePublishPost();
  const [loading, setLoading] = useState(false);

  const handleNewPost = async () => {
    setLoading(true);
    toast.loading("Publishing...", {
      id: "publishing",
    });

    const res = await publishPost();

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
      <button onClick={handleNewPost} disabled={loading}>
        Publish
      </button>
    </div>
  );
};

export default NewPostHeader;
