import Editor from "@/components/dashboard/editor/Editor";
import NewPostHeader from "@/components/dashboard/posts/NewPostHeader/NewPostHeader";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";

const EditPost = () => {
  return (
    <>
      <DashboardLayout>
        <NewPostHeader />
        <input
          type="text"
          className={`w-full text-4xl bg-transparent mb-5 outline-none mt-2`}
          placeholder="Article title"
          // onChange={(e) => setTitle(e.target.value)}
        />
        <div className="">
          <Editor />
        </div>
      </DashboardLayout>
    </>
  );
};

export default EditPost;
