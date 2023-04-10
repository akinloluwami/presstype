import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import singIn from "@/actions/auth/signin";
import signUp from "@/actions/auth/signup";
import toast, { Toaster } from "react-hot-toast";

interface MagicLinkProps {
  type: "Sign in" | "Sign up";
}

const MagicLink = ({ type }: MagicLinkProps) => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const { theme } = useTheme();

  const clickHandler = async () => {
    toast.loading("Sending magic link...", {
      id: "loading",
    });
    if (type === "Sign in") {
      const signin: any = await singIn(email);
      toast.dismiss("loading");
      toast(signin.data.message, {
        id: "success",
        duration: 2500,
      });
      return;
    }
    const signup: any = await signUp(email);
    toast.dismiss("loading");
    toast(signup.data.message, {
      id: "success",
      duration: 2500,
    });
    return;
  };

  return (
    <div className={styles.magic_link_container} data-theme={theme}>
      <h1>P</h1>
      <Toaster />
      <small>Use your email address to {type.toLowerCase()}</small>

      <input
        placeholder="Email address"
        data-theme={theme}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={clickHandler} disabled={!email || loading}>
        Send magic link
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
