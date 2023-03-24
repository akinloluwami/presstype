import { useTheme } from "@/contexts/ThemeContext";
import formatNumber from "@/utils/format_number";
import React from "react";
import styles from "./styles.module.scss";

interface Props {
  number: number;
  text: string;
  icon: string;
}

const StatCard = ({ number, text, icon }: Props) => {
  const { theme } = useTheme();
  return (
    <div className={styles.stat_card} data-theme={theme}>
      <div className=""></div>
      <div className="">
        <h3>{formatNumber(number)}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default StatCard;
