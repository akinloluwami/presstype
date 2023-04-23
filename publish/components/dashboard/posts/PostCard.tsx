import React from "react";
import styles from "./styles.module.scss";
import { CgOptions } from "react-icons/cg";
import { useTheme } from "@/contexts/ThemeContext";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

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
      <Link href={""}>
        <button className="flex items-center">
          <CgOptions /> Edit
        </button>
      </Link>
    </div>
  );
};

export default PostCard;
