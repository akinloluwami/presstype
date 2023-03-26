import React from "react";
import styles from "./styles.module.scss";

const AnalyticsCard = ({
  title,
  data,
  data_context,
  onClick,
}: {
  title: string;
  data: { text: string; number: number }[];
  data_context: string;
  onClick?: () => void;
}) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_header}>
        <h3>{title}</h3>
        <p>{data_context}</p>
      </div>
      <div className={styles.card_container_data}>
        {data.map((d, i) => (
          <div className={styles.text_data} key={i} onClick={onClick}>
            <p>{d.text}</p>
            <p>{d.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsCard;
