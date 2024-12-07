import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ email, password });
    alert("Registration successful!");
    navigate("/login"); // Redirect to login after registration
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#020024] via-[#090979] to-[#00d4ff]">
      {/* Glassmorphism Container */}
      <div className="w-full max-w-sm p-10 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Register</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Your Email
            </label>
            <div className="flex items-center mt-2">
              <span className="absolute right-4 text-gray-300">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="email"
                id="email"
                className="w-full px-4 pl-4 py-3 bg-white bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Your Password
            </label>
            <div className="flex items-center mt-2">
              <span
                className="absolute right-4 text-gray-300 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 pl-4 py-3 bg-white bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
              Confirm Password
            </label>
            <div className="flex items-center mt-2">
              <span
                className="absolute right-4 text-gray-300 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full px-4 pl-4 py-3 bg-white bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all tracking-wide"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-sm text-center text-white">
          Already have an account?{" "}
          <button
            className="text-blue-400 hover:underline"
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