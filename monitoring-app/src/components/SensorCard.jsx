import React from 'react';
import SensorProgressBar from './SensorProgressBar';

const SensorCard = ({ label, icon, sensorName, sensorId, unit, minValue, maxValue, value, lastUpdate }) => (
  <div className="bg-[#EFEFFF] rounded-lg shadow-md p-4 mx-auto flex flex-col items-center justify-center w-full max-w-xs">
    <div className="flex items-center justify-between w-full mb-4">
      <img src={icon} alt={label} className="w-4 sm:w-5 md:w-6 lg:w-7 opacity-75" />
      <div className="ml-2 text-md sm:text-sm md:text-md lg:text-lg font-medium text-gray-600">{label}</div>
    </div>
    <SensorProgressBar
      sensorName={sensorName}
      sensorId={sensorId}
      unit={unit}
      minValue={minValue}
      maxValue={maxValue}
      value={value}
      lastUpdate={lastUpdate}
    />
  </div>
);

export default SensorCard;
