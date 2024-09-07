import React, { useState } from 'react';
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
            <a href="/">
              <img src="./4.png" alt="Medisync Logo" />
            </a>
          </div>
          <nav className="nav-links">
            <a href="/" onClick={closeSidebar}><i className="fas fa-home"></i> Home</a>
            <a href="/about" onClick={closeSidebar}><i className="fas fa-user"></i> About</a>
            <a href="/services" onClick={closeSidebar}><i className="fas fa-concierge-bell"></i> Services</a>
            <a href="/department" onClick={closeSidebar}><i className="fas fa-building"></i> Department</a>
            <a href="/contact" onClick={closeSidebar}><i className="fas fa-envelope"></i> Contact</a>
          </nav>
          <button className="menu-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <div className="auth-links">
            {/* Redirect to Flask routes for login and signup */}
            <a href="http://localhost:5000/login" target="_blank" rel="noopener noreferrer"><i className="fas fa-sign-in-alt"></i> Login</a>
            <a href="http://localhost:5000/login" target="_blank" rel="noopener noreferrer"><i className="fas fa-user-plus"></i> Sign Up</a>
          </div>
        </div>
        <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={closeSidebar}>×</button>
          <ul>
            <li><a href="/" onClick={closeSidebar}><i className="fas fa-home"></i> Home</a></li>
            <li><a href="/about" onClick={closeSidebar}><i className="fas fa-user"></i> About</a></li>
            <li><a href="/services" onClick={closeSidebar}><i className="fas fa-concierge-bell"></i> Services</a></li>
            <li><a href="/department" onClick={closeSidebar}><i className="fas fa-building"></i> Department</a></li>
            <li><a href="/contact" onClick={closeSidebar}><i className="fas fa-envelope"></i> Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
