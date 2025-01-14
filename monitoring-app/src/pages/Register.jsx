import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../utils/supabase"; // Ensure this path is correct

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "https://aerosense-thesis.vercel.app/login",
        },
      });

      if (error) {
        console.error("Error signing up:", error.message);
        alert(`Error: ${error.message}`);
      } else {
        // Insert additional user information into the 'users' table
        const { user } = data;
        const { error: insertError } = await supabase
          .from('users')
          .insert([
            {
              first_name: firstName,
              last_name: lastName,
              email,
              address,
              phone_number: phoneNumber,
              auth_uid: user.user_metadata.sub,
            },
          ]);

        if (insertError) {
          console.error("Error inserting user information:", insertError.message);
          alert(`Error: ${insertError.message}`);
        } else {
          alert("Registration successful! Check your email for confirmation.");
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white font-sans px-4 sm:px-8 "style={{ backgroundImage: 'url(/loginbg.jpg)' }}>
      <div className="w-full max-w-lg p-8 bg-black bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-teal-400">Register</h2>
        <form onSubmit={handleRegister} className="space-y-5">
          {/* First Name and Last Name Fields */}
          <div className="flex space-x-4">
            <div className="relative w-1/2">
              <label htmlFor="firstName" className="block text-sm font-semibold text-teal-400">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 mt-2 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="relative w-1/2">
              <label htmlFor="lastName" className="block text-sm font-semibold text-teal-400">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 pl-4 mt-2 py-3 bg-gray-600 bg-opacity-20 text-white text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-semibold text-teal-400">
              Email
            </label>
            <div className="flex items-center mt-2">
              <span className="absolute right-4 text-gray-300">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="email"
                id="email"
                className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex space-x-4">
            {/* Password Field */}
            <div className="relative w-1/2">
              <label htmlFor="password" className="block text-sm font-semibold text-teal-400">
                Password
              </label>
              <div className="flex items-center mt-2">
                <span
                  className="absolute right-4 text-gray-300 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="relative w-1/2">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-teal-400">
                Confirm Password
              </label>
              <div className="flex items-center mt-2">
                <span
                  className="absolute right-4 text-gray-300 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
                </span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Address Field */}
          <div className="relative">
            <label htmlFor="address" className="block text-sm font-semibold text-teal-400">
              Address
            </label>
            <div className="flex items-center mt-2">
              <span className="absolute right-4 text-gray-300">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <input
                type="text"
                id="address"
                className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div className="relative">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-teal-400">
              Phone Number
            </label>
            <div className="flex items-center mt-2">
              <span className="absolute right-4 text-gray-300">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <input
                type="text"
                id="phoneNumber"
                className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-teal-500 text-white text-sm sm:text-sm md:text-base lg:text-base font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all tracking-wide"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-base text-center text-white tracking-wide text-sm">
          Already have an account?{" "}
          <button
            className="text-[#00d4ff] text-sm hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
