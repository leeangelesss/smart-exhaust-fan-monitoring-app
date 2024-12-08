import React, { useState } from 'react';

const Profile = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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
    <div className="max-w-md mx-auto mt-10 p-8 rounded-xl shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-teal-400">
        Profile Settings
      </h2>
      <p className="text-gray-300 text-center mb-8">
        Update your account information below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            className="block text-sm font-semibold text-teal-300 mb-1"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="w-full py-3 px-4 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-teal-400 focus:outline-none"
          />
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-teal-300 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full py-3 px-4 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-teal-400 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-sm font-semibold text-teal-300 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full py-3 px-4 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-teal-400 focus:outline-none"
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold text-teal-300 mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="w-full py-3 px-4 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-teal-400 focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 focus:ring-4 focus:ring-teal-400 focus:outline-none transition-all"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
