import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { BiCloudUpload } from "react-icons/bi";
import styles from "./styles.module.scss";

const UploadBlogLogo = () => {
  return (
    <>
      <input type={"file"} className={styles.hidden} />
      <button className={styles.upload_btn} data-theme={useTheme().theme}>
        <h2>
          <BiCloudUpload />
        </h2>
        <p>Upload</p>
      </button>
    </>
  );
};

export default UploadBlogLogo;
