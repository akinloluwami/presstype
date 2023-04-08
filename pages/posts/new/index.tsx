import Editor from "@/components/dashboard/editor/Editor";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";
import styles from "./styles.module.scss";
import NewPostHeader from "@/components/dashboard/posts/NewPostHeader/NewPostHeader";
import { useNewPostStore } from "@/stores/newPostStore";

const NewPost = () => {
  const { title, setTitle } = useNewPostStore();
  return (
    <DashboardLayout page_name={`Editing ${title ? `"${title}"` : ""}`}>
      <NewPostHeader />
      <input
        type="text"
        className={styles.article_title}
        placeholder="Article title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <Editor />
      </div>
    </DashboardLayout>
  );
};

export default NewPost;
