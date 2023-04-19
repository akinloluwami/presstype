import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: any;
  onChange: (option: any, index: number) => void;
}

const CustomSelect: React.FC<Props> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<any | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      selectOption(options[index], index);
    }
  };

  const selectOption = (option: Option, index: number) => {
    setSelected(option);
    onChange(option, index);
  };

  return (
    <div ref={containerRef} className={styles["custom-select-container"]}>
      <div
        className={styles["selected-item"]}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {selected ? selected.name : "Select an option"}
      </div>
      {isOpen && (
        <div className={styles["options-container"]}>
          {options.map((option: any, index: number) => (
            <div
              key={option.value}
              tabIndex={0}
              className={styles["option"]}
              onClick={() => selectOption(option, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
