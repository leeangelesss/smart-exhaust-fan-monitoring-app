import React, { useState, useEffect } from "react";
import Badge from "../components/Badge";
import DateTime from "../components/DateTime";
import UserContainer from "../components/UserContainer";
import { supabase, supabaseKeyExport } from "../utils/supabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [originalData, setOriginalData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError) throw new Error(userError.message);

        if (user) {
          const response = await fetch(
            `https://mzknnjfsehbhlnlrbhfu.supabase.co/rest/v1/users?auth_uid=eq.${user.id}`,
            {
              headers: {
                apikey: supabaseKeyExport,
                Authorization: `Bearer ${supabaseKeyExport}`,
              },
            }
          );

          if (!response.ok) throw new Error("Failed to fetch user data");

          const data = await response.json();
          if (data.length > 0) {
            const userData = {
              firstName: data[0].first_name || "",
              lastName: data[0].last_name || "",
              email: data[0].email || "",
              address: data[0].address || "",
              phoneNumber: data[0].phone_number || "",
            };
            setFormData(userData);
            setOriginalData(userData);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(originalData);
    setIsEditing(false);
  };

  const handleSave = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.phoneNumber) {
      alert("All fields are required!");
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not found");

      const { error } = await supabase
        .from("users")
        .update({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          address: formData.address,
          phone_number: formData.phoneNumber,
        })
        .eq("auth_uid", user.id);

      if (error) throw new Error(error.message);

      setOriginalData(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error.message);
    }
  };

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
        <div className="w-full max-w-md p-8 bg-black bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg relative">
          {!isEditing && (
            <FontAwesomeIcon
              icon={faEdit}
              className="absolute top-4 right-4 text-teal-400 cursor-pointer text-lg hover:text-teal-300"
              onClick={handleEdit}
            />
          )}

          <h2 className="text-2xl font-bold text-center mb-4 text-teal-400">
            Profile Settings
          </h2>
          <p className="text-gray-300 text-center text-base mb-8">
            {isEditing ? "Edit your account information below." : "Your account information is displayed below."}
          </p>

          <div className="space-y-4 text-sm">
            {/* Name Field */}
            {isEditing ? (
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block font-semibold text-teal-400">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 bg-gray-600 bg-opacity-20 text-white rounded-lg outline-none"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block font-semibold text-teal-400">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 bg-gray-600 bg-opacity-20 text-white rounded-lg outline-none"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block font-semibold text-teal-400">Name</label>
                <div className="w-full px-4 py-3 mt-1 bg-gray-600 bg-opacity-20 text-white rounded-lg">
                  {`${formData.firstName} ${formData.lastName}`.trim() || "Loading..."}
                </div>
              </div>
            )}

            {/* Other Fields */}
            {["email", "address", "phoneNumber"].map((field, index) => (
              <div key={index}>
                <label className="block font-semibold text-teal-400">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                {isEditing ? (
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 bg-gray-600 bg-opacity-20 text-white rounded-lg outline-none"
                  />
                ) : (
                  <div className="w-full px-4 py-3 mt-1 bg-gray-600 bg-opacity-20 text-white rounded-lg">
                    {formData[field] || "Loading..."}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          {isEditing && (
            <div className="flex justify-between mt-6">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 text-white"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
