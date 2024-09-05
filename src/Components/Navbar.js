import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src="./2.png" alt="Medisync Logo" />
            </Link>
          </div>
          <button className="menu-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <div className="auth-links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}>×</button>
        <ul>
          <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
          <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
          <li><Link to="/services" onClick={closeSidebar}>Services</Link></li>
          <li><Link to="/department" onClick={closeSidebar}>Department</Link></li>
          <li><Link to="/doctors" onClick={closeSidebar}>Doctors</Link></li>
          <li><Link to="/blog" onClick={closeSidebar}>Blog</Link></li>
          <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
        </ul>
      </nav>
      </header>
    </>
  );
};

export default Navbar;
