import React from 'react';

const Legend = () => (
  <div className="overflow-x-auto">
    <div className="flex items-center justify-center bg-black bg-opacity-25 py-6 px-8 rounded-lg text-white w-full max-w-full space-x-6 sm:space-x-8 mx-auto">
      <div className="flex items-center space-x-2">
        <span className="bg-green-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full inline-block"></span>
        <span className="text-sm sm:text-base">Good</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="bg-yellow-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full inline-block"></span>
        <span className="text-sm sm:text-base">Caution</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="bg-orange-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full inline-block"></span>
        <span className="text-sm sm:text-base">Danger</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="bg-red-800 w-4 h-4 sm:w-6 sm:h-6 rounded-full inline-block"></span>
        <span className="text-sm sm:text-base">Critical</span>
      </div>
    </div>
  </div>
);

export default Legend;
