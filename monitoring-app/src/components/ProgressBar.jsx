import React from 'react';

const ProgressBar = ({ label, value, unit, minValue, maxValue }) => {
  // Calculate progress percentage
  const progress = Math.min(((value - minValue) / (maxValue - minValue)) * 100, 100);

  // Determine the color based on the label and value
  const getColor = () => {
    switch (label) {
      case 'Temperature':
        if (value >= 20 && value <= 25) return 'green';
        if (value >= 26 && value <= 30) return 'yellow';
        if (value >= 31 && value <= 35) return 'orange';
        if (value > 35) return 'red';
        break;
      case 'Humidity':
        if (value >= 30 && value <= 50) return 'green';
        if (value >= 51 && value <= 60) return 'yellow';
        if (value >= 61 && value <= 70) return 'orange';
        if (value > 70) return 'red';
        break;
      case 'Carbon Monoxide':
        if (value >= 0 && value <= 9) return 'green';
        if (value >= 10 && value <= 35) return 'yellow';
        if (value >= 36 && value <= 100) return 'orange';
        if (value > 100) return 'red';
        break;
      case 'Carbon Dioxide':
        if (value >= 400 && value <= 1000) return 'green';
        if (value >= 1001 && value <= 2000) return 'yellow';
        if (value >= 2001 && value <= 5000) return 'orange';
        if (value > 5000) return 'red';
        break;
      case 'Butane':
        if (value >= 0 && value <= 800) return 'green';
        if (value >= 801 && value <= 1600) return 'yellow';
        if (value >= 1601 && value <= 5000) return 'orange';
        if (value > 5000) return 'red';
        break;
      case 'Propane':
        if (value >= 0 && value <= 800) return 'green';
        if (value >= 801 && value <= 1600) return 'yellow';
        if (value >= 1601 && value <= 5000) return 'orange';
        if (value > 5000) return 'red';
        break;
      default:
        return 'blue'; // Default color if no conditions match
    }
  };

  const color = getColor();

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
            stroke={color}
            strokeWidth="10"
            strokeDasharray={`calc(${progress} * 1.25) 125`}
            strokeDashoffset="0"
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