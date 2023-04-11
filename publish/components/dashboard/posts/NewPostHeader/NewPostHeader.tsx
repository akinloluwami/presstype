import React, { useState } from "react";
import styles from "./styles.module.scss";
import usePublishPost from "@/actions/blogs/publish_post";
import { toast, Toaster } from "react-hot-toast";

const NewPostHeader = () => {
  const publishPost = usePublishPost();
  const [isLoading, setIsLoading] = useState(false);

  // https://presstype.s3.amazonaws.com/7a5c2da5-8d54-4ac1-a904-9ac3fb0be95e-avyg3jq.jpg

  const handleNewPost = async () => {
    toast.loading("Publishing...", {
      id: "publishing",
    });

    setIsLoading(true);
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
      <button onClick={handleNewPost} disabled={isLoading}>
        Publish
      </button>
    </div>
  );
};

export default NewPostHeader;
