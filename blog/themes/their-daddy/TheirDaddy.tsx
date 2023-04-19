import React from "react";
import BlogInfo from "@/types/blog-info";
import BlogPost from "@/types/blog-post";
import Header from "./components/Header";
import PostCard from "./components/PostCard";

const TheirDaddy = ({
  blogInfo,
  blogPosts,
}: {
  blogInfo: BlogInfo;
  blogPosts: BlogPost[];
}) => {
  return (
    <div>
      <Header title={blogInfo.title} />
      {blogPosts.map((post) => (
        <PostCard title={post.title} slug={post.slug} key={post.slug} />
      ))}
    </div>
  );
};

export default TheirDaddy;
