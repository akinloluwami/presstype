import Editor from "@/components/dashboard/editor/Editor";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";
import styles from "./styles.module.scss";

const NewPost = () => {
  return (
    <DashboardLayout page_name={"Add new post"}>
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
