import React from 'react';
import UserLoginHomeNavbar from './UserLoginHomeNavbar';
import  FooterComp  from '../../components/FooterComp';


export const LoginAboutUsPage = () => {
  return (
    <div style={{ backgroundColor: '#1a202c', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <UserLoginHomeNavbar/>
        
        <div className="pt-20 flex-grow">
          <div className="about-us bg-[#1a202c] py-16" id="About">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-medium text-center mb-8 text-white">
                About Us
              </h2>
              <div className="description text-lg text-gray-300 mb-8 mt-10">
                <p className="text-justify">
                Welcome to the Sri Lanka Telecom (SLT) and Mobitel Incident Management System. This platform is designed to streamline the process of identifying, tracking, and resolving service incidents and technical issues efficiently across our networks. As leaders in telecommunications, SLT and Mobitel are committed to maintaining the highest standards of service and reliability for our customers, who rely on our infrastructure for their connectivity needs.
                </p>
                <p className="text-justify">
                The Incident Management System ensures a systematic and organized approach to incident handling, allowing our support teams to respond to issues promptly and accurately. By centralizing incident data and integrating real-time updates, our teams can minimize downtime and provide seamless support, enhancing the customer experience. This system also enables proactive maintenance and rapid issue resolution, minimizing the impact of disruptions on our users.
                </p>
                <p className="text-justify">
                At SLT and Mobitel, our mission is to keep Sri Lanka connected with world-class communication services. We continually invest in innovative solutions like the Incident Management System to meet the evolving demands of modern telecommunications and maintain our commitment to excellence. Thank you for trusting SLT and Mobitel as your preferred service providers.
                </p>
              </div>

              <div className="values-ul">
                <ul className="flex flex-wrap space-x-8 justify-center md:space-x-4 lg:space-x-8">
                  <li className="font-bold text-2xl text-center mb-4 md:mb-2 lg:mb-0 w-full md:w-auto text-white">
                    Our Values
                  </li>
                  <li className="font-semibold text-xl text-blue-400 text-center mb-4 md:mb-2 lg:mb-0">
                    Customer Caring
                  </li>
                  <li className="font-semibold text-xl text-blue-400 text-center mb-4 md:mb-2 lg:mb-0">
                    Trustworthy
                  </li>
                  <li className="font-semibold text-xl text-blue-400 text-center mb-4 md:mb-2 lg:mb-0">
                    Innovative
                  </li>
                  <li className="font-semibold text-xl text-blue-400 text-center mb-4 md:mb-2 lg:mb-0">
                    Responsive
                  </li>
                  <li className="font-semibold text-xl text-blue-400 text-center mb-4 md:mb-2 lg:mb-0">
                    Teamwork
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <FooterComp />
    </div>
  );
};
