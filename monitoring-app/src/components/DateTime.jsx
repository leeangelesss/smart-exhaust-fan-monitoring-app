import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <span>{time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
      <span className="font-bold text-xl text-right">{time.toLocaleTimeString()}</span>
    </div>
  );
};

export default DateTime;