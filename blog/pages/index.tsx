import axios from "axios";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";

const Index = ({ blog }: any) => {
  if (!blog) {
    return <div>Not Blog</div>;
  }

  useEffect(() => {
    console.log(blog);
  }, []);
  return <div className="">wow, blog</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get("http://localhost:3310/");
    const blog = response.data;
    return { props: { blog } };
  } catch (error) {
    console.log(error);
    return { props: { blog: null } };
  }
};

export default Index;
