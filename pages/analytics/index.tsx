import BarChart from "@/components/dashboard/barchart/BarChart";
import LineChart from "@/components/dashboard/linechart/LineChart";
import DashboardLayout from "@/layouts/dashboard_layout";
import React, { useState } from "react";
import styles from "./styles.module.scss";

const Index = () => {
  const [graphType, setGraphType] = useState("Discrete");
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
        {graphType === "Discrete" && <BarChart />}
        {graphType === "Cummulative" && <LineChart />}
      </div>
    </DashboardLayout>
  );
};

export default Index;
