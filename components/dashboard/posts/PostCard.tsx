import React from "react";
import styles from "./styles.module.scss";
import { CgOptions } from "react-icons/cg";
import { useTheme } from "@/contexts/ThemeContext";

const PostCard = ({ title }: { title: string }) => {
  const { theme } = useTheme();
  return (
    <div className={styles.post_card_container}>
      <h1>{title}</h1>
      <div className={styles.side}>
        <p className="">539 views</p>
        <button data-theme={theme}>
          <CgOptions />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
