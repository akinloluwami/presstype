import React from "react";

interface AuthButtonProps {
  action: () => void;
  bg_color: string;
  children: any;
}

const AuthButton = ({ action, bg_color, children }: AuthButtonProps) => {
  return <div>GitHubButton</div>;
};

export default AuthButton;
