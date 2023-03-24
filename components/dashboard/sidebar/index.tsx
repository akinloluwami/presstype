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
      path: "/settingss",
      icon: <RiSettingsFill className={styles.link_icon} />,
    },
  ];
  return (
    <div className={styles.sidebar_container} data-theme={theme}>
      <h1>PressType</h1>
      <Link href={"/"} className={styles.new_post_btn}>
        <RiPencilFill className={styles.new_post_icon} />
        <h3>New Post</h3>
      </Link>
      <div className={styles.links_container}>
        {routes.map((route, i) => (
          <Link
            href={route.path}
            className={` ${styles.route_btn} ${
              router.asPath === route.path && styles.active
            }`}
          >
            {route.icon} <h3>{route.title}</h3>
          </Link>
        ))}
      </div>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
};

export default Sidebar;
