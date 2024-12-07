import React from 'react';
import UserHomeNavbar from './UserHomeNavbar';
import { IncidentSection } from './IncidentSection';
import  { ContactUsSection } from './ContactUsSection';
import { HeroComp } from '../../components/HeroComp';
import  FooterComp  from '../../components/FooterComp';
import { ServiceComp } from '../../components/ServiceComp';
import { AboutUsComp } from '../../components/AboutUsComp';

export const Userhome = () => {
  const darkStyle = {
    backgroundColor: '#1a202c', 
    color: 'white', 
    minHeight: '100vh', 
  };

  return (
    <div style={darkStyle}>
      <UserHomeNavbar/>
      <HeroComp/>
      <ServiceComp/>
      <IncidentSection/>
      <AboutUsComp/>
      <ContactUsSection/>
      <FooterComp/>
    </div>
  );
};
