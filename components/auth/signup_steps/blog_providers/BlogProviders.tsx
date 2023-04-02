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
    <div className={styles.blog_providers}>
      <h2>Choose your provider</h2>
      <div className={styles.providers}>
        {providers.map((provider, i) => (
          <button key={i} className={styles.provider}>
            {provider.logo}
            {provider.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogProviders;
