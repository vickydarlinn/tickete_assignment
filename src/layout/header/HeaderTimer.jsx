import React, { useState, useEffect } from "react";

const HeaderTimer = () => {
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval);
          // You can add additional logic when the timer reaches zero.
          console.log("Timer expired!");
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [minutes, seconds]);
  return (
    <p className="text-center bg-black text-white p-2">
      Holding your ticket for {String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </p>
  );
};

export default HeaderTimer;
