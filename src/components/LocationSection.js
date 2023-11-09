// src/components/LocationSection.js

import React from 'react';

const LocationSection = () => {
  return (
    <section className="location-section text-center">
      <div className="m-5">
        <h2 className="text-color">Our Location</h2>
        <div className="map-container">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.0673025628477!2d<LONGITUDE>!3d<LATITUDE>!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzQ1LjYiTiA0OMKwMDInMDcuOSJF!5e0!3m2!1sen!2sus!4v1635911276793!5m2!1sen!2sus"
            frameBorder="0"
            style={{ border: 0, width: '100%', height: '400px' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
