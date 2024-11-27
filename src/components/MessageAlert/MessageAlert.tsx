import { useEffect } from "react";
import styles from "./MessageAlert.module.css";
import { motion } from "framer-motion";
import { scrollToTop } from "../../config/utils";

interface Props {
  message: string;
  isOpen: boolean;
  type: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
}

export default function MessageAlert({
  message,
  type,
  onClose,
  duration = 50000,
  isOpen,
}: Props) {
  const typeClass = styles[type];

  useEffect(() => {
    if (isOpen) {
      scrollToTop();
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, duration]);

  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: isOpen ? 60 : 100 }}
      exit={{ y: -1000 }}
      transition={{ duration: 0.5 }}
      className={`${styles.messageAlert} ${typeClass}`}
    >
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeButton}>
        <span>&times;</span>
      </button>
    </motion.div>
  );
}
