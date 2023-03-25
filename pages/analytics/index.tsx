import BarChart from "@/components/dashboard/barchart/BarChart";
import LineChart from "@/components/dashboard/linechart/LineChart";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";

const Index = () => {
  return (
    <DashboardLayout page_name={"Analytics"}>
      <BarChart />
      <LineChart />
    </DashboardLayout>
  );
};

export default Index;
