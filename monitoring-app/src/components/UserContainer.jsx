import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const UserContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Close the dropdown menu when the route changes
    setIsOpen(false);
  }, [location]);

  return (
    <div className="relative">
      <div
        className="rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 cursor-pointer"
        onClick={toggleDropdown}
      >
        <img src="PUPLogo.png" alt="User" className="rounded-full object-contain w-full h-full" />
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
          <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile Settings</Link>
          <a href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
        </div>
      )}
    </div>
  );
};

export default UserContainer;