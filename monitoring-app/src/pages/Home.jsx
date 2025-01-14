import React from 'react';
import Badge from '../components/Badge';
import DateTime from './../components/DateTime';
import Legend from './../components/Legend';
import UserContainer from './../components/UserContainer';
import SensorCard from '../components/SensorCard';
import SensorDashboard from '../components/SensorDashboard';
import Notification from '../components/Notification';
import Information from '../components/Information';
import LastUpdateDate from '../components/LastUpdateDate';

import temperature from '/images/sensorIcons/temperature.png';
import humidity from '/images/sensorIcons/humidity.png';
import airquality from '/images/sensorIcons/airquality.png';
import smoke from '/images/sensorIcons/smoke.png';
import kerosene from '/images/sensorIcons/kerosene.png';
import lpg from '/images/sensorIcons/lpg.png';


const sensors = [
  {
    sensorName: 'Temperature',
    component: (
      <SensorCard
        label="Temperature"
        sensorName="Temperature"
        sensorId="Temperature"
        icon={temperature}
        unit="°C"
        minValue={0}
        maxValue={50}
      />
    ),
  },
  {
    sensorName: 'Humidity',
    component: (
      <SensorCard
        label="Humidity"
        sensorName="Humidity"
        sensorId="Humidity"
        icon={humidity}
        unit="%"
        minValue={0}
        maxValue={90}
      />
    ),
  },
  {
    sensorName: 'AirQuality',
    component: (
      <SensorCard
        label="Air Quality"
        sensorName="AirQuality"
        sensorId="AirQuality"
        icon={airquality}
        unit="ppm"
        minValue={0}
        maxValue={500}
      />
    ),
  },
  {
    sensorName: 'Smoke',
    component: (
      <SensorCard
        label="Smoke"
        sensorName="Smoke"
        sensorId="Smoke"
        icon={smoke}
        unit="ppm"
        minValue={0}
        maxValue={10000}
      />
    ),
  },
  {
    sensorName: 'Kerosene',
    component: (
      <SensorCard
        label="Kerosene"
        sensorName="Kerosene"
        sensorId="Kerosene"
        icon={kerosene}
        unit="ppm"
        minValue={0}
        maxValue={1200}
      />
    ),
  },
  {
    sensorName: 'LPG',
    component: (
      <SensorCard
        label="LPG"
        sensorName="LPG"
        sensorId="LPG"
        icon={lpg}
        unit="ppm"
        minValue={0}
        maxValue={15000}
      />
    ),
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans" style={{ backgroundImage: 'url(/loginbg.jpg)' }}>
      <header className="flex items-center justify-between px-4">
        <Badge />
        <div className="flex items-center gap-2">
          <DateTime />
          <UserContainer />
        </div>
      </header>

      <main className="p-4 mx-[5%] flex flex-col items-center justify-center min-h-screen">
        <Legend />
        <LastUpdateDate lastUpdate={new Date()} />
        <SensorDashboard sensors={sensors} />
      </main>

      <footer className="fixed bottom-0 w-full p-4" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className='block'>
          <div className="mb-4">
            <Notification sensors={sensors} />
          </div>
          <div>
            <Information />
          </div>
        </div>
      </footer>

    </div>
  );
};
 
export default Home;
