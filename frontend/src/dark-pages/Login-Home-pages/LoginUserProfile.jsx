import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"; // Import the icons
import UserLoginHomeNavbar from "./UserLoginHomeNavbar";
import  FooterComp  from "../../components/FooterComp";

const LoginUserProfile = () => {
  return (
    <div>
        <UserLoginHomeNavbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 mb-4 rounded-full"
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Profile"
          />
          <h2 className="text-xl font-bold text-teal-400">Damiru Sandisa</h2>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center text-gray-400">
            <FiMail className="mr-3" /> {/* Mail icon */}
            <p>damiru@gmail.com</p>
          </div>
          <div className="flex items-center text-gray-400">
            <FiPhone className="mr-3" /> {/* Phone icon */}
            <p>+1 (530) 555-12121</p>
          </div>
          <div className="flex items-center text-gray-400">
            <FiMapPin className="mr-3" /> {/* Location pin icon */}
            <p>Sri Lanka</p>
          </div>
        </div>
      </div>
    </div>
    <FooterComp/>
    </div>
  );
};

export default LoginUserProfile;
