import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

const SensorProgressBar = ({ sensorId, minValue, maxValue, value, unit, sensorName }) => {
  const [lastUpdate, setLastUpdate] = useState(null);
  const [progress, setProgress] = useState(0); // Track the progress

  useEffect(() => {
    // Fetch last update from Supabase
    const fetchSensorData = async () => {
      try {
        const { data, error } = await supabase
          .from('sensor_data')
          .select('last_update')
          .eq('id', sensorId)
          .single();

        if (error) throw error;

        if (data) {
          setLastUpdate(data.last_update);
        }
      } catch (err) {
        console.error('Error fetching sensor data:', err.message);
      }
    };

    fetchSensorData();
  }, [sensorId]);

  useEffect(() => {
    // Calculate progress
    const newProgress = Math.min(((value - minValue) / (maxValue - minValue)) * 100, 100);
    setProgress(newProgress);
  }, [value, minValue, maxValue]);

  const getSensorStat = (sensorName, value) => {
    switch (sensorName) {
      case 'Temperature':
        if (value <= 32) return 'good';
        if (value <= 41) return 'caution';
        if (value <= 51) return 'danger';
        return 'critical';
      case 'Humidity':
        if (value >= 76 && value <= 90) return 'critical';
        if (value >= 61 && value <= 75) return 'danger';
        if (value >= 20 && value <= 39) return 'caution';
        return 'good';
      case 'Smoke':
        if (value <= 50) return 'good';
        if (value <= 149) return 'caution';
        if (value <= 400) return 'danger';
        return 'critical';
      case 'AirQuality':
        if (value <= 100) return 'good';
        if (value <= 200) return 'caution';
        if (value <= 300) return 'danger';
        return 'critical';
      case 'Kerosene':
        if (value <= 50) return 'good';
        if (value <= 200) return 'caution';
        if (value <= 500) return 'danger';
        return 'critical';
      case 'LPG':
        if (value <= 1000) return 'good';
        if (value <= 5000) return 'caution';
        if (value <= 10000) return 'danger';
        return 'critical';
      default:
        return 'good';
    }
  };

  const sensorStat = getSensorStat(sensorName, value);

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
          <span className="text-[14px] sm:text[14px] md:text-[16px] lg:text-[22px] font-bold">{value}</span>
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
              transition: 'stroke-dashoffset 1s ease-out', // Animation for smooth progress change
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
    </div>
  );
};

export default SensorProgressBar;
