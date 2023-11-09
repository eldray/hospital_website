
import React from 'react';

import ace from './images/companies/ace.png';
import mhis from  './images/companies/Nationwide-Mutual-Healthcare-Jobs-in-Ghana.jpg';
import enter from './images/companies/enter.png';
import cosmos from './images/companies/cosmos.png';
import glico from './images/companies/glico.jpg';
import plg from './images/companies/plg.png';
import nhis from './images/companies/National-Health-Insurance-Authority.jpg';
import apex2 from './images/companies/apex_health_insurance_logo.jpg';

const insurancePartners = [
  apex2,ace,nhis,mhis,cosmos,glico,enter,plg
];

const InsurancePartnersSection = () => {
  return (
    <section className="insurance-partners-section text-center py-5">
      <div className="container">
        <h2 className="text-color">Insurance Partners</h2>
        <div className="row">
          {insurancePartners.map((provider, index) => (
            <div key={index} className="col-md-3 mb-4">
              <img src={provider} alt={`Insurance Provider ${index + 1}`} 
              className="img-fluid"
              style={{ width: '150px', height: '100px' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurancePartnersSection;
