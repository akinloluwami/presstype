import { useTheme } from "@/contexts/ThemeContext";
import React from "react";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      Sidebar
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
};

export default Sidebar;
