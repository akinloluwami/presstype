import AuthButton from "@/components/auth/auth_button/AuthButton";
import AuthLayout from "@/layouts/auth_layout/AuthLayout";
import React from "react";
import { SiApple, SiGithub, SiGoogle } from "react-icons/si";
import { GiFairyWand } from "react-icons/gi";
import { useRouter } from "next/router";
const Home = () => {
  function log() {
    console.log("Hii");
  }

  const router = useRouter();
  const magicLink = () => {
    router.push("/signin/magic-link");
  };
  return (
    <AuthLayout auth_type={"Sign in"}>
      <AuthButton action={magicLink} bg_color="#D1D5DA">
        <GiFairyWand /> Magic Link
      </AuthButton>
      <AuthButton action={log} bg_color="#D1D5DA">
        <SiGoogle /> Google
      </AuthButton>
      <AuthButton action={log} bg_color="#D1D5DA">
        <SiApple /> Apple
      </AuthButton>
      <AuthButton action={log} bg_color="#D1D5DA">
        <SiGithub /> GitHub
      </AuthButton>
    </AuthLayout>
  );
};

export default Home;
