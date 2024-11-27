import React from "react";
import useNotificationLogic from "./useNotificationLogic";
import { motion } from "framer-motion";
interface Props {
  title: string;
}

export const Notification: React.FC<Props> = ({ title }) => {
  const { isNotificationOpen, onHandleCloseNotification } =
    useNotificationLogic();
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isNotificationOpen ? 0 : 100 }}
      exit={{ y: 100 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 right-0 z-20 w-auto"
    >
      <div className="px-4 py-3">
        <div className="text-zinc-300 rounded-full flex items-center space-x-2">
          {" "}
          <button className="text-white" onClick={onHandleCloseNotification}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-zinc-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <span>{title}</span>
        </div>
      </div>
    </motion.div>
  );
};
