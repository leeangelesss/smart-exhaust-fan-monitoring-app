import React from 'react';

const ProgressBar = ({ label, unit, minValue, maxValue, value, lastUpdate }) => {
  const progress = Math.min(((value - minValue) / (maxValue - minValue)) * 100, 100);

  const getColor = () => {
    switch (label) {
      case 'Temperature':
        if (value >= 20 && value <= 25) return 'green';
        if (value >= 26 && value <= 30) return 'yellow';
        if (value >= 31 && value <= 35) return 'orange';
        return 'red';
      case 'Humidity':
        if (value >= 30 && value <= 50) return 'green';
        if (value >= 51 && value <= 60) return 'yellow';
        if (value >= 61 && value <= 70) return 'orange';
        return 'red';
      case 'Carbon Monoxide':
        if (value <= 9) return 'green';
        if (value <= 35) return 'yellow';
        if (value <= 100) return 'orange';
        return 'red';
      case 'Carbon Dioxide':
        if (value <= 1000) return 'green';
        if (value <= 2000) return 'yellow';
        if (value <= 5000) return 'orange';
        return 'red';
      case 'Butane':
      case 'Propane':
        if (value <= 800) return 'green';
        if (value <= 1600) return 'yellow';
        if (value <= 5000) return 'orange';
        return 'red';
      default:
        return 'blue';
    }
  };

  const color = getColor();

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-value">
        <span className="value">{value}</span>
        <span className="unit">{unit}</span>
      </div>
      <svg className="progress-bar-svg" viewBox="0 0 100 50">
        <path d="M 10,50 A 40,40 0 0,1 90,50" stroke="#E5E7EB" strokeWidth="10" fill="none" />
        <path
          d="M 10,50 A 40,40 0 0,1 90,50"
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${progress} 125`}
        />
      </svg>
      <div className="progress-bar-min-max">
        <span>{minValue}{unit}</span>
        <span>{maxValue}{unit}</span>
      </div>
      <div className="last-update">{lastUpdate ? `Last updated: ${lastUpdate}` : 'Waiting for data...'}</div>
    </div>
  );
};

export default ProgressBar;
