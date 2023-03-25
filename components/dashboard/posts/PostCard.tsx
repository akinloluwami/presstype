import React from "react";
import styles from "./styles.module.scss";
import { CgOptions } from "react-icons/cg";
import { useTheme } from "@/contexts/ThemeContext";

const PostCard = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.post_card_container}>
      <h1>How to become a developer without learning anything</h1>
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
