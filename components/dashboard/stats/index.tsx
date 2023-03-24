import React from "react";
import styles from "./styles.module.scss";
const Stats = () => {
  const statsData = [
    {
      number: 1320000,
      text: "Page views",
      icon: "",
    },
    {
      number: 72492,
      text: "Subcribers",
      icon: "",
    },
    {
      number: 969,
      text: "Posts",
      icon: "",
    },
    {
      number: 972345,
      text: "Visitors",
      icon: "",
    },
  ];
  return <div className={styles.stats_container}>Index</div>;
};

export default Stats;
