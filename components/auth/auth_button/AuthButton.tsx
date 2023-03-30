import React from "react";

interface AuthButtonProps {
  action: () => void;
  bg_color: string;
  children: any;
}

const AuthButton = ({ action, bg_color, children }: AuthButtonProps) => {
  return (
    <button
      onClick={action}
      style={{
        backgroundColor: bg_color,
      }}
    >
      {children}
    </button>
  );
};

export default AuthButton;
