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
    <div className="bg-black min-h-screen text-white">
      <div className="w-[95%] max-w-[1100px] mx-auto">
        <Header title={blogInfo.title} />
        {blogPosts.map((post) => (
          <PostCard title={post.title} slug={post.slug} key={post.slug} />
        ))}
      </div>
    </div>
  );
};

export default TheirDaddy;
