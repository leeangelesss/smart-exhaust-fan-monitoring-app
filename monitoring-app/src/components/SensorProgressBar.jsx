import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'your-supabase-anon-key'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);

const SensorProgressBar = ({ sensorId, minValue, maxValue, value, unit, sensorName }) => {
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    // Fetch last update from Supabase (if needed)
    const fetchSensorData = async () => {
      try {
        const { data, error } = await supabase
          .from('sensor_data')
          .select('last_update')
          .eq('id', sensorId) // Use sensorId to filter for the specific sensor
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

  // Determine the sensor status based on value
  const getSensorStat = (sensorName, value) => {
    switch (sensorName) {
      case 'Temperature':
        if (value >= 20 && value <= 32) return 'good';   // Good temperature range for example
        if (value <= 41) return 'caution';                // Caution temperature range
        if (value <= 51) return 'danger'; 
        return 'critical';                                 // Danger if it's above 30

      case 'Humidity':
        if (value >= 76 && value <= 90) return 'critical';                // Bad humidity if it's too low
        if (value >= 65 && value <= 75) return 'danger';                  // Good humidity if it's high
        if (value >= 20 && value <= 39) return 'caution'; 
        return 'good';                                // Caution if it's in the middle range

      case 'Smoke':
        if (value <= 2500) return 'good';                  // Good smoke level
        if (value <= 5000) return 'caution';              // Caution smoke level
        if (value <= 7500) return 'danger'; 
        return 'critical';                                 // Dangerous smoke level

      case 'Air Quality':
        if (value <= 100) return 'good';                  // Good air quality
        if (value <= 200) return 'caution';              // Moderate air quality
        if (value <= 300) return 'danger'; 
        return 'critical';                                 // Poor air quality

      case 'Kerosene':
        if (value <= 200) return 'good';                  // Safe kerosene level
        if (value <= 500) return 'caution'; 
        if (value <= 1000) return 'danger';              // Caution kerosene level
        return 'critical';                                 // Dangerous kerosene level

      case 'LPG':
        if (value <= 1000) return 'good';                 // Safe LPG level
        if (value <= 5000) return 'caution';              // Caution LPG level
        if (value <= 10000) return 'danger';              // Caution kerosene level
        return 'critical';                                 // Dangerous LPG level

      default:
        return 'good'; // Default to good for any other sensor
    }
  };

  const sensorStat = getSensorStat(sensorName, value);

  // Map sensor_stat to colors
  const getColor = () => {
    const colorMap = {
      good: 'green',
      caution: 'yellow',
      danger: 'orange',
      critical: 'red', // You can define a critical status if needed
    };
    return colorMap[sensorStat] || 'blue'; // Default to blue if stat is undefined
  };

  const progress = Math.min(((value - minValue) / (maxValue - minValue)) * 100, 100);
  const color = getColor();

  // Convert lastUpdate to a human-readable format
  const formattedLastUpdate = lastUpdate
    ? new Date(lastUpdate).toLocaleString()
    : new Date().toLocaleString(); // Show current timestamp if no lastUpdate

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-center mb-4">
        <div className="absolute flex flex-row items-center text-black top-10 sm:top-10 md:top-15 lg:top-20">
          <span className="text-[14px] sm:text[14px] md:text-[16px] lg:text-[22px] font-bold">{value}</span>
          <span className="text-[8px] sm:text[8px] md:text-[10px] lg:text-[12px] font-semibold pl-1">{unit}</span>
        </div>
        <svg className="w-full" viewBox="0 0 100 50">
          {/* Base arc */}
          <path
            d="M 10,50 A 40,40 0 0,1 90,50"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 10,50 A 40,40 0 0,1 90,50"
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeDasharray="126" // Total arc length for a semicircle
            strokeDashoffset={(126 * (1 - progress / 100)).toFixed(2)} // Progress based on arc length
            strokeLinecap="round" // Smooth ends for progress
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
      <div className="mt-4 text-center text-sm text-gray-500">
        {`Last updated: ${formattedLastUpdate}`}
      </div>
    </div>
  );
};

export default SensorProgressBar;
