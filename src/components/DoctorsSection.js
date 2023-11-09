import React from 'react';

import femdocImage from './images/user/femdoc.png';
import doc1Image from './images/user/doc1.png';
import doc2Image from './images/user/doc2.webp';
import doc4Image from './images/user/doc3.webp';
import doc3Image from './images/user/doc4.webp';
import doc5Image from './images/user/doc5.webp';

{/*
Medical Doctors:

Responsibilities:
Diagnosing and treating medical conditions.
Performing surgeries and medical procedures.
Providing medical advice and consultations.
Overseeing patient care and treatment plans.

Nurses:

Responsibilities:
Administering medications and treatments.
Monitoring patients' vital signs and conditions.
Assisting doctors during procedures.
Providing emotional support and education to patients and families.
:

Responsibilities:
Performing surgical procedures.
Preparing patients for surgery and providing post-operative care.
Collaborating with other medical professionals for comprehensive patient care.
Pharmacists:

Responsibilities:
Dispensing medications and providing dosage instructions.
Ensuring drug interactions and allergies are considered.
Advising healthcare professionals on medication choices.

 */}

const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Medical Doctor',
    bio: 'Lorem ipsum dolor sit amet...',
    duties: 'Diagnosing and treating medical conditions.Performing surgeries and medical procedures.Providing medical advice and consultations.Overseeing patient care and treatment plans.',
    image: femdocImage,
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialist: 'Orthopedic Surgeon',
    bio: 'Ut enim ad minim veniam...',
    duties: 'Specislises in all bone problems. Diagnosing and treating medical conditions.Performing surgeries and medical procedures.Providing medical advice and consultations.Overseeing patient care and treatment plans.',
    image: doc1Image,
  },
  {
  id: 3,
  name: 'Dr. Hamad Chopra',
  specialist: 'Surgeon',
  bio: 'Lorem ipsum dolor sit amet...',
  duties: 'Performing surgical procedures.Preparing patients for surgery and providing post-operative care.Collaborating with other medical professionals for comprehensive patient care.',
  image: doc3Image,
  },
  {
  id: 4,
  name: 'Dr. Jane Smith',
  specialist: 'Paediatric Doctor',
  bio: 'Ut enim ad minim veniam...',
  duties: 'Specialises in children healthcare. Diagnosing and treating medical conditions.Performing surgeries and medical procedures.Providing medical advice and consultations.Overseeing patient care and treatment plans.',
  image: doc4Image,
},
{
  id: 5,
  name: 'Dr. John Doe',
  specialist: 'Cardiologist',
  bio: 'Lorem ipsum dolor sit amet...',
  image: doc5Image,
  duties: 'Specialises in all heart related problems Diagnosing and treating medical conditions.Performing surgeries and medical procedures.Providing medical advice and consultations.Overseeing patient care and treatment plans.',
  },
  {
  id: 6,
  name: 'Dr. Jane Smith',
  specialist: 'Orthopedic Surgeon',
  bio: 'Ut enim ad minim veniam...',
  image: doc2Image,
  duties: '',
},
];

const DoctorsSection = () => {
  return (
    <section className="doctors-section text-center">
      <div className="container">
        <h2>Our Doctors</h2>
        <div className="row">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={doctor.image}
                  className="card-img-top"
                  alt={doctor.name}
                  style={{ width: '100%', height: '300px' }} 
                />
                <div className="card-body">
                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text">{doctor.specialist}</p>
                  <p className="card-text">{doctor.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
            <a href="/doctorappointment" className="btn btn-primary mt-6">Book a Doctor</a>
        </div>
      </div>
      <div className="">
        <a href="/nurses" className="btn btn-primary mt-6">Nurses</a>
        </div>
    </section>
  );
};

export default DoctorsSection;
