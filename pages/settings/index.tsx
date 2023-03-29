import { useTheme } from "@/contexts/ThemeContext";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";
import styles from "./styles/module.scss";

const Index = () => {
  const { theme } = useTheme();
  return <DashboardLayout page_name="Settings"></DashboardLayout>;
};

export default Index;
