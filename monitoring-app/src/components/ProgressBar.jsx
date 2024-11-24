import React from 'react';

const ProgressBar = ({ value, unit, minValue, maxValue }) => {
  // Calculate progress percentage
  const progress = ((value - minValue) / (maxValue - minValue)) * 100;

  return (
    <div className="w-72">
      {/* Value Display */}
      <div className="relative flex items-center justify-center mb-4">
        <div className="absolute flex flex-row text-black top-20">
            <div className="text-4xl font-bold">{value}</div>
            <div className="text-xl font-semibold">{unit}</div>
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
      <div className="flex justify-between mt-2 font-semibold text-lg text-black">
        <span>{minValue}{unit}</span>
        <span>{maxValue}{unit}</span>
      </div>
    </div>
  );
};

export default ProgressBar;