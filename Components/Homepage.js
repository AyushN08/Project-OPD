import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import BedAvailability from './BedAvailability';
import MapComponent from './MapComponent'; // Import the updated MapComponent
import './Homepage.css';

const Homepage = () => {
    const [showBedAvailability, setShowBedAvailability] = useState(false);
    const [startCounting, setStartCounting] = useState(false);
    const navigate = useNavigate();
    const ctaRef = useRef(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate('/bedavail');
    };

    const handleCheckNowClick = () => {
        setShowBedAvailability(true);
    };

    const handleScroll = () => {
        if (ctaRef.current) {
            const sectionTop = ctaRef.current.getBoundingClientRect().top;
            const screenBottom = window.innerHeight;
            if (sectionTop < screenBottom) {
                setStartCounting(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Your Health, Our Priority</h1>
                        <p>We provide top-notch healthcare services with a focus on personalized care and attention. From emergency services to routine check-ups, we are here for you around the clock.</p>
                        <div className="hero-buttons">
                            <button onClick={handleCheckNowClick} className="btn btn-main btn-round-full">Our Locations</button>
                            <a href="http://localhost:5000" className="btn btn-secondary btn-round-full">Book an Appointment</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="container">
                    <div className="feature-block">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="icofont-surgeon-alt"></i>
                            </div>
                            <h4><i className="icofont-clock-time"></i> 24 Hours Service</h4>
                            <p>Get all-time support for emergencies. We have introduced the principle of family medicine.</p>
                            <a href="http://localhost:5000" className="btn btn-main btn-round-full">Make an Appointment</a>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="icofont-ui-clock"></i>
                            </div>
                            <h4><i className="icofont-calendar"></i> Timing Schedule</h4>
                            <ul className="w-hours list-unstyled">
                                <li className="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
                                <li className="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
                                <li className="d-flex justify-content-between">Sat - Sun : <span>10:00 - 17:00</span></li>
                            </ul>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="icofont-support"></i>
                            </div>
                            <h4><i className="icofont-phone"></i> Emergency Cases</h4>
                            <p>Get all-time support for emergencies. We have introduced the principle of family medicine. Get connected with us for any urgency.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section" ref={ctaRef}>
                <div className="container">
                    <div className="cta">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-doctor"></i>
                                    <span className="h3">
                                        {startCounting && (
                                            <CountUp start={0} end={58} duration={2} separator="," />
                                        )}
                                        k
                                    </span>
                                    <p>Happy People</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-flag"></i>
                                    <span className="h3">
                                        {startCounting && (
                                            <CountUp start={0} end={700} duration={2} separator="," />
                                        )}
                                    </span>
                                    <p>Surgery Completed</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-badge"></i>
                                    <span className="h3">
                                        {startCounting && (
                                            <CountUp start={0} end={40} duration={2} separator="," />
                                        )}
                                    </span>
                                    <p>Expert Doctors</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-globe"></i>
                                    <span className="h3">
                                        {startCounting && (
                                            <CountUp start={0} end={20} duration={2} separator="," />
                                        )}
                                    </span>
                                    <p>Worldwide Branch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bed Availability Section */}
            <section className="bed-availability enhanced">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="bed-availability-content">
                                <h2 className="section-title">Check Bed Availability</h2>
                                <p className="section-description">Get real-time updates on bed availability at our hospitals. Find out where you can get the care you need without delay.</p>
                                <button onClick={handleCheckNowClick} className="btn btn-main btn-round-full">Check Now</button>
                                {showBedAvailability && <BedAvailability />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <h2 className="section-title">Our Locations</h2>
                    <MapComponent />
                </div>
            </section>

            {/* Appointment Form Section */}
            <section className="appointment-form">
                <div className="container">
                    <h2 className="appointment-form-title">Book an Appointment</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-main btn-round-full">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
