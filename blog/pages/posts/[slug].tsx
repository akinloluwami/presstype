import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";

const Post = () => {
  return <div>Post</div>;
};

export default Post;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get(`http://localhost:3310/post`);
    const post = response.data;
    return { props: { post } };
  } catch (error) {
    console.log(error);
    return { props: { post: null } };
  }
};
