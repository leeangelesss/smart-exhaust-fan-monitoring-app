import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase"; // Ensure this path is correct
import Badge from '../components/Badge';
import DateTime from './../components/DateTime';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true); // Show loading state while authenticating

    try {
      // Attempt to sign in with email and password
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // If there's an error, show an alert and log the error
        alert(`Error: ${error.message}`);
      } else {
        // If login is successful, navigate to the home page
        navigate("/home");
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("Unexpected error during login:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/loginbg.jpg)' }}>
      <header className="flex items-center justify-between px-4 py-4">
        <Badge />
        <div className="flex items-center gap-2">
          <DateTime />
        </div>
      </header>
      <div className="flex items-center justify-center text-white font-sans px-4 sm:px-8">
        <div className="w-full max-w-md p-10 bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-teal-400">Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-semibold text-teal-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 mt-2 py-3 bg-gray-600 bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-semibold text-teal-400">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full mt-2 px-4 py-3 bg-gray-600 bg-opacity-20 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-teal-500 text-white text-sm sm:text-sm md:text-base lg:text-base font-medium rounded-lg"
              disabled={loading} // Disable the button when loading
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Link to Register page */}
          <p className="mt-6 text-center text-white text-sm">
            Don't have an account?{" "}
            <button
              className="text-[#00d4ff] text-sm hover:underline"
              onClick={() => navigate("/register")} // Navigates to the register page
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
