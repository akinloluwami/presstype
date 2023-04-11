import React, { useState } from "react";

import styles from "./styles.module.scss";

interface ToggleProps {
  on?: boolean;
  onToggle?: (isChecked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ on = false, onToggle }) => {
  const [isOn, setIsOn] = useState<boolean>(on);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsOn(isChecked);
    onToggle && onToggle(isChecked);
  };

  return (
    <label className={styles.toggle}>
      <input type="checkbox" defaultChecked={on} onChange={handleToggle} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Toggle;
