import Sidebar from "@/components/dashboard/sidebar";
import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import styles from "./styles.module.scss";

const DashboardLayout = ({ children, page_name }: any) => {
  const { theme } = useTheme();
  return (
    <div className={styles.dashboard_layout_container} data-theme={theme}>
      <div className={styles.sidebar} data-theme={theme}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <h1>{page_name}</h1>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
