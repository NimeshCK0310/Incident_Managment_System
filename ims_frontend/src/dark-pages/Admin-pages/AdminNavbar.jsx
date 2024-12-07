import React, { useState } from "react";
import { FiBell, FiUser } from "react-icons/fi";
import { FaCog, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const notifications = [
    { id: 1, message: "New message received" },
    { id: 2, message: "Your report is ready" },
    { id: 3, message: "System update completed" },
  ];

  return (
    <nav className="relative flex items-center justify-end px-4 py-4 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center gap-4">
        {/* Notifications Bell */}
        <div className="relative">
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          >
            <FiBell size={20} />
          </button>
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg w-64 p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-blue-500">
                  Recent Notifications
                </h3>
                <FaCog className="text-blue-500 cursor-pointer text-xl hover:text-blue-400" />
              </div>
              <ul className="space-y-2">
                {notifications.map((notification) => (
                  <li
                    key={notification.id} 
                    className="text-green-500 text-sm border-b border-gray-600 py-2 last:border-none text-left"
                  >
                    {notification.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FiUser size={20} />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700">
              <div className="px-4 py-3 text-center border-b border-gray-700">
                <p className="font-bold text-gray-300">sandisa.damiru</p>
                <p className="text-sm text-gray-500">sandisa.damiru@gmail.com</p>
              </div>
              <ul className="py-2 text-sm text-gray-300">
                <li>
                  <NavLink
                    to="/admin-profile"
                    className="flex items-center px-4 py-2 hover:bg-gray-700"
                  >
                    <FaUserCircle className="mr-3" /> Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin-account-settings"
                    className="flex items-center px-4 py-2 hover:bg-gray-700"
                  >
                    <FaCog className="mr-3" /> Account Settings
                  </NavLink>
                </li>
                <li>
                  <a
                    href="/admin-log-out"
                    className="flex items-center px-4 py-2 hover:bg-gray-700"
                  >
                    <FaSignOutAlt className="mr-3" /> Log out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
