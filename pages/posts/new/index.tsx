import Editor from "@/components/dashboard/editor/Editor";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";
import styles from "./styles.module.scss";
import NewPostHeader from "@/components/dashboard/posts/NewPostHeader/NewPostHeader";

const NewPost = () => {
  return (
    <DashboardLayout page_name={"Add new post"}>
      <NewPostHeader />
      <input
        type="text"
        className={styles.article_title}
        placeholder="Article title"
      />
      <div className={styles.editor}>
        <Editor />
      </div>
    </DashboardLayout>
  );
};

export default NewPost;
