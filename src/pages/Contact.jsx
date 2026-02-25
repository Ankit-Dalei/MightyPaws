import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-hero">
        <div className="container">
          <h1 className="reveal">Get In <span>Touch</span></h1>
        </div>
      </header>

      <section className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item reveal">
              <div className="icon-box">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h3>Visit Us</h3>
                <p><strong>Mighty Paws Cafe & Bakery</strong><br />Junnasandra, 533, 2nd Main Rd, KPC Layout, Kasavanahalli, Bengaluru, Karnataka 560035, India</p>
              </div>
            </div>

            <div className="info-item reveal">
              <div className="icon-box">
                <Phone size={24} />
              </div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>+91 8050304455</p>
              </div>
            </div>

            <div className="info-item reveal">
              <div className="icon-box">
                <Mail size={24} />
              </div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>hello@mightypaws.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-card reveal">
            <form className="contact-form">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
              <div className="form-group full">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group full">
                <label>How can we help?</label>
                <textarea rows="5" placeholder="Tell us more about your request..."></textarea>
              </div>
              <div className="form-group full">
                <button type="submit" className="btn-primary btn-submit">
                  Send Message <Send size={18} style={{ marginLeft: '10px' }} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Integrated Google Map */}
      <section className="map-section reveal" style={{ marginTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <iframe 
          title="Google Map"
          src="https://maps.google.com/maps?q=Mighty%20Paws%20Cafe%20%26%20Bakery,%20Junnasandra,%20533,%202nd%20Main%20Rd,%20KPC%20Layout,%20Kasavanahalli,%20Bengaluru,%20Karnataka%20560035,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="500" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%) grayscale(20%)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
