import React, { useEffect } from 'react';
import A1 from "../../assets/A1.png";
import A2 from "../../assets/A2.png";
import A3 from "../../assets/A3.png";
import serviceGif1 from "../../assets/truck.gif";  
import serviceGif2 from "../../assets/rocket.gif";
import serviceGif3 from "../../assets/database.gif";
import serviceGif4 from "../../assets/24-hours.gif"; 
import UserHomeNavbar from './UserHomeNavbar';
import FooterComp from '../../components/FooterComp';
import ServiceCard from '../../components/ServiceCard';
import ServiceCardWithGif from '../../components/ServiceCardWithGif';

const observeElement = (element) => {
  const observer = new IntersectionObserver(
    (entries) => handleIntersection(entries, observer),
    { threshold: 0.1 }
  );
  observer.observe(element);
};

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-4');
      entry.target.classList.add('animate-slide-up');
      observer.unobserve(entry.target);
    }
  });
};

const setupObservers = () => {
  const elements = document.querySelectorAll('.animate-slide-up');
  elements.forEach((element) => {
    element.classList.add('opacity-0', 'translate-y-4');
    observeElement(element);
  });
};

const ServicePage = () => {
  useEffect(() => {
    setupObservers();
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#1a202c' }}>
      <UserHomeNavbar />
      <div className="pt-20 flex-grow">
        <div className="text-center my-8 animate-slide-up">
          <h2 className="text-3xl text-white font-bold">Our Services</h2>
          <p className="text-xl text-gray-600 mt-2">What We Offer</p>
        </div>

        {/* Programs Section */}
        <div className="my-12 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard imgSrc={A1} altText="Connection Issues" title="Connection Issues" />
            <ServiceCard imgSrc={A2} altText="Internet Problems" title="Internet Problems" />
            <ServiceCard imgSrc={A3} altText="Emergency Breakdowns" title="Emergency Breakdowns" />
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
            <ServiceCardWithGif imgSrc={serviceGif1} altText="Telecommunication Services" title="Telecommunication Services" description="All 4 million Connections" />
            <ServiceCardWithGif imgSrc={serviceGif2} altText="Fast Response" title="Fast Response" description="Repairs and Breakdowns" />
            <ServiceCardWithGif imgSrc={serviceGif3} altText="Secure Database" title="Secure Database" description="100% Secure Client Information" />
            <ServiceCardWithGif imgSrc={serviceGif4} altText="24/7 Support" title="24/7 Support" description="Get Quick Support" />
          </div>
        </section>
      </div>
      <FooterComp />
    </div>
  );
};

export default ServicePage;
