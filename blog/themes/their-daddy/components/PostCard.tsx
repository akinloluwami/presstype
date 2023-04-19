import BlogPost from "@/types/blog-post";
import Link from "next/link";
import React from "react";
import moment from "moment";

const PostCard = ({ title, slug, createdAt }: BlogPost) => {
  return (
    <div className="flex items-start my-4 flex-col border-t-[1px] py-8 border-t-[#fff48d]">
      <p className="mr-20 text-xl">
        {moment(createdAt).format("MMM DD").toUpperCase()}
      </p>
      <Link
        href={`/posts/${slug}`}
        className="hover:text-[rgba(255,244,141,0.8)] transition-colors"
      >
        <h1 className="text-7xl">{title}</h1>
      </Link>
    </div>
  );
};

export default PostCard;
