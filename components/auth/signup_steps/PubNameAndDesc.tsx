import React, { useState } from "react";
import styles from "./styles.module.scss";

const PubNameAndDesc = () => {
  const [title, setTitle] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [about, setAbout] = useState("");

  return (
    <div className={styles.pub_name_n_desc}>
      <div className={styles.pub_name_n_bc}>
        <div className={styles.subdomain}>
          <p>Choose a subdomain</p>
          <input
            type="text"
            placeholder="something"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value.trim().toLowerCase())}
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
            onChange={(e) => setTitle(e.target.value.trim().toLowerCase())}
          />
        </div>
        {/* <div className="">
          <p>Brand color</p>
          <input type="color" />
        </div> */}
      </div>
      <div className={styles.pub_about}>
        <p>What's your publication about?</p>
        <textarea
          placeholder="Describe your publication in 200 characters or less."
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PubNameAndDesc;
