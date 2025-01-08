import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase'; // Ensure this is configured correctly

const SensorDashboard = ({ sensors }) => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const channel = supabase.channel('room1');
  
    channel
      .on('postgres_changes', { event: '*', schema: '*' }, (payload) => {
        console.log('Payload received from Supabase:', payload); // Log the entire payload
        const { new: newData } = payload;
  
        if (newData) {
          console.log('New data received:', newData);
          setSensorData((prevData) => {
            // Replace or add the sensor data for the specific sensor
            const updatedData = prevData.filter((data) => data.sensor_name !== newData.sensor_name);
            return [...updatedData, newData];
          });
        }
      })
      .subscribe();
  
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {sensors.map((sensor) => {
        // Find the corresponding sensor data
        const sensorValue = sensorData.find((data) => data.sensor_name === sensor.sensorName);

        return React.cloneElement(sensor.component, {
          value: sensorValue ? sensorValue.sensor_value : 0,
          lastUpdate: sensorValue ? sensorValue.last_updated : null,
        });
      })}
    </div>
  );
};

export default SensorDashboard;
