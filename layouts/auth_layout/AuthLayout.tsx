import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import styles from "./styles.module.scss";

interface AuthLayoutProps {
  children: React.ReactNode;
  auth_type: "Sign in" | "Sign up";
}

const AuthLayout = ({ children, auth_type }: AuthLayoutProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.auth_layout_container} data-theme={theme}>
      <button onClick={toggleTheme}>
        {theme === "dark" ? <RiSunFill /> : <RiMoonFill />}
      </button>
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
