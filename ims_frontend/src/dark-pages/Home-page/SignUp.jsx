import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <button
          onClick={handleGoBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-gray-200 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Go back</span>
        </button>
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-2xl font-semibold text-white">Create your account</h2>
        </div>
        <p className="text-center text-gray-400">
          Already have an account? <a href="/signin" className="text-blue-500 hover:underline">Sign in.</a>
        </p>
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-400">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your.email@provider.com"
              className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-gray-400">Contact Number</label>
            <input
              id="contact"
              type="tel"
              placeholder="Enter your contact number"
              className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-400">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-gray-400">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full py-2 mt-4 text-white bg-blue-600 hover:bg-blue-500 rounded-md">
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500 text-xs mt-4">
          By signing in, you agree to our <span className="text-blue-500">Terms & Conditions</span> and <span className="text-blue-500">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
