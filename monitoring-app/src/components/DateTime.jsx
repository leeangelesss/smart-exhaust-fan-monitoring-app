import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-end gap-1 text-right">
      <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
      </span>
      <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        {time.toLocaleTimeString()}
      </span>
    </div>
  );
};

export default DateTime;