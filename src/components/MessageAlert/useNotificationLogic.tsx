import { useState } from "react";

export default function useNotificationLogic() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(true);
  const onHandleCloseNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  return { isNotificationOpen, onHandleCloseNotification };
}
