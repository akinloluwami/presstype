import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import styles from "./styles.module.scss";
import useGetAllPosts from "@/actions/blogs/get_all_posts";

const Posts = () => {
  // const postTypes = ["All", "Scheduled", "Deleted"];
  const [posts, setPosts] = useState<[]>([]);

  const getAllPosts = useGetAllPosts();

  useEffect(() => {
    (async () => {
      const res = await getAllPosts();
    })();
  }, []);

  // useEffect(() => {}, []);
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
