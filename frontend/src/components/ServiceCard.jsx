import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ imgSrc, altText, title, description }) => (
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg border-4 border-transparent hover:animate-border-pulse">
    <img src={imgSrc} alt={altText} className="w-32 h-32 object-cover mb-4 rounded-md" />
    <p className="text-lg font-semibold text-white">{title}</p>
    {description && <p className="text-gray-300 text-center">{description}</p>}
  </div>
);

// Prop types validation
ServiceCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,    
  altText: PropTypes.string.isRequired,  
  title: PropTypes.string.isRequired,     
  description: PropTypes.string          
};

export default ServiceCard;
