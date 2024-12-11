import React from 'react';
import PropTypes from 'prop-types'; 

const InputField = ({ label, type = 'text', placeholder = '' }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
    />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired, 
  type: PropTypes.string, 
  placeholder: PropTypes.string, 
};

export default InputField;
