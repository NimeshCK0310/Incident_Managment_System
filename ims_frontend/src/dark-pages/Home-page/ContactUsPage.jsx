import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBuilding } from "react-icons/fa"; 
import UserHomeNavbar from "./UserHomeNavbar";
import ContactUsForm from "../../components/ContactUsForm"; 
import  FooterComp  from "../../components/FooterComp";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a202c]">
      <UserHomeNavbar />
      <div className="pt-10 flex-grow">
        <div className="bg-[#1a202c] text-white py-10 px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-5">Contact Us</h2>
            <p className="text-center text-gray-400 mb-10">
              We use an agile approach to test assumptions and connect with the needs of your audience early and often.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Contact Form */}
              <ContactUsForm /> 

              {/* Right Column - Company Info with Icons */}
              <div className="space-y-6 text-gray-400">
                <div className="flex items-center space-x-3">
                  <FaBuilding className="text-blue-500 text-xl" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Company information:</h3>
                    <p>SLTMobitel</p>
                    <p>Telecommunications company</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-blue-500 text-xl" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Address:</h3>
                    <p>Lotus Road,</p>
                    <p>P.O.Box 503,</p>
                    <p>Colombo 01, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-blue-500 text-xl" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Call us:</h3>
                    <p>Call us to speak to a member of our team. We are always happy to help.</p>
                    <p className="text-blue-500 font-medium">+94 112 021 000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-500 text-xl" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Email:</h3>
                    <p className="text-blue-500 font-medium">pr@slt.lk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default ContactUsPage;
