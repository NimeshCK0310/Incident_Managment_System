import React, { useState } from "react";
import { FaUser } from "react-icons/fa"; 
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import { useNavigate } from "react-router-dom"; 
import InputField from "../../components/InputField"; 

const AdminAccountSettings = () => {
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleProfileClick = () => {
    navigate("/admin-profile"); 
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-auto ml-20">
        <AdminNavbar />
        <main className="flex flex-grow justify-center items-center bg-gray-900 px-4">
          {/* Centered Account Section */}
          <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-8 shadow-lg md:max-w-full sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-200">General Information</h2>
              <button
                className="p-2 bg-white-500 rounded-full text-white hover:bg-blue-600"
                onClick={handleProfileClick} 
              >
                <FaUser size={20} title="View Profile" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Picture */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 bg-gray-700 rounded-full flex justify-center items-center overflow-hidden">
                  {profilePic ? (
                    <img
                      src={profilePic}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500">Upload</span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition bg-black bg-opacity-50">
                    <button
                      className="p-2 bg-red-500 rounded-full hover:bg-red-700 text-white"
                      onClick={() => setProfilePic(null)}
                    >
                      ✕
                    </button>
                    <label htmlFor="image-upload" className="p-2 bg-blue-500 rounded-full hover:bg-blue-700 text-white cursor-pointer">
                      ⟳
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" placeholder="Damiru Sandisa" />
                <InputField label="Profession" placeholder="Manager" />
                <InputField label="Address" placeholder="Sri Lanka" />
                <InputField label="Phone" placeholder="011 211 111 2222" />
                <InputField label="Email" type="email" placeholder="damiru@gmail.com" />
              </div>
            </div>

            {/* Checkbox and Save Button */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500 bg-gray-700 border-gray-600 focus:ring-0"
                />
                <span className="ml-2">Make this my default address</span>
              </label>
              <button className="px-6 py-2 bg-purple-500 rounded-lg text-white hover:bg-purple-600">
                Save
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminAccountSettings;
