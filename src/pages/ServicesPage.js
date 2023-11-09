import React from 'react';
import cardio from '../components/images/services/cardio.jpg';
import ent from '../components/images/services/ent-logo.jpg';
import paedia from '../components/images/services/paediatrics.webp';
import mater from '../components/images/services/maternity.jpg';
import ortho from '../components/images/services/orthopedic.png';
import neurol from '../components/images/services/neurology.png'
import cancer from '../components/images/services/women-breast-cancer-logo-.webp';
import ambulance from '../components/images/services/ambulance.jpg'
import emergency from '../components/images/services/emergency.jpg'


const services = [
  {
    id: 1,
    title: "Emergency Services",
    info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: emergency, 
    },
    {
      id: 2,
      title: "Ambulance Service",
      info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: ambulance, 
    },
    {
      id: 3,
      title: "Maternity",
      info: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: mater, 
      },
  {
    id: 4,
    title: 'Cardiology',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia quam in libero feugiat, et laoreet urna finibus.',
    doctor: 'Dr. John Doe',
    image: cardio
  },
  {
    id: 5,
    title: 'Orthopedics',
    info: 'Nulla auctor risus vel purus malesuada, at malesuada mi tincidunt. Nulla consectetur tortor a ex consectetur, ut tristique leo volutpat.',
    doctor: 'Dr. Jane Smith',
    image: ortho
  },
  // Add more services as needed
  {
  id: 6,
  title: "E-N-T",
  info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: ent, 
  },
  {
  id: 7,
  title: "Pediatrics",
  info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: paedia, 
  },
  {
  id: 8,
  title: "Gynecology",
  info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: cancer, 
  },
  {
  id: 9,
  title: "Neurology",
  info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  image: neurol, 
  }
];

const ServicesPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Services</h1>

      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="card card-serv">
              <img src={service.image} className="card-img-top" alt={service.title} 
              style={{ width: '100%', height: '300px' }} />
              <div className="card-body ">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.info}</p>
                <p className="card-text">Doctor in charge: {service.doctor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
