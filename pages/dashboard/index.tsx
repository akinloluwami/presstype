import Searchbar from "@/components/dashboard/searchbar";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";

const DashboardHome = () => {
  return (
    <DashboardLayout>
      <div className="">
        <Searchbar />
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
