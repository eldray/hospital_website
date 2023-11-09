import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactFormSection from '../components/ContactFormSection';
import UserStoriesSection from '../components/UserStoriesSection';
import DoctorAppointmentFormSection from '../components/DoctorAppointmentFormSection';
import LocationSection from '../components/LocationSection';
import InsurancePartnersSection from '../components/InsurancePartnersSection';
import ScrollingText from '../components/ScrollingText'; 


const LandingPage = () => {
  return (
    <div className="px-3 mt-0">
      <ScrollingText />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <UserStoriesSection />
      <div className='background p-1'>
      <DoctorAppointmentFormSection />
      </div>
      <LocationSection />
      <div className='background p-1'>
      <ContactFormSection />
      </div>
      
      <InsurancePartnersSection />
    </div>
  );
};

export default LandingPage;
