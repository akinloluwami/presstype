import React from "react";
import styles from "./styles.module.scss";
import { useTheme } from "@/contexts/ThemeContext";

interface MagicLinkProps {
  type: "Sign in" | "Sign up";
}

const MagicLink = ({ type }: MagicLinkProps) => {
  const { theme } = useTheme();

  return (
    <div className={styles.magic_link_container}>
      <h1>P</h1>

      <input placeholder="Email address" />
      <button>Send magic link</button>
    </div>
  );
};

export default MagicLink;
