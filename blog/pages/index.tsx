import TheirDaddy from "@/themes/their-daddy/TheirDaddy";
import axios from "axios";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import BlogInfo from "@/types/blog-info";
import BlogPost from "@/types/blog-post";
import Head from "next/head";

interface Props {
  blog: {
    blogInfo: BlogInfo;
    blogPosts: BlogPost[];
  };
}
const Index = ({ blog }: Props) => {
  if (!blog) {
    return <div>Not Blog</div>;
  }

  return (
    <>
      <Head>
        <title>{blog.blogInfo.title}</title>
      </Head>
      <TheirDaddy blogInfo={blog.blogInfo} blogPosts={blog.blogPosts} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const response = await axios.get(
      `http://localhost:3310/blog?blog=${req.headers.host}`
    );
    const blog = response.data;
    return { props: { blog } };
  } catch (error) {
    console.log(error);
    return { props: { blog: null } };
  }
};

export default Index;
