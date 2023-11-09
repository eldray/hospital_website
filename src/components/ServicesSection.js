import React from 'react';

import cardio from '../components/images/services/cardio.jpg';
import ent from '../components/images/services/ent-logo.jpg';
import paedia from '../components/images/services/paediatrics.webp';
import mater from '../components/images/services/maternity.jpg';
import ortho from '../components/images/services/orthopedic.png';
import neurol from '../components/images/services/neurology.png';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Cardiology',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia quam in libero feugiat, et laoreet urna finibus.',
      doctor: 'Dr. John Doe',
      image: cardio
    },
    {
      id: 2,
      title: 'Orthopedics',
      info: 'Nulla auctor risus vel purus malesuada, at malesuada mi tincidunt. Nulla consectetur tortor a ex consectetur, ut tristique leo volutpat.',
      doctor: 'Dr. Jane Smith',
      image: ortho
    },
    {
      id: 3,
      title: "E-N-T",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: ent, 
    },
    {
      id: 4,
      title: "Maternity",
      info: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: mater, 
    },
    {
      id: 5,
      title: "Neurology",
      info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: neurol,  
    },
    {
      id: 6,
      title: "Pediatrics",
      info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: paedia, 
    },
  ];

  return (
    <section id="services" className="mb-5 text-center">
      <h2 className="text-color">Services Provided</h2>
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={service.image} className="card-img-top" alt={service.title} 
              style={{ width: '100%', height: '300px' }} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
