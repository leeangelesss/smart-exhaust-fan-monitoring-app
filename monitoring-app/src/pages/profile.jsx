import React, { useState, useEffect } from "react";
import Badge from "../components/Badge";
import DateTime from "./../components/DateTime";
import UserContainer from "./../components/UserContainer";
import { supabase, supabaseKeyExport } from "../utils/supabase"; // Import supabase and supabaseKeyExport

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "", // Combined first name and last name
    email: "",
    address: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch the current logged-in user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw new Error(userError.message);

        if (user) {
          // Fetch the user data using the provided URL
          const response = await fetch(
            `https://mzknnjfsehbhlnlrbhfu.supabase.co/rest/v1/users?auth_uid=eq.${user.id}`,
            {
              headers: {
                apikey: supabaseKeyExport, // Use the exported supabaseKey
                Authorization: `Bearer ${supabaseKeyExport}`, // Use the exported supabaseKey
              },
            }
          );

          if (!response.ok) {
            throw new Error("Error fetching user data");
          }

          const data = await response.json();

          // Log the fetched data for debugging
          console.log("Fetched User Data:", data);

          // Check if data exists before updating state
          if (data && data.length > 0) {
            setFormData({
              name: `${data[0].first_name || ""} ${data[0].last_name || ""}`.trim(),
              email: data[0].email || "",
              address: data[0].address || "",
              phoneNumber: data[0].phone_number || "",
            });
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []); // Runs once when the component is mounted

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans" style={{ backgroundImage: 'url(/loginbg.jpg)' }}>
      <header className="flex items-center justify-between px-4">
        <Badge />
        <div className="flex items-center gap-2">
          <DateTime />
          <UserContainer />
        </div>
      </header>

      <main className="flex items-center justify-center my-auto px-4">
        <div className="w-full max-w-md p-8 bg-black bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4 text-teal-400">
            Profile Settings
          </h2>
          <p className="text-gray-300 text-center text-base mb-8">
            Your account information is displayed below.
          </p>
          <div className="space-y-4 text-sm">
            <div className="relative">
              <label
                htmlFor="name"
                className="block font-semibold text-teal-400"
              >
                Name
              </label>
              <div className="w-full px-4 py-3 mt-1 bg-gray-600 bg-opacity-20 text-white rounded-lg">
                {formData.name || "Loading..."}
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="block font-semibold text-teal-400"
              >
                Email
              </label>
              <div className="w-full px-4 py-3 mt-1 bg-gray-600 bg-opacity-20 text-white rounded-lg">
                {formData.email || "Loading..."}
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="address"
                className="block font-semibold text-teal-400"
              >
                Address
              </label>
              <div className="w-full px-4 py-3 mt-1 bg-gray-600 bg-opacity-20 text-white rounded-lg">
                {formData.address || "Loading..."}
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="phoneNumber"
                className="block font-semibold text-teal-400"
              >
                Phone Number
              </label>
              <div className="w-full px-4 py-3 mt-1 bg-gray-600 bg-opacity-20 text-white rounded-lg">
                {formData.phoneNumber || "Loading..."}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
