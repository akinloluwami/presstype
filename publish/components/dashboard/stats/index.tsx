import React from "react";
import StatCard from "./StatCard";
import styles from "./styles.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBullseye, FaBook } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";

const Stats = () => {
  const statsData = [
    {
      number: 1320000,
      text: "Page views",
      icon: <FaBullseye className={styles.ico} />,
    },
    {
      number: 72492,
      text: "Subcribers",
      icon: <BsFillPeopleFill className={styles.ico} />,
    },
    {
      number: 969,
      text: "Posts",
      icon: <FaBook className={styles.ico} />,
    },
    {
      number: 972345,
      text: "Viewers",
      icon: <MdAutoGraph className={styles.ico} />,
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
