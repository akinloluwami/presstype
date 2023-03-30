import AuthButton from "@/components/auth/auth_button/AuthButton";
import AuthLayout from "@/layouts/auth_layout/AuthLayout";
import React from "react";

const Home = () => {
  function log() {
    console.log("Hii");
  }
  return (
    <AuthLayout>
      <AuthButton action={log} bg_color="red">
        GitHub
      </AuthButton>
    </AuthLayout>
  );
};

export default Home;
