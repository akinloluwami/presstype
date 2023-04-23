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
import { useRouter } from "next/router";
import BlogsList from "../BlogsList";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const routes = [
    {
      title: "Dahboard",
      path: "/dashboard",
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
      path: "/settings",
      icon: <RiSettingsFill className={styles.link_icon} />,
    },
  ];
  return (
    <div className={styles.sidebar_container} data-theme={theme}>
      <h1>PressType</h1>
      <div className={styles.links_container}>
        {routes.map((route, i) => (
          <Link
            key={i}
            href={route.path}
            className={` ${styles.route_btn} ${
              router.asPath.includes(route.path) && styles.active
            }`}
            data-theme={theme}
          >
            {route.icon} {route.title}
          </Link>
        ))}
      </div>
      <BlogsList />
      <button onClick={toggleTheme} className={styles.toggle_btn}>
        Toggle to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
};

export default Sidebar;
