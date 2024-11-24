import React from 'react';
import Logo from './components/Logo';
import DateTime from './components/DateTime';
import Legend from './components/Legend';
import UserContainer from './components/UserContainer';
import SensorCard from './components/SensorCard';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const sensors = [
    { label: 'Temperature', icon: '🌡️', value: '61', unit: 'ppm' },
    { label: 'Humidity', icon: '💧', value: '61', unit: 'ppm' },
    { label: 'Carbon Monoxide', icon: '☁️', value: '61', unit: 'ppm' },
    { label: 'Carbon Dioxide', icon: '☁️', value: '61', unit: 'ppm' },
    { label: 'Butane', icon: '☁️', value: '61', unit: 'ppm' },
    { label: 'Propane', icon: '☁️', value: '61', unit: 'ppm' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white font-sans">
      <header className="flex items-center justify-between p-4">
        <Logo />
        <div className="flex items-center gap-4">
          <DateTime />
          <UserContainer />
        </div>
      </header>

      <main className="p-4">
        <Legend />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sensors.map((sensor) => (
            <SensorCard
              key={sensor.label}
              label={sensor.label}
              icon={sensor.icon}
              value={sensor.value}
              unit={sensor.unit}
            />
          ))}
        </div>
      </main>

      <footer className="p-4 flex justify-between items-center">
        <DarkModeToggle />
        <div className="rounded-full bg-yellow-500 p-2">⚠️</div>
      </footer>
    </div>
  );
};

export default App;