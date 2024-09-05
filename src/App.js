import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; // Import the Footer component
import Homepage from './Components/Homepage';
import About from './Components/About';
import Services from './Components/Services';
import Department from './Components/Department';
import Doctors from './Components/Doctors';
import Blog from './Components/Blog';
import Contact from './Components/Contact';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/department" element={<Department />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Place Footer component here */}
      </div>
    </Router>

  );
}

export default App;
