import React from 'react';
import ContactFormSection from '../components/ContactFormSection';
import DoctorAppointmentFormSection from '../components/DoctorAppointmentFormSection';
import LocationSection from '../components/LocationSection';
import InsurancePartnersSection from '../components/InsurancePartnersSection';
import ScrollingText from '../components/ScrollingText'; 

import Banner from '../components/images/back-banner.jpg'

const ContactPage = () => {

  return (
    <div className="p-3">
      <ScrollingText />
      
      <section className="position-relative">
        <img src={Banner} alt="Banner" className="img-fluid" 
        style={{ width: '1500px', height: '200px' }} />
      </section>


      <section className="about-content mt-3">
        <ContactFormSection />
        <DoctorAppointmentFormSection />
        <LocationSection />
        <InsurancePartnersSection />

      </section>
    </div>
  );
};

export default ContactPage;
