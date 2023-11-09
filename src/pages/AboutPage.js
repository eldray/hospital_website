import React from 'react';

import Banner from '../components/images/hosp.jpg'

import direc from '../components/images/user/direc.jpg';
import worrr from '../components/images/user/worrr.webp';
import manag from '../components/images/user/manag.jpg';
import hoorr from '../components/images/user/hoorr.jpg';

import radio from '../components/images/user/radio.jfif';
import depp from '../components/images/user/depp.jpg';
import admin_staff from '../components/images/user/admin_staff.jpg';
import nutri from '../components/images/user/nutri.jpg';

const AboutPage = () => {
  return (
    <div className="p-5">
        <section className="position-relative">
        <img src={Banner} alt="Banner" className="img-fluid"   
        style={{ width: '1500px', height: '200px' }} />
          <div className="overlay-text">
            <h2>MyHealer General Hospital</h2>
            <p>Come let us improve your health</p>
          </div>
      </section>

      <section className="about-content mt-5 p-4 bg-primary text-white">
      <div className="row">
        <div className="col-md-4">
          <div className="mission-box p-3 text-center">
            <h2>OUR MISSION</h2>
            <p>Our mission is to provide quality services to meet the needs and expectations of all clients.</p>
          </div>
        </div>

         <div className="col-md-4">
    <div className="vision-box p-3 text-center">
      <h2>OUR VISION</h2>
      <p>To become a centre of excellence in the provision of specialist healthcare services.</p>
    </div>
         </div>

          <div className="col-md-4">
    <div className="emergency-box p-3 text-center">
      <h2>24/7 EMERGENCY SERVICES</h2>
      <p>You can access our medical emergency services every day of the week.</p>
    </div>
          </div>
      </div>

          
            <h2 className="text-center mb-5">Meet Our Team</h2>

<div className="row">
  <div className="col-md-6">
    <div className="staff-member d-flex mb-4">
      <div className="ml-3">
        <h4 className="mt-3">John Dadson</h4>
        <h5>Director</h5>
        <p>Mr John provides strategic leadership and vision for the hospital, setting long-term goals and ensuring compliance with healthcare regulations. They oversee budgeting, stakeholder relations, and crisis management, while fostering quality assurance and patient safety. Additionally, Directors engage with the community and support staff development.</p>
      </div>
      <img src={direc} alt="Director" className="img-fluid" style={{ width: '50%', height: '300px' }} />
    </div>
  </div>
  <div className="col-md-6">
    <div className="staff-member d-flex mb-4">
      <div className="ml-3">
        <h4 className="mt-3">James Smith</h4>
        <h5>Manager</h5>
        <p>Mr Adams is responsible for the efficient operation of specific hospital departments, overseeing staff hiring, training, and performance evaluations. They manage budgets, implement process improvements, and ensure compliance within their respective departments. Managers also collaborate with other departments and maintain high standards of patient care.</p>
      </div>
      <img src={manag} alt="Manager" className="img-fluid" style={{ width: '100%', height: '300px' }} />
    </div>
  </div>
</div>


            <div className="row">
  <div className="col-md-4 mb-4">
    <div className="staff-member">
      <img src={admin_staff} alt="admin_staff" className="img-fluid" 
      style={{ width: '100%', height: '300px' }} />
      <h4 className="mt-3">Lovia Agyemang</h4>
      <h5>Administrative Staff</h5>
      <p>Managing appointments and scheduling.</p>
      <p>Handling patient records and billing.</p>
      <p>Coordinating administrative functions of the hospital. </p>
    </div>
  </div>
  <div className="col-md-4 mb-4">
    <div className="staff-member">
      <img src={radio} alt="Manager" className="img-fluid" style={{ width: '100%', height: '300px' }} />
      <h4 className="mt-3">Shantelle Daniels</h4>
      <h5>Radiologist</h5>
      <p>Interpreting medical images (X-rays, MRIs, CT scans, etc.).</p>
      <p>Providing diagnostic reports to referring physicians.</p>
      <p>Collaborating with other healthcare professionals.</p>
    </div>
  </div>
  <div className="col-md-4 mb-4">
    <div className="staff-member">
      <img src={hoorr} alt="Manager" className="img-fluid" style={{ width: '100%', height: '300px' }} />
      <h4 className="mt-3">Emmanuel Cofie</h4>
      <h5>Laboratory Technician</h5>
      <p>Conducting tests on patient samples to diagnose conditions.</p>
      <p>Analyzing and recording test results.</p>
      <p>Maintaining and calibrating laboratory equipment.</p>
    </div>
  </div>
  <div className="col-md-4 mb-4">
    <div className="staff-member">
      <img src={nutri} alt="Manager" className="img-fluid" style={{ width: '100%', height: '300px' }} />
      <h4 className="mt-3">Sarah Bekoe</h4>
      <h5>Nutritionist/Dietitian</h5>
      <p>Assessing and planning dietary needs for patients.</p>
      <p>Providing nutrition education and counseling.</p>
      <p>Monitoring and evaluating nutritional progress.</p>
    </div>
  </div>
  <div className="col-md-4 mb-4">
    <div className="staff-member">
      <img src={depp} alt="Manager" className="img-fluid" style={{ width: '100%', height: '300px' }} />
      <h4 className="mt-3">Bridget Adepa</h4>
      <h5>Physical Therapist</h5>
      <p>Evaluating and treating patients with physical disabilities or injuries.</p>
      <p>Monitoring progress and adjusting treatment plans.</p>
      <p>Designing and implementing rehabilitation programs.</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="staff-member">
      <img src={worrr} alt="Manager" className="img-fluid" style={{ width: '100%', height: '300px' }} />
      <h4 className="mt-3">Prince Martey</h4>
      <h5>Psychiatrist and Psychologist</h5>
      <p>Diagnosing and treating mental health disorders.</p>
      <p>Providing psychotherapy and counseling.</p>
      <p>Collaborating with other healthcare professionals for comprehensive care.</p>

    </div>
  </div>
</div>



      </section>
    </div>
  );
};

export default AboutPage;
