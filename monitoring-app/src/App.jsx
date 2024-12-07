import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import DateTime from './components/DateTime';
import Legend from './components/Legend';
import UserContainer from './components/UserContainer';
import SensorCard from './components/SensorCard';
import Profile from './pages/profile'; // Ensure this path is correct
import sensors from '../sensorsData'; // Ensure this path is correct

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <header className="flex items-center justify-between px-4">
        <Logo />
        <div className="flex items-center gap-2">
          <DateTime />
          <UserContainer />
        </div>
      </header>

      <main className="p-4 mx-[5%]">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={
            <>
              <Legend />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sensors.map((sensor) => (
                  <SensorCard
                    key={sensor.label}
                    label={sensor.label}
                    icon={sensor.icon}
                    value={sensor.value}
                    unit={sensor.unit}
                    minValue={sensor.minValue}
                    maxValue={sensor.maxValue}  
                  />
                ))}
              </div>
            </>
          } />
        </Routes>
      </main>

      <footer className="p-4 flex justify-between items-center">
        <div className="rounded-full bg-yellow-500 p-2">⚠️</div>
      </footer>
    </div>
  );
};

export default App;