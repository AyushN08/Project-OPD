import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:support@novena.com">support@novena.com</a></p>
        <p>Address: Ta-134/A, New York, USA</p>
        <p>Call Now: <a href="tel:+1823456513456">823-4565-13456</a></p>
      </section>
    </div>
  );
};

export default Contact;
