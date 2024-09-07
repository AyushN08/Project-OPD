import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="card p-4">
                <div className="section-title text-center">
                  <h2 className="text-md mb-2">Contact Us</h2>
                  <div className="divider mx-auto my-4"></div>
                  <p className="mb-5">
                    We would love to hear from you! Please fill out the form below to get in touch with us.
                  </p>
                </div>
                <form id="contact-form" className="contact__form" method="post" action="mail.php">
                  <div className="alert alert-success contact__msg" style={{ display: 'none' }} role="alert">
                    Your message was sent successfully.
                  </div>
                  <div className="form-group">
                    <input name="name" id="name" type="text" className="form-control" placeholder="Your Full Name" required />
                  </div>
                  <div className="form-group">
                    <input name="email" id="email" type="email" className="form-control" placeholder="Your Email Address" required />
                  </div>
                  <div className="form-group">
                    <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Query Topic" required />
                  </div>
                  <div className="form-group">
                    <input name="phone" id="phone" type="text" className="form-control" placeholder="Your Phone Number" required />
                  </div>
                  <div className="form-group">
                    <textarea name="message" id="message" className="form-control" rows="8" placeholder="Your Message" required></textarea>
                  </div>
                  <div className="text-center">
                    <input className="btn btn-main btn-round-full" name="submit" type="submit" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-card card">
                <div className="card-body">
                  <i className="icofont-email"></i>
                  <h5>Email Us</h5>
                  <p><a href="mailto:medisync@gmail.com">medisync@gmail.com</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-card card">
                <div className="card-body">
                  <i className="icofont-location-pin"></i>
                  <h5>Location</h5>
                  <p>
                    Tata Hospital, Mumbai, India
                    <br />
                    <a href="https://www.google.com/maps/place/Tata+Memorial+Hospital/@19.0895564,72.8353773,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cfb6f62b7c1f:0x41f7e3e0a826570!8m2!3d19.0895564!4d72.837566!16s%2Fg%2F11b7btmty6" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-card card">
                <div className="card-body">
                  <i className="icofont-phone"></i>
                  <h5>Call Us</h5>
                  <p><a href="tel:+912224177000">+91-22-24177000</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
