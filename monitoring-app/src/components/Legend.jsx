import React from 'react';

const Legend = () => (
  <div className="flex flex-wrap items-center justify-center bg-black p-4 rounded-lg text-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-opacity-25">
    <div className="flex flex-col sm:flex-row items-center mx-2 my-2">
      <div className="flex items-center mx-2 my-2">
        <span className="bg-green-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full inline-block mr-2"></span> 
        <span className="text-sm sm:text-base">Good</span>
      </div>
      <div className="flex items-center mx-2 my-2">
        <span className="bg-yellow-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full inline-block mr-2"></span> 
        <span className="text-sm sm:text-base">Caution</span>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row items-center mx-2 my-2">
      <div className="flex items-center mx-2 my-2">
        <span className="bg-orange-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full inline-block mr-2"></span> 
        <span className="text-sm sm:text-base">Danger</span>
      </div>
      <div className="flex items-center mx-2 my-2">
        <span className="bg-red-800 w-4 h-4 sm:w-6 sm:h-6 rounded-full inline-block mr-2"></span> 
        <span className="text-sm sm:text-base">Critical</span>
      </div>
    </div>
  </div>
);

export default Legend;