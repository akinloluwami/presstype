import Editor from "@/components/dashboard/editor/Editor";
import DashboardLayout from "@/layouts/dashboard_layout";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import NewPostHeader from "@/components/dashboard/posts/NewPostHeader/NewPostHeader";
import { useNewPostStore } from "@/stores/newPostStore";
import axios from "axios";

const NewPost = () => {
  const { title, setTitle } = useNewPostStore();
  const [file, setFile] = useState<any>();

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", file);

    axios.post("/api/blogs/upload-image", formData).then((data) => {
      console.log(data);
    });
  };

  return (
    <DashboardLayout page_name={`Editing ${title ? `"${title}"` : ""}`}>
      <input
        type="file"
        onChange={(e: any) => {
          setFile(e.target.files[0]);
        }}
      />

      <button
        onClick={() => {
          console.log(file);

          uploadImage();
        }}
      >
        Upload
      </button>
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
