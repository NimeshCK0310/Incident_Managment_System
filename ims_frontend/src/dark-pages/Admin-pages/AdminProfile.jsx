import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const AdminProfile = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-auto ml-20"> 
        <AdminNavbar />
        <main className="p-4 flex-grow bg-gray-900">
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 mb-4 rounded-full"
                  src="https://via.placeholder.com/150" 
                  alt="Admin Profile"
                />
                <h2 className="text-xl font-bold text-teal-400">Admin Name</h2>
                {/* Added Profession */}
                <p className="text-sm text-gray-400 mt-2">Administrator</p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-400">
                  <FiMail className="mr-3" /> 
                  <p>admin@example.com</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <FiPhone className="mr-3" /> 
                  <p>+1 (530) 555-1234</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <FiMapPin className="mr-3" /> 
                  <p>Admin Office Location</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminProfile;
