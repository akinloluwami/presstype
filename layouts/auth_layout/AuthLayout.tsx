import React from "react";
import styles from "./styles.module.scss";

const AuthLayout = ({ children }: any) => {
  return (
    <div className={styles.auth_layout_container}>
      <h1>P</h1>
      <h2>Welcome to PressType</h2>
      <div className="">{children}</div>
    </div>
  );
};

export default AuthLayout;
