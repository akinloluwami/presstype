import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import styles from "./styles.module.scss";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const routes = [
    {
      title: "Dahboard",
      path: "/",
      icon: "",
    },
    {
      title: "Posts",
      path: "/posts",
      icon: "",
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: "",
    },
    {
      title: "Appearance",
      path: "/appearance",
      icon: "",
    },
    {
      title: "Domain",
      path: "/domain",
      icon: "",
    },
    {
      title: "Settings",
      path: "/settingss",
      icon: "",
    },
  ];
  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
};

export default Sidebar;
