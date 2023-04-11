import React, { useCallback } from "react";
import styles from "./style.module.scss";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-container"]}>
        <button className={styles["modal-close-button"]} onClick={handleClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
