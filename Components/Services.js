import React from 'react';
import appointmentImg from './images/bookappointment.jpg'; 
import chatbotImg from './images/chatbot.jpg';
import notificationsImg from './images/notification.jpg';
import bedAvailabilityImg from './images/viewbed.jpg';
import './Services.css'; // External CSS

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-heading">Services</h1>
      <div className="services-grid">
        <Card
          title="Book Appointment"
          description="Enables patients to schedule a visit by selecting a time slot."
          imgSrc={appointmentImg}
        />
        <Card
          title="Chatbot"
          description="Answers frequently asked questions about hospital services, doctors, visiting hours, and procedures."
          imgSrc={chatbotImg}
        />
        <Card
          title="Get Notifications (SMS)"
          description="Sends reminders to patients about upcoming appointments."
          imgSrc={notificationsImg}
        />
        <Card
          title="View Bed Availability"
          description="Allows patients to check the current status of available beds."
          imgSrc={bedAvailabilityImg}
        />
      </div>
    </div>
  );
}

function Card({ title, description, imgSrc }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Services;