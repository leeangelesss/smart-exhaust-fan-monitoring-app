import React from 'react';

const SensorCard = ({ label, icon, value, unit }) => (
  <div className="bg-[#EFEFFF] rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
    <div className="text-2xl font-semibold">{icon}</div>
    <div className="text-lg font-medium text-gray-600">{label}</div>
    <div className="text-4xl font-bold text-blue-600 mt-2">{value}</div>
    <div className="text-sm text-gray-500">{unit}</div>
  </div>
);

export default SensorCard;