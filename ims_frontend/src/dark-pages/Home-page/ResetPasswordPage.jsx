import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Password reset successfully');
      navigate('/signin'); 
    } else {
      alert("Passwords don't match");
    }
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
          <h2 className="text-2xl font-semibold text-white">Reset Your Password</h2>
        </div>
        <p className="text-center text-gray-400">
          Enter your new password below. Make sure both passwords match.
        </p>
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="block text-gray-400">New Password</label>
            <input
              id="newPassword" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-400">Confirm Password</label>
            <input
              id="confirmPassword" 
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-2 text-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full py-2 mt-4 text-white bg-blue-600 hover:bg-blue-500 rounded-md">
            Reset Password
          </button>
        </form>
        <p className="text-center text-gray-500 text-xs mt-4">
          Remembered your password? <a href="/signin" className="text-blue-500 hover:underline">Sign in.</a>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;
