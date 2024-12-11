import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLogOut = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/signin");
  };

  const handleKeyDown = (event, action) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action(); 
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col overflow-auto ml-20">
        <AdminNavbar />

        <main className="flex flex-col items-center justify-center flex-grow p-4 bg-gray-900">
          {!showConfirm ? (
            <button
              onClick={() => setShowConfirm(true)}
              onKeyDown={(event) => handleKeyDown(event, () => setShowConfirm(true))}
              className="text-center cursor-pointer p-6 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-lg focus:outline-none"
              aria-label="Log out"
            >
              <h1 className="text-2xl font-semibold">Click to Logout</h1>
              <p className="text-gray-400 mt-2">Click the message to confirm your logout.</p>
            </button>
          ) : (
            // Confirmation Message - Buttons for actions
            <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
              <h1 className="text-2xl font-semibold">Are you sure you want to log out?</h1>
              <div className="mt-4 flex justify-center gap-4">
                <button
                  onClick={handleLogOut}
                  onKeyDown={(event) => handleKeyDown(event, handleLogOut)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none"
                  aria-label="Confirm logout"
                >
                  Yes, Log Out
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  onKeyDown={(event) => handleKeyDown(event, () => setShowConfirm(false))}
                  className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none"
                  aria-label="Cancel logout"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminLogOut;
