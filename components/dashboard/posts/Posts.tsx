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

      if (res.data.blogPosts) {
        setPosts(res.data.blogPosts);
        return;
      }

      console.log("No POSTS");
    })();
  }, []);

  // useEffect(() => {}, []);
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
