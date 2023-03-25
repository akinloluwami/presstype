import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Page views",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      fill: true,
      borderColor: "rgb(87, 58, 216)",
      backgroundColor: "rgba(87, 58, 216, 0.3)",
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
