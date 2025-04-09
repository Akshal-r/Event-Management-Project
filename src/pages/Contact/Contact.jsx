import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-form-section">
        <div className="contact-image">
          <img src="/assets/contact.png" alt="Student" />
        </div>
        <div className="contact-form">
          <h3>Leave Us A Message</h3>
          <p>If any Queries you have! Fell free to Reach Out</p>
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
          <p>npr@cet.com</p>
        </div>
        <div className="info-box">
          <h4>📍 Address</h4>
          <p>NPR College of Engineering and Technology, Natham, Dindigul.</p>
        </div>
        <div className="map-box">
          <iframe
            src="https://www.bing.com/maps/embed?h=400&w=500&cp=10.241255~78.180127&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
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
