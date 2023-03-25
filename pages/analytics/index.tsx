import BarChart from "@/components/dashboard/barchart/BarChart";
import LineChart from "@/components/dashboard/linechart/LineChart";
import DashboardLayout from "@/layouts/dashboard_layout";
import React, { useState } from "react";

const Index = () => {
  const [graphType, setGraphType] = useState("Discrete");
  return (
    <DashboardLayout page_name={"Analytics"}>
      <div className="">
        <button onClick={() => setGraphType("Discrete")}>Discrete</button>
        <button onClick={() => setGraphType("Cummulative")}>Cummulative</button>
      </div>
      {graphType === "Discrete" && <BarChart />}
      {graphType === "Cummulative" && <LineChart />}
    </DashboardLayout>
  );
};

export default Index;
