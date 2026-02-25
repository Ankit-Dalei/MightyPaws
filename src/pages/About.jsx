import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './About.css';

import aboutData from '../data/aboutData.json';

const About = () => {
  const scrollRef = useRef(null);
  const { hero, story, stats, values } = aboutData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.historical-image', {
        scrollTrigger: {
          trigger: '.story-section',
          start: 'top 60%',
          scrub: 1
        },
        scale: 1.2,
        duration: 1.5
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page" ref={scrollRef}>
      <header className="about-hero">
        <div className="container">
          <h1 className="reveal">{hero.title.split(' ').slice(0, -2).join(' ')} <span>{hero.title.split(' ').slice(-2).join(' ')}</span></h1>
          <p className="reveal">{hero.subtext}</p>
        </div>
      </header>

      <section className="story-section">
        <div className="container story-grid">
          <div className="story-image reveal">
            <div className="historical-image">
              <img src={story.image} alt="Vintage Cafe" />
            </div>
          </div>
          <div className="story-text">
            <h2 className="reveal">{story.title.split(' ').slice(0, -1).join(' ')} <span>{story.title.split(' ').pop()}</span></h2>
            <p className="reveal">{story.paragraph1}</p>
            <p className="reveal">{story.paragraph2}</p>
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item reveal">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="values-section container">
        <h2 className="section-title reveal">Our <span>Core</span> Values</h2>
        <div className="values-grid">
           {values.map((v) => (
             <div key={v.title} className="value-card glass-card reveal">
               <h3>{v.title}</h3>
               <p>{v.description}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default About;
