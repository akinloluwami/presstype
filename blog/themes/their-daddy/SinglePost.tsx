import BlogPost from "@/types/blog-post";
import React from "react";
import moment from "moment";
import parse from "react-html-parser";

const SinglePost = ({ title, content, createdAt }: BlogPost) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{moment(createdAt).format("DD/MM/YYYY")}</p>
      <div className="">{parse(content as string)}</div>
    </div>
  );
};

export default SinglePost;
