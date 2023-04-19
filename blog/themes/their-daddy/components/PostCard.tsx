import BlogPost from "@/types/blog-post";
import Link from "next/link";
import React from "react";

const PostCard = ({ title, slug, createdAt }: BlogPost) => {
  return (
    <Link href={`/posts/${slug}`}>
      <h1>{title}</h1>
    </Link>
  );
};

export default PostCard;
