import axios from "axios";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";

const Index = ({ blog }: any) => {
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get("http://localhost:3310/blog");
      const blog = response.data;
      console.log(blog);
    };
    fetchBlog();
    console.log(blog);
  }, []);

  if (!blog) {
    return <div>Not Blog</div>;
  }

  return <div className="">wow, blog</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get("http://localhost:3310/blog");
    const blog = response.data;
    console.log(blog);

    return { props: { blog } };
  } catch (error) {
    console.log(error);
    return { props: { blog: null } };
  }
};

export default Index;
