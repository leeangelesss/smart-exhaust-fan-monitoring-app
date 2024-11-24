import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="hidden" onChange={toggleDarkMode} checked={isDarkMode} />
      <span className="bg-gray-500 w-10 h-5 rounded-full p-1 flex items-center justify-between">
        <span className={`bg-white w-4 h-4 rounded-full transform transition-transform ${isDarkMode ? 'translate-x-5' : ''}`}></span>
      </span>
    </label>
  );
};

export default DarkModeToggle;