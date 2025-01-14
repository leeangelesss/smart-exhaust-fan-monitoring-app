import React, { useState, useEffect } from 'react';
import { Link, useLocation, Route, Routes } from 'react-router-dom';
import { supabase } from '../utils/supabase';
import Login from '../pages/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const UserContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Close the dropdown menu when the route changes
    setIsOpen(false);
  }, [location]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error during sign-out:', error.message);
        alert('An error occurred while logging out. Please try again.');
        return;
      }
      setLoggedOut(true); // Trigger redirection to login
    } catch (error) {
      console.error('Unexpected error during sign-out:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  if (loggedOut) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

  return (
    <div className="relative">
      {/* Profile Image */}
      <div
        className="relative group rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src="PUPLogo.png"
          alt="User"
          className="rounded-full object-contain w-16 sm:w-14 md:w-16 lg:w-16 xl:w-20 h-auto"
        />

        <div className="absolute inset-0 rounded-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-sm font-semibold"></span>
        </div>

        <div className="absolute -bottom-1 -right-1 p-1 shadow-md">
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-gray-500 transition-transform ${
              isOpen ? 'rotate-180' : ''
            } w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 rounded-full bg-white p-2`}
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Profile Settings
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserContainer;
