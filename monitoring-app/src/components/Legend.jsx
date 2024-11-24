import React from 'react';

const Legend = () => (
  <div className="flex items-center justify-center mb-4 bg-[#172939] bg-opacity-99 p-4 rounded-lg text-white">
    <span className="bg-green-500 w-8 h-8 rounded-full inline-block mx-2"></span> Good
    <span className="bg-yellow-500 w-8 h-8 rounded-full inline-block mx-2 ml-8"></span> Caution
    <span className="bg-orange-500 w-8 h-8 rounded-full inline-block mx-2 ml-8"></span> Danger
    <span className="bg-red-800 w-8 h-8 rounded-full inline-block mx-2 ml-8"></span> Critical
  </div>
);

export default Legend;