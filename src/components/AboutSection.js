// src/components/AboutSection.js

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="mb-5 mt-4">
      <h2 className="mb-5 text-center text-color">About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Our hospital has been serving the community for over 20 years. We take pride in providing high-quality healthcare services to our patients.
      </p>
      <p>
        Awards:
        <ul>
          <li>Hospital of the Year 2020</li>
          <li>Excellence in Patient Care 2021</li>
        </ul>
      </p>
      <p>
        We are proud to be recognized as the best hospital in Kumasi. Our commitment to excellence and dedication to patient satisfaction set us apart.
      </p>
      <p>
        Established in: 1998
      </p>
    </section>
  );
};

export default AboutSection;
