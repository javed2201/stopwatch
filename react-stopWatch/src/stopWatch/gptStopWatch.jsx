import React, { useState, useRef } from 'react';

const GptStopwatch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef();

  const startTimer = () => {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;
        if (newSeconds === 60) {
          const newMinutes = prevTime.minutes + 1;
          if (newMinutes === 60) {
            return { hours: prevTime.hours + 1, minutes: 0, seconds: 0 };
          }
          return { ...prevTime, minutes: newMinutes, seconds: 0 };
        }
        return { ...prevTime, seconds: newSeconds };
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
  };

  const stopTimer = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Stopwatch</h1>
        <div className="flex justify-center gap-2 text-2xl mb-4">
          <p>{time.hours < 10 ? `0${time.hours}` : time.hours}</p>
          <p>:</p>
          <p>{time.minutes < 10 ? `0${time.minutes}` : time.minutes}</p>
          <p>:</p>
          <p>{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</p>
        </div>
        <div>
          <button
            onClick={startTimer}
            className={`bg-green-500 text-white px-4 py-2 rounded mr-2 ${isActive && 'opacity-50 cursor-not-allowed'}`}
            disabled={isActive}
          >
            Start
          </button>
          <button
            onClick={pauseTimer}
            className={`bg-yellow-500 text-white px-4 py-2 rounded mr-2 ${!isActive && 'opacity-50 cursor-not-allowed'}`}
            disabled={!isActive}
          >
            Pause
          </button>
          <button
            onClick={stopTimer}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default GptStopwatch;
