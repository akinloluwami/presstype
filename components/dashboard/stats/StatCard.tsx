import formatNumber from "@/utils/format_number";
import React from "react";
import styles from "./styles.module.scss";

interface Props {
  number: number;
  text: string;
  icon: string;
}

const StatCard = ({ number, text, icon }: Props) => {
  return (
    <div className={styles.stat_card}>
      <div className=""></div>
      <div className="">
        <h3>{formatNumber(number)}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default StatCard;
