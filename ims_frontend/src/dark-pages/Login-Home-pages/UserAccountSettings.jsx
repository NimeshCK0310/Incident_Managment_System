import React, { useState } from "react";
import UserLoginHomeNavbar from "./UserLoginHomeNavbar";
import  FooterComp  from "../../components/FooterComp";

export default function UserAccountSettings() {
  const [profilePic, setProfilePic] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <UserLoginHomeNavbar />
      <div className="bg-gray-900 text-gray-300 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">General Information</h2>
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
                  <label
                    htmlFor="image-upload"
                    className="p-2 bg-blue-500 rounded-full hover:bg-blue-700 text-white cursor-pointer"
                  >
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
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  id="full-name"
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Damiru Sandisa"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Sri Lanka"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="011 211 111 2222"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="damiru@gmail.com"
                />
              </div>
            </div>
          </div>

          {/* Checkbox and Save Button */}
          <div className="mt-6 flex items-center justify-between">
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
      </div>
      <FooterComp />
    </div>
  );
}
