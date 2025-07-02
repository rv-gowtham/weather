import React, { useState, useEffect } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // convert '0' to '12'
    hours = String(hours).padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div style={{ fontSize: "2rem", textAlign: "center", marginTop: "50px" }}>
      <h1>Current Time</h1>
      <p>{formatTime(time)}</p>
    </div>
  );
}

export default Time;
