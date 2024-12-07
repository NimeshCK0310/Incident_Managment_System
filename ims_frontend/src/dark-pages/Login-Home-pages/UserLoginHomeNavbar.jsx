import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes, FaUserCircle, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserLoginHomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const notifications = [
    "New incident reported.",
    "Your service request has been updated.",
    "New message from admin.",
    "Scheduled maintenance reminder.",
  ];

  const links = [
    { to: "user-login-home", label: "Home" },
    { to: "user-login-service", label: "Service" },
    { to: "user-login-about-us", label: "About Us" },
    { to: "user-login-contact-us", label: "Contact Us" },
    { to: "user-login-incident", label: "Incident" },
    { to: "user-login-reported-incidents", label: "Reported Incidents" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        <div className="flex-grow md:flex-grow-0 md:order-1 flex justify-center md:justify-start">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        <div className="hidden md:flex space-x-8 md:order-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to} // Using 'to' for unique key
              to={`/${to}`}
              className={({ isActive }) =>
                `relative inline-block uppercase text-sm font-light py-4 px-8 overflow-hidden ${
                  isActive ? "text-green-500" : "text-white"
                }`
              }
            >
              <svg
                className="absolute top-0 left-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <rect
                  className="svg-rect"
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="0"
                  strokeDasharray="422, 0"
                />
              </svg>
              <span className="relative z-10">{label}</span>
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-6 md:order-3">
          {/* Bell Icon */}
          <button
            onClick={toggleNotifications}
            className="text-white text-xl relative flex items-center justify-center"
          >
            <FaBell />
            {isNotificationsOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-semibold text-blue-500">Recent Notifications</h3>
                  <FaCog className="text-blue-500 cursor-pointer text-xl hover:text-blue-500" />
                </div>
                <ul className="space-y-2">
                  {notifications.map((notification, index) => (
                    <li
                      key={notification} // Using notification text for unique key
                      className="text-green-500 text-sm border-b border-gray-600 py-2 last:border-none text-left"
                    >
                      {notification}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </button>

          {/* Profile Icon */}
          <div className="relative flex items-center justify-center">
            <button onClick={toggleDropdown} className="text-white text-xl">
              <FaUserCircle />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700">
                <div className="px-4 py-3 text-center border-b border-gray-700">
                  <p className="font-bold text-gray-300">sandisa.damiru</p>
                  <p className="text-sm text-gray-500">sandisa.damiru@gmail.com</p>
                </div>
                <ul className="py-2 text-sm text-gray-300">
                  <li>
                    <NavLink to="/user-profile" className="flex items-center px-4 py-2 hover:bg-gray-700">
                      <FaUserCircle className="mr-3" /> Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-account-settings" className="flex items-center px-4 py-2 hover:bg-gray-700">
                      <FaCog className="mr-3" /> Account Settings
                    </NavLink>
                  </li>
                  <li>
                    <a href="/sign-in" className="flex items-center px-4 py-2 hover:bg-gray-700">
                      <FaSignOutAlt className="mr-3" /> Log out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-gray-900 text-white transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="space-y-4 py-4 px-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to} // Using 'to' for unique key
              to={`/${to}`}
              className={({ isActive }) =>
                `block uppercase text-sm py-2 px-4 rounded-lg transition-colors ${
                  isActive ? "text-green-500" : "text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      <style>
        {`
          a {
            position: relative;
            text-decoration: none;
          }

          a:hover .svg-rect {
            stroke-width: 5;
            stroke-dasharray: 15, 310;
            stroke-dashoffset: 48;
            transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
          }
        `}
      </style>
    </nav>
  );
};

export default UserLoginHomeNavbar;
