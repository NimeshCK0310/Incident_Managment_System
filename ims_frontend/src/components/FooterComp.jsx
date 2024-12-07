import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        
        {/* Displayed only on larger screens */}
        <div className="hidden md:block text-center space-x-4">
          <span className="text-sm text-gray-400">Site Map</span>
          <span className="text-sm text-gray-400"> | </span>
          <span className="text-sm text-gray-400">Privacy Policy</span>
          <span className="text-sm text-gray-400"> | </span>
          <span className="text-sm text-gray-400">Terms of Use</span>
          <span className="text-sm text-gray-400"> | </span>
          <span className="text-sm text-gray-400">General Terms & Conditions</span>
          <p className="text-sm text-gray-400 mt-4">© Sri Lanka Telecom PLC. All Rights Reserved.</p>
        </div>
        
        {/* Displayed only on small screens */}
        <div className="block md:hidden">
          {/* Links Section */}
          <div className="text-center space-y-2">
            <span className="text-sm text-gray-400">Site Map</span>
            <span className="text-sm text-gray-400"> | </span>
            <span className="text-sm text-gray-400">Privacy Policy</span>
            <span className="text-sm text-gray-400"> | </span>
            <span className="text-sm text-gray-400">Terms of Use</span>
            <span className="text-sm text-gray-400"> | </span>
            <span className="text-sm text-gray-400">General Terms & Conditions</span>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://web.facebook.com/SLTMobitel/?_rdc=1&_rdr#" className="text-white hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
            <a href="https://x.com/slt_mobitel?lang=en" className="text-white hover:text-blue-400"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/sltmobitel_official/?hl=en" className="text-white hover:text-blue-400"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/srilankatelecom?originalSubdomain=lk" className="text-white hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-400 mt-4">
            © Sri Lanka Telecom PLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
