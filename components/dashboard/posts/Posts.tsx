import React from "react";
import PostCard from "./PostCard";
import styles from "./styles.module.scss";

const Posts = () => {
  // const postTypes = ["All", "Scheduled", "Deleted"];
  return (
    <div className={styles.posts_container}>
      {/* <div className={styles.posts_types}>
        <button className={styles.post_type}></button>
      </div> */}
      <div className="">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Posts;
