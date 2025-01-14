import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/indec.css'; // Import the CSS file for animations

const Badge = () => (
  <Link to="/home" className="flex flex-row items-center">
    {/* Add 'spin' class to make it spin */}
    <img src="aerologo.png" alt="Logo" className="spin w-16 sm:w-16 md:w-16 lg:w-20 xl:w-24 h-auto" />
    <img src="aerotext.png" alt="Logo" className="w-24 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto ml-1" />
  </Link>
);

export default Badge;
