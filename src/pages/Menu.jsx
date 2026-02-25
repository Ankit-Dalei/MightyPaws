import React, { useState } from 'react';
import MenuSection from '../components/Home/MenuSection';
import './Menu.css';

import menuData from '../data/menuData.json';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { categories, beverages } = menuData;

  return (
    <div className="menu-page">
      <header className="menu-hero">
        <div className="container">
          <h1 className="reveal">Our <span>Gourmet</span> Menu</h1>
          <p className="reveal">Crafted with love, served with history.</p>
        </div>
      </header>

      {/* <section className="menu-categories container">
        <div className="category-list reveal">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section> */}

      <MenuSection />
      
      <section className="drinks-section container" style={{ paddingBottom: '10rem' }}>
        <h2 className="section-title reveal">Cold <span>Beverages</span></h2>
        <div className="menu-grid beverage-grid">
           {beverages.map(item => (
             <div key={item.id} className="glass-card reveal beverage-card">
                <div className="beverage-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="beverage-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
