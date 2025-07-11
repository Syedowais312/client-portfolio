import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

import React from 'react';


export default function Contact() {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>
            Get In Touch
          </h2>
          <div className="contact-content fade-in">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>📱 Phone: +91 98765 43210</p>
              <p>📧 Email: mehandi@gmail.com</p>
              <p>📍 Location: Bangalore, Karnataka</p>
              <p>🕐 Available: 9 AM - 8 PM (All days)</p>

               <h3 className="follow-heading">Follow Me</h3>
              <div className="social-links fancy-social">
                <a href="#" aria-label="Instagram" className="social-icon instagram"><FaInstagram /></a>
                <a href="#" aria-label="Facebook" className="social-icon facebook"><FaFacebookF /></a>
                <a href="#" aria-label="WhatsApp" className="social-icon whatsapp"><FaWhatsapp /></a>
              </div>

            </div>

            <div className="contact-form">
              <h3>Book Your Session</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Type</label>
                  <input type="text" id="service" name="service" placeholder="e.g., Bridal Mehandi, Party Mehandi" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Tell me about your requirements..." />
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Asra Mehandi. All rights reserved. | Crafted with ❤ for beautiful celebrations</p>
        </div>
      </footer>
    </div>
  );
}
