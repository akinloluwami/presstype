import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import styles from "./styles.module.scss";
import { TiThLarge } from "react-icons/ti";
import { IoIosPaper } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { IoSparkles } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { RiSettingsFill, RiPencilFill } from "react-icons/ri";
import Link from "next/link";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const routes = [
    {
      title: "Dahboard",
      path: "/",
      icon: <TiThLarge className={styles.link_icon} />,
    },
    {
      title: "Posts",
      path: "/posts",
      icon: <IoIosPaper className={styles.link_icon} />,
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: <SiGoogleanalytics className={styles.link_icon} />,
    },
    {
      title: "Appearance",
      path: "/appearance",
      icon: <IoSparkles className={styles.link_icon} />,
    },
    {
      title: "Domain",
      path: "/domain",
      icon: <FaGlobe className={styles.link_icon} />,
    },
    {
      title: "Settings",
      path: "/settingss",
      icon: <RiSettingsFill className={styles.link_icon} />,
    },
  ];
  return (
    <div className={styles.sidebar_container}>
      <Link href={"/"}>
        <button>
          <RiPencilFill />
          New Post
        </button>
      </Link>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
};

export default Sidebar;
