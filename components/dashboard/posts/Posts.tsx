import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import styles from "./styles.module.scss";
import useGetAllPosts from "@/actions/blogs/get_all_posts";

const Posts = ({ posts }: { posts: any }) => {
  // const postTypes = ["All", "Scheduled", "Deleted"];

  return (
    <div className={styles.posts_container}>
      {/* <div className={styles.posts_types}>
        <button className={styles.post_type}></button>
      </div> */}
      <div className="">
        {posts.map((post: any) => (
          <PostCard key={post._id} title={post.title} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
