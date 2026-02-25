import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import './Navbar.css';

import navigation from '../../data/navigation.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img src="/logo.png" alt="Mighty Paws Cafe & Bakery Logo" style={{ height: '45px', width: 'auto' }} />
          <span style={{ fontSize: '1.2rem', fontWeight: '800' }}>Mighty Paws Cafe & Bakery</span>
        </Link>

        <div className="desktop-menu">
          {navigation.mainNav.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* <div className="nav-actions">
          <button className="cart-btn">
            <ShoppingBag size={20} />
            <span className="cart-count">0</span>
          </button>
          <Link to="/login" className="login-btn">Sign In / Register</Link>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div> */}
        <div className="nav-actions">
          <Link to="/login" className="login-btn">Sign In / Register</Link>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        <div className="mobile-links">
          {navigation.mainNav.map((link) => (
            <Link key={link.name} to={link.path}>{link.name}</Link>
          ))}
          <Link to="/login" className="mobile-login">Sign In / Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
