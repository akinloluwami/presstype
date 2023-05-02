import { useTheme } from "@/contexts/ThemeContext";
import DashboardLayout from "@/layouts/dashboard_layout";
import React, { useState } from "react";
import styles from "./styles.module.scss";

const Index = () => {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <DashboardLayout page_name="Settings">
      <div>
        <h1 className="text-2xl mb-3">Publication settings</h1>
        <div className="bg-secondary_dark p-5 rounded-md">
          <div className="flex items-center justify-between">
            <div className="">
              <h5 className="font-semibold text-lg">Title & Description</h5>
              <small>
                The details used to identify your publication around the web
              </small>
            </div>
          </div>
          <div className={""}>
            {expanded && (
              <>
                <input
                  type="text"
                  className="settings-input"
                  placeholder="Title"
                />
                <textarea
                  placeholder="Description"
                  className="settings-textarea"
                />
                <button className="settings-btn mt-3">Save</button>
              </>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
