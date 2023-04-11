import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import styles from "./styles.module.scss";

const ProfileHeader = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.profile_header} data-theme={theme}>
      <h3>Hi, Akinkunmi</h3>
      <img
        src="https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Willow"
        alt="avatar"
      />
    </div>
  );
};

export default ProfileHeader;
