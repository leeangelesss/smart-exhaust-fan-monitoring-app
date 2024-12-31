import React, { useState, useEffect } from 'react';
import Logo from './../components/Logo';
import DateTime from './../components/DateTime';
import UserContainer from './../components/UserContainer';
import { supabase, supabaseKeyExport } from '../utils/supabase'; // Import supabase and supabaseKeyExport

const Profile = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch the current logged-in user
        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError) throw new Error(userError.message);

        if (user) {
          // Fetch the user data using the provided URL
          const response = await fetch(`https://mzknnjfsehbhlnlrbhfu.supabase.co/rest/v1/users?auth_uid=eq.${user.id}`, {
            headers: {
              'apikey': supabaseKeyExport, // Use the exported supabaseKey
              'Authorization': `Bearer ${supabaseKeyExport}`, // Use the exported supabaseKey
            },
          });

          if (!response.ok) {
            throw new Error('Error fetching user data');
          }

          const data = await response.json();

          // Log the fetched data for debugging
          console.log('Fetched User Data:', data);

          // Check if data exists before updating state
          if (data && data.length > 0) {
            setFormData({
              email: data[0].email || '',
              address: data[0].address || '',
              phoneNumber: data[0].phone_number || '',
              password: '',
              confirmPassword: '',
            });
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []); // Runs once when the component is mounted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <header className="flex items-center justify-between px-4">
        <Logo />
        <div className="flex items-center gap-2">
          <DateTime />
          <UserContainer />
        </div>
      </header>

      <main className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-10 bg-black bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-teal-400">Profile Settings</h2>
          <p className="text-gray-300 text-center mb-8">
            Update your account information below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="email" className="block text-base font-semibold text-teal-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={formData.email || 'Enter your email address'}
                className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <label htmlFor="address" className="block text-base font-semibold text-teal-400">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={formData.address || 'Enter your address'}
                className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <label htmlFor="phoneNumber" className="block text-base font-semibold text-teal-400">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder={formData.phoneNumber || 'Enter your phone number'}
                className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label htmlFor="password" className="block text-base font-semibold text-teal-400">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <label htmlFor="confirmPassword" className="block text-base font-semibold text-teal-400">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-teal-500 text-white text-xl font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all tracking-wide"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;