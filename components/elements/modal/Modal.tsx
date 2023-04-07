import React from "react";
import styles from "./style.module.scss";
import { FaTimes } from "react-icons/fa";

const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-container"]}>
        <button className={styles["modal-close-button"]} onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
