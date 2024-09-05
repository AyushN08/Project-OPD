import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="terms">Terms & Conditions</p>
          <p className="copyright">&copy; {new Date().getFullYear()} Medisync. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div className="contact-info">
            <p>Email: <a href="mailto:support@novena.com">support@medisync.com</a></p>
            <p>Address: 1234-8789, Mumbai, India</p>
            <p>Call Now: <a href="tel:+1823456513456">823-4565-13456</a></p>
          </div>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
