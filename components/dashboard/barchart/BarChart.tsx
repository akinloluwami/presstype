import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import styles from "./styles.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sarturday",
];
export const data = {
  labels,
  datasets: [
    {
      label: "Page views",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(87, 58, 216, 0.8)",
    },
  ],
};

const BarChart = () => {
  return (
    <div className={styles.barchart_container}>
      <h3>Page views this week</h3>
      <div className={styles.chart}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default BarChart;
