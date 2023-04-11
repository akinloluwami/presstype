import formatNumber from "@/utils/format_number";
import truncate_string from "@/utils/truncate_string";
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
        {data.slice(0, 9).map((d, i) => (
          <div className={styles.text_data} key={i} onClick={onClick}>
            <p title={d.text}>{truncate_string(d.text, 37)}</p>
            <p>{formatNumber(d.number)}</p>
          </div>
        ))}
        {data.length > 9 && (
          <center>
            <button className={styles.explore_btn}>Explore</button>
          </center>
        )}
      </div>
    </div>
  );
};

export default AnalyticsCard;
