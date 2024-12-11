import React from 'react';
import PropTypes from 'prop-types';

const ServiceCardWithGif = ({ imgSrc, altText, title, description }) => (
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg border-4 border-transparent hover:animate-border-pulse">
    <div className="w-20 h-20 bg-white-600 rounded-full flex items-center justify-center mb-4 border-4 border-blue-500">
      <img src={imgSrc} alt={altText} className="w-12 h-12 filter" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </div>
);

ServiceCardWithGif.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCardWithGif;
