import { useState, useEffect } from "react";

export default function ProgressBar({ TIMER }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <progress value={remainingTime} max={TIMER} />;
}
