import { useState, useEffect } from 'react';
import { supabase } from '../src/utils/supabase'; // Import supabase

const useSensorData = (sensorName) => {
  const [value, setValue] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(null); // State to store the last update time

  useEffect(() => {
    // Subscribe to real-time updates using Supabase channel
    const channel = supabase.channel('room1');

    channel.on('postgres_changes', { event: '*', schema: '*' }, (payload) => {
      console.log('Change received!', payload); // Debugging: Log the real-time data
      const { new: newData } = payload;
      if (newData && newData.sensor_name === sensorName) {
        console.log(`${sensorName} data:`, newData.sensor_value); // Debugging: Log the sensor value
        setTimeout(() => {
          setValue(newData.sensor_value); // Assuming the sensor value is in the 'sensor_value' field
          setLastUpdate(new Date().toLocaleString()); // Update the last update time
        }, 5000); // Add a 5-second delay
      }
    }).subscribe((status) => {
      console.log('Subscription status:', status); // Debugging: Log the subscription status
      if (status === 'SUBSCRIBED') {
        console.log(`Subscribed to ${sensorName} updates`);
      }
    });

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, [sensorName]);

  return { value, lastUpdate };
};

export default useSensorData;