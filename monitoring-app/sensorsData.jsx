import React from 'react';
import ProgressBar from './src/components/ProgressBar';
import useSensorData from './hooks/useSensorData';
import temperatureIcon from '/images/sensorIcons/temperature.png';
import humidityIcon from '/images/sensorIcons/humidity.png';
import carbonMonoxideIcon from '/images/sensorIcons/carbonMonoxide.png';
import carbonDioxideIcon from '/images/sensorIcons/carbonDioxide.png';
import butaneIcon from '/images/sensorIcons/butane.png';
import propaneIcon from '/images/sensorIcons/propane.png';

const sensors = [
  { label: 'Temperature', icon: temperatureIcon, unit: '°C', minValue: 0, maxValue: 100 },
  { label: 'Humidity', icon: humidityIcon, unit: '%', minValue: 0, maxValue: 100 },
  { label: 'Carbon Monoxide', icon: carbonMonoxideIcon, unit: 'ppm', minValue: 0, maxValue: 100 },
  { label: 'Carbon Dioxide', icon: carbonDioxideIcon, unit: 'ppm', minValue: 0, maxValue: 5000 },
  { label: 'Butane', icon: butaneIcon, unit: 'ppm', minValue: 0, maxValue: 5000 },
  { label: 'Propane', icon: propaneIcon, unit: 'ppm', minValue: 0, maxValue: 5000 },
];

const SensorsData = () => {
  return (
    <div className="sensor-grid">
      {sensors.map((sensor) => {
        const { value, lastUpdate } = useSensorData(sensor.label);
        return (
          <div key={sensor.label} className="sensor-card">
            <img src={sensor.icon} alt={`${sensor.label} icon`} className="sensor-icon" />
            <ProgressBar
              label={sensor.label}
              unit={sensor.unit}
              minValue={sensor.minValue}
              maxValue={sensor.maxValue}
              value={value}
              lastUpdate={lastUpdate}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SensorsData;
