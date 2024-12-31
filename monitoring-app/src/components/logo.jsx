import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/home" className="flex items-center px-3">
    <img src="logo.png" alt="Logo" className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto mr-4" />
  </Link>
);

export default Logo;