import React from "react";
import styles from "./styles.module.scss";

interface MagicLinkProps {
  type: "Sign in" | "Sign up";
}

const MagicLink = ({ type }: MagicLinkProps) => {
  return (
    <div className={styles.magic_link_container}>
      <h1>P</h1>
      <div className="">
        <input placeholder="Email address" />
        <button></button>
      </div>
    </div>
  );
};

export default MagicLink;
