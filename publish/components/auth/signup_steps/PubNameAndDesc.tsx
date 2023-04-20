import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useCompleteSignupStore } from "@/stores/completeSignUpStore";

const PubNameAndDesc = () => {
  const {
    title,
    setTitle,
    subdomain,
    setSubdomain,
    description,
    setDescription,
    message,
  } = useCompleteSignupStore();

  return (
    <div className={styles.pub_name_n_desc}>
      {message && <h4>{message}</h4>}
      <div className={styles.blog_info}>
        <h2>Blog Information</h2>
        <div className={styles.pub_name_n_bc}>
          <div className={styles.subdomain}>
            <p>Choose a subdomain</p>
            <input
              type="text"
              placeholder="something"
              value={subdomain}
              onChange={(e) =>
                setSubdomain(e.target.value.trim().toLowerCase())
              }
            />
            .presstype.co
          </div>
          {/* <div className="">
          <p>Brand color</p>
          <input type="color" />
        </div> */}
        </div>
        <div className={styles.pub_name_n_bc}>
          <div className="">
            <p>Blog title</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* <div className="">
          <p>Brand color</p>
          <input type="color" />
        </div> */}
        </div>
        <div className={styles.pub_about}>
          <p>What is your publication about?</p>
          <textarea
            placeholder="Describe your publication in 200 characters or less."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <h2>Author Information</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Tell the world about yourself in 200 characters or less."
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />
    </div>
  );
};

export default PubNameAndDesc;
