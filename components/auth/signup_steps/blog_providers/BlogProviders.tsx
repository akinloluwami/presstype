import React from "react";
import { SiBlogger, SiHashnode, SiMedium, SiWordpress } from "react-icons/si";
import styles from "./styles.module.scss";

const BlogProviders = () => {
  const providers = [
    {
      name: "Wordpress",
      logo: <SiWordpress />,
    },
    {
      name: "Medium",
      logo: <SiMedium />,
    },
    {
      name: "Hashnode",
      logo: <SiHashnode />,
    },
    {
      name: "Blogger",
      logo: <SiBlogger />,
    },
  ];
  return (
    <div>
      <h2>Choose your provider</h2>
      <div className={styles.providers}></div>
    </div>
  );
};

export default BlogProviders;
