import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const UserHomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = ['Home', 'Services', 'About Us', 'Contact Us', 'Incidents'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link}  
              to={`/${link.toLowerCase().replace(' ', '-')}`} 
              className="relative inline-block text-white uppercase text-sm font-light py-4 px-8 overflow-hidden"
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
              <span className="relative z-10">{link}</span>
            </Link>
          ))}
        </div>

        {/* Sign In Button */}
        <div className="relative hidden md:block">
          <Link
            to="/signin" 
            className="relative inline-block text-black font-semibold py-2 px-8 rounded-lg overflow-hidden cursor-pointer"
            style={{
              backgroundColor: 'white',
              WebkitMask: "url('https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png')",
              mask: "url('https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png')",
              WebkitMaskSize: '2300% 100%',
              maskSize: '2300% 100%',
              animation: 'maskAnimation 0.7s steps(22) forwards',
            }}
            onMouseEnter={(e) => {
              e.target.style.animation = 'maskAnimationHover 0.7s steps(22) forwards';
            }}
            onMouseLeave={(e) => {
              e.target.style.animation = 'maskAnimation 0.7s steps(22) forwards';
            }}
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden bg-gray-900 text-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="space-y-4 py-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link} 
              to={`/${link.toLowerCase().replace(' ', '-')}`} 
              className="block text-white uppercase text-sm py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors"
            >
              {link}
            </Link>
          ))}

          {/* Mobile Sign In Button */}
          <div className="pt-4">
            <Link
              to="/signin" 
              className="relative inline-block w-full text-black font-semibold py-2 px-8 rounded-lg overflow-hidden cursor-pointer"
              style={{
                backgroundColor: 'white',
                WebkitMask: "url('https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png')",
                mask: "url('https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png')",
                WebkitMaskSize: '2300% 100%',
                maskSize: '2300% 100%',
                animation: 'maskAnimation 0.7s steps(22) forwards',
              }}
              onMouseEnter={(e) => {
                e.target.style.animation = 'maskAnimationHover 0.7s steps(22) forwards';
              }}
              onMouseLeave={(e) => {
                e.target.style.animation = 'maskAnimation 0.7s steps(22) forwards';
              }}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Inline CSS for hover effect */}
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

          @keyframes maskAnimation {
            0% {
              mask-position: 100% 0;
            }
            100% {
              mask-position: 0 0;
            }
          }

          @keyframes maskAnimationHover {
            0% {
              mask-position: 0 0;
            }
            100% {
              mask-position: 100% 0;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default UserHomeNavbar;
