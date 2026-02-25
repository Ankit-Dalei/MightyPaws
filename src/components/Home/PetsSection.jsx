import React from 'react';
import './PetsSection.css';
import homeData from '../../data/homeData.json';

const PetsSection = () => {
  const { petsSection } = homeData;

  return (
    <section className="pets-section">
      <div className="container">
        <div className="pets-grid">
          <div className="pets-content reveal">
            <h2 className="pets-title" dangerouslySetInnerHTML={{ __html: petsSection.title }}></h2>
            <p className="pets-description">{petsSection.description}</p>
            <div className="pet-badges">
              <span className="badge">Pet Friendly</span>
              <span className="badge">Outdoor Seating</span>
              <span className="badge">Treats Available</span>
            </div>
          </div>
          <div className="pets-gallery">
            <div className="pet-image-stack stack-left reveal">
              <img src={petsSection.images[0]} alt="Pet at Cafe" />
            </div>
            <div className="pet-image-stack stack-right reveal">
              <img src={petsSection.images[1]} alt="Pet at Cafe" />
            </div>
            <div className="pet-image-main reveal">
              <img src={petsSection.images[2]} alt="Happy Pet" />
            </div>
            <div className="pet-image-accent reveal">
              <img src={petsSection.images[3]} alt="Dog enjoying" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetsSection;
