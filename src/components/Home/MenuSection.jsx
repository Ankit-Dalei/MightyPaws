import React from 'react';
import { Plus } from 'lucide-react';
import './MenuSection.css';

import homeData from '../../data/homeData.json';

const MenuSection = () => {
  const { featuredMenu } = homeData;

  return (
    <section className="menu-section">
      <div className="container">
        <div className="menu-grid">
          {featuredMenu.map(item => (
            <div key={item.id} className="menu-card glass-card reveal">
              <div className="card-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="card-body">
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
