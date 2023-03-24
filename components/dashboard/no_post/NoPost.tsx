import Link from "next/link";
import React from "react";
import { ImFileEmpty } from "react-icons/im";
import { RxRocket } from "react-icons/rx";
const NoPost = () => {
  return (
    <div>
      <h1>
        <ImFileEmpty />
      </h1>
      <p>You don't have any post yet.</p>
      <Link href="/">
        <RxRocket />
        Publish your first post
      </Link>
    </div>
  );
};

export default NoPost;
