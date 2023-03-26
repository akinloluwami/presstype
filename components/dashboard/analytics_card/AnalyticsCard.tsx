import React from "react";

const AnalyticsCard = ({
  title,
  data,
}: {
  title: string;
  data: { text: string; number: number }[];
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="">
        {data.map((d, i) => (
          <div className="" key={i}>
            <p>{d.text}</p>
            <p>{d.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsCard;
