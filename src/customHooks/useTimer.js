import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from 'usehooks-ts';

/** Write your hook implementation here */
export const useTimer = () => {
  const [timerValue, setTimerValue] = useState(0);
  const timer = useRef();
  // const [intervalValue, setIntervalValue] = useState(0);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setTimerValue((timerValue) => timerValue + 0.1);
    }, 100);
  };

  const stopTimer = () => {
    clearInterval(timer.current);
  };
  return {
    startTimer,
    stopTimer,
    timerValue,
  };
};

const App = () => {
  const [goodTime, setGoodTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const { startTimer, stopTimer, timerValue } = useTimer();

  useInterval(
    () => {
      setGoodTime(goodTime + 0.1);
    },
    playing ? 100 : null
  );

  const handleTimerClick = () => {
    setPlaying(!playing);
    if (!playing) {
      startTimer();
    } else {
      stopTimer();
    }
  };
  return (
    <div className="container mx-auto text-5xl h-screen flex content-center justify-center flex-row">
      <div className="w-full m-auto">
        <div className="grid grid-cols-2 gap-5">
          <div className="text-center">Good Timer</div>
          <div className="text-center">Hook Timer</div>
          <div className="text-center">{goodTime.toFixed(1)}</div>
          <div className="text-center">{timerValue.toFixed(1)}</div>
        </div>
        <div className="flex">
          <button
            className="m-auto px-5 py-2 bg-blue-900 text-white rounded-lg"
            onClick={() => handleTimerClick()}
          >
            {playing ? 'Stop' : 'Play'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
