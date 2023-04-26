import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface AuthButtonProps {
  action: () => void;
  bg_color: string;
  children: ReactNode;
}

const AuthButton = ({ action, bg_color, children }: AuthButtonProps) => {
  return (
    <button onClick={action} className="auth-btn">
      {children}
    </button>
  );
};

export default AuthButton;
