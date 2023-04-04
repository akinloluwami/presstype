import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import blogExists from "@/actions/auth/exists";

interface MagicLinkProps {
  type: "Sign in" | "Sign up";
}

const MagicLink = ({ type }: MagicLinkProps) => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const { theme } = useTheme();

  const clickHandler = async () => {
    setLoading(true);
    if (type === "Sign in") {
      const blog: any = await blogExists(email);
      if (blog.status === 200) {
        console.log(blog);
        setMessage(blog.data.message);
        setLoading(false);
        return;
      }
      setMessage(blog.data.message);
      setLoading(false);
    }
  };

  return (
    <div className={styles.magic_link_container} data-theme={theme}>
      <h1>P</h1>

      <small>Use your email address to {type.toLowerCase()}</small>

      <input
        placeholder="Email address"
        data-theme={theme}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={clickHandler} disabled={!email || loading}>
        {loading ? "..." : "Send magic link"}
      </button>
      {!loading && <small>{message}</small>}
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
