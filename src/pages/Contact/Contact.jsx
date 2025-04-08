import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>

      <div className="contact-form-section">
        <div className="contact-image">
          <img src="/contact-student.jpg" alt="Student" />
        </div>
        <div className="contact-form">
          <h3>Leave Us A Message</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Name*" />
              <input type="email" placeholder="Email*" />
            </div>
            <input type="text" placeholder="Subject*" />
            <textarea placeholder="Write Your Message*" rows="4"></textarea>
            <button type="submit">Submit Now</button>
          </form>
        </div>
      </div>

      <div className="contact-info-section">
        <div className="info-box">
          <h4>📞 Phone</h4>
          <p>+91 93423 67896</p>
        </div>
        <div className="info-box">
          <h4>📧 Email</h4>
          <p>example@university.com</p>
        </div>
        <div className="info-box">
          <h4>📍 Address</h4>
          <p>24/A Mount View, London, UK 234567</p>
        </div>
        <div className="map-box">
          <iframe
            src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
