import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DoctorAppointmentFormSection from './components/DoctorAppointmentFormSection';
import DoctorsSection from './components/DoctorsSection';
import NursesSection from './components/NursesSection';
import SearchResults from './components/SearchResults';

import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/doctorappointment" element={<DoctorAppointmentFormSection />} />
          <Route path="/Doctors" element={<DoctorsSection />} />
          <Route path="/Nurses" element={<NursesSection />} />
          <Route path="/SearchResults" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
