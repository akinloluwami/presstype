import BlogPost from "@/types/blog-post";
import React from "react";
import moment from "moment";
import parse from "react-html-parser";

const SinglePost = ({ title, content, createdAt }: BlogPost) => {
  return (
    <div className="bg-black text-white pt-10 pb-20">
      <div className="w-[90%] max-w-4xl mx-auto">
        <p className="text-2xl mb-4">
          {moment(createdAt).format("DD/MM/YYYY")}
        </p>
        <h1 className="border-t mt-4 mb-12 pt-8 text-6xl">{title}</h1>
        <div className="their-daddy">{parse(content as string)}</div>
      </div>
    </div>
  );
};

export default SinglePost;
