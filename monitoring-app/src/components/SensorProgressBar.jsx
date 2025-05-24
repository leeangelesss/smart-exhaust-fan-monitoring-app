import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';

const SensorProgressBar = ({ sensorId, minValue, maxValue, value, unit, sensorName, lastUpdate }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [progress, setProgress] = useState(0); // Track the progress
  const [lastFetchedUpdate, setLastFetchedUpdate] = useState(lastUpdate);

  // When the value or the sensor data changes, update the progress
  useEffect(() => {
    if (value !== null && value !== undefined) {
      setDisplayValue(value); // Update only when there's real data
    }
  }, [value]);

  useEffect(() => {
    // Fetch the latest sensor data (if it's not available in props)
    const fetchSensorData = async () => {
      try {
        const { data, error } = await supabase
          .from('sensor_data')
          .select('last_update')
          .eq('id', sensorId)
          .single();

        if (error) throw error;

        if (data) {
          setLastFetchedUpdate(data.last_update);
        }
      } catch (err) {
        console.error('Error fetching sensor data:', err.message);
      }
    };

    if (!lastFetchedUpdate) {
      fetchSensorData();
    }
  }, [sensorId, lastFetchedUpdate]);

  // Update the progress when value changes
  useEffect(() => {
    if (value !== null && value !== undefined) {
      const newProgress = Math.min(((value - minValue) / (maxValue - minValue)) * 100, 100);
      setProgress(newProgress);
    }
  }, [value, minValue, maxValue]);

  const getSensorStat = (sensorName, value) => {
    switch (sensorName) {
      case 'Temperature':
        if (value <= 32.9) return 'good';
        if (value <= 41.9) return 'caution';
        if (value <= 51.9) return 'danger';
        return 'critical';
      case 'Humidity':
        if (value >= 76 && value <= 90) return 'critical';
        if (value >= 61 && value <= 75) return 'danger';
        if (value >= 20 && value <= 39) return 'caution';
        return 'good';
      case 'AirQuality':
        if (value <= 25) return 'good';
        if (value <= 100) return 'caution';
        if (value <= 399) return 'danger';
        return 'critical';
      case 'Smoke':
        if (value <= 200) return 'good';
        if (value <= 4500) return 'caution';
        if (value <= 7500) return 'danger';
        return 'critical';
      case 'Kerosene':
        if (value <= 200) return 'good';
        if (value <= 3000) return 'caution';
        if (value <= 7000) return 'danger';
        return 'critical';
      case 'LPG':
        if (value <= 200) return 'good';
        if (value <= 1000) return 'caution';
        if (value <= 5000) return 'danger';
        return 'critical';
      default:
        return 'good';
    }
  };

  const sensorStat = getSensorStat(sensorName, displayValue);

  const getColor = () => {
    const colorMap = {
      good: 'green',
      caution: 'yellow',
      danger: 'orange',
      critical: 'red',
    };
    return colorMap[sensorStat] || 'blue';
  };

  const color = getColor();

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-center mb-4">
        <div className="absolute flex flex-row items-center text-black top-10 sm:top-10 md:top-15 lg:top-20">
          <span className="text-[14px] font-bold">{displayValue}</span>
          <span className="text-[8px] sm:text[8px] md:text-[10px] lg:text-[12px] font-semibold pl-1">{unit}</span>
        </div>
        <svg className="w-full" viewBox="0 0 100 50">
          <path
            d="M 10,50 A 40,40 0 0,1 90,50"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M 10,50 A 40,40 0 0,1 90,50"
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeDasharray="126"
            strokeDashoffset={(126 * (1 - progress / 100)).toFixed(2)}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 1s ease-out', // Smooth animation for progress change
            }}
          />
        </svg>
      </div>
      <div className="flex justify-between mt-2 font-semibold text-[12px] sm:text-[10px] md:text-[14px] lg:text-[16px] text-black">
        <div className="px-2">
          <span>{minValue}</span>
          <span className="text-[8px] sm:text[8px] md:text-[9px] lg:text-[10px] pl-1">{unit}</span>
        </div>
        <div className="px-2">
          <span>{maxValue}</span>
          <span className="text-[8px] sm:text[8px] md:text-[9px] lg:text-[10px] pl-1">{unit}</span>
        </div>
      </div>
      {lastFetchedUpdate && (
        <div className="text-xs text-gray-500 mt-1">
          Last updated: {new Date(lastFetchedUpdate).toLocaleTimeString()}
        </div>
      )}
    </div>
  );
};

export default SensorProgressBar;