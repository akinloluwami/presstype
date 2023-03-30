import AuthButton from "@/components/auth/auth_button/AuthButton";
import AuthLayout from "@/layouts/auth_layout/AuthLayout";
import React from "react";
import { SiApple, SiGithub, SiGoogle } from "react-icons/si";

const Home = () => {
  function log() {
    console.log("Hii");
  }
  return (
    <AuthLayout auth_type={"Sign in"}>
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
