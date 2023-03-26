import React from "react";
import { BiCloudUpload } from "react-icons/bi";
import styles from "./styles.module.scss";

const UploadBlogLogo = () => {
  return (
    <>
      <button className={styles.upload_btn}>
        <h2>
          <BiCloudUpload />
        </h2>
        <p>Upload</p>
      </button>
    </>
  );
};

export default UploadBlogLogo;
