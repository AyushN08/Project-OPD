import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <section className="service-item">
        <h2>OPD Appointments</h2>
        <p>Book your outpatient appointments online with ease and convenience.</p>
      </section>
      <section className="service-item">
        <h2>Real-Time Location Updates</h2>
        <p>Stay updated with real-time location tracking for your appointments and services.</p>
      </section>
      <section className="service-item">
        <h2>Bed Booking</h2>
        <p>Reserve beds at your preferred healthcare facilities effortlessly.</p>
      </section>
    </div>
  );
};

export default Services;
