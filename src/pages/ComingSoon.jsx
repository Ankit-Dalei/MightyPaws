import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import './ComingSoon.css';

const ComingSoon = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getPageContext = () => {
    if (location.pathname.includes('/login')) return 'Login / Register';
    if (location.pathname.includes('/policy')) return 'Policy Updates';
    if (location.pathname.includes('/sharing')) return 'Party Sharing';
    if (location.pathname.includes('/rights')) return 'Our Rights';
    if (location.pathname.includes('/data')) return 'Data Protection';
    return 'This Page';
  };

  return (
    <div className="coming-soon-wrapper">
      <div className="coming-soon-popup reveal">
        <div className="popup-icon">
          <Clock size={48} strokeWidth={1.5} />
        </div>
        
        <div className="popup-content">
          <h1>Coming Soon</h1>
          <h2>{getPageContext()}</h2>
          <p>
            We are working hard to bring you an incredible experience. 
            This feature will be available shortly!
          </p>
        </div>

        <button 
          className="btn-primary go-back-btn" 
          onClick={() => {
            if (window.history.length > 2) {
               navigate(-1);
            } else {
               navigate('/');
            }
          }}
        >
          <ArrowLeft size={18} />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
