import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import CountUp from 'react-countup';

const Homepage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate('/bedavail');
  };

  return (
    <div className="homepage">
      {/* Banner Section */}
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing">Total Health Care Solution</span>
                <h1 className="mb-3 mt-3">Your Most Trusted Health Partner</h1>
                <p className="mb-4 pr-5">The only place you need to check OPD updates.</p>
                <div className="btn-container">
                  <a href="appointment.html" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">
                    Make Appointment <i className="icofont-simple-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="icofont-surgeon-alt"></i>
                </div>
                <h4><i className="icofont-clock-time"></i> 24 Hours Service</h4>
                <p>Get all-time support for emergencies. We have introduced the principle of family medicine.</p>
                <a href="appointment.html" className="btn btn-main btn-round-full">Make an Appointment</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
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
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="icofont-support"></i>
                </div>
                <h4><i className="icofont-phone"></i> Emergency Cases</h4>
                <p>Get all-time support for emergencies. We have introduced the principle of family medicine. Get connected with us for any urgency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-doctor"></i>
                  <span className="h3">
                    <CountUp start={0} end={58} duration={2} separator="," />k
                  </span>
                  <p>Happy People</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-flag"></i>
                  <span className="h3">
                    <CountUp start={0} end={700} duration={2} separator="," />
                  </span>
                  <p>Surgery Completed</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-badge"></i>
                  <span className="h3">
                    <CountUp start={0} end={40} duration={2} separator="," />
                  </span>
                  <p>Expert Doctors</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-globe"></i>
                  <span className="h3">
                    <CountUp start={0} end={20} duration={2} separator="," />
                  </span>
                  <p>Worldwide Branch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Bed Availability Section */}
      <section className="bed-availability">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="block">
                <h2 className="mb-3">View Bed Availability</h2>
                <p className="mb-4">Check the availability of beds in our facilities and make informed decisions about your stay.</p>
                <form onSubmit={handleFormSubmit}>
                  <button type="submit" className="btn btn-main btn-round-full">
                    Check Availability
                    <i className="icofont-simple-right ml-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Appointment Form Section */}
      <section className="appointment-form-section">
        <div className="container">
          <h2 className="mb-2 title-color">Book Appointment</h2>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, reprehenderit.</p>
          <form>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
              <div className="col-lg-12">
                <textarea className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="btn btn-main btn-round-full">
                  Submit
                  <i className="icofont-simple-right ml-2"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
