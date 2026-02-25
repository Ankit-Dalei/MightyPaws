import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Hero.css';

import homeData from '../../data/homeData.json';

const Hero = () => {
  const heroRef = useRef(null);
  const { hero, discounts } = homeData;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      });
      gsap.from('.hero-subtext', {
        x: -50,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power4.out'
      });
      gsap.from('.hero-ramen-image', {
        scale: 0.5,
        rotate: 15,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out'
      });
      gsap.from('.offer-banner', {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out'
      });
    }, heroRef);

    // Slideshow logic
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % discounts.length);
    }, 5000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, [discounts.length]);

  const activeOffer = discounts[currentSlide];

  return (
    <section className="hero" ref={heroRef}>
      <div className="container hero-layout">
        <div className="hero-left">
          <h1 className="hero-title">
            {hero.titlePrefix} <br />
            <span className="taste-wrapper">
              {hero.titleTaste} 
              <span className="mini-avatars">
                <img src="https://i.pravatar.cc/100?img=10" alt="" />
                <img src="https://i.pravatar.cc/100?img=11" alt="" />
                <img src="https://i.pravatar.cc/100?img=12" alt="" />
              </span>
            </span> {hero.titleSuffix}
          </h1>
          <p className="hero-subtext">
            {hero.subtext}
          </p>
          <div className="hero-btn-container">
            <button className="learn-more-btn">
              <span className="btn-avatar">
                <img src="https://i.pravatar.cc/100?img=5" alt="" />
              </span>
              {hero.learnMoreBtn}
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-ramen-image">
            <img src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=1000" alt="Delicious Ramen" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="offer-banner">
          <div className="offer-banner-content slide-fade-in" key={currentSlide}>
            <div className="offer-left">
              <h3>{activeOffer.title}</h3>
              <div className="offer-people">
                <div className="people-avatars">
                  <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="" />
                   <span className="more-count">{activeOffer.peopleCount}</span>
                </div>
                <p>{activeOffer.peopleText}</p>
              </div>
            </div>
            
            <div className="offer-cutout-top"></div>
            <div className="offer-middle">
              <div className="discount-info">
                <span className="percentage">{activeOffer.percentage}</span>
                <span className="discount-label">{activeOffer.label}</span>
              </div>
            </div>
            <div className="offer-cutout-bottom"></div>

            <div className="offer-right">
              <div className="offer-food-photo">
                <img src={activeOffer.image} alt="Special Dish" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
