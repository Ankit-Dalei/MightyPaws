import React from 'react';
import './ChefSection.css';
import homeData from '../../data/homeData.json';

const ChefSection = () => {
  const { chefsSection } = homeData;

  return (
    <section className="chef-section">
      <div className="container">
        <h2 className="section-title reveal">
          {chefsSection.title.split(' ').slice(0, -1).join(' ')} <span>{chefsSection.title.split(' ').pop()}</span>
        </h2>
        
        <div className="chefs-grid">
          {chefsSection.chefs.map((chef) => (
            <div key={chef.id} className="chef-card glass-card reveal">
              <div className="chef-image">
                <img src={chef.image} alt={chef.name} />
                <div className="chef-overlay">
                   <div className="chef-socials">
                      {/* Social icons could go here */}
                   </div>
                </div>
              </div>
              <div className="chef-info">
                <h3>{chef.name}</h3>
                <span className="chef-role">{chef.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
