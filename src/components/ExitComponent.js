import React, { useEffect, useState } from 'react';

function ExitComponent() {
  const [countDown, setCountDown] = useState(5);
  useEffect(() => {
    countDown > 0 &&
      setInterval(() => {
        setCountDown(countDown - 1);
      }, 1000);
  }, [countDown]);
  return (
    <div>
      <p> Thank you. In {countDown} seconds, bot will exit</p>
    </div>
  );
}

export default ExitComponent;
