import React, { useState, useRef } from "react";

const Timer: React.FC = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = window.setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      window.clearInterval(timerRef.current!);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <div className="max-w-sm mx-auto">
      <h3>Timer</h3>
      <div className="my-4 text-3xl">{formatTime(timer)}</div>
      <div className="flex justify-center">
        {!isRunning ? (
          <button
            className="px-4 py-2 mr-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            onClick={startTimer}
          >
            Start
          </button>
        ) : (
          <button
            className="px-4 py-2 mr-2 text-white bg-red-500 rounded-md hover:bg-red-600"
            onClick={stopTimer}
          >
            Stop
          </button>
        )}
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
