import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import './Footer.css';

import navigation from '../../data/navigation.json';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.5rem', marginBottom: '1rem' }}>
              <img src="/logo.png" alt="Mighty Paws Cafe & Bakery Logo" style={{ height: '50px', width: 'auto' }} />
              <span>Mighty Paws Cafe & Bakery</span>
            </h2>
            <p>Experience the finest blend of modern flavors and historical charm. Every bite tells a story.</p>
            <div className="social-links">
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Mail size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              {navigation.footerQuickLinks.map((link) => (
                <li key={link.name}><a href={link.path}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Policies</h3>
            <ul>
              {navigation.footerPolicies.map((link) => (
                <li key={link.name}><a href={link.path}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Visit Us</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              <strong>Mighty Paws Cafe & Bakery</strong><br />
              Junnasandra, 533, 2nd Main Rd,<br />
              KPC Layout, Kasavanahalli,<br />
              Bengaluru, KA 560035
            </p>
            <p style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem' }}>+91 8050304455</p>
          </div>

          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe for special offers & updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn-primary">Join Now</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Mighty Paws Cafe & Bakery. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
