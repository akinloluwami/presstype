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
      <input type={"file"} className={"hidden"} ref={fileInputRef} />
      <button
        className={
          "bg-transparent border-[1px] rounded-md flex flex-col items-center justify-center w-24 h-24 border-dashed border-base_accent mt-2"
        }
        data-theme={useTheme().theme}
        onClick={handleButtonClick}
      >
        <h2 className="text-4xl">
          <BiCloudUpload />
        </h2>
        <p>Upload</p>
      </button>
    </>
  );
};

export default UploadBlogLogo;
