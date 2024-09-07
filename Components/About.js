import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  // Additional content for the About section
  const additionalContent = [
    {
      title: 'Our Vision',
      description: 'To be the leading platform that connects patients and healthcare providers effortlessly, making healthcare more accessible and efficient.',
    },
    {
      title: 'Our Mission',
      description: 'To empower individuals with easy access to healthcare services, innovative solutions, and comprehensive information at their fingertips.',
    },
    {
      title: 'Our Values',
      description: 'We prioritize patient experience, technological innovation, and a commitment to improving healthcare for all.',
    },
  ];

  // History events
  const historyEvents = [
    {
      year: '2020',
      description: 'Medisync was founded with a vision to integrate technology into healthcare.',
    },
    {
      year: '2021',
      description: 'Launched our first app to streamline OPD appointments and bed availability.',
    },
    {
      year: '2022',
      description: 'Expanded services to include real-time location updates for hospital facilities.',
    },
    {
      year: '2023',
      description: 'Reached 1 million users and partnered with major healthcare providers.',
    },
  ];

  // Animation variants for smooth transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: 'easeOut',
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="intro">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="intro-content"
        >
          <h1>About Medisync</h1>
          <p>
            At Medisync, we bridge the gap between patients and healthcare providers, offering a seamless and efficient way to manage healthcare needs. 
          </p>
        </motion.div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="core-values">
        <motion.div
          className="values-container"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          {additionalContent.map((content, index) => (
            <motion.div className="value-card" key={index} variants={itemVariants}>
              <h3>{content.title}</h3>
              <p>{content.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="team">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Meet Our Team
        </motion.h2>
        <motion.div
          className="team-cards"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <motion.div className="team-card" variants={itemVariants}>
            <h3>Dr. John Doe</h3>
            <p>Founder & CEO</p>
          </motion.div>
          <motion.div className="team-card" variants={itemVariants}>
            <h3>Jane Smith</h3>
            <p>COO</p>
          </motion.div>
        </motion.div>
      </section>

      {/* History Section with Improved Timeline */}
      <section className="history">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Our History
        </motion.h2>
        <motion.div
          className="timeline"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          {historyEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="event-content">
                <h3>{event.year}</h3>
                <p>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
