import React from 'react';

const ProgressBar = ({ value, unit, minValue, maxValue }) => {
  // Calculate progress percentage
  const progress = ((value - minValue) / (maxValue - minValue)) * 100;

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      {/* Value Display */}
      <div className="relative flex items-center justify-center mb-4">
        <div className="absolute flex flex-col items-center text-black top-10 sm:top-12 md:top-14 lg:top-16 xl:top-18">
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">{value}</div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">{unit}</div>
        </div>
        {/* Semi-circle Progress Bar */}
        <svg className="w-full" viewBox="0 0 100 50">
          {/* Background semi-circle */}
          <path
            d="M 10,50 A 40,40 0 0,1 90,50"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Foreground (progress) semi-circle */}
          <path
            d="M 10,50 A 40,40 0 0,1 90,50"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="10"
            strokeDasharray={`${progress}, 100`}
            strokeLinecap="round"
          />
        </svg>
      </div>
      {/* Min and Max Values */}
      <div className="flex justify-between mt-2 font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black">
        <span>{minValue}{unit}</span>
        <span>{maxValue}{unit}</span>
      </div>
    </div>
  );
};

export default ProgressBar;