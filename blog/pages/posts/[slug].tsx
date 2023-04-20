import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import BlogPost from "@/types/blog-post";

const Post = ({ post }: any) => {
  if (!post) {
    return <>Post not found</>;
  }
  return <div>Post</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const response = await axios.get(
      `http://localhost:3310/post?url=${req.headers.host}${req.url}`
    );
    const post = response.data;
    return { props: { post } };
  } catch (error) {
    console.log(error);
    return { props: { post: null } };
  }
};

export default Post;
