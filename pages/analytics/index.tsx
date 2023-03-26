import BarChart from "@/components/dashboard/barchart/BarChart";
import LineChart from "@/components/dashboard/linechart/LineChart";
import DashboardLayout from "@/layouts/dashboard_layout";
import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import styles from "./styles.module.scss";

const Index = () => {
  const [graphType, setGraphType] = useState("Discrete");
  const [dataType, setDataType] = useState("Visitors");
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
        fill: true,
        backgroundColor: "rgba(87, 58, 216, 0.5)",
      },
    ],
  };
  return (
    <DashboardLayout page_name={"Analytics"}>
      <div className={styles.analytics_options}>
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
        <select>
          <option value="Last 24 hours">Last 24 hours</option>
          <option value="Last 7 days">Last 7 days</option>
          <option value="Last 30 days">Last 30 days</option>
          <option value="Last 3 months">Last 3 months</option>
        </select>
      </div>
      <div className={styles.graph_container}>
        <div className={styles.data_option}>
          <button className={styles.data_select}>
            <p>Visitors</p>
            <b className={styles.button_inner}>
              <h1>229</h1> <small>+69%</small>
            </b>
          </button>
          <button className={styles.data_select}>
            <p>Page views</p>
            <div className={styles.button_inner}>
              <h1>367</h1> <small>+73%</small>
            </div>
          </button>
        </div>
        {graphType === "Discrete" && <BarChart data={data} />}
        {graphType === "Cummulative" && <LineChart data={data} />}
      </div>
    </DashboardLayout>
  );
};

export default Index;
