import React from "react";
import BlogInfo from "@/types/blog-info";
import BlogPost from "@/types/blog-post";
import Header from "./components/Header";

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
    </div>
  );
};

export default TheirDaddy;
