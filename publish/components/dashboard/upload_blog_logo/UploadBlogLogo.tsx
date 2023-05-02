import { useTheme } from "@/contexts/ThemeContext";
import { useBlogStore } from "@/stores/blogStore";
import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";
import React, { useRef, ChangeEvent } from "react";
import { Toaster, toast } from "react-hot-toast";
import { BiCloudUpload } from "react-icons/bi";

const UploadBlogLogo: React.FC = () => {
  const { blogId } = useBlogStore();
  const { token } = useTokenStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];

    const fileSize = file?.size
      ? (file.size / (1024 * 1024)).toFixed(2)
      : undefined;

    if (fileSize && Number(fileSize) > 10) {
      toast.error("File size cannot be more than 10 MB");
      return;
    }

    const fileType = file?.type;

    if (fileType && !fileType.includes("image")) {
      toast.error("File must be an image");
      return;
    }

    toast.loading("Uploading...");
    const formData = new FormData();
    formData.append("file", file as Blob);
    const res = await axios.post(
      "/api/blogs/upload-image?folder=blog_logos",
      formData
    );
    console.log(res);
    const fileUrl = res?.data?.url;

    if (fileUrl) {
      const res = await axios.put(
        "/api/blogs/update-logo",
        {
          fileUrl,
          blogId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
    }

    toast.dismiss();
    toast.success("Upload successful");
  };

  return (
    <>
      <Toaster />
      <h3>Blog logo</h3>
      <input
        type={"file"}
        className={"hidden"}
        ref={fileInputRef}
        onChange={(e) => handleUpload(e)}
      />
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
