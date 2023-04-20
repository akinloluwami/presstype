import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import BlogPost from "@/types/blog-post";
import SinglePost from "@/themes/their-daddy/SinglePost";

const Post = ({ post }: any) => {
  if (!post) {
    return <>Post not found</>;
  }
  return (
    <div>
      <SinglePost
        title={post.title}
        content={post.content}
        createdAt={post.createdAt}
        slug={post.slug}
      />
      {JSON.stringify(post)}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const response = await axios.get(
      `http://localhost:3310/post?url=${req.headers.host}${req.url}`
    );
    const post = response.data.post;
    return { props: { post } };
  } catch (error) {
    console.log(error);
    return { props: { post: null } };
  }
};

export default Post;
