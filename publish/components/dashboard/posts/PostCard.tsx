import React from "react";
import styles from "./styles.module.scss";
import { CgOptions } from "react-icons/cg";
import { useTheme } from "@/contexts/ThemeContext";
import { HiOutlineExternalLink } from "react-icons/hi";

const PostCard = ({ title }: { title: string }) => {
  const { theme } = useTheme();
  return (
    <div className={styles.post_card_container}>
      <h1 className="flex">
        {title}
        <span className="text-sm ml-1">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <HiOutlineExternalLink />
          </a>
        </span>
      </h1>
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
