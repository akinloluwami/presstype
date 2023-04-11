import Editor from "@/components/dashboard/editor/Editor";
import DashboardLayout from "@/layouts/dashboard_layout";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import NewPostHeader from "@/components/dashboard/posts/NewPostHeader/NewPostHeader";
import { useNewPostStore } from "@/stores/newPostStore";
import axios from "axios";
import Modal from "@/components/elements/modal/Modal";
import { useModalStore } from "@/stores/modalStore";

const NewPost = () => {
  const { title, setTitle } = useNewPostStore();
  const { isOpen, setIsOpen } = useModalStore();
  return (
    <DashboardLayout page_name={`Editing ${title ? `"${title}"` : ""}`}>
      {isOpen && <Modal onClose={() => setIsOpen(false)}>lll</Modal>}
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
