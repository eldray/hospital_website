import React, { useState } from 'react';
import axios from 'axios';

const DoctorAppointmentFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    email: '',
    number: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/appointment', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="appointment" className="container mb-5 p-5 w-50 glass-effect">
      <h2 className="mb-5 text-center text-color">Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Appointment</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
  <label htmlFor="number">Phone Number</label>
  <input
    type="number"
    className="form-control"
    id="number"
    name="number"
    value={formData.number} 
    onChange={handleChange}
    required
  />
</div>
        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Information</label>
          <textarea
            className="form-control"
            id="additionalInfo"
            name="additionalInfo"
            rows="4"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="mt-2 btn btn-success">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default DoctorAppointmentFormSection;
