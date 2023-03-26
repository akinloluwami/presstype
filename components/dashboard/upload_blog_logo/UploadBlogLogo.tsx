import { useTheme } from "@/contexts/ThemeContext";
import React, { useRef } from "react";
import { BiCloudUpload } from "react-icons/bi";
import styles from "./styles.module.scss";

const UploadBlogLogo: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <h3>Blog logo</h3>
      <input type={"file"} className={styles.hidden} ref={fileInputRef} />
      <button
        className={styles.upload_btn}
        data-theme={useTheme().theme}
        onClick={handleButtonClick}
      >
        <h2>
          <BiCloudUpload />
        </h2>
        <p>Upload</p>
      </button>
    </>
  );
};

export default UploadBlogLogo;
