import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import styles from "./styles.module.scss";

const InputGroup = ({ text }: { text: string }) => {
  return (
    <div className={styles.input_group_container}>
      <input
        type="text"
        placeholder="sub-domain"
        data-theme={useTheme().theme}
      />
      {text}
    </div>
  );
};

export default InputGroup;
