import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="intro">
        <h1>About Medisync</h1>
        <p>Our mission is to provide a seamless and efficient healthcare experience through technology.</p>
      </section>
      <section className="team">
        <h2>Meet Our Team</h2>
        <p>Our team is dedicated to improving healthcare accessibility and quality.</p>
        <div className="team-member">
          <h3>Dr. John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>COO</p>
        </div>
      </section>
      <section className="history">
        <h2>Our History</h2>
        <p>Medisync was founded in 2020 with the vision of integrating technology into healthcare.</p>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:support@novena.com">support@novena.com</a></p>
        <p>Address: Ta-134/A, New York, USA</p>
        <p>Call Now: <a href="tel:+1823456513456">823-4565-13456</a></p>
      </section>
    </div>
  );
};

export default About;
