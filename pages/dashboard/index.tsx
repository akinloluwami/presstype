import BarChart from "@/components/dashboard/barchart/BarChart";
import ProfileHeader from "@/components/dashboard/profile_header/ProfileHeader";
import Searchbar from "@/components/dashboard/searchbar";
import Stats from "@/components/dashboard/stats";
import DashboardLayout from "@/layouts/dashboard_layout";
import { faker } from "@faker-js/faker";
import React from "react";
import styles from "./styles.module.scss";

const DashboardHome = () => {
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
        data: labels.map(() => faker.datatype.number({ min: 500, max: 1000 })),
        fill: true,
        backgroundColor: "rgba(87, 58, 216, 0.5)",
        tension: 0.3,
      },
    ],
  };
  return (
    <DashboardLayout page_name={"Dashboard"}>
      <div className={styles.dashboard_top}>
        {/* <Searchbar />
        <ProfileHeader /> */}
      </div>
      <Stats />
      <BarChart data={data} />
    </DashboardLayout>
  );
};

export default DashboardHome;
