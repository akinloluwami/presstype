import Sidebar from "@/components/dashboard/sidebar";
import React from "react";
import styles from "./styles.module.scss";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className={styles.dashboard_layout_container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <>{children}</>
    </div>
  );
};

export default DashboardLayout;
