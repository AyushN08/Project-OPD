import React from 'react';
import './Department.css';

const Department = () => {
  return (
    <div className="department">
      <h1>Our Departments</h1>
      <section className="department-item">
        <h2>Cardiology</h2>
        <p>Expert care for heart-related conditions.</p>
      </section>
      <section className="department-item">
        <h2>Neurology</h2>
        <p>Comprehensive services for neurological disorders.</p>
      </section>
      <section className="department-item">
        <h2>Orthopedics</h2>
        <p>Specialized care for bone and joint issues.</p>
      </section>
    </div>
  );
};

export default Department;
