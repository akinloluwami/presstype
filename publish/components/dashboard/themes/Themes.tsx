import React, { useState } from "react";
import styles from "./styles.module.scss";

const Themes = () => {
  const [selected, setSelected] = useState(0);
  const themes = [0, 1, 2];
  return (
    <div className={"my-8"}>
      <h3>Theme</h3>
      <div className={"flex items-center justify-between mt-3"}>
        {themes.map((theme, i) => (
          <div
            className={`w-80 h-80 cursor-pointer hover:border-base_accent mr-3 bg-[rgb(87,58,216,0.2)] border-[1px] rounded-md ${
              selected === theme ? "border-base_accent" : "border-transparent"
            }`}
            key={i}
            onClick={() => setSelected(theme)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
