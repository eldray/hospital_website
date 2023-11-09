
import React from 'react';

import femdocImage from './images/user/nurse1.jpg';
import doc1Image from './images/user/staff1.webp';
import doc2Image from './images/user/staff2.jpg';
import doc4Image from './images/user/staff3.jpg';
import doc3Image from './images/user/staff4.jpg';
import doc5Image from './images/user/female-nurse.JPG';


const nurses = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialist: 'Midwife',
    bio: 'Lorem ipsum dolor sit amet...',
    image: femdocImage,
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialist: 'General Nurse',
    bio: 'Ut enim ad minim veniam...',
    duties: 'Administering medications and treatments.Monitoring patients vital signs and conditions.Assisting doctors during procedures.Providing emotional support and education to patients and families.',
    image: doc1Image,
  },
  {
  id: 3,
  name: 'Dr. John Doe',
  specialist: 'Paediatric Nurse',
  bio: 'Lorem ipsum dolor sit amet...',
  duties: 'Administering medications and treatments.Monitoring patients vital signs and conditions.Assisting doctors during procedures.Providing emotional support and education to patients and families.',
  image: doc3Image,
  },
  {
  id: 4,
  name: 'Dr. Jane Smith',
  specialist: 'Psychiatric Nurse',
  bio: 'Ut enim ad minim veniam...',
  duties: 'Administering medications and treatments.Monitoring patients vital signs and conditions.Assisting doctors during procedures.Providing emotional support and education to patients and families.',
  image: doc4Image,
},
{
  id: 5,
  name: 'Dr. John Doe',
  specialist: 'Midwife',
  bio: 'Lorem ipsum dolor sit amet...',
  duties: 'Administering medications and treatments.Monitoring patients vital signs and conditions.Assisting doctors during procedures.Providing emotional support and education to patients and families.',
  image: doc5Image,
  },
  {
  id: 6,
  name: 'Dr. Jane Smith',
  specialist: 'General Nurse',
  bio: 'Ut enim ad minim veniam...',
  duties: 'Administering medications and treatments.Monitoring patients vital signs and conditions.Assisting doctors during procedures.Providing emotional support and education to patients and families.',
  image: doc2Image,
},
];

const NursesSection = () => {
  return (
    <section className="nurses-section text-center">
      <div className="container">
        <h2>Our Nurses</h2>
        <div className="row">
          {nurses.map((nurse) => (
            <div key={nurse.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={nurse.image}
                  className="card-img-top"
                  alt={nurse.name}
                  style={{ width: '100%', height: '300px' }} 
                />
                <div className="card-body">
                  <h5 className="card-title">{nurse.name}</h5>
                  <p className="card-text">{nurse.specialist}</p>
                  <p className="card-text">{nurse.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NursesSection;
