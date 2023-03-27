import Toggle from "@/components/elements/toggle/Toggle";
import React from "react";
import styles from "./styles.module.scss";

const OptionToggle = ({ text }: { text: string }) => {
  return (
    <div className={styles.container}>
      <h3>{text}</h3>
      <Toggle />
    </div>
  );
};

export default OptionToggle;
