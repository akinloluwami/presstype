import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";

interface MagicLinkProps {
  type: "Sign in" | "Sign up";
}

const MagicLink = ({ type }: MagicLinkProps) => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { theme } = useTheme();

  const clickHandler = () => {
    if (type === "Sign in") {
    }
  };

  return (
    <div className={styles.magic_link_container} data-theme={theme}>
      <h1>P</h1>

      <small>Use your email address to {type.toLowerCase()}</small>
      <input placeholder="Email address" data-theme={theme} />
      <button>Send magic link</button>
      <p>
        {" "}
        {type === "Sign in"
          ? "New to PressType?"
          : "Already have an account?"}{" "}
        <Link
          href={
            type === "Sign in" ? "/signup/magic-link" : "/signin/magic-link"
          }
        >
          {type === "Sign in" ? "Sign up" : "Sign in"}
        </Link>
      </p>
    </div>
  );
};

export default MagicLink;
