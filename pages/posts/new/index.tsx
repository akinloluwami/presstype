import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";

const NewPost = () => {
  return (
    <DashboardLayout
      page_name={"Add new post"}
      showButton={true}
      button={<button>Publish</button>}
    ></DashboardLayout>
  );
};

export default NewPost;
