import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import BlogPost from "@/types/blog-post";
import SinglePost from "@/themes/their-daddy/SinglePost";
import Head from "next/head";

const Post = (post: BlogPost) => {
  if (!post) {
    return <>Post not found</>;
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <SinglePost
        title={post.title}
        content={post.content}
        createdAt={post.createdAt}
        slug={post.slug}
      />
    </>
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
