import React from 'react';
import './Doctors.css';

const Doctors = () => {
  return (
    <div className="doctors">
      <h1>Meet Our Doctors</h1>
      <section className="doctor-item">
        <h2>Dr. Alice Brown</h2>
        <p>Specialist in Internal Medicine</p>
      </section>
      <section className="doctor-item">
        <h2>Dr. Bob White</h2>
        <p>Expert in Pediatric Care</p>
      </section>
      <section className="doctor-item">
        <h2>Dr. Carol Green</h2>
        <p>Consultant Orthopedic Surgeon</p>
      </section>
    </div>
  );
};

export default Doctors;
