import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1);
  }, []);

  return <div style={{ fontSize: "25px", margin: "1px" }}>{clockState}</div>;
}

export default Clock;