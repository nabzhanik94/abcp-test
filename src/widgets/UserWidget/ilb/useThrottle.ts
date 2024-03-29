import React, { useCallback } from "react";

const useThrottle = (callback: () => void, delay: number): (() => void) => {
  const [isWaiting, setIsWaiting] = React.useState(false);

  return useCallback(() => {
    if (isWaiting) return;
    callback();
    setIsWaiting(true);
    setTimeout(() => setIsWaiting(false), delay);
  }, [callback, delay, isWaiting]);
};

export default useThrottle;
