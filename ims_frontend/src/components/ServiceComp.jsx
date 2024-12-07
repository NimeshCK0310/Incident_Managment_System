import React, { useEffect } from 'react';
import PropTypes from 'prop-types';  
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";

import serviceGif1 from "../assets/truck.gif";  
import serviceGif2 from "../assets/rocket.gif";  
import serviceGif3 from "../assets/database.gif";  
import serviceGif4 from "../assets/24-hours.gif";  

// ServiceCard Component
const ServiceCard = ({ imageSrc, title, description }) => (
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg border-4 border-transparent hover:animate-border-pulse">
    <img src={imageSrc} alt={title} className="w-32 h-32 object-cover mb-4 rounded-md" />
    <p className="text-lg font-semibold text-white">{title}</p>
    <p className="text-gray-300 text-center">{description}</p>
  </div>
);

ServiceCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

// ServiceWithGif Component
const ServiceWithGif = ({ gifSrc, title, description }) => (
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg border-4 border-transparent hover:animate-border-pulse">
    <div className="w-20 h-20 bg-white-600 rounded-full flex items-center justify-center mb-4 border-4 border-blue-500">
      <img src={gifSrc} alt={title} className="w-12 h-12 filter" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </div>
);

ServiceWithGif.propTypes = {
  gifSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

const observeElements = () => {
  const elements = document.querySelectorAll('.animate-slide-up');
  elements.forEach((element) => {
    element.classList.add('opacity-0', 'translate-y-4');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
  });
};

export const ServiceComp = () => {
  useEffect(() => {
    observeElements();
  }, []);

  return (
    <div>
      <div className="pt-20">
        <div className="text-center my-8 animate-slide-up">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-xl text-gray-600 mt-2">What We Offer</p>
        </div>

        {/* Programs Section */}
        <div className="my-12 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard imageSrc={A1} title="Connection Issues" description="" />
            <ServiceCard imageSrc={A2} title="Internet Problems" description="" />
            <ServiceCard imageSrc={A3} title="Emergency Breakdowns" description="" />
          </div>
        </div>

        <div className="text-center my-8 px-4 max-w-3xl mx-auto animate-slide-up">
          <p className="text-white">
            At SLT Mobitel, we offer a comprehensive range of telecommunication services tailored to meet the needs of individuals, businesses, and enterprises across Sri Lanka. From high-speed fiber and LTE internet to mobile voice and data services, our extensive network delivers reliable connectivity across the country...
          </p>
        </div>

        {/* Services Section */}
        <section className="flex justify-center mb-12 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
            <ServiceWithGif gifSrc={serviceGif1} title="Telecommunication Services" description="All 4 million Connections" />
            <ServiceWithGif gifSrc={serviceGif2} title="Fast Response" description="Repairs and Breakdowns" />
            <ServiceWithGif gifSrc={serviceGif3} title="Secure Database" description="100% Secure Client Information" />
            <ServiceWithGif gifSrc={serviceGif4} title="24/7 Support" description="Get Quick Support" />
          </div>
        </section>

      </div>
    </div>
  );
};
