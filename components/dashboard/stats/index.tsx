import React from "react";
import StatCard from "./StatCard";
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
  return (
    <div className={styles.stats_container}>
      {statsData.map((stat, i) => (
        <StatCard
          text={stat.text}
          number={stat.number}
          icon={stat.icon}
          key={i}
        />
      ))}
    </div>
  );
};

export default Stats;
