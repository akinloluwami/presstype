import Sidebar from "@/components/dashboard/sidebar";
import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import styles from "./styles.module.scss";

const DashboardLayout = ({ children }: any) => {
  const { theme } = useTheme();
  return (
    <div className={styles.dashboard_layout_container} data-theme={theme}>
      <div className={styles.sidebar} data-theme={theme}>
        <Sidebar />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
