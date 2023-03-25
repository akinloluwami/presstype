import BarChart from "@/components/dashboard/barchart/BarChart";
import LineChart from "@/components/dashboard/linechart/LineChart";
import DashboardLayout from "@/layouts/dashboard_layout";
import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import styles from "./styles.module.scss";

const Index = () => {
  const [graphType, setGraphType] = useState("Discrete");
  const labels = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sarturday",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Page views",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(87, 58, 216, 0.8)",
      },
    ],
  };
  return (
    <DashboardLayout page_name={"Analytics"}>
      <div className={styles.buttons}>
        <button
          className={`${graphType === "Discrete" && styles.active}`}
          onClick={() => setGraphType("Discrete")}
        >
          Discrete
        </button>
        <button
          className={`${graphType === "Cummulative" && styles.active}`}
          onClick={() => setGraphType("Cummulative")}
        >
          Cummulative
        </button>
      </div>
      <div className={styles.graph_container}>
        {graphType === "Discrete" && <BarChart data={data} />}
        {graphType === "Cummulative" && <LineChart data={data} />}
      </div>
    </DashboardLayout>
  );
};

export default Index;
