import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      onLogin(); // Update authentication state
      navigate("/home"); // Redirect to the main app
    } else {
      alert("Invalid credentials");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[linear-gradient(to_bottom_right,_#020024_0%,_#090979_50%,_#0648a3_75%,_#00d4ff_100%)]">
    {/* Glassmorphism Container */}
      <div className="w-full max-w-md p-10 bg-black bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-teal-400">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="block text-base font-medium text-teal-400">
              Email
            </label>
            <div className="flex items-center mt-2">
              <span className="absolute right-4 text-gray-300">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="email"
                id="email"
                className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50 tracking-wide"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="block text-base font-medium text-teal-400">
              Password
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
                className="w-full px-4 pl-4 py-3 bg-gray-600 bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white placeholder-opacity-50 tracking-wide"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-teal-400 text-white text-xl font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all tracking-wide"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-md text-center text-white tracking-wide">
          Already have an account?{" "}
          <button
            className="text-teal-500 hover:underline"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;