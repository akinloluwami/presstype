import { useTheme } from "@/contexts/ThemeContext";
import DashboardLayout from "@/layouts/dashboard_layout";
import React, { useState } from "react";
import styles from "./styles.module.scss";

const Index = () => {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <DashboardLayout page_name="Settings">
      <div className={styles.settings_card}>
        <h4>Publication settings</h4>
        <div className={styles.settings_card_container} data-theme={theme}>
          <div className={styles.settings_card_container_header}>
            <div className="">
              <h5>Title & Description</h5>
              <small>
                The details used to identify your publication around the web
              </small>
            </div>
            <button>Expand</button>
          </div>
          <div className={styles.settings_card_content}>
            <input type="text" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
