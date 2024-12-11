import React from "react";
import UserLoginHomeNavbar from "./UserLoginHomeNavbar";
import { LoginIncidentSection } from "./LoginIncidentSection";
import { LoginContactUsSection } from "./LoginContactUsSection";
import { HeroComp } from "../../components/HeroComp";
import  FooterComp  from "../../components/FooterComp";
import { ServiceComp } from "../../components/ServiceComp";
import { AboutUsComp } from "../../components/AboutUsComp";

export const UserLoginHome = () => {
  return (
    <div style={{ backgroundColor: "#1a202c", color: "white", minHeight: "100vh" }}>
      <UserLoginHomeNavbar />
      <HeroComp />
      <ServiceComp/>
      <LoginIncidentSection />
      <AboutUsComp />
      <LoginContactUsSection />
      <FooterComp/>
    </div>
  );
};
