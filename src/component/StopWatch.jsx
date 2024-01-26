import React, { useState } from "react";

const stopWatch = () => {
  const [time, setTime] = useState({ min: 0, Sec: 0 });

  const [id, setId] = useState("");

  const startTimer = () => {
    let id = setInterval(() => {
      if (time.Sec == 60) {
        setTime({ ...time, min: time.min++, Sec: time.Sec=0 });
      }else{
        setTime({ ...time, Sec: time.Sec++ });
      }
     
    }, 500);
    setId(id);
  };

  const stopTimer = () => {
    clearInterval(id);
  };
  return (
    <>
      <div>
        <div>
          <span>{time.min}</span>: <span>{time.Sec}</span>
        </div>
        <button
          onClick={() => {
            startTimer();
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            stopTimer();
          }}
        >
          Stop
        </button>
      </div>
    </>
  );
};

export default stopWatch;
