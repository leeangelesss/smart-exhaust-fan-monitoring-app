import React from 'react';
import ProgressBar from './ProgressBar';

const SensorCard = ({ label, icon, value, unit, minValue, maxValue }) => (
  <div className="bg-[#EFEFFF] rounded-lg shadow-md p-3 sm:p-4 md:p-4 lg:p-5 xl:p-5 mx-auto flex flex-col items-center justify-center w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-sm xl:max-w-md">
    <div className="flex items-center justify-between w-full mb-4">
      <img src={icon} alt={label} className="w-6 sm:w-8 md:w-8 lg:w-10 xl:w-10 opacity-75" />
      <div className="ml-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-600">{label}</div>
    </div>
    <ProgressBar label={label} value={value} unit={unit} minValue={minValue} maxValue={maxValue} />
  </div>
);

export default SensorCard;