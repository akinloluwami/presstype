import React from "react";
import styles from "./styles.module.scss";

interface Props {
  number: number;
  text: string;
  icon: string;
}

const StatCard = ({ number, text, icon }: Props) => {
  return <div className={styles.stat_card}>StatCard</div>;
};

export default StatCard;
