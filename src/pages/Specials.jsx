import React from 'react';
import BestDelivered from '../components/Home/BestDelivered';

const Specials = () => {
  return (
    <div className="specials-page" style={{ paddingTop: '8rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="reveal" style={{ fontSize: '4rem' }}>Weekly <span>Specials</span></h1>
        <p className="reveal" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Exclusive treats from our oven, just for this week.</p>
      </header>
      <BestDelivered />
      
      <div className="container" style={{ paddingBottom: '10rem' }}>
         <h2 className="section-title reveal">Limited <span>Time</span> Bakery</h2>
         <div className="menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[1,2,3].map(i => (
              <div key={i} className="glass-card reveal" style={{ padding: '2rem', borderRadius: '30px' }}>
                 <h3>Antique Cinnamon Bun</h3>
                 <p style={{ color: 'var(--text-secondary)' }}>A recipe passed down since 1924, glazed with modern vanilla bean icing.</p>
                  {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>$12.00</span>
                    <button className="btn-primary">Claim Offer</button>
                  </div> */}
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Specials;
