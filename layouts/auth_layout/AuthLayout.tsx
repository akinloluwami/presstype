import React from "react";
import styles from "./styles.module.scss";

const AuthLayout = ({ children }: any) => {
  return <div className={styles.auth_layout_container}>{children}</div>;
};

export default AuthLayout;
