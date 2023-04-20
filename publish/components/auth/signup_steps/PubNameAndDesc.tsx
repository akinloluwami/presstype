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
    author_bio,
    author_name,
    setAuthorBio,
    setAuthorName,
  } = useCompleteSignupStore();

  return (
    <div className={styles.pub_name_n_desc}>
      {message && <h4>{message}</h4>}
      <div className={styles.blog_info}>
        <h2 className="mb-4 text-2xl">Blog Information</h2>
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
      <div className="flex flex-col">
        <h2 className="mb-2 text-2xl">Author Information</h2>
        <p>What's your name?</p>
        <input
          type="text"
          placeholder="Type your name here"
          className="mb-8 py-[10px] bg-base_dark outline-none px-[8px] text-lg rounded-md"
          value={author_name}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <p>Bio</p>
        <textarea
          placeholder="Tell the world about yourself in 200 characters or less."
          value={author_bio}
          className="mb-8 py-[10px] px-[8px] text-lg rounded-md h-[100px] bg-base_dark outline-none"
          onChange={(e) => setAuthorBio(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PubNameAndDesc;
