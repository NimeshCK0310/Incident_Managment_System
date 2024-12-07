import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLoginHomeNavbar from './UserLoginHomeNavbar';
import FooterComp from '../../components/FooterComp';

export const LoginIncidentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    referenceId: '',
    customerName: '',
    customerContact: '',
    email: '',
    incidentTitle: '',
    incidentType: '',
    incidentDescription: '',
    date: '',
    time: '',
    postalAreaCode: '',
  });
  const [notification, setNotification] = useState(null);
  const [copyStatus, setCopyStatus] = useState('');

  useEffect(() => {
    const generateReferenceId = () => {
      const array = new Uint8Array(9);
      crypto.getRandomValues(array);
      return `REF-${Array.from(array, (byte) => byte.toString(36).toUpperCase().padStart(2, '0')).join('')}`;
    };

    const currentDate = new Date();
    setFormData({
      ...formData,
      referenceId: generateReferenceId(),
      date: currentDate.toLocaleDateString(),
      time: currentDate.toLocaleTimeString(),
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    setNotification('Form submitted successfully!');
    
    setTimeout(() => {
      setNotification(null);
      navigate('/feedback-form');
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formData.referenceId)
      .then(() => {
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus(''), 2000);
      })
      .catch(() => {
        setCopyStatus('Failed to copy!');
        setTimeout(() => setCopyStatus(''), 2000);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <UserLoginHomeNavbar />
      <div className="flex-grow flex items-center justify-center pt-24 pb-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 space-y-4 bg-gray-800 rounded-md shadow-lg"
        >
          {/* Reference ID Field (Non-editable) */}
          <div className="relative flex items-center">
            <input
              type="text"
              name="referenceId"
              value={formData.referenceId}
              readOnly
              className="w-full p-3 bg-gray-900 border border-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={copyToClipboard}
              className="ml-2 p-2 bg-gray-700 text-white rounded-md focus:outline-none hover:bg-gray-600"
            >
              Copy
            </button>
          </div>
          {copyStatus && (
            <div className="text-sm text-green-500 mt-2">{copyStatus}</div>
          )}

          {/* Customer Name Input */}
          <div className="relative">
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
              placeholder="Customer Name"
              className="w-full p-3 bg-gray-900 border border-green-500 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Customer Contact Number Input */}
          <div className="relative">
            <input
              type="text"
              name="customerContact"
              value={formData.customerContact}
              onChange={handleChange}
              required
              placeholder="Customer Contact Number"
              className="w-full p-3 bg-gray-900 border border-green-500 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Customer Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Customer Email"
              className="w-full p-3 bg-gray-900 border border-green-500 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Postal Code Input */}
          <div className="relative">
            <input
              type="text"
              name="postalAreaCode"
              value={formData.postalAreaCode}
              onChange={handleChange}
              required
              placeholder="Postal Code"
              className="w-full p-3 bg-gray-900 border border-green-500 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Incident Title Input */}
          <div className="relative">
            <input
              type="text"
              name="incidentTitle"
              value={formData.incidentTitle}
              onChange={handleChange}
              required
              placeholder="Incident Title"
              className="w-full p-3 bg-gray-900 border border-green-500 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Incident Type Dropdown */}
          <div className="relative">
            <select
              name="incidentType"
              value={formData.incidentType}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-900 border border-green-500 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-pink-500"
            >
              <option value="">Select Incident Type</option>
              <option value="System Crash">System Crash</option>
              <option value="Network Issue">Network Issue</option>
              <option value="Hardware Failure">Hardware Failure</option>
              <option value="Software Bug">Software Bug</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Incident Description Textarea */}
          <div className="relative">
            <textarea
              name="incidentDescription"
              value={formData.incidentDescription}
              onChange={handleChange}
              required
              placeholder="Incident Description"
              className="w-full p-3 bg-gray-900 border border-green-500 text-white rounded-md placeholder-gray-400 focus:outline-none focus:border-pink-500 h-32 resize-none"
            ></textarea>
          </div>

          {/* Date and Time Inputs */}
          <div className="flex space-x-4">
            <div className="relative w-1/2">
              <input
                type="text"
                name="date"
                value={formData.date}
                readOnly
                className="w-full p-3 bg-gray-900 border border-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div className="relative w-1/2">
              <input
                type="text"
                name="time"
                value={formData.time}
                readOnly
                className="w-full p-3 bg-gray-900 border border-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mt-4"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 p-4 bg-green-500 text-white rounded-md shadow-lg border-2 border-green-700 z-50">
          {notification}
        </div>
      )}

      <FooterComp />
    </div>
  );
};
