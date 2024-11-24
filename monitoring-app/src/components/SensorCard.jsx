import React from 'react';
import ProgressBar from './ProgressBar'

const SensorCard = ({ label, icon, value, unit, minValue, maxValue }) => (
  <div className="bg-[#EFEFFF] rounded-lg shadow-md p-12 m-2 flex flex-col items-center justify-center w-auto">
    <div className="flex items-center justify-between w-full">
      <img src={icon} alt={label} className="w-10 h-10 opacity-75" />
      <div className="text-xl font-medium text-gray-600">{label}</div>
    </div>
    <ProgressBar value={value} unit={unit} minValue={minValue} maxValue={maxValue} />
  </div>
);

export default SensorCard;