import React from "react";
import styles from "./styles.module.scss";

interface AuthButtonProps {
  action: () => void;
  bg_color: string;
  children: any;
}

const AuthButton = ({ action, bg_color, children }: AuthButtonProps) => {
  return (
    <button
      onClick={action}
      className={styles.auth_button}
      style={{
        backgroundColor: bg_color,
      }}
    >
      {children}
    </button>
  );
};

export default AuthButton;
