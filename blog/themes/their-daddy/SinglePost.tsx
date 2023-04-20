import BlogPost from "@/types/blog-post";
import React from "react";
import moment from "moment";

const SinglePost = ({ title, content, createdAt }: BlogPost) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{moment(createdAt).format("DD/MM/YYYY")}</p>
      <div className="">{content}</div>
    </div>
  );
};

export default SinglePost;
