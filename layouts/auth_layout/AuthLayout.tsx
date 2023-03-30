import React from "react";
import styles from "./styles.module.scss";

interface AuthLayoutProps {
  children: any;
  auth_type: "Sign in" | "Sign up";
}

const AuthLayout = ({ children, auth_type }: AuthLayoutProps) => {
  return (
    <div className={styles.auth_layout_container}>
      <h1>P</h1>
      <h2>Welcome to PressType</h2>

      <div className={styles.auth_content}>
        <center>
          <p>{auth_type} with one of the following:</p>
        </center>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
