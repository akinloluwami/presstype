import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
import { RxRocket } from "react-icons/rx";
import styles from "./styles.module.scss";

const NoPost = () => {
  return (
    <div className={styles.no_post_container}>
      <Image
        src={"/images/box_empty.png"}
        width={190}
        height={130}
        alt={"Empty box"}
      />
      <p>{"You don't have any post yet."}</p>
      <Link href="/posts/new">
        <RxRocket />
        Publish your first post
      </Link>
    </div>
  );
};

export default NoPost;
